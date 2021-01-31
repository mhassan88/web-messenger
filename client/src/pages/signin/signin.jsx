import React from "react";
import { Grid, Button } from "@material-ui/core";
import Joi from "joi";
import FormComponent from "../../common/form";
import { Link } from "react-router-dom";
import BgImage from "../../common/bg";
import MyInput from "../../common/myinput";
import appStyles from "../../common/styles";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import http from "../../services/httpService";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { withRouter } from "react-router-dom";

//change api
const apiURL = `${process.env.REACT_APP_API_URL}/api/login`;
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class SigninPage extends FormComponent {
  state = {
    errorMessage: "",
    open: false,
    data: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string()
      .required()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .label("Email"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async (e) => {
    http
      .post(apiURL, this.state.data)
      .then((res) => {
        if (res.status === 200) {
          this.props.history.push("/mainpage");
        }
      })
      .catch((err) => {
        this.setState({ errorMessage: err.response.data, open: true });
      });
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container>
          <Snackbar
            open={this.state.open}
            autoHideDuration={4000}
            onClose={this.handleClose}
          >
            <Alert onClose={this.handleClose} severity="error">
              {this.state.errorMessage}
            </Alert>
          </Snackbar>
          <BgImage />
          <Grid item xs>
            <div className={classes.alignRight}>
              <span className={classes.textStyle}>Don't have an account?</span>
              <Link to="/signup">
                <Button variant="contained" color="secondary" size="large">
                  Create account
                </Button>
              </Link>
            </div>
            <div className={classes.welcomeText}>Welcome back!</div>
            <div>
              <form className={classes.addPadding} onSubmit={this.handleSubmit}>
                <MyInput
                  error={!(this.state.errors.email == null)}
                  name="email"
                  label="E-mail address"
                  value={this.state.data.email}
                  helperText={this.state.errors.email}
                  placeholder={"john-doe@gmail.com"}
                  onChange={this.handleChange}
                />
                <MyInput
                  error={!(this.state.errors.password == null)}
                  name="password"
                  label="Password"
                  value={this.state.data.password}
                  helperText={this.state.errors.password}
                  placeholder={""}
                  onChange={this.handleChange}
                />

                <div className={classes.alignCenter}>
                  <Button variant="contained" color="primary" type="submit">
                    Login
                  </Button>
                </div>
              </form>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

SigninPage.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withRouter(
  withStyles(appStyles.pageStyles, { withTheme: true })(SigninPage)
);
