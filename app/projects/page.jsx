import React from "react";
import HeadingSecondary from "../ui/HeadingSecondary";
import ProjectCard from "../ui/ProjectCard";
import Button from "../ui/Button";
import PageContainer from "../ui/PageContainer";
// import navigation from ".";
export default function Page() {
  return (
    <div>
      <PageContainer>
        <section className="mt-[4.6rem]">
          <div className="flex items-center justify-between">
            <HeadingSecondary>Projects</HeadingSecondary>
            <Button type="back" href="/">
              Go Back
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-3 mt-5 sm:grid-cols-3 md:grid-cols-4 ">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </section>
      </PageContainer>
    </div>
  );
}
