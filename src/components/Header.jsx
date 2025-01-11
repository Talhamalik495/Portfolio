import React, { useContext, useState } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { PiMoonStarsLight } from "react-icons/pi";
import { createTheme } from "../context/Theme";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

function Header() {
  let { theme, changeTheme } = useContext(createTheme);
  console.log("theme=>", theme);

  let [header, setHeader] = useState(false);
  let handletogle = () => {
    setHeader((prev) => !prev);
  };
  return (
    <div>
      <div>
        {header ? (
          <div
            className={`w-full h-60 fixed shadow-black  z-50   flex flex-col gap-5 justify-center items-center top-16 lg:hidden ${
              theme == "light" ? "bg-white text-black" : " bg-black text-white"
            } `}
          >
            <Link
              className="cursor-pointer"
              to="home"
              smooth={true}
              duration={300}
            >
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
              to="contactus"
              smooth={true}
              duration={300}
            >
              Contact
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
      <div
        className={`w-full h-20  ${
          theme == "light"
            ? "bg-white text-black shadow-lg shadow-gray-10"
            : "bg-black text-white shadow-sm shadow-white"
        } lg:flex  lg:justify-between lg:px-10 lg:items-center lg:fixed z-40 md:flex sm:fixed xs:fixed xs:justify-between xs:px-5 xs:items-center xs:flex sm:justify-between sm:flex sm:items-center sm: px-5   md:fixed md:items-center md:px-5 cursor-pointer md:justify-between`}
      >
        <div
          className="md:flex md:text-4xl xs:text-2xl lg:hidden sm:text-2xl md:z-50"
          onClick={handletogle}
        >
          {!header ? <FiMenu /> : <RxCross1 />}
        </div>

        <div className="lg:flex md:hidden sm:hidden xs:hidden">
          {" "}
          <img
            className="w-12 h-12 rounded-full"
            src="http://localhost:5173/src/assets/3.png"
            alt="remote"
          />
        </div>
        <div
          className={`lg:flex md:hidden sm:hidden xs:hidden lg:gap-5 ${
            theme == "light" ? "text-gray-600" : "text-white"
          }`}
        >
          <Link
            className="cursor-pointer"
            to="home"
            smooth={true}
            duration={300}
          >
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
            to="contactus"
            smooth={true}
            duration={300}
          >
            Contact
          </Link>
        </div>
        <button
          className="text-xl  lg:block"
          onClick={() => {
            changeTheme();
          }}
        >
          {theme == "light" ? (
            <MdOutlineWbSunny />
          ) : (
            <p>
              <PiMoonStarsLight />
            </p>
          )}
        </button>
      </div>
    </div>
  );
}

export default Header;
