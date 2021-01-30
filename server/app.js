const createError = require("http-errors");
const express = require("express");
const { join } = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const config = require("config");
const register = require("./routes/register");
const login = require("./routes/login");
const cors = require("cors");

const { json, urlencoded } = express;
var app = express();
app.use(cors());
if (!config.get("jwtPrivateKey")) {
  console.log("FATAL ERROR: jwtPrivateKey environment variable not defined");
  process.exit(1);
}

if (!config.get("mongodb")) {
  console.log("FATAL ERROR: mongodb environment variable not defined");
  process.exit(1);
}

mongoose
  .connect(`mongodb://${config.get("mongodb")}`)
  .then(() => console.log("connected to the database"))
  .catch((err) => console.log("could not connect to the database", err));

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, "public")));

app.use("/api/register", register);
app.use("/api/login", login);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err });
});

module.exports = app;
