import React from "react";
import { Route } from "react-router-dom";
import "./auth.scss";

import { LoginContainer, RegisterContainer } from "containers";

function Auth() {
  return (
    <div className="auth">
      <Route exact path="/" component={LoginContainer} />
      <Route exact path="/login" component={LoginContainer} />
      <Route exact path="/register" component={RegisterContainer} />
    </div>
  );
}

export default Auth;
