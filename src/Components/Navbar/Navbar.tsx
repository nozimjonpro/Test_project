import React from "react";
import { navbarData } from "@/Assets/Data/MockData";
import Link from "next/link";

export const Navbar = ({ isClicked, setIsClicked }: NavbarProps) => {
  return (
    <nav
      className={`transition-all duration-500  ${
        isClicked
          ? "flex justify-start fixed top-0 translate-x-0 left-0 w-full"
          : "-translate-x-full md:translate-x-0"
      }`}
    >
      <ul
        className={`items-center lg+:gap-x-2 gap-x-0 md:flex ${
          isClicked
            ? "flex flex-col items-start pt-32 gap-y-4 w-full"
            : "hidden"
        }`}
      >
        {navbarData.map((el) => (
          <li className={`${isClicked ? "w-full text-start" : ""}`} key={el.id}>
            <Link
              className={`lg+:px-4 lg+:py-3.5 py-2 rounded-hundred hover:bg-bgSilver active:bg-bgBrend transition-colors duration-300 ${
                isClicked
                  ? "text-3xl font-bold px-0 pl-4 w-full block"
                  : "px-3 text-lg"
              }`}
              href={el.path}
            >
              {el.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
