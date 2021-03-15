import React from 'react';
// import { NavLink } from 'react-router-dom';
// import LogoutButton from './auth/LogoutButton';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import "./NavBar.css"

const NavBar = ({ setAuthenticated }) => {
  return (
    <>
        <AppBar position="static">
            <div className="navbar">
                <img className="navbar-logo" src={require("../Assets/logo.png")} alt="" />
            <Typography variant="h6">
                <a className="team-builder_nav" href='/team-builder'>Team Builder</a>
            </Typography>
            </div>
        </AppBar>
    </>
  );
}

export default NavBar;
