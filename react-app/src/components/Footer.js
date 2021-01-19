import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer-container">
            <GitHubIcon className="footer-container_icons" fontSize="large" onClick={() => window.open('https://github.com/philling83')}/>
            <LinkedInIcon className="footer-container_icons" fontSize="large" onClick={() => window.open('https://www.linkedin.com/in/philip-ling-218082204/')}/>
        </div>
    )
}

export default Footer
