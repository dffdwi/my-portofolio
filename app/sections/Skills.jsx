"use client";

import React, { useState, useEffect } from "react";
import CustomModal from "../Components/CustomModal";
import Modal from "react-modal";
import AnimateOnView from "../Components/hooks/AnimateOnView";

const qualities = [
  {
    name: "Workaholic",
    imageSrc: "../../personalities/workaholic.svg",
    description:
      "I'm a kind of person who can't just stand around and doing nothing. I have a tendency to do something productive.",
  },
  {
    name: "Communicative",
    imageSrc: "../../personalities/communication.svg",
    description:
      "I have a broad understanding of verbal vocabulary. Therefore, I can convey a message well to the receiver.",
  },
  {
    name: "Cooperative",
    imageSrc: "../../personalities/cooperative.svg",
    description:
      "Behind the successful project, there's a great team. I can build a good cooperation and remain consistent with the goal.",
  },
  {
    name: "Perfectionist",
    imageSrc: "../../personalities/perfectionist.svg",
    description:
      "I have a strong intuition. I have remained consistent with high quality standards to present a most worthy result.",
  },
];

const skills = [
  {
    name: "Skill 1",
    imageSrc: "../../skills/html.png",
    alt: "Skill Icon 1",
  },
  {
    name: "Skill 2",
    imageSrc: "../../skills/css.png",
    alt: "Skill Icon 2",
  },
  {
    name: "Skill 3",
    imageSrc: "../../skills/js.png",
    alt: "Skill Icon 3",
  },
  {
    name: "Skill 4",
    imageSrc: "../../skills/react.png",
    alt: "Skill Icon 4",
  },
  {
    name: "Skill 5",
    imageSrc: "../../skills/node.png",
    alt: "Skill Icon 5",
  },
  {
    name: "Skill 6",
    imageSrc: "../../skills/next.png",
    alt: "Skill Icon 6",
  },
  {
    name: "Skill 7",
    imageSrc: "../../skills/tailwind.png",
    alt: "Skill Icon 7",
  },
  {
    name: "Skill 8",
    imageSrc: "../../skills/firebase.png",
    alt: "Skill Icon 8",
  },
  {
    name: "Skill 9",
    imageSrc: "../../skills/figma.png",
    alt: "Skill Icon 9",
  },
  {
    name: "Skill 10",
    imageSrc: "../../skills/git.png",
    alt: "Skill Icon 10",
  },
];

export default function Skills() {
  const [modalInfo, setModalInfo] = useState({
    show: false,
    title: "",
    description: "",
    imageSrc: "",
  });

  const handleOpenModal = (quality) => {
    setModalInfo({
      show: true,
      title: quality.name,
      description: quality.description,
      imageSrc: quality.imageSrc,
    });
  };

  const handleCloseModal = () => {
    setModalInfo({
      show: false,
      title: "",
      description: "",
      imageSrc: "",
    });
  };

  useEffect(() => {
    Modal.setAppElement("#personalities");
  }, []);

  return (
    <>
      <section id="personalities" className="mt-32">
        <AnimateOnView direction="up" delay={0.1}>
          <h2 className="mx-20 text-6xl font-semibold text-center max-md:mt-10 max-md:mx-2.5 max-md:text-4xl">
            WHY HIRE ME
          </h2>
        </AnimateOnView>
        <div className="mt-20 mx-8 max-md:mt-10 max-md:mx-2.5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {qualities.map((quality, index) => (
              <AnimateOnView
                key={index}
                direction="up"
                delay={0.2 * (index + 1)}
              >
                <div
                  className="group perspective w-[198px] h-[198px] max-md:w-[150px] max-md:h-[150px] mx-auto"
                  onClick={() => handleOpenModal(quality)}
                >
                  <div className="relative preserve-3d group-hover:rotate-y-180 w-full h-full duration-1000 cursor-pointer">
                    <div className="absolute backface-hidden w-full h-full flex flex-col justify-center items-center p-5 rounded-full border border-solid border-neutral-400 border-opacity-30 bg-violet-500 bg-opacity-10">
                      <img
                        loading="lazy"
                        src={quality.imageSrc}
                        alt={`${quality.name} Icon`}
                        className="aspect-square w-[60px] max-md:w-[50px]"
                      />
                    </div>
                    <div className="absolute rotate-y-180 backface-hidden w-full h-full flex items-center justify-center bg-violet-500 bg-opacity-90 rounded-full">
                      <div className="text-white text-xl font-semibold text-center px-2">
                        {quality.name}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="mt-32">
        <AnimateOnView direction="up" delay={0.1}>
          <h2 className="mx-20 text-6xl font-semibold text-center max-md:mt-10 max-md:mx-2.5 max-md:text-4xl">
            TOOLS AND SKILLS
          </h2>
        </AnimateOnView>
        <AnimateOnView direction="up" delay={0.1}>
          <div className="flex overflow-hidden space-x-10 mt-16 mx-6 max-md:mt-10 max-md:mx-2.5">
            <div className="flex space-x-10 animate-loop-scroll">
              {skills.map((skill, index) => (
                <img
                  key={index}
                  loading="lazy"
                  src={skill.imageSrc}
                  alt={skill.alt}
                  className="max-w-none"
                />
              ))}
            </div>

            <div className="flex space-x-10 animate-loop-scroll">
              {skills.map((skill, index) => (
                <img
                  key={index}
                  loading="lazy"
                  src={skill.imageSrc}
                  alt={skill.alt}
                  className="max-w-none"
                />
              ))}
            </div>

            <div
              className="flex space-x-10 animate-loop-scroll"
              aria-hidden="true"
            >
              {skills.map((skill, index) => (
                <img
                  key={index}
                  loading="lazy"
                  src={skill.imageSrc}
                  alt={skill.alt}
                  className="max-w-none"
                />
              ))}
            </div>
          </div>
        </AnimateOnView>
      </section>

      <CustomModal
        show={modalInfo.show}
        onClose={handleCloseModal}
        title={modalInfo.title}
        description={modalInfo.description}
        imageSrc={modalInfo.imageSrc}
      />
    </>
  );
}
