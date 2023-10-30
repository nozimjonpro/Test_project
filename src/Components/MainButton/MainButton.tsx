"use client";

import React, { useState } from "react";

export const MainButton = (props: MainButtonProps) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-hundred w-full h-full flex justify-center items-center"
      style={{ boxShadow: "0 0 0 2px #000" }}
    >
      <a
        className={`main__btn w-full h-full text-center rounded-hundred transition-colors duration-300 ${
          props.styleClass
        } ${isHover ? `main__btn--${props.variant} text-white` : ""}`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        href={props.tel ? `tel:${props.href}` : props.href}
      >
        {props.title}
      </a>
    </div>
  );
};
