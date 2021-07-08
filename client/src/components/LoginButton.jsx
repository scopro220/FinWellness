import React from "react";

const LoginButton = ({ name, src, alt }) => {
  const loginGoogle = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  return (
    <div className="login-btn" onClick={loginGoogle}>
      <img src={src} alt={alt} />
      <div className="btn-text">Login with {name}</div>
    </div>
  );
};

export default LoginButton;
