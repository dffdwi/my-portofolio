import React from "react";
import dynamic from "next/dynamic";

const Home = dynamic(() => import("./sections/Home"));
const About = dynamic(() => import("./sections/About"));
const Project = dynamic(() => import("./sections/Project"));
const Skills = dynamic(() => import("./sections/Skills"));
const Contact = dynamic(() => import("./sections/Contact"));

const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-neutral-950">
      <div className="flex flex-col  w-full max-w-[1600px] max-md:max-w-full ">
        <main className="flex flex-col px-16 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="project">
            <Project />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Page;
