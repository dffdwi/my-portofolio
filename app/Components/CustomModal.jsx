import React from "react";
import Modal from "react-modal";
import { motion, AnimatePresence } from "framer-motion";

const CustomModal = ({
  show,
  onClose,
  title,
  description,
  webLink,
  githubLink,
  imageSrc,
  additionalLinks,
}) => {
  return (
    <AnimatePresence>
      {show && (
        <Modal
          isOpen={show}
          onRequestClose={onClose}
          contentLabel="Details"
          className="modal-container"
          overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="modal-content bg-neutral-900 rounded-lg p-8 mx-5 text-white"
          >
            <div className="flex flex-col items-center">
              <div className="flex justify-center mb-4">
                <img
                  loading="lazy"
                  src={imageSrc}
                  alt={title}
                  className="w-24 h-24"
                />
              </div>
              <h2 className="text-2xl font-semibold mb-4">{title}</h2>
              <p className="mb-4">{description}</p>
              <div className="flex flex-col gap-2">
                {webLink && (
                  <a
                    href={webLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Visit Website
                  </a>
                )}
                {githubLink && (
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    View on GitHub
                  </a>
                )}
                {additionalLinks &&
                  additionalLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {link.label}
                    </a>
                  ))}
              </div>
              <button
                onClick={onClose}
                className="mt-6 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  );
};

export default CustomModal;
