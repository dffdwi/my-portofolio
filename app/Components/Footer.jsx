"use client";

import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white py-8 mt-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-semibold">
            <span className="text-violet-500">Daffa</span>Dwi
          </h2>
          <p className="mt-2 text-sm">
            &copy; 2024 Daffa Dwi. All rights reserved.
          </p>
        </div>
        <nav className="flex flex-col md:flex-row gap-4 items-center text-lg">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer transition duration-200 hover:text-violet-500"
          >
            About
          </Link>
          <Link
            to="project"
            smooth={true}
            duration={500}
            className="cursor-pointer transition duration-200 hover:text-violet-500"
          >
            Project
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer transition duration-200 hover:text-violet-500"
          >
            Expertise
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer text-violet-500 rounded-md border-2 border-violet-500 border-solid p-2 transition duration-200 hover:bg-violet-500 hover:text-neutral-950"
          >
            Contact Me
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
