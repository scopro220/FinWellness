import React from "react";
import LoginButton from "../components/LoginButton";

const LoginPage = () => {
  const btnData = [
    {
      name: "Google",
      alt: "Google Logo",
      src: "https://e7.pngegg.com/pngimages/249/19/png-clipart-google-logo-g-suite-google-guava-google-plus-company-text.png",
    },
    // {
    //   name: "GitHub",
    //   alt: "GitHub Logo",
    //   src: "https://e7.pngegg.com/pngimages/346/791/png-clipart-github-computer-icons-logo-repository-github-white-monochrome.png",
    // },
  ];

  return (
    <div className="login-page">
      <div className="login-buttons-wrapper">
        {btnData.map((btn) => (
          <LoginButton
            key={btn.name}
            name={btn.name}
            alt={btn.alt}
            src={btn.src}
          />
        ))}
      </div>
    </div>
  );
};

export default LoginPage;
