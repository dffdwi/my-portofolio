"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Swal from "sweetalert2";

const Home = dynamic(() => import("./sections/Home"));
const About = dynamic(() => import("./sections/About"), { ssr: false });
const Project = dynamic(() => import("./sections/Project"));
const Skills = dynamic(() => import("./sections/Skills"));
const Contact = dynamic(() => import("./sections/Contact"));

const Page = () => {
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  useEffect(() => {
    Swal.fire({
      title: "Hey There!",
      html: "This portfolio was last updated on <strong>July 8, 2024</strong>.<br/>Something fresh is currently in progress. Stay tuned!",
      icon: "info",
      confirmButtonText: "Got it!",
      allowOutsideClick: false,
      allowEscapeKey: false,
      customClass: {
        popup: "bg-neutral-900 text-white",
        title: "text-white",
        htmlContainer: "text-neutral-300",
        confirmButton: "bg-violet-500 hover:bg-violet-600",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        setIsContentLoaded(true);
      }
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-neutral-950 min-h-screen">
      <div
        className={`flex flex-col w-full max-w-[1600px] max-md:max-w-full transition-opacity duration-1000 ${
          isContentLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {isContentLoaded && (
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
        )}
      </div>
    </div>
  );
};

export default Page;
