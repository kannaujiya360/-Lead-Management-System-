import React from "react";

const LeadCard = ({ title, count, color }) => {
  return (
    <div
      className={`
        shadow-lg rounded-xl 
        p-4 sm:p-5 md:p-6 
        flex flex-col items-center justify-center 
        ${color}
      `}
    >
      <h2
        className="
          text-base sm:text-lg md:text-xl 
          font-semibold 
          mb-1 sm:mb-2
          text-center
        "
      >
        {title}
      </h2>

      <p
        className="
          text-2xl sm:text-3xl md:text-4xl 
          font-bold
        "
      >
        {count}
      </p>
    </div>
  );
};

export default LeadCard;
