import React from "react";
import logo from "../images/FinWellness.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YoutubeIcon from "@material-ui/icons/YouTube";
import PinterestIcon from "@material-ui/icons/Pinterest";

const Footer = () => {
  return (
    <footer>
      <div className="logo-section">
        <img className="logo" src={logo} alt="logo" />
        <div className="title-name">
          Fin<span>Wellness</span>
        </div>
        <div className="footer-divider"> | </div>
        <div className="footer-socials">
          <FacebookIcon fontSize="large" />
        </div>
        <div className="footer-socials">
          <InstagramIcon fontSize="large" />
        </div>
        <div className="footer-socials">
          <TwitterIcon fontSize="large" />
        </div>
        <div className="footer-socials">
          <LinkedInIcon fontSize="large" />
        </div>
        <div className="footer-socials">
          <YoutubeIcon fontSize="large" />
        </div>
        <div className="footer-socials">
          <PinterestIcon fontSize="large" />
        </div>
      </div>
      <div className="copyright">Copyright &copy; 2021</div>
    </footer>
  );
};

export default Footer;
