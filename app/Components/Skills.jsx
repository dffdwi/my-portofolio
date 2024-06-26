"use client";

import React, { useState, useEffect } from "react";
import CustomModal from "./CustomModal";
import Modal from "react-modal";
import AnimateOnView from "./AnimateOnView"; // Sesuaikan path impor ini sesuai dengan lokasi file AnimateOnView

const qualities = [
  {
    name: "Workaholic",
    imageSrc: "../../workaholic.svg",
    description:
      "I'm a kind of person who can't just stand around and doing nothing. I have a tendency to do something productive.",
  },
  {
    name: "Communicative",
    imageSrc: "../../communication.svg",
    description:
      "I have a broad understanding of verbal vocabulary. Therefore, I can convey a message well to the receiver.",
  },
  {
    name: "Cooperative",
    imageSrc: "../../cooperative.svg",
    description:
      "Behind the successful project, there's a great team. I can build a good cooperation and remain consistent with the goal.",
  },
  {
    name: "Perfectionist",
    imageSrc: "../../perfectionist.svg",
    description:
      "I have a strong intuition. I have remained consistent with high quality standards to present a most worthy result.",
  },
];

const skills = [
  {
    name: "Skill 1",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4af549e4018b58610984f7d3e13f571689bf065fb9c62ed6a737c808830226b7?apiKey=8f8528e23e2f43b68a1c2de0d919d80c&",
    alt: "Skill Icon 1",
  },
  {
    name: "Skill 2",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/bce1c659bc970faebc8b78b8f7c9a5824228654c8de93e1ea9eae2ed029452a6?apiKey=8f8528e23e2f43b68a1c2de0d919d80c&",
    alt: "Skill Icon 2",
  },
  {
    name: "Skill 3",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3e701b73f276f6ab21d05f5dc1cbc0525d7697caf1344c4d0848292ea3cee783?apiKey=8f8528e23e2f43b68a1c2de0d919d80c&",
    alt: "Skill Icon 3",
  },
  {
    name: "Skill 4",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/97407cec00a32b59484e1bad2763eea4edaeaf0134ff08f00c3caa712bdb0233?apiKey=8f8528e23e2f43b68a1c2de0d919d80c&",
    alt: "Skill Icon 4",
  },
  {
    name: "Skill 5",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f2accf2b2eb76140e40695f82c0f904415e07444e24dcbd42b3049ed562c4e0b?apiKey=8f8528e23e2f43b68a1c2de0d919d80c&",
    alt: "Skill Icon 5",
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
        <AnimateOnView direction="up" delay={0.2}>
          <h2 className="mx-20 text-6xl font-semibold text-center max-md:mt-10 max-md:mx-2.5 max-md:text-4xl">
            WHY HIRE ME
          </h2>
        </AnimateOnView>
        <div className="mt-20 mx-8 max-md:mt-10 max-md:mx-2.5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {qualities.map((quality, index) => (
              <AnimateOnView key={index} direction="up" delay={0.2 * (index + 1)}>
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
        <AnimateOnView direction="up" delay={0.2}>
          <h2 className="mx-20 text-6xl font-semibold text-center max-md:mt-10 max-md:mx-2.5 max-md:text-4xl">
            TOOLS AND SKILLS
          </h2>
        </AnimateOnView>
        <div className="flex overflow-hidden space-x-16 mt-16 mx-6 max-md:mt-10 max-md:mx-2.5">
          <AnimateOnView direction="left" delay={0.4}>
            <div className="flex space-x-16 animate-loop-scroll">
              {skills.map((skill, index) => (
                <img
                  key={index}
                  loading="lazy"
                  src={skill.imageSrc}
                  alt={skill.alt}
                  className="max-w-none w-[182px] max-md:w-[150px] h-[182px] max-md:h-[150px] object-cover"
                />
              ))}
            </div>
          </AnimateOnView>
          <AnimateOnView direction="left" delay={0.6}>
            <div className="flex space-x-16 animate-loop-scroll">
              {skills.map((skill, index) => (
                <img
                  key={index}
                  loading="lazy"
                  src={skill.imageSrc}
                  alt={skill.alt}
                  className="max-w-none w-[182px] max-md:w-[150px] h-[182px] max-md:h-[150px] object-cover"
                />
              ))}
            </div>
          </AnimateOnView>
          <AnimateOnView direction="left" delay={0.8}>
            <div
              className="flex space-x-16 animate-loop-scroll"
              aria-hidden="true"
            >
              {skills.map((skill, index) => (
                <img
                  key={index}
                  loading="lazy"
                  src={skill.imageSrc}
                  alt={skill.alt}
                  className="max-w-none w-[182px] max-md:w-[150px] h-[182px] max-md:h-[150px] object-cover"
                />
              ))}
            </div>
          </AnimateOnView>
        </div>
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
