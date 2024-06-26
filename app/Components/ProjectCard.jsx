import React from 'react';

const ProjectCard = ({ imageSrc, title, description, webLink, githubLink, onClick }) => (
  <div
    onClick={onClick}
    className="relative flex flex-col justify-center items-center w-72 h-80 p-10 my-4 rounded-2xl border border-solid bg-gradient-to-r from-gray-800 to-gray-900 border-white border-opacity-10 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:scale-105"
  >
    <img
      loading="lazy"
      src={imageSrc}
      alt={title}
      className="w-45 h-auto object-cover rounded-lg mt-5"
    />
    <h3 className="text-xl font-semibold text-white my-5 text-center">
      {title}
    </h3>
    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center text-white text-lg font-semibold rounded-2xl">
      View Details
    </div>
  </div>
);

export default ProjectCard;
