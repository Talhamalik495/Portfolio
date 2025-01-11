import React, { useContext } from "react";
import TypeIt from "typeit-react";
import photo from "../assets/4.png";
import { createTheme } from "../context/Theme";
import { Link } from "react-scroll";

function Hero() {
  let { theme } = useContext(createTheme);
  let handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/my-cv.pdf"; // Public folder ka path
    link.download = "My-CV.pdf"; // File download ka naam
    link.click();
  };
  return (
    <div
      id="home"
      className={`grid gap-10 px-10 xl:grid-cols-2 w-full h-full  justify-items-center lg:grid-cols-2 md:gap-20 sm:pb-10 sm:gap-20  xl:gap-10 pt-40 ${
        theme == "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <div className="flex flex-col gap-5">
        <h2
          data-aos="fade-down"
          className="text-3xl  font-semibold overflow-hidden leading-snug"
        >
          Hi Im MUHAMMAD TALHA a Passionate Web Developer
          <br />
          <TypeIt
            className={`text-2xl  text-black border-b-2 border-black ${
              theme == "light" ? "bg-white text-black" : "bg-black text-white"
            }`}
            options={{
              speed: 200,
              loop: true,
              breakLines: false,
              strings: [
                "HTML",
                "CSS",
                "BootStrap",
                "JavaScript",
                "React Js",
                "Next Js",
                "Node Js",
                "Express Js",
                "MongoDb",
                "Matarial Ui",
                "Ant Desegning",
              ],
            }}
          />
        </h2>

        <p className="text-gray-600 text-lg" data-aos="fade-right">
          Hi Im Siddique Ahmed a passionate web developer exploring the MERN
          stack. I specialize in building user-friendly dynamic applications
          with skills in HTML CSS JavaScript React.js and Next.js. I enjoy
          crafting clean responsive designs using Tailwind CSS and Bootstrap. On
          the back end I work with MongoDB Firebase Next Auth and Cloudinary.
          Currently Im diving into Node.js Express.js and React Native to
          enhance my full-stack development expertise.
        </p>
        <div className="flex gap-5 mt-5">
          <button
            onClick={handleDownload}
            data-aos="fade-down-right"
            className={`px-5 py-3 duration-300 transition-all  rounded-sm  font-semibold ${
              theme == "light"
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-white text-black hover:bg-gray-300"
            }`}
          >
            Download CV
          </button>
          <button
            data-aos="fade-down-left"
            className="px-5 py-3 bg-[#f3f4f6] text-black rounded-sm font-semibold hover:bg-gray-300"
          >
            <Link to="about" smooth={true} duration={300}>
              About Me{" "}
            </Link>
          </button>
        </div>
      </div>
      <div
        data-aos="flip-up"
        className={`w-[50%] lg:w-[50%] lg:h-[90%] md:w-[40%] md:h-[80%] sm:w-[35%] sm:h-[85%] xs:w-[40%] xs:h-[90%] overflow-hidden h-[90%] rounded-full ${
          theme == "light"
            ? "bg-black text-white border-white"
            : "bg-white text-black border-black"
        }`}
      >
        <img
          className={`h-80 w-80 xs:h-[100%] lg:w-[100%] lg:h-[80%] xs:w-[100%]  md:w-[100%] rounded-full ${
            theme == "light"
              ? "bg-black text-white border-[6px]  border-white"
              : "bg-white text-black border-[6px] border-black"
          }`}
          src={photo}
          alt="remote"
        />
      </div>
    </div>
  );
}

export default Hero;
