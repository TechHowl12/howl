import React from "react";
import Twinss from "../assets/Twins.png";

export const Twins = () => {
  return (
    <div className="bg-[#FCF5FF]">
      <div className="bg-[#FCF5FF] w-10/12 mx-auto pt-[2%] pb-12 relative">
        <div className="flex flex-col sm:flex-row justify-between mt-10">
          <div className="w-full sm:w-6/12">
            <h1 className="xl:text-2xl sm:text-lg uppercase text-[#3D155D] reg">
              We closed our first retainer
            </h1>
            <h1 className="text-3xl sm:text-3xl xl:text-6xl uppercase text-[#3D155D] bold">
              without a logo
            </h1>
            <p className="text-sm lg:text-lg text-[#3D155D] reg mt-4 sm:mt-7">
              Still without a logo, our twin co-founders walked into the office
              of one of India's biggest dry fruit manufacturers with a clear
              approach. No social media jargon, just pure focus on what is
              required to grow the businesses effectively.
            </p>
            <p className="text-sm lg:text-lg text-[#3D155D] reg mt-4 sm:mt-7">
              That’s the simple version of how we closed our first brand. From a
              pair of twins into a wolfpack of 100, we scaled this approach to
              all the work we’ve taken responsibility for ever since. We even
              have a logo now.
            </p>
            <button className="border-2 light text-[#3D155D] mt-4 sm:mt-7 px-10 py-4 rounded-tl-xl rounded-br-xl border-[#3D155D]">
              About HOWL
            </button>

            {/* Div with statistics */}
            <div className="hidden sm:block sm:mt-10 xl:absolute bottom-0 mb-12 left-0 w-full 2xl:w-1/2">
              <div className="text-[#3D155D] flex justify-between items-center pb-4 pr-4 border-b-2 border-[#3D155D] w-full 2xl:w-1/2">
                <h1 className="bold text-5xl">123</h1>
                <h1 className="text-lg reg">Brands Launched</h1>
              </div>
              <div className="text-[#3D155D] flex justify-between items-center pb-4 pr-4 border-b-2 border-[#3D155D] w-full 2xl:w-1/2 mt-6">
                <h1 className="bold text-5xl">456</h1>
                <h1 className="text-lg reg">Revenue Created</h1>
              </div>
              <div className="text-[#3D155D] flex justify-between items-center pb-4 pr-4 w-full 2xl:w-1/2 mt-6">
                <h1 className="bold text-5xl">789</h1>
                <h1 className="text-lg reg">Customers Reached</h1>
              </div>
            </div>
          </div>

          <img className="w-full mt-7 sm:mt-0 sm:w-5/12" src={Twinss} />
        </div>
        <div className="block sm:hidden w-full mt-10">
              <div className="text-[#3D155D] flex justify-between items-center pb-4 pr-4 border-b-2 border-[#3D155D]">
                <h1 className="bold text-5xl">123</h1>
                <h1 className="text-lg reg">Brands Launched</h1>
              </div>
              <div className="text-[#3D155D] flex justify-between items-center pb-4 pr-4 border-b-2 border-[#3D155D] mt-6">
                <h1 className="bold text-5xl">456</h1>
                <h1 className="text-lg reg">Revenue Created</h1>
              </div>
              <div className="text-[#3D155D] flex justify-between items-center pb-4 pr-4 mt-6">
                <h1 className="bold text-5xl">789</h1>
                <h1 className="text-lg reg">Customers Reached</h1>
              </div>
            </div>
      </div>
    </div>
  );
};
