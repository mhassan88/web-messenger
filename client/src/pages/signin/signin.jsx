import React from "react";
import { Grid, Button } from "@material-ui/core";
import Joi from "joi";
import FormComponent from "../../common/form";
import { Link } from "react-router-dom";
import BgImage from "../../common/bg";
import "../../common/styles.css";
import MyInput from "../../common/myinput";

class SigninPage extends FormComponent {
  state = {
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
              <span className="text-style">Don't have an account?</span>
              <Link to="/signup">
                <Button variant="contained" color="secondary" size="large">
                  Create account
                </Button>
              </Link>
            </div>
            <div className="welcome-text">Welcome back!</div>
            <div>
              <form className="add-padding" onSubmit={this.handleSubmit}>
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

                <div className="align-center">
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

export default SigninPage;
