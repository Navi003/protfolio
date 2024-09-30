"use client";

import React from "react";
import Image from "next/image";
import Button from "../ui/Button";
export default function Hero() {
  return (
    <div className="pb-6 sm:pb-6 md:pb-0 bg-base-medium ">
      <div className="xl:w-[1200px] md:relative  mx-auto md:grid-cols-2 md:grid fadeIn">
        <div className="z-50 justify-center hidden w-full gap-3 space-x-2 uppercase lg:mb-5 md:mb-2 md:text-3xl lg:text-6xl sm:font-bold md:absolute md:bottom-0 md:flex text-primary-60 heroImageBox">
          <span className="text-primary-10">Navjot</span>
          <span>Dhiman</span>
        </div>

        <div className="-z-10 name">
          <Image
            className="w-full -z-0 md:relative"
            width={400}
            height={650}
            src="/images/navi.png"
            alt="navjot dhiman Picture"
          />
        </div>
        <div className="px-4 mt-5 md:col-start-1 md:row-start-1 md:my-auto ">
          <h1 className="text-lg font-semibold md:text-2xl lg:text-4xl text-secondary-70 moveLeft">
            <span className="text-3xl md:text-6xl">
              <span>Hi there,I'm</span>
              <span className="text-primary-60 moveRight "> Navjot</span>{" "}
            </span>
            <br></br>
            <p
              style={{
                lineHeight: "1.5rem",
              }}
              className="mt-4 tracking-wider md:text-lg shine-text"
            >
              A dedicated full-stack web developer and designer, creating
              professional websites and online solutions.
            </p>
          </h1>
          <div className="flex gap-3 space-x-6 mt-7">
            <Button
              className="font-semibold transition-all duration-300 border border-transparent rounded-sm hover:border hover:bg-transparent hover:border-secondary-70 hover:text-secondary-70 text-secondary-10"
              href="/aboutme"
            >
              About Me
            </Button>
            <Button
              className="font-semibold transition-all duration-300 bg-transparent border rounded-sm border-secondary-70 text-secondary-70 hover:bg-secondary-70 hover:text-secondary-10"
              href="/projects"
            >
              Projects
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
