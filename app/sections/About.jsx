"use client";

import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import AnimateOnView from "../Components/hooks/AnimateOnView";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

import basicUiUx from "../../public/animations/responsive.json";
import frontEndDeveloper from "../../public/animations/coding.json";
import basicBackEndDeveloper from "../../public/animations/api.json";

const OfferCard = ({ animationData, title, isActive }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      playerRef.current.play();
    } else {
      playerRef.current.pause();
    }
  }, [isActive]);

  return (
    <div
      className={`flex flex-col px-6 py-5 h-[370px] w-full text-2xl font-semibold text-center text-violet-500 rounded-xl border border-violet-500 bg-violet-500 bg-opacity-10 max-md:px-3 max-md:py-3 transition-all duration-500 ${
        isActive ? "opacity-100 scale-100" : "opacity-50 scale-95 blur-sm"
      }`}
      style={{ zIndex: isActive ? 2 : 1 }}
    >
      <Player
        ref={playerRef}
        loop
        src={animationData}
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
        className="w-full aspect-square object-cover rounded-md"
        autoplay={isActive}
      />
      <div className="mt-4">{title}</div>
    </div>
  );
};

function About() {
  const offers = [
    {
      animationData: basicUiUx,
      title: "Basic UI/UX",
    },
    {
      animationData: frontEndDeveloper,
      title: "Front-End Developer",
    },
    {
      animationData: basicBackEndDeveloper,
      title: "Basic Back-End Developer",
    },
  ];

  const [currentPage, setCurrentPage] = useState(2);

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
        <AnimateOnView direction="up" delay={0.1}>
          <header className="text-xl font-semibold text-center text-neutral-500">
            What Do I Offer
          </header>
        </AnimateOnView>
        <AnimateOnView direction="up" delay={0.3}>
          <h1 className="mt-8 text-4xl font-semibold text-center text-white max-md:mt-6 max-md:text-2xl">
            Creates Professional Product That's <br /> Oriented Towards Client
            Needs
          </h1>
        </AnimateOnView>
        <section className="flex flex-col items-center self-stretch mt-16 w-full max-md:mt-8">
          <div className="mt-12 w-full max-w-4xl">
            <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {offers.map((offer, index) => (
                <AnimateOnView
                  key={index}
                  direction="up"
                  delay={0.1 * (index + 1)}
                >
                  <OfferCard
                    animationData={offer.animationData}
                    title={offer.title}
                    isActive={currentPage - 1 === index}
                  />
                </AnimateOnView>
              ))}
            </div>
            <div className="block md:hidden">
              <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                initialSlide={1}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                onSlideChange={(swiper) =>
                  setCurrentPage(swiper.activeIndex + 1)
                }
                modules={[EffectCoverflow]}
              >
                {offers.map((offer, index) => (
                  <SwiperSlide key={index} style={{ width: "80%" }}>
                    <OfferCard
                      animationData={offer.animationData}
                      title={offer.title}
                      isActive={currentPage - 1 === index}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <nav className="flex gap-4 items-center mt-16 max-md:mt-8">
            <div className="justify-center w-full md:block hidden">
              <button
                aria-label="Previous page"
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="transition-all duration-300"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a571cd7da88949485ba8a0873b13811dbf1dc28fb8a453526249f7cd69f6ac1?apiKey=8f8528e23e2f43b68a1c2de0d919d80c&"
                  alt=""
                  className="w-12"
                />
              </button>
            </div>
            <div className="flex gap-4">
              {Array.from({ length: totalPages }, (_, i) => (
                <div
                  key={i}
                  className={`h-2.5 rounded-full w-16 transition-all duration-500 ${
                    i + 1 === currentPage
                      ? "bg-violet-500 scale-110"
                      : "bg-neutral-400 scale-100"
                  }`}
                ></div>
              ))}
            </div>
            <div className="justify-center w-full md:block hidden">
              <button
                aria-label="Next page"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="transition-all duration-300"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/42f13b50172df69cc0c1fe39cc74a7447208e082dae217ac75b5dff80db1a9e8?apiKey=8f8528e23e2f43b68a1c2de0d919d80c&"
                  alt=""
                  className="w-12"
                />
              </button>
            </div>
          </nav>
        </section>
      </main>
    </div>
  );
}

export default About;
