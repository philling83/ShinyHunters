import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { signUp } from '../../services/auth';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import "./SignUpForm.css"

const SignUpForm = ({authenticated, setAuthenticated}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(username, email, password);
      if (!user.errors) {
        setAuthenticated(true);
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/team-builder" />;
  }

  return (
    <div className="signup-form_container">
      <Paper elevation={3} className="signup-form_wrapper">
        <form className="signup-form" onSubmit={onSignUp}>
          <div>
            {/* <label>User Name</label> */}
            <TextField id="standard-basic" label="Username" value={username} onChange={updateUsername} />
            {/* <input
              type="text"
              name="username"
              placeholder="User Name"
              onChange={updateUsername}
              value={username}
            ></input> */}
          </div>
          <div>
            {/* <label>Email</label> */}
            <TextField id="standard-basic" label="Email" type="email" value={email} onChange={updateEmail} />
            {/* <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={updateEmail}
              value={email}
            ></input> */}
          </div>
          <div>
            {/* <label>Password</label> */}
            <TextField id="standard-basic" label="Password" type="password" value={password} onChange={updatePassword} />
            {/* <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={updatePassword}
              value={password}
            ></input> */}
          </div>
          <div>
            {/* <label>Repeat Password</label> */}
            <TextField id="standard-basic" label="Confirm Password" type="password" value={repeatPassword} onChange={updateRepeatPassword} />
            {/* <input
              type="password"
              name="repeat_password"
              placeholder="Confirm Password"
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input> */}
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </Paper>
    </div>
  );
};

export default SignUpForm;
