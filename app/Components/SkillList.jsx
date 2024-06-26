import React from "react";
import AnimateOnView from "./hooks/AnimateOnView";

const SkillList = ({ skills }) => (
  <AnimateOnView direction="up" delay={0.1}>
    <div className="flex overflow-hidden space-x-10 mt-16 mx-6 max-md:mt-10 max-md:mx-2.5">
      <div className="flex space-x-10 animate-loop-scroll">
        {skills.map((skill, index) => (
          <img
            key={index}
            loading="lazy"
            src={skill.imageSrc}
            alt={skill.alt}
            className="max-w-none"
          />
        ))}
      </div>

      <div className="flex space-x-10 animate-loop-scroll">
        {skills.map((skill, index) => (
          <img
            key={index}
            loading="lazy"
            src={skill.imageSrc}
            alt={skill.alt}
            className="max-w-none"
          />
        ))}
      </div>

      <div className="flex space-x-10 animate-loop-scroll" aria-hidden="true">
        {skills.map((skill, index) => (
          <img
            key={index}
            loading="lazy"
            src={skill.imageSrc}
            alt={skill.alt}
            className="max-w-none"
          />
        ))}
      </div>
    </div>
  </AnimateOnView>
);

export default SkillList;
