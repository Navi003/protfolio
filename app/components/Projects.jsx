"use client";
import { data } from "../projectdata/data";
import Button from "../ui/Button";
import HeadingSecondary from "../ui/HeadingSecondary";
import ProjectCard from "../ui/ProjectCard";
export default function Projects() {
  return (
    <section className="mt-[4.6rem] mb-[4.8rem]">
      <HeadingSecondary>Projects</HeadingSecondary>

      <div className="grid grid-cols-1 gap-3 mt-5 sm:grid-cols-3 xl:grid-cols-2 ">
        {data
          .slice(0, 6)
          .map(
            ({ builtWith, image, githubLink, projectName, liveSiteLink }) => (
              <ProjectCard
                name={projectName}
                image={image}
                alt={projectName}
                key={image}
                hrefGit={githubLink}
                hrefLive={liveSiteLink}
                builtWith={builtWith}
              />
            )
          )}
      </div>
      <div className="flex justify-center w-full mt-10">
        <Button href="/projects" className="text-center bg-primary-60">
          See more
        </Button>
      </div>
    </section>
  );
}
