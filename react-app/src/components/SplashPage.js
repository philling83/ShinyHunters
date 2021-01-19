import { requirePropFactory } from '@material-ui/core';
import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import LoginForm from "./auth/LoginForm"
import LogoutButton from './auth/LogoutButton';
import "./SplashPage.css"

const Splash = ({ authenticated, setAuthenticated }) => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    <div className="splash-container">
      <img className="splash-container_image" src={require("../Assets/Pokedex.png")} alt="" />
    </div>
    <button type="button" onClick={handleOpen}>
      Login
    </button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <LoginForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
    </ Modal>
    </>
  );
}

export default Splash;
