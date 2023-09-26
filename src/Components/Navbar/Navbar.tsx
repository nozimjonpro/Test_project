import React, { useCallback, useEffect, useState } from "react";
import { navbarData } from "@/Assets/Data/MockData";
import Link from "next/link";

export const Navbar = ({ isClicked, setIsClicked }: NavbarProps) => {
  useEffect(() => {
    const sections =
      document.querySelectorAll<HTMLTableSectionElement>(".page__sections");
    const anchor = document.querySelectorAll(".nav__link");
    console.log(sections);

    const handleScroll = () => {
      const fromTop = window.scrollY;
      sections.forEach((el) => {
        if (el.offsetTop - 400 <= fromTop) {
          anchor.forEach((ele) => {
            if (ele.id.includes(el.id) && el.id) {
              ele.classList.add("nav__link--active");
            } else {
              ele.classList.remove("nav__link--active");
            }
          });
        }
      });
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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
              className={`nav__link lg+:px-4 lg+:py-3.5 py-2 rounded-hundred transition-all duration-200 ${
                isClicked
                  ? "text-3xl font-bold px-0 pl-4 w-full block"
                  : "px-3 text-lg"
              }`}
              href={el.path}
              id={el.path}
              onClick={() => setIsClicked(false)}
            >
              {el.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
