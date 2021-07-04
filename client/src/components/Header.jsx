import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/FinWellness.png";

const Header = () => {
  return (
    <header>
      <div className="logo-section">
        <img className="logo" src={logo} alt="logo" />
        <div className="title-name">
          Fin<span>Wellness</span>
        </div>
      </div>
      <Link className="login" to="/:googleId">
        Login
      </Link>
    </header>
  );
};

export default Header;
