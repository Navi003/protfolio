"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Button from "../ui/Button";
export default function Hero() {
  return (
    <div className="relative pb-6 sm:pb-6 md:pb-0 bg-base-medium -z-10">
      <div className="xl:w-[1200px] relative mx-auto md:grid-cols-2 md:grid">
        <div className="z-50 justify-center hidden w-full gap-3 mb-5 space-x-2 text-5xl font-bold uppercase md:absolute md:bottom-0 md:flex text-primary-60">
          <span className="text-primary-10">Navjot</span>
          <span>Dhiman</span>
        </div>
        <div className="relative col-start-2">
          <Image
            className="w-full grayscale"
            width={400}
            height={650}
            src="/images/navi.png"
            alt="navjot dhiman Picture"
          />
        </div>
        <div className="px-4 mt-5 md:col-start-1 md:row-start-1 md:my-auto ">
          <h1 className="text-3xl font-semibold md:text-3xl lg:text-5xl text-secondary-70">
            Hi there, i am Webdevolper and ready to take your websites to
            <span className="text-primary-60"> next level</span>
          </h1>
          <div className="flex gap-3 space-x-6 mt-7">
            <Button>Hire Me</Button>
            <Button href="/projects">Projects</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
