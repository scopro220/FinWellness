import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/FinWellness.png";

const Logo = () => {
  return (
    <div className="logo-section">
      <img className="logo" src={logo} alt="logo" />
      <div className="title-name">
        <Link to="/">
          Fin<span>Wellness</span>
        </Link>
      </div>
    </div>
  );
};

export default Logo;
