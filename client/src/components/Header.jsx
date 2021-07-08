import React, { useContext } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { myContext } from "../Context";
import axios from "axios";

const Header = () => {
  const userObject = useContext(myContext);

  const logout = () => {
    axios
      .get("http://localhost:5000/auth/logout", { withCredentials: true })
      .then((res) => {
        if (res.data === "Success") {
          window.location.href = "/";
        }
      });
  };

  return (
    <header>
      <Logo />
      {/* <Link className="login" to="/:googleId">
        Login
      </Link> */}
      {userObject ? (
        <div className="logout" onClick={logout}>
          Logout
        </div>
      ) : (
        <Link className="login" to="/login">
          Login
        </Link>
      )}
    </header>
  );
};

export default Header;
