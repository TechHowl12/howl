import React, { useState } from "react";
import placeHolder from "../assets/placeHolder.png";

export const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    "Howl's strategies solidified Niyo's position online. Work with them because it’s worth it. It’s important to trust the marketing team that you’re working with. They’re trustworthy, can provide advice, and deliver results; they’re absolutely worth it",
    "Great quality and service. Highly recommended!",
    "Exceeded my expectations. Worth every penny!",
    "Fantastic product. I'll definitely purchase again.",
    "Quick delivery and excellent customer support!",
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full py-20">
        <div className="text-white w-10/12 lg:w-1/2 mx-auto">
        {/* <button
            onClick={handlePrevious}
            className="text-5xl"
          >
            {"<"}
          </button> */}
        <p className="text-white text-center reg italic text-lg sm:text-2xl mb-6">{reviews[currentIndex]}</p>
        <p className="text-center reg text-white mt-14">Apurva Harwani</p>
        <p className="light uppercase text-center text-xs mt-2">senior marketing manager | niyo solutions</p>
        {/* <button
            onClick={handleNext}
            className="text-5xl"
          >
            {">"}
          </button> */}
        </div>
        <div className="flex justify-center space-x-2 mt-4">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 mt-6 border border-[#3D155D] rounded-full ${
                index === currentIndex ? "bg-[#3D155D]" : "bg-transparent"
              }`}
            />
          ))}
        </div>
        <img className="mx-auto px-8 xl:px-0 mt-10" src={placeHolder}/>
      </div>
  );
};
