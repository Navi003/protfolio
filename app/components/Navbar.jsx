"use client";
import Link from "next/link";
import React, { useState } from "react";
import ListItem from "../ui/ListItem";
import SocalIcon from "../ui/SocalIcon";
import HamBurger from "../ui/HamBurger";
import SocialIcons from "../ui/SocialIcons";

// import { useState } from "react";
export default function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  function handlwShowMobileNav() {
    setShowMobileNav((state) => !state);
  }
  return (
    <nav className="sticky bg-base-dark">
      <div className="xl:w-[1200px] xl:mx-auto md:h-[150px] relative  h-[6rem] flex items-center md:justify-between">
        {/* HAMBURGER */}

        <div className="flex items-center justify-between w-full md:w-fit">
          <HamBurger
            showMobileNav={showMobileNav}
            onClick={handlwShowMobileNav}
          />
          {/* SOCIAL ICONS */}
          <SocialIcons />
        </div>
        {/* MOBILE NAVIGATION */}
        <div
          className={`mt-[25rem] pb-24 pt-16 absolute left-0 flex justify-start pl-24 w-full top-50 bg-base-dark/90 transition-all duration-1000
          ${!showMobileNav && "translate-y-[-500px]"}`}
        >
          <ul className="flex flex-col gap-4 mr-8 font-semibold uppercase text-secondary-20 ">
            <ListItem onClick={handlwShowMobileNav} href="/">
              Home
            </ListItem>
            <ListItem onClick={handlwShowMobileNav} href="/projects">
              Projects
            </ListItem>
            <ListItem onClick={handlwShowMobileNav} href="/aboutme">
              About Me
            </ListItem>
            <ListItem onClick={handlwShowMobileNav} href="/contact">
              Contact
            </ListItem>
          </ul>
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
