"use client";

import React from "react";
import { SocialMedia } from "@/Components/SocialMedia/SocialMedia";
import { motion } from "framer-motion";
import { fadeFromBottomGroup } from "@/Utils/motion";
import { images } from "@/Assets/Data/MockData";
import { PhoneLayer } from "@/Assets/Images";
import Image, { StaticImageData } from "next/image";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const Problem = () => {
  return (
    <section className="page__sections bg-blueBg md:pt-20 pt-16">
      <motion.div
        className="max-w-screen-lg+ w-full mx-auto md:px-4 px-2 flex flex-col items-center"
        variants={fadeFromBottomGroup(0.5, 100)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p
          className="text-white lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl text-2xl max-w-xs sm:max-w-xl md:max-w-2xl xs:max-w-sm tracking-wide font-bold text-center"
          variants={fadeFromBottomGroup(0.5, 100, true)}
        >
          Muammolaringizning masofadan yechimi
        </motion.p>
        <motion.h2
          className="text-sonia lg:text-[250px] md+:text-[200px] my-5 md:text-[180px] sm:text-[150px] xs:text-9xl text-7xl xs:my-8 md:my-10 font-bold leading"
          variants={fadeFromBottomGroup(0.5, 100, true)}
        >
          1SONiA
        </motion.h2>
        <motion.p
          className="balance__text sm:text-2xl text-xl text-white md:mb-8 mb-6 max-w-lg text-center"
          variants={fadeFromBottomGroup(0.5, 100, true)}
        >
          4 ta bo’lim 1 ta ilova ichida. Ilovani Google Play va Apple Store da
          yuklab oling
        </motion.p>
        <SocialMedia />
        <motion.ul
          className="flex relative md:h-[450px] sm:h-72 h-44 w-full mt-24"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {images.map((el) => (
            <motion.li
              className={`absolute top-0 shrink-0 md:max-w-[389px] sm:max-w-[274px] max-w-[200px] w-full ${el.tailwind}`}
              key={el.id}
              style={el.styles}
              variants={item}
            >
              <div className="relative md:mt-12 mt-7 md:max-w-[389px] sm:max-w-[274px] max-w-[200px] w-full mx-auto">
                <Image
                  className="w-full h-auto"
                  src={PhoneLayer}
                  alt="Phone background layer"
                  width={389}
                  height={702}
                  draggable={false}
                  priority
                />
                <Image
                  className="md:max-w-[305px] sm:max-w-[215px] max-w-[156px] w-full absolute top-[calc(3%)] sm:left-[calc(10%+3px)] left-[calc(10%+2px)] md:rounded-thirty rounded-tFour"
                  src={el.image as StaticImageData}
                  alt="Phone layer"
                  width={305}
                  height={659}
                  draggable={false}
                />
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
};
