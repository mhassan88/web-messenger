import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route , Link, Switch} from "react-router-dom";
import SignupPage from "./pages/signup/signup";
import SigninPage from "./pages/signin/signin";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SignupPage/>
        </Route>
        <Route exact path="/signup">
          <SignupPage/>
        </Route>
        <Route exact path="/signin">
          <SigninPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
