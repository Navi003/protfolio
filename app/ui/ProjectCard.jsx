import React from "react";
import Image from "next/image";
import Button from "./Button";
export default function ProjectCard() {
  return (
    <div className="pb-2 rounded-md bg-secondary-20">
      <Image
        className="w-full overflow-hidden"
        src="/images/project01.jpg"
        width={190}
        height={120}
      />
      <div>
        <div className="px-2 pt-1 leading-4">
          <h4 className="text-lg font-semibold uppercase text-secondary-100">
            Gaming site
          </h4>
          <p>built with React</p>
        </div>
        <div className="px-2 py-2">
          <Button className="px-2 py-0 rounded-full text-secondary-10">
            Visit Live
          </Button>
          <Button className="px-2 py-0 ml-2 rounded-full bg-amber-500 text-primary-10">
            Visit git
          </Button>
        </div>
      </div>
    </div>
  );
}
