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
    <div
      onClick={() =>
        handleViewDetails(title, description, webLink, githubLink, imageSrc)
      }
      className="relative flex flex-col justify-center items-center w-72 h-80 p-4 m-4 rounded-2xl border border-solid bg-gradient-to-r from-gray-800 to-gray-900 border-white border-opacity-10 shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1 hover:scale-105 transition-transform"
    >
      <img
        loading="lazy"
        src={imageSrc}
        alt={title}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h3 className="text-xl font-semibold text-white mt-4 text-center">
        {title}
      </h3>
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center text-white text-lg font-semibold rounded-2xl">
        View Details
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
      <div className="flex flex-wrap justify-center gap-2">
        <ProjectCard
          imageSrc="../../chat.svg"
          title="Forum Thread Apps"
          description="A platform for discussing various topics."
          webLink="https://forum-thread-apps.vercel.app"
          githubLink="https://github.com/dffdwi/forum-thread-apps"
        />
        <ProjectCard
          imageSrc="../../wirte.svg"
          title="Simple Notes Apps"
          description="An app for taking simple and quick notes."
          webLink="https://example.com/simple-notes-apps"
          githubLink="https://github.com/dffdwi/note-list"
        />
        <ProjectCard
          imageSrc="../../Logo-VOC.png"
          title="Voice Of Courage (On Development)"
          description="An app to share your bad experiences to the experts."
          webLink="https://voc-two.vercel.app"
          githubLink="https://github.com/Adittyapn/voc"
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
