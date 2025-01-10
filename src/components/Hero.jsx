import React, { useContext } from "react";
import TypeIt from "typeit-react";
import photo from "../assets/3.png";
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
          className="text-2xl  font-medium overflow-hidden"
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
                "Html",
                "Css ",
                "Bootstrap",
                "Javascript",
                "React Js",
                "Next Js",
                "Matarial Ui",
                "Ant Desegning",
              ],
            }}
          />
        </h2>

        <p className="text-md" data-aos="fade-right">
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
            onClick={handleDownload}
            data-aos="fade-down-right"
            className={`px-5 py-3  rounded-sm  font-semibold ${
              theme == "light" ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            Download CV
          </button>
          <button
            data-aos="fade-down-left"
            className="px-5 py-3 bg-[#f3f4f6] text-black rounded-sm font-semibold"
          >
            <Link to="about" smooth={true} duration={300}>
              About Me{" "}
            </Link>
          </button>
        </div>
      </div>
      <div data-aos="flip-up" className="animate-pulse md:w-[50%]">
        <img className="h-96 w-80 md:w-[100%]" src={photo} alt="remote" />
      </div>
    </div>
  );
}

export default Hero;
