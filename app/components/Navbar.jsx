"use client";
import Link from "next/link";
import React, { useState } from "react";
import ListItem from "../ui/ListItem";
import SocalIcon from "../ui/SocalIcon";
import HamBurger from "../ui/HamBurger";
import SocialIcons from "../ui/SocialIcons";

import Button from "@/app/ui/Button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// import { useState } from "react";
export default function Navbar() {
  return (
    <nav className="w-full bg-base-dark">
      {/* <div className="hidden sm:block">
        <ToggleDarkMode />
      </div> */}

      <div className="xl:w-[1200px] xl:mx-auto md:h-[7.8rem] relative  h-[6rem] flex items-center md:justify-between">
        {/* HAMBURGER */}

        <div className="flex items-center justify-between w-full md:w-fit">
          <Sheet>
            <SheetTrigger>
              <HamBurger>Open</HamBurger>
            </SheetTrigger>
            <SheetContent side="top" className="pt-10 bg-base-light">
              <ul className="flex flex-col gap-4 mr-8 font-semibold uppercase text-secondary-20 mobile-navigation ">
                <ListItem href="/">Home</ListItem>
                <ListItem href="/projects">Projects</ListItem>
                <ListItem href="/aboutme">About Me</ListItem>
                <ListItem href="/resources">Resources</ListItem>
                <ListItem href="/contact">Contact</ListItem>
              </ul>

              <SheetFooter>
                <SheetClose></SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>

          {/* SOCIAL ICONS */}
          <SocialIcons />
        </div>
        {/* MOBILE NAVIGATION */}

        {/* Desktop navi navigation */}

        <ul className="items-center hidden gap-4 mr-8 font-semibold uppercase md:flex text-secondary-20">
          <ListItem href="/">Home</ListItem>
          <ListItem href="/projects">Projects</ListItem>
          <ListItem href="/aboutme">About Me</ListItem>
          <ListItem href="/resources">Resources</ListItem>
          <ListItem href="/contact">Contact</ListItem>
        </ul>
      </div>
    </nav>
  );
}
