"use client";
import React from "react";

import Image from "next/image";
import Button from "./Button";
import { motion } from "framer-motion";
export default function ProjectCard({ image, name }) {
  return (
    <div className=" grid grid-rows-[15rem_auto] rounded-lg overflow-hidden">
      <div>
        <Image
          className="object-cover w-full h-full "
          src={image}
          width={200}
          height={120}
          alt={name}
        />
      </div>

      <div className="flex flex-col gap-2 p-4 bg-secondary-30">
        <div>
          <h4 className="text-lg font-semibold uppercase text-secondary-100 ">
            Gaming site
          </h4>
          <p>built with React</p>
        </div>
        <div className="space-x-2">
          <Button href="/" className="bg-primary-60" type="tiny">
            Visit Live
          </Button>
          <Button href="/" className="bg-secondary-60" type="tiny">
            Visit git
          </Button>
        </div>
      </div>
    </div>
  );
}
