"use client";
import Link from "next/link";
import React, { useState } from "react";
import ListItem from "../ui/ListItem";
import SocalIcon from "../ui/SocalIcon";
import HamBurger from "../ui/HamBurger";
import SocialIcons from "../ui/SocialIcons";
import ToggleDarkMode from "../ui/ToggleDarkMode";
import { useDarkMode } from "../context/DarkModeContext";
// import { useState } from "react";
export default function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  // const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav className="w-full bg-base-dark">
      {/* <div className="hidden sm:block">
        <ToggleDarkMode />
      </div> */}

      <div className="xl:w-[1200px] xl:mx-auto md:h-[7.8rem] relative  h-[6rem] flex items-center md:justify-between">
        {/* HAMBURGER */}

        <div className="flex items-center justify-between w-full md:w-fit">
          <HamBurger
            showMobileNav={showMobileNav}
            onClick={() => setShowMobileNav((prev) => !prev)}
          />
          {/* SOCIAL ICONS */}
          <SocialIcons />
        </div>
        {/* MOBILE NAVIGATION */}
        <div
          className={`pb-24 pt-16 absolute left-0 flex justify-start pl-24 w-full top-50 bg-base-dark/90 transition-all duration-1000
          ${showMobileNav ? "translate-y-[200px]" : "translate-y-[-900px]"}`}
        >
          <ul className="flex flex-col gap-4 mr-8 font-semibold uppercase text-secondary-20 mobile-navigation ">
            <ListItem onClick={() => setShowMobileNav(false)} href="/">
              Home
            </ListItem>
            <ListItem onClick={() => setShowMobileNav(false)} href="/projects">
              Projects
            </ListItem>
            <ListItem onClick={() => setShowMobileNav(false)} href="/aboutme">
              About Me
            </ListItem>
            <ListItem onClick={() => setShowMobileNav(false)} href="/contact">
              Contact
            </ListItem>
          </ul>

          {/* <div>
            <ToggleDarkMode />
          </div> */}
        </div>

        {/* Desktop navi navigation */}

        <ul className="items-center hidden gap-4 mr-8 font-semibold uppercase md:flex text-secondary-20">
          <ListItem href="/">Home</ListItem>
          <ListItem href="/projects">Projects</ListItem>
          <ListItem href="/aboutme">About Me</ListItem>
          <ListItem href="/contact">Contact</ListItem>
        </ul>
      </div>
    </nav>
  );
}
