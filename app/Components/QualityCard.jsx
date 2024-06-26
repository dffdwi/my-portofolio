import React from 'react';
import AnimateOnView from './hooks/AnimateOnView';

const QualityCard = ({ quality, index, onClick }) => (
  <AnimateOnView direction="up" delay={0.2 * (index + 1)}>
    <div
      className="group perspective w-[198px] h-[198px] max-md:w-[150px] max-md:h-[150px] mx-auto"
      onClick={onClick}
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
);

export default QualityCard;
