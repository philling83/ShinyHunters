import { requirePropFactory } from '@material-ui/core';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from '@material-ui/core/Modal';
import LoginForm from "./auth/LoginForm"
import SignUpForm from "./auth/SignUpForm"
import LogoutButton from './auth/LogoutButton';
import Button from '@material-ui/core/Button';
import "./SplashPage.css"

import styled, { keyframes } from 'styled-components';
import { fadeInDown } from 'react-animations';
import { Flash } from 'react-animations';

const FlashAnimation = keyframes`${Flash}`;
const FlashLogoDiv = styled.div`
  animation: infinite 20s ${FlashAnimation};
`;

const FlashAuthDiv = styled.div`
  animation: infinite 20s ${FlashAnimation};
`;

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

  const renderAuthButtons = () => {
    let element2 = (
      <FlashLogoDiv>
        <img className="splash-container_logo" src={require("../Assets/logo2.png")} alt="" />
      </FlashLogoDiv>
    )
    let element = (
      <FlashAuthDiv>
        <div className="splash_auth-buttons">
          <div className="splash_login-button">
            <Button variant="outlined" color="secondary" onClick={handleLoginOpen}>
              Continue
            </Button>
          </div>
          <div className="splash_signup-button">
            <Button variant="outlined" color="secondary" onClick={handleSignupOpen}>
              New Adventure
            </Button>
          </div>
        </div>
      </FlashAuthDiv>
    )
    ReactDOM.render(element2, document.getElementById('splash-container'))
    ReactDOM.render(element, document.getElementById('splash_auth-container'))
  }


  return (
    <>
    <div className="splash-container">
      <div className="pokedex-power-button" onClick={renderAuthButtons} />
      <img className="splash-container_image" src={require("../Assets/Pokedex.png")} alt="" />
      <div id='splash_auth-container' />
      <div id='splash-container' />
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
