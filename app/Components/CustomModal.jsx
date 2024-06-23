// CustomModal.jsx

import React from "react";
import Modal from "react-modal";

const CustomModal = ({
  show,
  onClose,
  title,
  description,
  webLink,
  githubLink,
  imageSrc,
}) => {
  return (
    <Modal
      isOpen={show}
      onRequestClose={onClose}
      contentLabel="Project Details"
      className="bg-neutral-900 rounded-lg w-11/12 md:w-2/3 lg:w-1/2 p-8 mx-auto mt-10 text-white"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <div className="flex justify-center mb-4">
        <img
          loading="lazy"
          src={imageSrc}
          alt={title}
          className="w-24 h-24 rounded-full"
        />
      </div>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="mb-4">{description}</p>
      <div className="flex flex-col gap-2">
        <a
          href={webLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Visit Website
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View on GitHub
        </a>
      </div>
      <button
        onClick={onClose}
        className="mt-6 px-4 py-2 bg-red-500 text-white rounded-md"
      >
        Close
      </button>
    </Modal>
  );
};

export default CustomModal;
