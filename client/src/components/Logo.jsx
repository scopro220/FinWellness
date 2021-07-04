import React from "react";
import logo from "../images/FinWellness.png";

const Logo = () => {
  return (
    <div className="logo-section">
      <img className="logo" src={logo} alt="logo" />
      <div className="title-name">
        Fin<span>Wellness</span>
      </div>
    </div>
  );
};

export default Logo;
