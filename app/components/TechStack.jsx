import React from "react";
import PageContainer from "../ui/PageContainer";
import HeadingSecondary from "../ui/HeadingSecondary";
import Image from "next/image";
import TechStackCard from "../ui/TechStackCard";
import { techStackArray } from "../projectdata/data";
export default function TechStack() {
  return (
    <PageContainer>
      <HeadingSecondary>MY Tech Stack</HeadingSecondary>

      <section className="grid w-full gap-y-7 sm:grid-cols-2 grid-cols-1 mt-[4.8rem] ">
        {techStackArray.map((stack) => (
          <TechStackCard
            key={stack.id}
            content={stack.description}
            name={stack.stack}
            image={stack.image}
          />
        ))}
      </section>
    </PageContainer>
  );
}
