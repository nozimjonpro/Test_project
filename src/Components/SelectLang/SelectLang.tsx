"use client";

import React, { useState } from "react";
import { langData } from "@/Assets/Data/MockData";
import { Language, ArrowDown } from "@/Assets/Images";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Accept } from "@/Assets/Images";

export default function SelectLang() {
  const [isClicked, setIsClicked] = useState(false);

  const [lang, setLang] = useState(langData[0]);

  return (
    <div className="relative z-20">
      <div
        className={`py-2.5 px-2.5 md:px-4 rounded-hundred lg:hover:bg-bgSilver transition-colors duration-300 flex gap-x-2 items-center cursor-pointer w-max md:w-40 unselectable ${
          isClicked ? "bg-bgSilver" : "md:bg-white bg-bgSilver"
        }`}
        onClick={() => setIsClicked(!isClicked)}
      >
        <Image
          className="rounded-full"
          src={Language}
          alt="Just an language globe icon"
          width={20}
          height={20}
          draggable={false}
        />
        <span className="md:block hidden text-lg">{lang.title}</span>
        <Image
          className={`md:block hidden ${
            isClicked ? "rotate-180" : "rotate-0"
          } ml-auto transition-transform duration-300`}
          src={ArrowDown}
          alt="Just an arrow down icon"
          draggable={false}
        />
      </div>
      <AnimatePresence>
        {isClicked && (
          <motion.ul
            className="flex flex-col p-2 absolute top-[140%] -right-1.5 bg-white md:bg-bgSilver rounded-2xl w-48 lg+:w-56 z-10 shadow-headerShadow"
            initial={{ opacity: 0, scale: 0.5, originX: 0.5, originY: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            exit={{
              opacity: 0,
              scale: 0.5,
              transition: {
                duration: 0.1,
                ease: "easeOut",
              },
            }}
          >
            {langData.map((el) => (
              <li
                className="flex items-center gap-x-3 px-3 py-2.5 rounded-xl md:hover:bg-white hover:bg-bgSilver cursor-pointer transition-colors duration-300"
                key={el.id}
                onClick={() => {
                  setLang(el);
                  setIsClicked(false);
                }}
              >
                <Image
                  src={el.svg}
                  alt="flag icon for language"
                  width={24}
                  height={24}
                />{" "}
                <span>{el.title}</span>
                {el.id === lang.id && (
                  <Image
                    className="ml-auto"
                    src={Accept}
                    alt="Just an icon"
                    width={14}
                    height={9.5}
                  />
                )}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
