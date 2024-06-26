import * as React from "react";
import AnimateOnView from "../Components/hooks/AnimateOnView";

const SocialIcon = ({ src, alt, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="shrink-0 max-w-10 aspect-[1.12] transition-all hover:scale-110"
    />
  </a>
);

const SocialIcons = () => (
  <div className="flex gap-5 px-5 my-auto text-white max-md:flex-wrap">
    <p className="grow my-auto">Find Me On</p>
    <SocialIcon
      src="../../social/linkedin.svg"
      alt="LinkedIn"
      link="https://www.linkedin.com/in/daffadwihaykal"
    />
    <SocialIcon
      src="../../social/github.svg"
      alt="GitHub"
      link="https://github.com/dffdwi"
    />
    <SocialIcon
      src="../../social/instagram.svg"
      alt="Instagram"
      link="https://www.instagram.com/daffadwi__"
    />
    <SocialIcon
      src="../../social/whatsapp.svg"
      alt="WhatsApp"
      link="https://wa.me/6281324413572"
    />
  </div>
);

function Home() {
  return (
    <main className="flex flex-col text-xl font-semibold">
      <section className="flex flex-col md:flex-row gap-5 justify-between items-center w-full text-neutral-400 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        <AnimateOnView direction="up" delay={0.2}>
          <div className="flex flex-col max-w-full">
            <h1 className="text-4xl text-white max-md:max-w-full">
              Hello Everyone !
            </h1>
            <h2 className="mt-8 text-5xl text-violet-500 max-md:max-w-full max-md:text-4xl">
              <span className="text-white">I am</span> Daffa Dwi Haykal
            </h2>
            <p className="mt-6 font-medium max-md:max-w-full">
              Front-End Developer
            </p>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/aee0bf238c3b6bd294e0062f366e37943620ca4f01ed9cde886cc1ddf6ea440d?apiKey=8f8528e23e2f43b68a1c2de0d919d80c&"
              alt="Decorative line"
              className="mt-5 border-solid aspect-[25] border-[3px] border-neutral-400 stroke-[3px] stroke-neutral-400 w-[74px]"
            />
            <p className="mt-8 text-justify max-md:max-w-full">
              My name is Daffa Dwi Haykal, an Informatics student at Multimedia
              Nusantara University, is deeply passionate about Web Development,
              particularly as a Front-End Developer. Proficient in HTML, CSS,
              JavaScript, and React.js, I am dedicated to crafting engaging and
              user-friendly digital interfaces. My commitment to mastering these
              technologies enables me to contribute effectively to the world of
              web development.
            </p>
          </div>
        </AnimateOnView>
        <div className="my-auto w-full flex justify-center max-w-full">
          <AnimateOnView direction="up" delay={0.3}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/00cb42c1c584874419c24944de943d9c6853aff8b905477a603cd197fa2103f2?apiKey=8f8528e23e2f43b68a1c2de0d919d80c&"
              alt="Profile picture of Daffa Dwi Haykal"
              className="max-w-full aspect-[0.62] w-[209px]"
            />
          </AnimateOnView>
        </div>
      </section>

      <section className="flex gap-5 justify-between mt-16 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <AnimateOnView direction="left" delay={0.4}>
          <a
            href="../../cv/daffa-dwi-haykal-cv.pdf"
            download="Daffa_Dwi_Haykal_CV.pdf"
            className="flex gap-2.5 px-5 py-4 text-justify text-white bg-violet-500 rounded-md border border-transparent transition-all hover:bg-transparent hover:border hover:border-violet-500"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/89bcb25c722426a9ed4fdf802a5ab238d2a896149ebe8f968607cedee4a93ed4?apiKey=8f8528e23e2f43b68a1c2de0d919d80c&"
              alt=""
              className="shrink-0 my-auto w-4 aspect-square"
            />
            Download CV
          </a>
        </AnimateOnView>
        <AnimateOnView direction="right" delay={0.5}>
          <SocialIcons />
        </AnimateOnView>
      </section>
    </main>
  );
}

export default Home;
