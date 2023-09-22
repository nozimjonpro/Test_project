"use client";

import React, { useState } from "react";

type MainButtonProps = {
  title: string;
  styles?: React.CSSProperties;
};

export const MainButton = (props: MainButtonProps) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="relative w-max overflow-hidden rounded-hundred border-2 border-black">
      <button
        className={`w-max p-5 text-3xl text-center rounded-hundred transition-colors duration-300 ${
          isHover ? "text-white" : ""
        }`}
        style={props.styles}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {props.title}
      </button>
    </div>
  );
};
