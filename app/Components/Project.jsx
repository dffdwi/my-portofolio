"use client";

import React, { useEffect, useState } from "react";
import CustomModal from "./CustomModal";
import Modal from "react-modal";

export default function Project() {
  const [modalInfo, setModalInfo] = useState({
    show: false,
    title: "",
    description: "",
    webLink: "",
    githubLink: "",
    imageSrc: "",
  });

  const handleViewDetails = (
    title,
    description,
    webLink,
    githubLink,
    imageSrc
  ) => {
    setModalInfo({
      show: true,
      title,
      description,
      webLink,
      githubLink,
      imageSrc,
    });
  };

  const handleCloseModal = () => {
    setModalInfo({ ...modalInfo, show: false });
  };

  const ProjectCard = ({
    imageSrc,
    title,
    description,
    webLink,
    githubLink,
  }) => (
    <div className="flex flex-col lg:flex-row gap-4 p-6 mt-8 mx-4 rounded-2xl border border-solid bg-neutral-900 border-white border-opacity-10 shadow-lg hover:shadow-xl transition-shadow duration-300 max-md:flex-wrap max-md:px-3 max-md:mt-6 max-md:mx-2 max-md:max-w-full">
      <div className="lg:w-1/3 flex justify-center items-center max-md:w-full">
        <img
          loading="lazy"
          src={imageSrc}
          alt={title}
          className="w-[200px] h-auto rounded-lg max-md:mt-3"
        />
      </div>
      <div className="lg:w-2/3 flex flex-col justify-center items-start px-4 max-md:w-full max-md:mt-3">
        <h3 className="text-2xl font-semibold text-white mb-3 max-md:text-center">
          {title}
        </h3>
        <button
          onClick={() =>
            handleViewDetails(title, description, webLink, githubLink, imageSrc)
          }
          className="px-4 py-2 text-lg font-semibold text-white bg-violet-500 rounded-md hover:bg-violet-600 transition-colors duration-300"
        >
          View Details
        </button>
      </div>
    </div>
  );

  useEffect(() => {
    Modal.setAppElement("#project");
  }, []);

  return (
    <section id="project" className="mt-16 mx-4">
      <h2 className="mx-20 mt-32 mb-20 text-6xl font-semibold text-center max-md:mt-10 max-md:mx-2.5 max-md:text-4xl">
        MY PROJECT
      </h2>
      <div className="space-y-8">
        <ProjectCard
          imageSrc="../../add-image.svg"
          title="Forum Thread Apps"
          description="A platform for discussing various topics."
          webLink="https://example.com/forum-thread-apps"
          githubLink="https://github.com/example/forum-thread-apps"
        />
        <ProjectCard
          imageSrc="../../add-image.svg"
          title="Simple Notes Apps"
          description="An app for taking simple and quick notes."
          webLink="https://example.com/simple-notes-apps"
          githubLink="https://github.com/example/simple-notes-apps"
        />
        <ProjectCard
          imageSrc="../../add-image.svg"
          title="Voice Of Courage (On Development)"
          description="An app to share and listen to motivational stories."
          webLink="https://example.com/voice-of-courage"
          githubLink="https://github.com/example/voice-of-courage"
        />
      </div>
      <CustomModal
        show={modalInfo.show}
        onClose={handleCloseModal}
        title={modalInfo.title}
        description={modalInfo.description}
        webLink={modalInfo.webLink}
        githubLink={modalInfo.githubLink}
        imageSrc={modalInfo.imageSrc}
      />
    </section>
  );
}
