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

const apiURL = `${process.env.REACT_APP_API_URL}/api/register`;
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class SignupPage extends FormComponent {
  state = {
    displayMessage: "",
    open: false,
    alertType: "",
    data: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().alphanum().label("Username"),
    email: Joi.string()
      .required()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .label("Email"),
    password: Joi.string().required().min(6).label("Password"),
    confirmPassword: Joi.ref("password"),
  };

  doSubmit = async (e) => {
    const user = {
      username: this.state.data.username,
      email: this.state.data.email,
      password: this.state.data.password,
    };
    http
      .post(apiURL, user)
      .then((res) => {
        if (res.status === 201) {
          this.setState({
            displayMessage:
              "Account created successfully, Redirecting to login page...",
            open: true,
            alertType: "success",
          });
          setTimeout(() => {
            this.props.history.push("/signin");
          }, 2000);
        }
      })
      .catch((err) => {
        this.setState({
          displayMessage: err.response.data,
          open: true,
          alertType: "error",
        });
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
            <Alert onClose={this.handleClose} severity={this.state.alertType}>
              {this.state.displayMessage}
            </Alert>
          </Snackbar>
          <BgImage />
          <Grid item xs>
            <div className={classes.alignRight}>
              <span className={classes.textStyle}>
                Already have an account?
              </span>
              <Link to="/signin">
                <Button variant="contained" color="secondary" size="large">
                  Login
                </Button>
              </Link>
            </div>
            <div className={classes.welcomeText}>Create an account.</div>
            <div>
              <form className={classes.addPadding} onSubmit={this.handleSubmit}>
                <MyInput
                  error={!(this.state.errors.username == null)}
                  name="username"
                  label="Username"
                  value={this.state.data.username}
                  helperText={this.state.errors.username}
                  placeholder={"john-doe"}
                  onChange={this.handleChange}
                />
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
                  onChange={this.handleChange}
                />
                <MyInput
                  error={!(this.state.errors.confirmPassword == null)}
                  name="confirmPassword"
                  label="Confirm Password"
                  value={this.state.data.confirmPassword}
                  helperText={this.state.errors.confirmPassword}
                  onChange={this.handleChange}
                />

                <div className={classes.alignCenter}>
                  <Button variant="contained" color="primary" type="submit">
                    Create account
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
SignupPage.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withRouter(
  withStyles(appStyles.pageStyles, { withTheme: true })(SignupPage)
);
