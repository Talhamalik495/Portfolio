import { useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import ContactUs from "./components/ContactUs";
import SubFooter from "./components/SubFooter";
import Footer from "./components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { createTheme } from "./context/Theme";
function App() {
  let { theme } = useContext(createTheme);

  useEffect(() => {
    Aos.init({ duration: 1000 }); // Optional: Set duration for animations
  }, []);
  return (
    <div className={`${theme == "light" ? "bg-white" : "bg-black"}`}>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Project />
      <ContactUs />
      <SubFooter />
      <Footer />
    </div>
  );
}

export default App;
