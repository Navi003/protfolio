"use client";
import React from "react";

import Image from "next/image";
import Button from "./Button";
import { motion } from "framer-motion";
export default function ProjectCard({ image, name }) {
  return (
    <motion.div
      animate={{
        opacity: 1,
      }}
      initial={{
        opacity: 0,
      }}
      className="pb-2 rounded-md bg-secondary-20 grid grid-rows-[2fr_1fr] border border-b-4 hover:border-b-primary-60 transition-all duration-300"
    >
      <Image
        className="object-cover w-full h-full overflow-hidden"
        src={image}
        width={190}
        height={120}
        alt={name}
      />
      <div className="flex items-center justify-between p-2 mt-4 sm:mt-2 sm:items-start sm:p-1 sm:flex-col">
        <div className="px-2 pt-1 leading-4">
          <h4 className="text-lg font-semibold uppercase text-secondary-100 ">
            Gaming site
          </h4>
          <p>built with React</p>
        </div>
        <div className="flex gap-2 shrink sm:mr-0 stroke-base-medium sm:flex sm:px-2 sm:py-2 sm:mt-2 ">
          <Button className="bg-secondary-70" href="/" type="tiny">
            Visit Live
          </Button>
          <Button className="bg-primary-60" href="/" type="tiny">
            Visit git
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
