import React from "react";
import { Redirect } from "react-router-dom";
import { logout } from "../../services/auth";
import "./LogoutButton.css"
import Button from '@material-ui/core/Button'

const LogoutButton = ({setAuthenticated}) => {
  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
    return <Redirect to="/" />
  };

  return <Button variant="contained" color="secondary" className="logout-button" onClick={onLogout}>Logout</Button>;
};

export default LogoutButton;
