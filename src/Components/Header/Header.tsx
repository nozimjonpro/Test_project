"use client";

import React, { useEffect, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { Logo } from "@/Assets/Images";
import Image from "next/image";
import SelectLang from "../SelectLang/SelectLang";
import { motion } from "framer-motion";

export default function Header() {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (isClicked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isClicked]);
  return (
    <header
      className={`header__fixed ${isClicked ? "header__fixed--active" : ""}`}
    >
      <motion.div
        className="flex justify-between max-w-screen-lg+ mx-auto fixed left-2 right-2 md:right-4  md:left-4 items-center shadow-headerShadow rounded-hundred py-2 pl-4 pr-1.5 bg-white mt-5 z-20"
        initial={{ translateY: -50, opacity: 0 }}
        animate={{
          translateY: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            delay: 0,
            ease: "linear",
          },
        }}
      >
        <div
          className="w-11 h-11 rounded-full bg-bgSilver md:hidden flex justify-center items-center z-30"
          onClick={() => setIsClicked(!isClicked)}
        >
          <div
            className={`w-6 rounded-md h-0.75 bg-blackish before:w-6 before:h-0.75 translate-x-0 before:rounded-md before:bg-blackish before:-translate-y-2 before:content-[''] before:absolute after:w-6 after:h-0.75 after:rounded-md after:bg-blackish after:content-[''] after:absolute after:translate-y-2 transition-all duration-300 before:transition-transform before:duration-300 after:transition-transform after:duration-300 ${
              isClicked ? "hamburger--active" : ""
            }`}
          ></div>
        </div>
        <Image
          className="unselectable mx-auto md:mx-0 z-10"
          src={Logo}
          alt="Website logo 1sonia"
          draggable={false}
          width={130}
          height={32}
          priority
        />
        <Navbar isClicked={isClicked} setIsClicked={setIsClicked} />
        <SelectLang></SelectLang>
      </motion.div>
      <div
        className={`fixed top-0 right-0 bottom-0 left-0 bg-white transition-all duration-500 md:static md:translate-x-0 overflow-y-hidden z-10 ${
          isClicked ? "translate-x-0" : "-translate-x-full"
        }`}
      ></div>
    </header>
  );
}
