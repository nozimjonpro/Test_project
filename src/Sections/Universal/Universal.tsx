"use client";

import React from "react";
import { PhoneLayer } from "@/Assets/Images";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { fadeFromBottom } from "@/Utils/motion";
import { SocialMedia } from "@/Components/SocialMedia/SocialMedia";

export const Universal = (props: UniversalProps) => {
  return (
    <section
      className={`${props.mainClass} relative lg+:py-40 md:py-32 pb-32 sm:pt-24 xs:pt-16 py-12`}
      style={props.sectionBg}
      id={props.type}
    >
      {props.type === "famous" ? (
        <video
          className="absolute -z-10 top-0 left-0 w-full h-full object-cover"
          muted
          loop
          playsInline
          autoPlay
        >
          <source src="/famousBg.mp4" type="video/mp4" />
        </video>
      ) : (
        ""
      )}
      <div
        className={`max-w-screen-lg+ w-full mx-auto md:px-4 lg:pb-20 px-2 flex items-center flex-col-reverse gap-y-3 lg:gap-x-3 lg:justify-between z-10 ${
          props.type === "restaurant" || props.type === "medicine"
            ? "lg:flex-row"
            : "lg:flex-row-reverse"
        }`}
      >
        <div className="content__circle--universal max-w-[572px] w-full">
          <motion.div
            className="relative md:mt-12 mt-7  md:max-w-[389px] max-w-[274px] w-full mx-auto"
            variants={fadeFromBottom(0.1, 0.5, 100)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
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
              className="md:max-w-[305px] max-w-[215px] w-full absolute top-[calc(3%-1px)] left-[calc(10%+2px)] md:rounded-thirty rounded-tFour"
              src={props.image as StaticImageData}
              alt="Phone layer"
              width={305}
              height={659}
              draggable={false}
              quality={100}
              priority
            />
          </motion.div>
        </div>
        <div
          className={`max-w-[474px] flex flex-col gap-y-4 text-center lg:text-start items-center lg:items-start ${
            props.type === "famous" ? "text-white" : ""
          }`}
        >
          <motion.div
            className={`border border-silver bg-white shadow-appShadow p-2.5 max-w-max rounded-2xl mb-4 `}
            variants={fadeFromBottom(0.1, 0.5, 50)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Image
              className="unselectable md:w-16 md:h-16 sm:w-12 sm:h-12 w-10 h-10"
              src={props.icon as StaticImageData}
              alt="Just an icon"
              width={64}
              height={64}
              draggable={false}
            />
          </motion.div>

          <motion.h2
            className="hero__heading font-bold text-2xl sm:text-4xl lg:text-5xl lg+:text-6xl"
            variants={fadeFromBottom(0.2, 0.5, 50)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {props.heading}
          </motion.h2>
          <motion.p
            className="sm:text-xl lg+:text-2xl xs:text-lg  text-base"
            variants={fadeFromBottom(0.3, 0.5, 50)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {props.text}
          </motion.p>
          <motion.ul
            className="lg:grid lg:grid-cols-2 max-w-max lg:gap-2 xs:mb-4 mb-0 gap-y-2 xs:gap-y-0 justify-center flex gap-x-2 xs:flex-nowrap flex-wrap"
            variants={fadeFromBottom(0.4, 0.5, 50)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            {props.nav
              ? props.nav.map((el) => (
                  <motion.li
                    className="border-2 cursor-pointer border-bgBrend lg:p-4 sm:p-2.5 p-2 text-bgBrend w-max xs:text-base text-sm sm:text-lg font-medium rounded-hundred uppercase"
                    key={el.id}
                    initial={{ y: 50 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                  >
                    {el.title}
                  </motion.li>
                ))
              : ""}
          </motion.ul>
          <SocialMedia></SocialMedia>
        </div>
      </div>
    </section>
  );
};
