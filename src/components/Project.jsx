import React, { useContext } from "react";
import { motion } from "framer-motion";
import { createTheme } from "../context/Theme";
import food from "../assets/food-panda-website-img.png";
import github from "../assets/github-user-finde-web.png";
import todo from "../assets/todo-list-web.png";
import quiz from "../assets/quiz-web.png";
import weather from "../assets/weather-web.png";
import password from "../assets/password-genrator-web.png";
import githucli from "../assets/githu-cli-web.png";
import ecomerce from "../assets/ecomerce-web.png";

function Project() {
  let { theme } = useContext(createTheme);
  let images = [
    weather,
    todo,
    food,
    github,
    ecomerce,
    githucli,
    password,
    quiz,
  ];
  return (
    <div className="flex justify-center items-center flex-col mt">
      <h1
        className={`text-3xl font-semibold pt-10 pb-10 overflow-hidden ${
          theme == "light" ? "text-black" : "text-white"
        }`}
      >
        Latest Project
      </h1>

      <div
        id="projects"
        className={`w-full grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-7 lg:grid-cols-3 xl:grid-cols-4   justify-center pt-10  pb-20 lg:gap-10 items-center px-10 ${
          theme == "light"
            ? "bg-white text-black"
            : "bg-black text-white md:grid md:grid-cols-2"
        }`}
      >
        {images.map((img) => {
          return (
            <motion.div
              className="h-80 rounded-md shadow-lg shadow-gray-400"
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
                className="h-full w-full object-cover"
                src={img}
                alt="remote"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Project;
