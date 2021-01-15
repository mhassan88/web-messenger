import React from "react";
import { Grid, Button } from "@material-ui/core";
import Joi from "joi";
import FormComponent from "../../common/form";
import { Link } from "react-router-dom";
import BgImage from "../../common/bg";
import "../../common/styles.css";
import MyInput from "../../common/myinput";

class SignupPage extends FormComponent {
  state = {
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
  doSubmit = () => {
    //call to server
  };

  render() {
    return (
      <div>
        <Grid container>
          <BgImage />
          <Grid item xs>
            <div className="align-right">
              <span className="text-style">Already have an account?</span>
              <Link to="/signin">
                <Button variant="contained" color="secondary" size="large">
                  Login
                </Button>
              </Link>
            </div>
            <div className="welcome-text">Create an account.</div>
            <div>
              <form className="add-padding" onSubmit={this.handleSubmit}>
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

                <div className="align-center">
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

export default SignupPage;
