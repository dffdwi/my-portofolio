"use client";

import React, { useEffect, useState } from "react";
import CustomModal from "../Components/CustomModal";
import Modal from "react-modal";
import ProjectList from "../Components/ProjectList";
import AnimateOnView from "../Components/hooks/AnimateOnView";

export default function Project() {
  const [modalInfo, setModalInfo] = useState({
    show: false,
    title: "",
    description: "",
    webLink: "",
    githubLink: "",
    imageSrc: "",
  });

  const handleViewDetails = (title, description, webLink, githubLink, imageSrc) => {
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

  const projects = [
    {
      imageSrc: "../../chat.svg",
      title: "Forum Thread Apps",
      description: "A platform for discussing various topics.",
      webLink: "https://forum-thread-apps.vercel.app",
      githubLink: "https://github.com/dffdwi/forum-thread-apps",
    },
    {
      imageSrc: "../../wirte.svg",
      title: "Simple Notes Apps",
      description: "An app for taking simple and quick notes.",
      webLink: "https://simple-notes-blush.vercel.app/",
      githubLink: "https://github.com/dffdwi/note-list",
    },
    {
      imageSrc: "../../Logo-VOC.png",
      title: "Voice Of Courage (On Development)",
      description: "An app to share your bad experiences to the experts.",
      webLink: "https://voc-two.vercel.app",
      githubLink: "https://github.com/Adittyapn/voc",
    },
  ];

  useEffect(() => {
    Modal.setAppElement("#project");
  }, []);

  return (
    <section id="project" className="mt-16 mx-4">
      <AnimateOnView direction="up" delay={0.2}>
        <h2 className="mx-20 mt-32 mb-20 text-6xl font-semibold text-center max-md:mt-10 max-md:mx-2.5 max-md:text-4xl">
          MY PROJECT
        </h2>
      </AnimateOnView>
      <ProjectList projects={projects} onViewDetails={handleViewDetails} />
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
