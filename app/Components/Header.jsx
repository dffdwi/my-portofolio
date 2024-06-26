"use client";

import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      if (currentScrollTop > lastScrollTop) {
        setIsSticky(true);
      } else {
        setIsSticky(currentScrollTop > 0);
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`flex justify-between items-center px-8 py-4 w-full font-semibold text-white transition-all duration-500 sticky top-0 z-10 ${
        isSticky && window.innerWidth >= 768
          ? "shadow-md bg-stone-900 transform py-1"
          : "bg-stone-950"
      }`}
      style={{ zIndex: 10 }}
    >
      <div className="text-2xl flex-shrink-0 cursor-pointer" onClick={scrollToTop}>
        <span className="text-violet-500">Daffa</span>Dwi
      </div>

      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMobileMenu}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <nav
        className={`absolute top-16 left-0 w-full bg-stone-950 flex flex-col items-center gap-3 p-4 md:hidden transition-all duration-500 ${
          isMobileMenuOpen ? "opacity-90 max-h-screen" : "opacity-0 max-h-0"
        } overflow-hidden`}
      >
        <span
          onClick={scrollToTop}
          className="cursor-pointer text-white transition duration-200 hover:text-violet-500"
        >
          Home
        </span>
        <Link
          to="about"
          smooth={true}
          duration={500}
          onClick={toggleMobileMenu}
          className="cursor-pointer text-white transition duration-200 hover:text-violet-500"
        >
          About
        </Link>
        <Link
          to="project"
          smooth={true}
          duration={500}
          onClick={toggleMobileMenu}
          className="cursor-pointer text-white transition duration-200 hover:text-violet-500"
        >
          Project
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          onClick={toggleMobileMenu}
          className="cursor-pointer text-white transition duration-200 hover:text-violet-500"
        >
          Expertise
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          onClick={toggleMobileMenu}
          className="cursor-pointer text-violet-500 rounded-md border-2 border-violet-500 border-solid p-2 transition duration-200 hover:bg-violet-500 hover:text-neutral-950"
        >
          Contact Me
        </Link>
      </nav>

      <nav className="hidden md:flex gap-5 items-center text-xl">
        <span
          onClick={scrollToTop}
          className="cursor-pointer transition duration-200 hover:text-violet-500"
        >
          Home
        </span>
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
    </header>
  );
};

export default Header;
