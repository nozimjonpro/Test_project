"use client";

import React from "react";
import { PlayButton } from "@/Assets/Images";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeFromBottom } from "@/Utils/motion";

export const Mobil = () => {
  return (
    <section
      className="relative w-full flex justify-center items-center"
      id="mobile"
    >
      <video
        className="-z-20 w-full object-cover"
        muted
        loop
        playsInline
        autoPlay
      >
        <source src="/sonia.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 -z-10"></div>
      <motion.div
        className="absolute max-w-screen-lg+ w-full mx-auto md:px-4 px-2 flex justify-center items-center flex-col"
        variants={fadeFromBottom(0.1, 0.5, 100)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.a
          href={"https://youtu.be/zqVcubB9z48?si=XlV2ewCWmdqMmKW2"}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.2,
          }}
          whileTap={{ scale: 0.8 }}
        >
          <Image
            className="md:mb-10 sm:mb-8 xs:m-6 mb-4 md:w-full md:h-auto sm:w-20 sm:h-20 xs:w-16 xs:h-16 w-14 h-14 max-w-[100px] aspect-square"
            src={PlayButton}
            alt="just an icon"
            width={100}
            height={100}
            priority
          />
        </motion.a>
        <p className="text-white md:text-5xl sm:text-4xl xs:text-2xl text-xl md:tracking-wider max-w-md w-full  text-center">
          Mobil ilovaning video taqdimoti
        </p>
      </motion.div>
    </section>
  );
};
