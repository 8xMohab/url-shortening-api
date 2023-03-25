import React from "react";

function Statistic({ header, paragraph, icon }) {
  return (
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left bg-white p-6 xl:pb-12 pt-0 m-4 rounded-lg relative z-10 lg:mx-3 lg:last:mt-24 max-h-min flex-1 mt-24 lg:mt-0 lg:hehe h-min">
      <div className="flex items-center justify-center -translate-y-1/2 bg-dark-violet w-fit p-4 rounded-full">
        <img src={`./icon-${icon}.svg`} alt={`${icon}`} />
      </div>
      <h1 className="text-very-dark-violet text-2xl md:text-xl font-bold w-full mb-4">{header}</h1>
      <p className="text-grayish-violet">{paragraph}</p>
    </div>
  );
}

export default Statistic;
