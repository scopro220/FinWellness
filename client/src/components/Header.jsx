import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Logo />
      <Link className="login" to="/:googleId">
        Login
      </Link>
    </header>
  );
};

export default Header;
