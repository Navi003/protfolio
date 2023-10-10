"use client";
import Link from "next/link";
import React, { useState } from "react";
import ListItem from "../ui/ListItem";
// import { useState } from "react";
export default function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  function handlwShowMobileNav() {
    setShowMobileNav((state) => !state);
  }
  return (
    <nav className="relative bg-base-dark ">
      <div className="xl:w-[1200px] xl:mx-auto md:h-[150px] relative z-50  h-[6rem] flex items-center md:justify-end ">
        <div
          onClick={handlwShowMobileNav}
          className="ml-6 cursor-pointer md:hidden "
        >
          <div className="ham">
            <div className={`line ${showMobileNav && "line-1"}`}></div>
            <div className={`line ${showMobileNav && "line-2"}`}></div>
            <div className={`line ${showMobileNav && "line-3"}`}></div>
          </div>
        </div>
        <div
          className={`mt-[25rem] pb-24 pt-16 absolute left-0 flex justify-start pl-24 w-full top-50 bg-base-dark/90 transition-all duration-1000 -z-10
          ${!showMobileNav && "translate-y-[-500px]"}`}
        >
          <ul className="z-40 flex flex-col gap-4 mr-8 font-semibold uppercase text-secondary-20 ">
            <ListItem onClick={handlwShowMobileNav} href="/">
              Home
            </ListItem>
            <ListItem onClick={handlwShowMobileNav} href="/projects">
              Projects
            </ListItem>
            <ListItem onClick={handlwShowMobileNav} href="/resources">
              About Me
            </ListItem>
            <ListItem onClick={handlwShowMobileNav} href="/contact">
              Contact
            </ListItem>
          </ul>
        </div>
        )
        <div className="hidden md:flex">
          <ul className="flex gap-4 mr-8 font-semibold uppercase text-secondary-20 ">
            <ListItem href="/">Home</ListItem>
            <ListItem href="/projects">Projects</ListItem>
            <ListItem href="/aboutme">About Me</ListItem>
            <ListItem href="/contact">Contact</ListItem>
          </ul>
        </div>
      </div>
    </nav>
  );
}
