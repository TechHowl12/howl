import React from "react";
import TrueBlue from "../assets/TrueBlue.png";
// import APD from "../assets/APD.png";
import Gluta from "../assets/Gluta.png";
import Baggit from "../assets/Baggit.png";
import DBS from "../assets/DBS.png";
import Purple from "../assets/Purple.png";
import NYC from "../assets/NYC.png";
import Sachin from "../assets/Sachin.png";
import Amazon from "../assets/Amazon.png";
import Schindler from "../assets/Schindler.png";
import HRX from "../assets/HRX.png";
import Amex from "../assets/Amex.png";

const imageData = [
  { src: Sachin, title: "38% Uptick in Positive Brand Sentiment"},
  { src: HRX, title: "HRX", },
  { src: Amazon, title: "Amazon"},
  { src: Baggit, title: "Baggit"},
  { src: Gluta, title: "Gluta"},
  { src: Schindler, title: "Schindler"},
  { src: Purple, title: "Purple"},
  { src: NYC, title: "NYC" },
  { src: Amex, title: "Amex"},
  { src: DBS, title: "DBS"},
  { src: TrueBlue, title: "TrueBlue" },
  { src: Amazon, title: "Amazon"},
];

export const Solutions = () => {
  return (
    <div className="bg-white w-full py-14 sm:py-0 sm:pt-20">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center w-10/12 mx-auto gap-y-8 gap-x-8">
        <h1 className="uppercase bold text-2xl sm:text-5xl lg:text-8xl font-bold text-[#3D155D] overflow-hidden">
          SOLUTION
        </h1>
        <p className="text-base reg text-[#00031A] w-10/12 sm:w-8/12 lg:w-5/12">
          From young entrepreneurs to multinational business units, HOWL is
          designed to create business impact. Consistently achieved by a system
          with a clear priority.
        </p>
      </div>

      {/* Subheader and Button Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center w-10/12 mx-auto gap-y-8 gap-x-8">
        <h1 className="uppercase bold text-2xl sm:text-5xl lg:text-8xl font-bold text-[#3D155D] text-center overflow-hidden">
          OVER SCOPE
        </h1>
        <button className="border-2 light w-1/3 text-[#3D155D] py-4 rounded-tl-xl rounded-br-xl border-[#3D155D] hover:bg-[#3D155D] hover:text-white transition-colors">
          View Our Portfolio
        </button>
      </div>

      {/* Image Grid */}
      <div className="grid sm:grid-cols-2 mt-10 sm:mt-16 bg-black">
        {imageData.map((image, index) => (
          <div key={index} className="relative group overflow-hidden">
            {/* Image */}
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover m-0 p-0 transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#00031A] bg-opacity-0 group-hover:bg-opacity-80 transition-opacity duration-300 ease-in-out"></div>

            {/* Text and Button Container */}
            <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <div className="text-white text-left min-[1025px]:mb-10 min-[1025px]:ml-10">
                <h2 className="text-sm sm:text-sm min-[1025px]:text-2xl reg uppercase">{image.title}</h2>
                <button className="light mt-2 min-[1025px]:mt-4 text-xs min-[1025px]:text-sm">
                  View Case Study
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
