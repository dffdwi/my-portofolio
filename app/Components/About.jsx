"use client";

import * as React from "react";
import { useState } from "react";

const OfferCard = ({ imageSrc, title, isBlurred }) => (
  <div
    className={`flex flex-col px-6 py-5 w-full text-2xl font-semibold text-center text-violet-500 rounded-xl border border-violet-500 bg-violet-500 bg-opacity-10 max-md:px-3 max-md:py-3 ${
      isBlurred ? "blur-sm" : ""
    }`}
    style={{ zIndex: isBlurred ? 1 : 2 }}
  >
    <img
      loading="lazy"
      src={imageSrc}
      alt={title}
      className="w-full aspect-square object-cover rounded-md"
    />
    <div className="mt-4">{title}</div>
  </div>
);

function About() {
  const offers = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ca638082a2a02646c53cfbb121c65857125d53afd32def1f1eccc4149bcf7ce6?apiKey=8f8528e23e2f43b68a1c2de0d919d80c&",
      title: "Basic UI/UX",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/fd354656d3dc31c1f330471f3e33cc1a1dc869d0d00cb10239cbbc59f3ddbe8b?apiKey=8f8528e23e2f43b68a1c2de0d919d80c&",
      title: "Front-End Developer",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/47f504c97da4755517b02cf657d40ab62f09d223a80cb7b2d1ad0b329fa6cc9f?apiKey=8f8528e23e2f43b68a1c2de0d919d80c&",
      title: "Basic Back-End Developer",
    },
  ];

  const [currentPage, setCurrentPage] = useState(2); // Set the active page to Front-End Developer

  const totalPages = offers.length;

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="mt-20">
      <main className="flex flex-col items-center px-5">
        <header className="text-xl font-semibold text-center text-neutral-500">
          What Do I Offer
        </header>
        <h1 className="mt-8 text-4xl font-semibold text-center text-white max-md:mt-6 max-md:text-2xl">
          Creates Professional Product That's <br /> Oriented Towards Client
          Needs
        </h1>
        <section className="flex flex-col items-center self-stretch mt-16 w-full max-md:mt-8">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2afee437a7d53b125fa78a05f1d3a889ed4e152d6fde7eaee833fc54916e57a1?apiKey=8f8528e23e2f43b68a1c2de0d919d80c&"
            alt="Professional product illustration"
            className="w-full max-w-md border-violet-500 border-10 rounded-md"
          />
          <div className="mt-12 w-full max-w-4xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {offers.map((offer, index) => (
                <OfferCard
                  key={index}
                  imageSrc={offer.imageSrc}
                  title={offer.title}
                  isBlurred={currentPage - 1 !== index}
                />
              ))}
            </div>
          </div>
          <nav
            className="flex gap-4 items-center mt-16 max-md:mt-8"
            aria-label="Pagination"
          >
            <button
              aria-label="Previous page"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a571cd7da88949485ba8a0873b13811dbf1dc28fb8a453526249f7cd69f6ac1?apiKey=8f8528e23e2f43b68a1c2de0d919d80c&"
                alt=""
                className="w-12"
              />
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <div
                key={i}
                className={`h-2.5 rounded-full w-16 ${
                  i + 1 === currentPage ? "bg-violet-500" : "bg-neutral-400"
                }`}
              ></div>
            ))}
            <button
              aria-label="Next page"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/42f13b50172df69cc0c1fe39cc74a7447208e082dae217ac75b5dff80db1a9e8?apiKey=8f8528e23e2f43b68a1c2de0d919d80c&"
                alt=""
                className="w-12"
              />
            </button>
          </nav>
        </section>
      </main>
    </div>
  );
}

export default About;
