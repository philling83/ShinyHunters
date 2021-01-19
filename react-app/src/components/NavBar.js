import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import "./NavBar.css"

const NavBar = ({ setAuthenticated }) => {
  return (
    // <nav>
    //   <ul>
    //     <li>
    //       <NavLink to="/" exact={true} activeClassName="active">
    //         Home
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/login" exact={true} activeClassName="active">
    //         Login
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/sign-up" exact={true} activeClassName="active">
    //         Sign Up
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/users" exact={true} activeClassName="active">
    //         Users
    //       </NavLink>
    //     </li>
    //     <li>
    //       <LogoutButton setAuthenticated={setAuthenticated} />
    //     </li>
    //   </ul>
    // </nav>
    <>
        {/* <AppBar> */}
            <div className="navbar">
                <img className="navbar-logo" src={require("../Assets/logo.png")} alt="" />
                <a className="team-builder_nav" href='/team-builder'>Team Builder</a>
            </div>
            {/* <Typography variant="h6">
                News
            </Typography>
        </AppBar> */}
        </>
  );
}

export default NavBar;
