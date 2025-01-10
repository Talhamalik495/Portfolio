import React, { useContext } from "react";
import { motion } from "framer-motion";
import { createTheme } from "../context/Theme";

function Project() {
  let { theme } = useContext(createTheme)

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-4xl font-bold pt-10 pb-10 overflow-hidden">
        Latest Project
      </h1>

      <div
        id="projects"
        className={`w-full grid grid-cols-1 md:grid-cols-2 md:gap-7 lg:grid-cols-3 xl:grid-cols-4   justify-center pt-20  pb-20 lg:gap-10 items-center px-10 ${
          theme == "light"
            ? "bg-white text-black"
            : "bg-black text-white md:grid md:grid-cols-2"
        }`}
      >
        <motion.div
          className="h-80 shadow-lg shadow-gray-400  flex flex-col gap-3 justify-center items-center"
          whileHover={{
            y: -5, // Y-axis par 20px upar le jata hai
            scale: 1.1, // Slight zoom-in effect
            // boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Shadow enhancement
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <img
            className="h-24 w-28"
            src="https://new-portfolio01-drab.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHTML.410a040e.png&w=128&q=75"
            alt="remote"
          />
          <p>HTML</p>
        </motion.div>
        <motion.div
          className="h-80 shadow-lg shadow-gray-400  flex flex-col gap-3 justify-center items-center"
          whileHover={{
            y: -5, // Y-axis par 20px upar le jata hai
            scale: 1.1, // Slight zoom-in effect
            // boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Shadow enhancement
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <img
            className="h-24 w-28"
            src="https://new-portfolio01-drab.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCSS.6695d845.png&w=128&q=75"
            alt="remote"
          />
          <p>CSS</p>
        </motion.div>
        <motion.div
          className="h-80 shadow-lg shadow-gray-400  flex flex-col gap-3 justify-center items-center"
          whileHover={{
            y: -5, // Y-axis par 20px upar le jata hai
            scale: 1.1, // Slight zoom-in effect
            // boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Shadow enhancement
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <img
            className="h-24 w-28"
            src="https://new-portfolio01-drab.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FJavascript.b5de6115.png&w=128&q=75"
            alt="remote"
          />
          <p>Javascript</p>
        </motion.div>
        <motion.div
          className="h-80 shadow-lg shadow-gray-400  flex flex-col gap-3 justify-center items-center"
          whileHover={{
            y: -5, // Y-axis par 20px upar le jata hai
            scale: 1.1, // Slight zoom-in effect
            // boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Shadow enhancement
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <img
            className="h-28 w-28"
            src="https://new-portfolio01-drab.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBotstrap.84c7b562.png&w=128&q=75"
            alt="remote"
          />
          <p>Bootstrap</p>
        </motion.div>
        <motion.div
          className="h-80 shadow-lg shadow-gray-400  flex flex-col gap-3 justify-center items-center"
          whileHover={{
            y: -5, // Y-axis par 20px upar le jata hai
            scale: 1.1, // Slight zoom-in effect
            // boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Shadow enhancement
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <img
            className="h-20 w-28"
            src="https://new-portfolio01-drab.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTailwindCss.b79a69be.png&w=128&q=75"
            alt="remote"
          />
          <p>Tailwind Css</p>
        </motion.div>
        <motion.div
          className="h-80 shadow-lg shadow-gray-400  flex flex-col gap-3 justify-center items-center"
          whileHover={{
            y: -5, // Y-axis par 20px upar le jata hai
            scale: 1.1, // Slight zoom-in effect
            // boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Shadow enhancement
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <img
            className="h-24 w-32"
            src="https://new-portfolio01-drab.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FReact.5695d592.png&w=128&q=75"
            alt="remote"
          />
          <p>React JS</p>
        </motion.div>
        <motion.div
          className="h-80 shadow-lg shadow-gray-400  flex flex-col gap-3 justify-center items-center"
          whileHover={{
            y: -5, // Y-axis par 20px upar le jata hai
            scale: 1.1, // Slight zoom-in effect
            // boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Shadow enhancement
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <img
            className="h-28 w-28"
            src="https://new-portfolio01-drab.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNextJs.b7f85056.png&w=128&q=75"
            alt="remote"
          />
          <p>Next Js</p>
        </motion.div>
        <motion.div
          className="h-80 shadow-lg shadow-gray-400  flex flex-col gap-3 justify-center items-center"
          whileHover={{
            y: -5, // Y-axis par 20px upar le jata hai
            scale: 1.1, // Slight zoom-in effect
            // boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Shadow enhancement
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <img
            className="h-24 w-32"
            src="https://new-portfolio01-drab.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMongodb.ca17518f.png&w=128&q=75"
            alt="remote"
          />
          <p>Mongo Db</p>
        </motion.div>
        <motion.div
          className="h-80 shadow-lg shadow-gray-400  flex flex-col gap-3 justify-center items-center"
          whileHover={{
            y: -5, // Y-axis par 20px upar le jata hai
            scale: 1.1, // Slight zoom-in effect
            // boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Shadow enhancement
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <img
            className="h-24 w-32"
            src="https://new-portfolio01-drab.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTypescript.7abc518a.png&w=128&q=75"
            alt="remote"
          />
          <p>Typescript</p>
        </motion.div>
      </div>
    </div>
  );
}

export default Project;
