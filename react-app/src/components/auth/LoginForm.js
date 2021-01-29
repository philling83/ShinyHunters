import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../services/auth";
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import "./LoginForm.css"

const LoginForm = ({ authenticated, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/team-builder" />;
  }

  return (
    <div className="login-form_container">
      <Paper elevation={3} className="login-form_wrapper">
        <form className="login-form" onSubmit={onLogin}>
          <div>
            {errors.map((error) => (
              <div>{error}</div>
            ))}
          </div>
          <div className="login-form_email">
            {/* <TextField id="standard-basic" label="Email" type="email" value={email} onChange={updateEmail} /> */}
            <input
              name="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div className="login-form_password">
            {/* <TextField id="standard-basic" label="Password" type="password" value={password} onChange={updatePassword} /> */}
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={updatePassword}
            />
          </div>
          <button className="submit-button" type="submit">Login</button>
        </form>
      </Paper>
    </div>
  );
};

export default LoginForm;
