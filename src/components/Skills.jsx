import React, { useContext } from "react";
import { motion } from "framer-motion";
import { createTheme } from "../context/Theme";
import { div } from "framer-motion/client";

function Skills() {
  let { theme } = useContext(createTheme);
  return (
    <div className="flex justify-center items-center flex-col">
      <h1
        className={`text-2xl font-bold pt-14 pb-10 overflow-hidden ${
          theme == "light" ? "text-black" : "text-white"
        }`}
      >
        My Skills
      </h1>
      <div
        data-aos="zoom-in"
        id="skills"
        className={`px-10 grid grid-cols-2 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3  w-full h-full pb-5 overflow-hidden justify-center pt-5 gap-10 sm:px-5  ${
          theme == "light" ? "text-black" : "bg-black text-white"
        } `}
      >
        <motion.div
          className="h-52 shadow-lg shadow-gray-400  flex flex-col gap-3 justify-center items-center"
          whileHover={{
            y: -5, // Y-axis par 20px upar le jata hai
            scale: 1, // Slight zoom-in effect

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
          className="h-52 shadow-lg shadow-gray-400  flex flex-col gap-3 justify-center items-center"
          whileHover={{
            y: -5, // Y-axis par 20px upar le jata hai
            scale: 1, // Slight zoom-in effect
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
          className="h-52 shadow-lg shadow-gray-400  flex flex-col gap-3 justify-center items-center"
          whileHover={{
            y: -5, // Y-axis par 20px upar le jata hai
            scale: 1, // Slight zoom-in effect
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
          className="h-52 shadow-lg shadow-gray-400  flex flex-col gap-3 justify-center items-center"
          whileHover={{
            y: -5, // Y-axis par 20px upar le jata hai
            scale: 1, // Slight zoom-in effect
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
          className="h-52 shadow-lg shadow-gray-400  flex flex-col gap-3 justify-center items-center"
          whileHover={{
            y: -5, // Y-axis par 20px upar le jata hai
            scale: 1, // Slight zoom-in effect
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
          className="h-52 shadow-lg shadow-gray-400  flex flex-col gap-3 justify-center items-center"
          whileHover={{
            y: -5, // Y-axis par 20px upar le jata hai
            scale: 1, // Slight zoom-in effect
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
          className="h-52 shadow-lg shadow-gray-400  flex flex-col gap-3 justify-center items-center"
          whileHover={{
            y: -5, // Y-axis par 20px upar le jata hai
            scale: 1, // Slight zoom-in effect
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
          className="h-52 shadow-lg shadow-gray-400  flex flex-col gap-3 justify-center items-center"
          whileHover={{
            y: -5, // Y-axis par 20px upar le jata hai
            scale: 1, // Slight zoom-in effect
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
          className="h-52 shadow-lg shadow-gray-400  flex flex-col gap-3 justify-center items-center"
          whileHover={{
            y: -5, // Y-axis par 20px upar le jata hai
            scale: 1, // Slight zoom-in effect
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

export default Skills;
