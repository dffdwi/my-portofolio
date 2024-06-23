import * as React from "react";

const SocialIcon = ({ src, alt }) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className="shrink-0 w-14 aspect-[1.12]"
  />
);

const SocialIcons = () => (
  <div className="flex gap-5 px-5 my-auto text-white max-md:flex-wrap">
    <p className="grow my-auto">Find Me On</p>
    <SocialIcon
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7975a761a5dcc5eba2352cbad94cef3641459bcd15c4514cdb1efe55725be0e?apiKey=8f8528e23e2f43b68a1c2de0d919d80c&"
      alt="Social Media Icon 1"
    />
    <SocialIcon
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/097f04b1996454abd031b6da5c2cf8ff0cff7d0bc3e73b4e04391563f057cbca?apiKey=8f8528e23e2f43b68a1c2de0d919d80c&"
      alt="Social Media Icon 2"
    />
    <SocialIcon
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5372d6333941ea19761443477d6abc96442a5432c53e8ab773f5a60e39bacc54?apiKey=8f8528e23e2f43b68a1c2de0d919d80c&"
      alt="Social Media Icon 3"
    />
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f885abe8b69e74f1d8b11a260f4a95c48c08b8de6e9a217c5e158d13095c145?apiKey=8f8528e23e2f43b68a1c2de0d919d80c&"
      alt="Social Media Icon 4"
      className="shrink-0 aspect-[1.1] w-[55px]"
    />
  </div>
);

function Home() {
  return (
    <main className="flex flex-col text-xl font-semibold">
      <section className="flex flex-col md:flex-row gap-5 justify-between items-center w-full text-neutral-400 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
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
        <div className="my-auto w-full flex justify-center max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/00cb42c1c584874419c24944de943d9c6853aff8b905477a603cd197fa2103f2?apiKey=8f8528e23e2f43b68a1c2de0d919d80c&"
            alt="Profile picture of Daffa Dwi Haykal"
            className="max-w-full aspect-[0.62] w-[209px]"
          />
        </div>
      </section>

      <section className="flex gap-5 justify-between mt-16 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <button className="flex gap-2.5 px-5 py-4 text-justify text-white bg-violet-500 rounded-md">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/89bcb25c722426a9ed4fdf802a5ab238d2a896149ebe8f968607cedee4a93ed4?apiKey=8f8528e23e2f43b68a1c2de0d919d80c&"
            alt=""
            className="shrink-0 my-auto w-4 aspect-square"
          />
          Download CV
        </button>
        <SocialIcons />
      </section>
    </main>
  );
}

export default Home;
