"use client";

import React from "react";
import Image from "next/image";
import Button from "../ui/Button";
export default function Hero() {
  return (
    <div className="pb-6 sm:pb-6 md:pb-0 bg-base-medium ">
      <div className="xl:w-[1200px] sm:relative  mx-auto md:grid-cols-2 md:grid">
        <div className="z-50 justify-center hidden w-full gap-3 mb-5 space-x-2 text-5xl font-bold uppercase md:absolute md:bottom-0 md:flex text-primary-60">
          <span className="text-primary-10">Navjot</span>
          <span>Dhiman</span>
        </div>

        <div>
          <Image
            className="w-full"
            width={400}
            height={650}
            src="/images/navi.png"
            alt="navjot dhiman Picture"
          />
        </div>
        <div className="px-4 mt-5 md:col-start-1 md:row-start-1 md:my-auto ">
          <h1 className="text-3xl font-semibold md:text-3xl lg:text-5xl text-secondary-70">
            Hi there, I am <span className="text-primary-60">Navjot</span> a
            Webdevolper and ready to take your websites to
            <span className="text-primary-60"> next level</span>
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
