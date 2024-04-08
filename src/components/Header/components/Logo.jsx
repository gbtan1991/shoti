import React from "react";
import shotiLogo from "../../../assets/shortcake.png";

const Logo = () => {
  return (
    <a href="/">
      <div className="flex items-center gap-3 ">
        <img src={shotiLogo} className="w-16" />
        <div className="font-granstander text-cornell-red text-5xl flex flex-col items-center "> 
        <h1>Shoti</h1>
        <span className="hidden lg:inline-block text-xl text-light-red">Your Sweet URL Shortcut</span>
        </div>
      </div>
    </a>
  );
};

export default Logo;
