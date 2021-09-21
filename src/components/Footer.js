import React from "react";
import "../styles/Footer.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Footer() {
    return (
        <div className="footer">
            <div className="social_media">
                <GitHubIcon sx={{ color: "white" }} />
                <LinkedInIcon sx={{ color: "white" }} />
            </div>
            <p>&copy; 2021 Douglas Duarte</p>
        </div>
    );
}

export default Footer;
