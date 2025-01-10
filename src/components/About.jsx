import React, { useContext } from "react";
import photo from "../assets/3.png";
import { createTheme } from "../context/Theme";

function About() {
  let { theme } = useContext(createTheme);
  return (
    <div
      data-aos="fade-up"
      id="about"
      className={` px-10 w-full h-full grid justify-items-center items-center  xl:grid-cols-2 lg:grid-cols-2 xl:gap-10 pt-16 ${
        theme == "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <div className="animate-bounce">
        <img
          className="h-96 w-80 md:hidden sm:hidden lg:flex sm:pt-10"
          src={photo}
          alt="remote"
        />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-2xl">
          Hi Im MUHAMMAD TALHA a Passionate Web Developer
        </h2>

        <p className="text-md">
          Hi Im Siddique Ahmed a passionate web developer exploring the MERN
          stack. I specialize in building user-friendly dynamic applications
          with skills in HTML CSS JavaScript React.js and Next.js. I enjoy
          crafting clean responsive designs using Tailwind CSS and Bootstrap. On
          the back end I work with MongoDB Firebase Next Auth and Cloudinary.
          Currently Im diving into Node.js Express.js and React Native to
          enhance my full-stack development expertise.
        </p>
        <div className="flex gap-5">
          <button
            className={`px-5 py-3  rounded-sm font-semibold ${
              theme == "light" ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            <a href="/public/update resume.pdf" download={"my cv"}>
              {" "}
              Download Cv
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
