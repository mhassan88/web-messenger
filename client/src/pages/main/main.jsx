import React from "react";
import FormComponent from "../../common/form";
import appStyles from "../../common/styles";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

//change api

class MainPage extends FormComponent {
  state = {};

  render() {
    return (
      <div>
        <h1>Welcome to main page</h1>
      </div>
    );
  }
}

MainPage.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withRouter(
  withStyles(appStyles.pageStyles, { withTheme: true })(MainPage)
);
