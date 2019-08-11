import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./loginForm.scss";

function LoginForm(props) {
  const { handleSubmit } = props;
  const [login = "", setLogin] = useState();
  const [password = "", setPassword] = useState();

  const handleLogin = event => {
    setLogin(event.target.value);
  };
  const handlePwd = event => {
    setPassword(event.target.value);
  };
  const formSubmit = event => {
    event.preventDefault();
    handleSubmit({ login, password });
  };

  return (
    <div className="login-form">
      <form onSubmit={formSubmit}>
        <h2>Login here</h2>
        <label htmlFor="login">Login</label>
        <input type="text" id="login" value={login} onChange={handleLogin} />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePwd}
        />
        <input type="submit" />

        <Link to="/register">Register</Link>
      </form>
    </div>
  );
}

export default LoginForm;
