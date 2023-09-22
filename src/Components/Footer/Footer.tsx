import React from "react";
import { MainButton } from "../MainButton/MainButton";
import { footerBtns } from "@/Assets/Data/MockData";
import * as img from "../../Assets/Images";
import Image, { StaticImageData } from "next/image";
import { socialData } from "@/Assets/Data/MockData";

export const Footer = () => {
  return (
    <footer className="md:py-24 sm:py-16 py-12">
      <div className="max-w-screen-lg+ w-full mx-auto md:px-4 px-2">
        <ul className="flex md:justify-between justify-center gap-y-4 md:gap-y-0 gap-x-3 md:flex-nowrap flex-wrap">
          {footerBtns.map((el) => {
            return (
              <li className="sm:max-w-[350px] max-w-xs w-full" key={el.id}>
                <MainButton {...el} />
              </li>
            );
          })}
        </ul>
        <p className="xl:text-[260px] lg:text-[200px] md:text-[160px] sm:text-8xl xs:text-7xl text-6xl font-bold text-center lg:my-20 md:my-14 sm:my-9 my-8">
          ©1SONiA
        </p>
        <div className="flex lg:flex-row flex-col-reverse items-center lg:justify-between gap-y-4 gap-x-6 lg:gap-0 lg+:flex-nowrap flex-wrap ">
          <a className="flex items-center gap-x-2" href="#">
            <span>Bo’sh ish o’rinlari</span>
            <Image src={img.ArrowTopRight} alt="Just an icon" />
          </a>
          <p className="text-lg text-ligtSilver">
            Barcha huquqlar himoyalangan
          </p>
          <ul className="flex items-center gap-x-3">
            {socialData.map((el) => (
              <li
                className="relative w-12 h-12 rounded-full bg-bgSilver flex justify-center items-center overflow-y-hidden"
                key={el.id}
              >
                <div className="w-full h-full main__btn main__btn--black flex justify-center items-center z-10">
                  <Image
                    className=" object-contain fill-white"
                    src={el.icon as StaticImageData}
                    alt="Just an icon"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
