const { User } = require("../models/user");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const config = require("config");

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid email or password");

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("Invalid email or password");
  const { _id, username, email } = user;
  const token = user.generateToken();
  res.setHeader("Access-Control-Expose-Headers", "x-auth-token");
  res.header("x-auth-token", token).send({ _id, username, email });
});

function validate(req) {
  const schema = {
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().max(1024).required(),
  };
  return Joi.validate(req, schema);
}

module.exports = router;
