"use client";

import React from "react";
import { AppLogo, PhoneLayer, HomeScreen } from "@/Assets/Images";
import Image from "next/image";
import { SocialMedia } from "@/Components/SocialMedia/SocialMedia";
import { motion } from "framer-motion";
import { fadeFromBottom } from "@/Utils/motion";

export const Hero = () => {
  return (
    <section className="hero md:pt-40 pt-32 pb-40">
      <div className="max-w-screen-lg+ w-full mx-auto md:px-4 px-2">
        <motion.div
          className="flex flex-col items-center gap-y-4 font-medium sm:mb-6 mb-4"
          variants={fadeFromBottom(0.2, 0.5, 50)}
          initial="hidden"
          animate="visible"
        >
          <div className="border border-silver bg-white shadow-appShadow p-2.5 max-w-max rounded-2xl mx-auto">
            <Image
              className="unselectable md:w-16 md:h-16 sm:w-12 sm:h-12 w-10 h-10"
              src={AppLogo}
              alt="app logo"
              width={64}
              height={64}
              draggable={false}
              priority
            />
          </div>
          <span>Mobil llova</span>
        </motion.div>
        <div className="flex flex-col md:gap-y-5 sm:gap-y-4 gap-y-2.5 items-center text-center">
          <motion.h1
            className="hero__heading font-bold text-2xl sm:text-4xl lg:text-6xl"
            variants={fadeFromBottom(0.3, 0.5, 50)}
            initial="hidden"
            animate="visible"
          >
            1SONiA bu Restoran, Mashhurlar Meditsina va avto xizmatlari
          </motion.h1>
          <motion.p
            className="lg:text-3xl sm:text-2xl xs:text-lg text-base"
            variants={fadeFromBottom(0.4, 0.5, 50)}
            initial="hidden"
            animate="visible"
          >
            Muammolaringizning masofadan yechimi
          </motion.p>
          <SocialMedia></SocialMedia>
        </div>
        <div className="content__circle"></div>
        <motion.div
          className="relative md:mt-12 mt-7 mx-auto md:max-w-[389px] max-w-[274px] w-full"
          variants={fadeFromBottom(0.6, 0.5, 50)}
          initial="hidden"
          animate="visible"
        >
          <Image
            className="w-full h-auto"
            src={PhoneLayer}
            alt="Phone layer"
            width={389}
            height={702}
            draggable={false}
            priority
          />
          <Image
            className="md:max-w-[305px] max-w-[215px] w-full absolute top-[calc(3%)] left-[calc(10%+3px)]"
            src={HomeScreen}
            alt="Phone layer"
            width={305}
            height={659}
            draggable={false}
          />
        </motion.div>
      </div>
    </section>
  );
};
