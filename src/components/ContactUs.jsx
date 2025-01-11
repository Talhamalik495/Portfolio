import React, { useContext, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { Label } from "@/components/ui/label";
import { createTheme } from "../context/Theme";

function ContactUs() {
  let { theme } = useContext(createTheme);

  return (
    <div
      id="contactus"
      className={`grid  gap-10 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 md:gap-20 sm:gap-20 justify-items-center overflow-hidden w-full h-full   xl:gap-10 justify-center  pb-10 px-10 ${
        theme == "light" ? "text-black" : "text-white"
      }`}
    >
      <div
        className="overflow-hidden flex flex-col gap-3 justify-center"
        data-aos="fade-up-right"
      >
        <h1
          className={`flex justify-center pb-5 pt-5 text-2xl font-bold ${
            theme == "light" ? "text-black" : "text-white"
          }`}
        >
          Contact Us
        </h1>
        <h1 className="text-2xl font-bold">Get in touch</h1>
        <p>Fill out the form and well get back to you as soon as possible.</p>
        <p>Follow us</p>
        <div className="flex gap-3">
          <p
            className={`w-8 h-8 border-2  rounded-sm flex justify-center items-center ${
              theme == "light" ? "border-black" : "border-white"
            }`}
          >
            <FiLinkedin />
          </p>
          <p
            className={`w-8 h-8 border-2 border-black rounded-sm flex justify-center items-center ${
              theme == "light" ? "border-black" : "border-white"
            }`}
          >
            <FaInstagram />
          </p>{" "}
          <p
            className={`w-8 h-8 border-2 border-black rounded-sm flex justify-center items-center ${
              theme == "light" ? "border-black" : "border-white"
            }`}
          >
            <CiTwitter />
          </p>
        </div>
      </div>
      <div
        className={`grid grid-cols-1 gap-5 w-[100%] ${
          theme == "light" ? "text-black" : "text-black"
        }`}
        // data-aos="fade-up-left"
      >
        <Label
          className={`overflow-hidden ${
            theme == "light" ? "text-black" : "text-white"
          }`}
          htmlFor="name"
        >
          Name
        </Label>

        <Input type="text" placeholder="Name" />
        <Label
          className={`overflow-hidden ${
            theme == "light" ? "text-black" : "text-white"
          }`}
          htmlFor="email"
        >
          Email
        </Label>

        <Input type="email" placeholder="Email" />
        <Label
          className={`overflow-hidden ${
            theme == "light" ? "text-black" : "text-white"
          }`}
          htmlFor="address"
        >
          Meassage
        </Label>

        <Input type="text" placeholder="Meassage" />
        <Label
          className={`overflow-hidden ${
            theme == "light" ? "text-black" : "text-white"
          }`}
          htmlFor="address"
        >
          Address
        </Label>

        <Input type="text" placeholder="Address" />
      </div>
    </div>
  );
}

export default ContactUs;
