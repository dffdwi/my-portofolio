import React from "react";
import QualityCard from "./QualityCard";

const QualityList = ({ qualities, onViewDetails }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
    {qualities.map((quality, index) => (
      <QualityCard
        key={index}
        quality={quality}
        index={index}
        onClick={() => onViewDetails(quality)}
      />
    ))}
  </div>
);

export default QualityList;
