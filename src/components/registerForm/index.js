import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./registerForm.scss";

function RegisterForm(props) {
  const { handleSubmit } = props;
  const [login = "", setLogin] = useState();
  const [email = "", setEmail] = useState();
  const [password = "", setPassword] = useState();

  const handleLogin = event => {
    setLogin(event.target.value);
  };
  const handlePwd = event => {
    setPassword(event.target.value);
  };
  const handleEmail = event => {
    setEmail(event.target.value);
  };
  const formSubmit = event => {
    event.preventDefault();
    handleSubmit({ login, email, password });
  };

  return (
    <div className="register-form">
      <form onSubmit={formSubmit}>
        <h2>Register Here</h2>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={handleEmail} />
        <label htmlFor="login">Login</label>
        <input type="text" id="login" value={login} onChange={handleLogin} />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePwd}
        />
        <label htmlFor="passwordConfirm">Confirm Password</label>
        <input type="password" id="passwordConfirm" />
        <input type="submit" />
        <Link to="/login">Already register? SignIn</Link>
      </form>
    </div>
  );
}

export default RegisterForm;
