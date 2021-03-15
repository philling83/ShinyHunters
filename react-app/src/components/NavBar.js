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
            <a className="navbar_logo_container" href="/home">
              <img className="navbar-logo" src={require("../Assets/logo.png")} alt="" />
            </a>
            <div className="navbar_nav_container">
              <Typography variant="h6">
                <a className="team-builder_nav" href='/team-builder'>Team Builder</a>
              </Typography>
            </div>
          </div>
        </AppBar>
    </>
  );
}

export default NavBar;
