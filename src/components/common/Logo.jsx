import React from "react";
import logo from "../../assets/logo.png";
import whiteLogo from "../../assets/white-logo.png";
import intuitiveSpine from "../../assets/intuitive-spine-txt.png";

function Logo({
  variant = "default", 
  alt = "Intuitive Spine",
  size = 100,
  className = "",
}) {

  const src =
    variant === "white"
      ? whiteLogo
      : variant === "spine"
      ? intuitiveSpine
      : logo;

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{
        width: `${size}px`,
        height: "auto",
        display: "block",
        margin: "0 auto",
      }}
    />
  );
}

export default Logo;
