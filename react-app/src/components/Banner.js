import React from 'react';
import "./Banner.css"
// import AppBar from '@material-ui/core/AppBar';
// import Typography from '@material-ui/core/Typography';
import LogoutButton from "./auth/LogoutButton"



const Banner = ({setAuthenticated}) => {
    return (
        <>
        {/* <AppBar> */}
            <div className="banner-container">
                <a className="banner" href="/home">
                    <img className="banner-logo" src={require("../Assets/logo.png")} alt="" />
                </a>
                <LogoutButton setAuthenticated={setAuthenticated} />
            </div>
            {/* <Typography variant="h6">
                News
            </Typography>
        </AppBar> */}
        </>
    )
}

export default Banner
