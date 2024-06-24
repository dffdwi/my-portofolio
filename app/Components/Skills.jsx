"use client"

import React, { useState, useEffect } from "react";
import CustomModal from "./CustomModal";
import Modal from "react-modal";

const qualities = [
  {
    name: "Workaholic",
    imageSrc: "../../workaholic.svg",
    description: "Deskripsi untuk Workaholic."
  },
  {
    name: "Communicative",
    imageSrc: "../../communication.svg",
    description: "Deskripsi untuk Communicative."
  },
  {
    name: "Cooperative",
    imageSrc: "../../cooperative.svg",
    description: "Deskripsi untuk Cooperative."
  },
  {
    name: "Perfectionist",
    imageSrc: "../../perfectionist.svg",
    description: "Deskripsi untuk Perfectionist."
  },
];

const skills = [
  {
    name: "Skill 1",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4af549e4018b58610984f7d3e13f571689bf065fb9c62ed6a737c808830226b7?apiKey=8f8528e23e2f43b68a1c2de0d919d80c&",
    alt: "Skill Icon 1"
  },
  {
    name: "Skill 2",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/bce1c659bc970faebc8b78b8f7c9a5824228654c8de93e1ea9eae2ed029452a6?apiKey=8f8528e23e2f43b68a1c2de0d919d80c&",
    alt: "Skill Icon 2"
  },
  {
    name: "Skill 3",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3e701b73f276f6ab21d05f5dc1cbc0525d7697caf1344c4d0848292ea3cee783?apiKey=8f8528e23e2f43b68a1c2de0d919d80c&",
    alt: "Skill Icon 3"
  },
  {
    name: "Skill 4",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/97407cec00a32b59484e1bad2763eea4edaeaf0134ff08f00c3caa712bdb0233?apiKey=8f8528e23e2f43b68a1c2de0d919d80c&",
    alt: "Skill Icon 4"
  },
  {
    name: "Skill 5",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f2accf2b2eb76140e40695f82c0f904415e07444e24dcbd42b3049ed562c4e0b?apiKey=8f8528e23e2f43b68a1c2de0d919d80c&",
    alt: "Skill Icon 5"
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
    Modal.setAppElement("#skills");
  }, []);

  return (
    <>
      <section className="mt-32">
        <h2 className="mx-20 text-6xl font-semibold text-center max-md:mt-10 max-md:mx-2.5 max-md:text-4xl">
          WHY HIRE ME
        </h2>
        <div className="mt-20 mx-8 max-md:mt-10 max-md:mx-2.5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {qualities.map((quality, index) => (
              <div key={index} className="flex flex-col items-center" onClick={() => handleOpenModal(quality)}>
                <div className="flex flex-col justify-center p-5 rounded-full border border-solid border-neutral-400 border-opacity-30 max-md:mt-10 cursor-pointer">
                  <div className="flex justify-center items-center p-10 rounded-full border border-violet-500 border-solid bg-violet-500 bg-opacity-10 h-[198px] w-[198px] max-md:w-[150px] max-md:h-[150px]">
                    <img
                      loading="lazy"
                      src={quality.imageSrc}
                      alt={`${quality.name} Icon`}
                      className="aspect-square w-[60px] max-md:w-[50px]"
                    />
                  </div>
                </div>
                <h3 className="mt-4 text-2xl font-medium text-center text-white">
                  {quality.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="mt-32">
        <h2 className="mx-20 text-6xl font-semibold text-center max-md:mt-10 max-md:mx-2.5 max-md:text-4xl">
          TOOLS AND SKILLS
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-16 mx-6 max-md:mt-10 max-md:mx-2.5">
          {skills.map((skill, index) => (
            <div key={index} className="flex justify-center items-center p-5 border-4 border-solid bg-zinc-800 border-neutral-600 border-opacity-10 h-[182px] rounded-[30px] w-[182px] max-md:w-[150px] max-md:h-[150px]">
              <img
                loading="lazy"
                src={skill.imageSrc}
                alt={skill.alt}
                className="aspect-square w-[143px] max-md:w-[120px]"
              />
            </div>
          ))}
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
