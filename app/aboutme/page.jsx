"use client";
import React from "react";

import PageContainer from "../ui/PageContainer";
import HeadingSecondary from "../ui/HeadingSecondary";
import Button from "../ui/Button";
import Image from "next/image";
import { motion } from "framer-motion";
import AppLogo from "../ui/AppLogo";

import { HiDocumentArrowDown } from "react-icons/hi2";
export default function Page() {
  return (
    <PageContainer>
      <motion.section
        animate={{
          opacity: 1,
        }}
        initial={{
          opacity: 0,
        }}
        className="mt-[4.6rem]"
      >
        <div className="flex items-center justify-between mb-[4.6rem]">
          <HeadingSecondary>About Me</HeadingSecondary>
          <Button type="back" href="/">
            Go back
          </Button>
        </div>

        <article className="flex flex-col gap-5 text-lg font-normal tracking-wider text-secondary-20">
          <p className="">
            I'm a skilled web developer with a passion for crafting both
            frontend and backend solutions. My tech stack of choice includes
            React, Tailwind CSS, Node.js, and Next.js, which I utilize to build
            seamless and efficient web applications. Beyond coding, I also
            possess a strong understanding of networking principles, enabling me
            to create robust and secure online experiences.
          </p>

          <p>
            In addition to my development expertise, I dabble in design, with
            proficiency in tools like Figma and Photoshop. This creative side
            complements my technical skills, allowing me to create visually
            appealing and user-friendly interfaces.
          </p>

          <p>
            My journey as a developer began as a self-learner, and I've honed my
            skills through various online courses, with my most recent one in
            2023 focusing on React and Node.js. Udemy has been a valuable
            resource in my educational journey, which I embarked upon in 2021.
          </p>

          <p>
            I thrive on continuous learning and the excitement of staying
            up-to-date with the ever-evolving web development landscape. If
            you're looking for a versatile developer who can seamlessly bridge
            the gap between design and functionality, you've found the right
            person. Let's collaborate and turn your web development dreams into
            reality!
          </p>
        </article>
        <div className="flex flex-wrap justify-between mt-10">
          <AppLogo src="/images/react-2.svg" alt="react logo" />
          <AppLogo src="/images/javascript.png" alt="JS logo" />
          <AppLogo src="/images/tailwindcss.svg" alt="tailwindcss logo" />
          <AppLogo src="/images/nodejs.png" alt="tailwindcss logo" />
          <AppLogo src="/images/figma.png" alt="figma logo" />
        </div>

        <div className="flex items-center justify-end p-4 mt-10 ">
          <a
            className="flex items-center gap-2 px-10 py-3 text-base font-semibold rounded bg-secondary-70 focus:outline-none focus:ring-4 focus:ring-secondary-60"
            href="/data/Navjot_Dhiman_lebenslauf_2023.pdf"
            download
          >
            Download CV
            <HiDocumentArrowDown
              className="w-6 h-6 text-secondary-20 "
              height={55}
              width={55}
            />
          </a>
        </div>
      </motion.section>
    </PageContainer>
  );
}
