"use client";

import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="xl:w-[1200px] md:mx-auto px-4">
        <Contact />
        <Intro />
        <Projects />
        <TechStack />
      </div>
    </main>
  );
}
