import React from "react";
import HeadingSecondary from "../ui/HeadingSecondary";
import IntroCard from "../ui/IntroCard";

export default function Intro() {
  return (
    <section className="mt-[4.6rem]">
      <HeadingSecondary>Introduction</HeadingSecondary>
      <div>
        <h4 className="mt-2 text-lg font-bold text-secondary-20">Overview</h4>
        <p className="text-xs md:text-base text-secondary-10">
          I am a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React, Node.js, and
          Three.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </p>
      </div>
      <div className="flex flex-col gap-4 mt-4 sm:flex-row sm:flex-wrap sm:justify-between">
        <IntroCard name="Frontend Developer" imageName="frontend" />
        <IntroCard name="Backend Developer" imageName="backend" />
        <IntroCard name="Designer" imageName="designer" />
      </div>
    </section>
  );
}
