import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import bgImg from "../../assets/images/bg-img.png";
import "./signup.css";
import { Container, Grid, Button, TextField } from "@material-ui/core";

class signupPage extends Component {
  state = {};
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
              <Grid container spacing={10}>
                <Grid item xs={12}>
                  <div className="margin-top align-right">
                    <span className="text-style">Already have an account?</span>
                    <Button variant="contained">Login</Button>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className="welcome-text">Create an account.</div>
                </Grid>
                <Grid item xs={12}>
                  <form autoComplete="off">
                    <TextField
                      type=""
                      error={false}
                      id="username"
                      label="Username"
                      defaultValue=""
                      helperText=""
                    />
                    <br />
                    <br />
                    <br />
                    <TextField
                      type=""
                      error={false}
                      id="email"
                      label="Email address"
                      defaultValue=""
                      helperText=""
                    />
                    <br />
                    <br />
                    <br />
                    <TextField
                      type="password"
                      error={false}
                      id="password"
                      label="Password"
                      defaultValue=""
                      helperText=""
                    />
                    <br />
                    <br />
                    <br />
                    <TextField
                      type="password"
                      error={false}
                      id="confirmPassword"
                      label="Confirm Password"
                      defaultValue=""
                      helperText=""
                    />
                    <br />
                    <br />
                    <br />
                    <Button variant="contained" color="primary">
                      Create
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
