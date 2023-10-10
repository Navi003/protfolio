import React from "react";
import HeadingSecondary from "../ui/HeadingSecondary";
import ProjectCard from "../ui/ProjectCard";
import Button from "../ui/Button";

export default function Projects() {
  return (
    <section className="mt-[4.6rem]">
      <HeadingSecondary>Projects</HeadingSecondary>

      <div className="grid grid-cols-1 gap-3 mt-5 sm:grid-cols-3 md:grid-cols-4 ">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <div className="flex justify-center w-full mt-10">
        <Button href="/projects" className="text-center bg-primary-60">
          See more
        </Button>
      </div>
    </section>
  );
}
