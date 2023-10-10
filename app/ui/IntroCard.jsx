import React from "react";
import Image from "next/image";
export default function IntroCard({ imageName, name }) {
  return (
    <div className="flex flex-col items-center justify-center p-5 py-10 transition-all duration-300 border rounded-md shadow-md border-secondary-90 grow shadow-secondary-80 bg-gradient-to-tr from-secondary-100/5 to-secondary-60/25 hover:bg-secondary-110 hover:scale-105">
      <div>
        <Image
          src={`/images/${imageName}.png`}
          width={100}
          height={100}
          alt="Frontend"
        />
      </div>
      <h4 className="text-secondary-10">{name}</h4>
    </div>
  );
}
