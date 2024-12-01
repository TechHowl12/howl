import React, { useState, useEffect } from "react";


import Schindlerpurewhitelogosvg from "../assets/Schindlerpurewhitelogo.svg";
import Mahindrapurewhitelogosvg from "../assets/mahindrabluesurewhitelogo.svg";
import Niyopurewhitelogosvg from "../assets/niyoglobalpurewhitelogo.svg";
import Hrxpurewhitelogosvg from "../assets/hrxpurewhitelogo.svg";

export const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      text: "HOWL focuses on problem-solving from a business driven lens which makes them a reliable growth partner. This level of engagement and understanding has truly set them apart in our journey together.”",
      author: "Hiral Soni",
      designation: "Marketing Manager | Schindler",
      logo: Schindlerpurewhitelogosvg,
    },
    {
      text: "It's always good to work with a team that seamlessly becomes an extension to your own, and HOWL was exactly that for us.”",
      author: "Meghana Bhogle",
      designation: "Brand Solutions | OranJuice Entertainment",
      logo: Mahindrapurewhitelogosvg,
    },
    {
      text: "HOWL has been pivotal in helping us solidify Niyo Global’s position as a leading financial product for travellers. It’s incredibly exciting to work with a partner that’s dependable and equally enthusiastic about the product as the brand.”",
      author: "Apurva Harwani",
      designation: "Sr. Marketing Manager | Niyo Solutions Inc.",
      logo: Niyopurewhitelogosvg,
    },
    {
      text: "“HOWL has collectively shaped my brand and paved the way for setting the brand tone, activating the community while high engagement and reach driven ideas were an effortless by-product.”",
      author: "Pallavi Barman",
      designation: "Chief Strategic Advisor | HRX",
      logo: Hrxpurewhitelogosvg,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // Auto-scroll every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full py-20">
      <div className="h-86 flex justify-center items-center flex-col">
        <div className="text-white w-10/12 lg:w-1/2 mx-auto">
          <p className="text-white text-center reg italic text-lg sm:text-2xl mb-6">
            {reviews[currentIndex].text}
          </p>
          <p className="text-center reg text-white mt-14">
            {reviews[currentIndex].author}
          </p>
          <p className="light uppercase text-center text-xs mt-2">
            {reviews[currentIndex].designation}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-10 mt-10 space-x-4">
        {reviews.map((review, index) => (
          <img
            key={index}
            src={review.logo}
            className={`transition-all cursor-pointer w-10 h-10 sm:w-auto sm:h-auto duration-300 ${
              index === currentIndex ? "brightness-300" : "brightness-50" 
              
            }`}
            style={{
              // height: index === currentIndex ? "60px" : "50px", // Adjust height dynamically
              // width: index === currentIndex ? "auto" : "auto", // Maintain aspect ratio
              filter: index === currentIndex ? "brightness(200%)" : "brightness(50%)",

            }}
          />
        ))}
      </div>
    </div>
  );
};