import React from "react";
import logo from "../../assets/logo.png";
import whiteLogo from "../../assets/white-logo.png";

function Logo({ white = false, alt = "Intuitive Spine", size = 100, className = "" }) {
  const src = white ? whiteLogo : logo;

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
