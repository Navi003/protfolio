"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
export default function TechStackCard({ stack, name, content, image }) {
  const [blur, setBlur] = useState(false);

  return (
    <div onMouseEnter={() => setBlur((prev) => !prev)}>
      <div
        className="sm:p-8 px-6 py-4 grid grid-cols-[1fr_auto] gap-x-2 techClip bg-primary-10 
      transition-all duration-300
      border
    border-b-transparent border-b-8
    hover:translate-y-2
  hover:border-b-primary-60 hover:border-b-8 max-h-52
    "
      >
        <div className="flex items-center justify-center w-10 h-10 p-1 mx-auto my-auto rounded-full sm:w-20 sm:h-20 ">
          <Image
            width={35}
            height={35}
            src={!image ? "/images/react-2.svg" : image}
            className={`w-full h-full  duration-300 ${blur && "custom-rotate"}`}
          />
        </div>
        <div>
          <h4 className="font-semibold uppercase text-primary-100">{name}</h4>
          <p className="my-auto text-xs max-h-24 ">{content}</p>
        </div>
      </div>
    </div>
  );
}
