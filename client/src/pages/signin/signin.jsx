import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import bgImg from "../../assets/images/bg-img.png";
import "./signin.css";
import { Container, Grid, Button, TextField } from "@material-ui/core";
import Joi from "joi";
import FormComponent from "../../common/form";
import { Link } from "react-router-dom";

class signupPage extends FormComponent {
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
        <Container>
          <Grid container spacing={3}>
            <Grid item>
              <img
                src={bgImg}
                alt="People interacting with each other in the background"
                className="bg-img disappear-small"
              />
              <div className="img-gradient disappear-small">
                <h2 className="img-txt">
                  <div>
                    <FontAwesomeIcon icon={faCommentDots} size="2x" />
                  </div>
                  Converse with anyone with any language
                </h2>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={7} xl={7}>
              <Grid container spacing={7}>
                <Grid item xs={12}>
                  <div className="margin-top align-right">
                    <span className="text-style">Don't have an account?</span>
                    <Link to="/signup">
                      <Button variant="contained">Create account</Button>
                    </Link>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className="welcome-text">Welcome back!</div>
                </Grid>
                <Grid item xs={12}>
                  <form autoComplete="off">
                    <TextField
                      type=""
                      error={!(this.state.errors.email == null)}
                      name="email"
                      id="email"
                      label="Email address"
                      value={this.state.data.email}
                      helperText={this.state.errors.email}
                      onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    <br />
                    <TextField
                      type="password"
                      error={!(this.state.errors.password == null)}
                      name="password"
                      id="password"
                      label="Password"
                      value={this.state.data.password}
                      helperText={this.state.errors.password}
                      onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    <br />
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleSubmit}
                    >
                      Login
                    </Button>
                  </form>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default signupPage;
