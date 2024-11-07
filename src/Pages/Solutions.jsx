import React from "react";
import TrueBlue from "../assets/TrueBlue.png";
import APD from "../assets/apd.png";
import Gluta from "../assets/Gluta.png";
import Baggit from "../assets/baggit.png";

const imageData = [
  { src: TrueBlue, title: "Just fillin the gaps with some words coz the copy is not ready yet", description: "Learn more about TrueBlue" },
  { src: APD, title: "Just fillin the gaps with some words coz the copy is not ready yet", description: "Learn more about APD" },
  { src: Gluta, title: "Just fillin the gaps with some words coz the copy is not ready yet", description: "Learn more about Gluta" },
  { src: Baggit, title: "Just fillin the gaps with some words coz the copy is not ready yet", description: "Learn more about Baggit" },
];

export const Solutions = () => {
  return (
    <div className="bg-white w-full py-14 sm:py-20">
      <h1 className="uppercase bold text-2xl sm:text-5xl lg:text-6xl font-bold text-[#3D155D] text-center">
        Solution Over Scope
      </h1>
      <p className="text-base reg text-[#3D155D] w-10/12 sm:w-8/12 lg:w-5/12 text-center mx-auto mt-6">
        Impressions & engagement are means to an end. A digital vanity metric we
        know how to achieve, but more importantly, turn into paying customers.
      </p>
      <button className="border-2 reg font-light text-[#3D155D] mt-6 px-7 py-4 mx-auto flex rounded-tl-xl rounded-br-xl border-[#3D155D]">
        View Work
      </button>
      <div className="flex gap-x-8 justify-center mt-10 sm:mt-16 overflow-x-hidden">
        {imageData.map((image, index) => (
          <div key={index} className="relative group">
            <img src={image.src} alt={image.title} className="w-full h-full object-cover rounded-lg" />
            <div className="absolute inset-0 bg-[#010315] bg-opacity-75 flex flex-col justify-end items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl p-6">
              <p className="text-white text-sm mb-4 reg w-9/12">{image.title}</p>
              <button className="text-white light mb-4 text-xs">
                View Case Study
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
