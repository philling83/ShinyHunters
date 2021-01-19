import React from 'react';
import "./Banner.css"
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';



const Banner = () => {
    return (
        <>
        {/* <AppBar> */}
            <div className="banner">
                <img className="banner-logo" src={require("../Assets/logo.png")} alt="" />
            </div>
            {/* <Typography variant="h6">
                News
            </Typography>
        </AppBar> */}
        </>
    )
}

export default Banner
