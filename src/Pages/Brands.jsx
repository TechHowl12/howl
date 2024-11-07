import React from 'react';
import HRX from "../assets/HRX.png";
import Amex from "../assets/AMEX.png";
import Schindler from "../assets/SCHINDLU.png";
import HRXMobile from "../assets/HRX-Mobile.png";
import AmexMobile from "../assets/Amex-Mobile.png";
import SchindluMobile from "../assets/Schindlu-Mobile.png";

export const Brands = () => {
  return (
    <>
    <div className='grid-cols-1 gap-y-10 gap-x-8 py-16 sm:py-20 w-10/12 mx-auto hidden sm:grid'>
      {[
        { src: Amex, label: "Retaining the entire Indian market with an emailer strategy" },
        { src: HRX, label: "Building a ₹1,000 Crore brand with Instagram DMs" },
        { src: Schindler, label: "Creating a global benchmark by selling elevators online" }
      ].map((brand, index) => (
        <div key={index} className='relative group'>
          <img src={brand.src} alt={brand.label} className='w-full object-cover'/>
          <div className='absolute bottom-0 w-full h-full text-white'>
            <div className='flex flex-col justify-end h-full py-2'>
              <p className='reg uppercase mx-auto text-center sm:text-xl xl:text-3xl sm:w-7/12 xl:w-1/2'>{brand.label}</p>
              <button className='backdrop-blur-sm backdrop-filter bg-white bg-opacity-20 flex mx-auto px-7 py-3 light rounded-tl-lg rounded-br-lg mb-6 xl:mb-14 mt-7 text-sm'>
                View Case Study
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className='sm:hidden grid grid-cols-1 w-full mx-auto'>
      {[
        { src: AmexMobile, label: "Retaining the entire Indian market with an emailer strategy" },
        { src: HRXMobile, label: "Building a ₹1,000 Crore brand with Instagram DMs" },
        { src: SchindluMobile, label: "Creating a global benchmark by selling elevators online" }
      ].map((brand, index) => (
        <div key={index} className='relative group'>
          <img src={brand.src} alt={brand.label} className='w-full object-cover'/>
          <div className='absolute bottom-0 w-full h-full text-white'>
            <div className='flex flex-col justify-end h-full py-2'>
              <p className='reg uppercase mx-auto text-center text-xl w-10/12'>{brand.label}</p>
              <button className='backdrop-blur-sm backdrop-filter bg-white bg-opacity-20 flex mx-auto px-7 py-3 light rounded-tl-lg rounded-br-lg mb-10 mt-7 text-sm'>
                View Case Study
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}
