"use client";
import React from "react";

import Image from "next/image";
import Button from "./Button";
import { motion } from "framer-motion";
export default function ProjectCard({
  image,
  name,
  hrefGit,
  hrefLive,
  builtWith,
}) {
  return (
    <div className=" grid grid-rows-[15rem_auto] rounded-lg overflow-hidden projectCard">
      <div className="p-4 overflow-hidden bg-slate-300">
        <Image
          className="object-cover w-full h-full rounded-md cardImage"
          src={image}
          width={200}
          height={120}
          alt={name}
        />
      </div>

      <div className="flex flex-col gap-2 p-4 bg-secondary-30">
        <div>
          <h4 className="text-lg font-semibold uppercase text-secondary-100 ">
            {name}
          </h4>
          <p>built with {builtWith}</p>
        </div>
        <div className="space-x-2">
          <Button href={hrefLive || "/"} variant="primary" type="tiny">
            Visit Live
          </Button>
          <Button href={hrefGit || "/"} variant="secondary" type="tiny">
            Visit git
          </Button>
        </div>
      </div>
    </div>
  );
}
