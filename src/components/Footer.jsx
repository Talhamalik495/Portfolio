import React, { useContext } from "react";
import { CiHeart } from "react-icons/ci";
import { createTheme } from "../context/Theme";

function Footer() {
  let { theme, changeTheme } = useContext(createTheme);
  return (
    <div
      className={`flex w-full h-20 justify-center xs:text-xs items-center border-t-2 border-[#e4e4e7] ${
        theme == "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <p className="flex justify-center items-center gap-2">
        <span> © 2024 Siddique Ahmed. All rights reserved. Made with </span>
        <span className="text-red-800">
          <CiHeart />{" "}
        </span>
        <span>in Pakistan.</span>
      </p>
    </div>
  );
}

export default Footer;
