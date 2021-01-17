import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignupPage from "./pages/signup/signup";
import SigninPage from "./pages/signin/signin";
import { theme } from "./common/theme";
import { ThemeProvider } from "@material-ui/core/styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <SignupPage />
          </Route>
          <Route exact path="/signup">
            <SignupPage />
          </Route>
          <Route exact path="/signin">
            <SigninPage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
