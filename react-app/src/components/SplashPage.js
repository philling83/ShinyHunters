import { requirePropFactory } from '@material-ui/core';
import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import LoginForm from "./auth/LoginForm"
import SignUpForm from "./auth/SignUpForm"
import LogoutButton from './auth/LogoutButton';
import Button from '@material-ui/core/Button';
import "./SplashPage.css"

const Splash = ({ authenticated, setAuthenticated }) => {

  const [openLogin, setLoginOpen] = useState(false);
  const [openSignUp, setSignupOpen] = useState(false);

  const handleLoginOpen = () => {
    setLoginOpen(true);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  const handleSignupOpen = () => {
    setSignupOpen(true);
  };

  const handleSignupClose = () => {
    setSignupOpen(false);
  };

  return (
    <>
    <div className="splash-container">
      <img className="splash-container_image" src={require("../Assets/Pokedex.png")} alt="" />
      <div className="splash_auth-buttons">
        <div className="splash_login-button">
          <Button variant="outlined" color="primary" onClick={handleLoginOpen}>
            Continue
          </Button>
        </div>
        <div className="splash_signup-button">
          <Button variant="outlined" color="primary" onClick={handleSignupOpen}>
            New Adventure
          </Button>
        </div>
      </div>
    </div>
    <Modal
      open={openLogin}
      onClose={handleLoginClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <LoginForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
    </ Modal>
    <Modal
      open={openSignUp}
      onClose={handleSignupClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated}/>
    </Modal>
    </>
  );
}

export default Splash;
