import React, { useContext } from "react";
import photo from "../assets/3.png";
import { createTheme } from "../context/Theme";

function About() {
  let { theme } = useContext(createTheme);
  return (
    <div
      data-aos="fade-up"
      id="about"
      className={`px-10 justify-center   md:justify-items-center  w-full h-full grid   xl:grid-cols-1 xl:justify-items-center lg:grid-cols-1 xl:gap-10 pt-16 ${
        theme == "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <div className="flex flex-col justify-center items-center gap-5">
        <h1
          className={`text-3xl font-semibold overflow-hidden mb-5 ${
            theme == "light" ? "text-black " : "text-white"
          }`}
        >
          About Me
        </h1>
        <h2 className="text-2xl uppercase mb-5">
          Hi I'm MUHAMMAD TALHA 'a Passionate Web Developer
        </h2>

        <p className="text-md max-w-xl text-center mb-8">
          Hi Im Talha Arif a passionate web developer exploring the MERN stack.
          I specialize in building user-friendly dynamic applications with
          skills in HTML CSS JavaScript React.js and Next.js. I enjoy crafting
          clean responsive designs using Tailwind CSS and Bootstrap. On the back
          end I work with MongoDB Firebase Next Auth and Cloudinary. Currently
          Im diving into Node.js Express.js and React Native to enhance my
          full-stack development expertise.
        </p>
        <div className="flex gap-5">
          <button
            className={`px-5 py-3  duration-300 transition-all rounded-sm font-semibold mb-10 ${
              theme == "light"
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-white text-black hover:bg-gray-300"
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
