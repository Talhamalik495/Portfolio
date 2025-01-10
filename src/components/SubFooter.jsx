import React, { useContext } from "react";
import { FiLinkedin } from "react-icons/fi";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { createTheme } from "../context/Theme";
import { Link } from "react-scroll";
function SubFooter() {
  let { theme } = useContext(createTheme);
  return (
    <div
      className={`lg:justify-around lg:flex-row md:flex md:flex-col  sm:flex-col xs:flex-col xs:px-10 lg:flex md:px-10 sm:px-10 pb-20 pt-14  ${
        theme == "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <div className="flex flex-col gap-4">
        <p className="font-bold text-xl">Muhammad Talha</p>
        <p>Crafting digital experiences with passion and precision.</p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-bold text-xl">Quick Links</p>
        <Link className="cursor-pointer" to="home" smooth={true} duration={300}>
          Home
        </Link>
        <Link
          className="cursor-pointer"
          to="about"
          smooth={true}
          duration={300}
        >
          About
        </Link>
        <Link
          className="cursor-pointer"
          to="skills"
          smooth={true}
          duration={300}
        >
          Skills
        </Link>
        <Link
          className="cursor-pointer"
          to="projects"
          smooth={true}
          duration={300}
        >
          Projects
        </Link>
        <Link
          className="cursor-pointer"
          to="contact"
          smooth={true}
          duration={300}
        >
          Contact
        </Link>
      </div>
      <div className="flex flex-col  gap-4">
        <div className="font-bold text-xl">Contect</div>
        <div className="flex gap-4">
          <FiLinkedin />
          <FaInstagram />
          <CiTwitter />
        </div>
      </div>
    </div>
  );
}

export default SubFooter;
