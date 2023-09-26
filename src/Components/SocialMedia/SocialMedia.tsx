import React from "react";
import { AppStore, PlayStore } from "@/Assets/Images";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeFromBottom } from "@/Utils/motion";

export const SocialMedia = () => {
  return (
    <motion.ul
      className="flex items-center gap-x-4"
      variants={fadeFromBottom(0.5, 0.5, 50)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <li>
        <a
          href="https://play.google.com/store/apps/details?id=uz.sonia1.soniaapp"
          target="_blank"
        >
          <Image
            className="black__svg cursor-pointer unselectable w-full h-auto"
            src={PlayStore}
            alt="Play store"
            width={182}
            height={58}
            draggable={false}
          />
        </a>
      </li>
      <li>
        <a
          href="https://apps.apple.com/uz/app/1sonia/id6444478902"
          target="_blank"
        >
          <Image
            className="black__svg cursor-pointer unselectable w-full h-auto"
            src={AppStore}
            alt="Play store"
            width={182}
            height={58}
            draggable={false}
          />
        </a>
      </li>
    </motion.ul>
  );
};
