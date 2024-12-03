import React from "react";
import diwalipic1 from "../assets/diwalipic1.png";
import diwalipic2 from "../assets/diwalipic2.png";
import diwalipic3 from "../assets/diwalipic3.png";
import diwalipic4 from "../assets/diwalipic4.png";
import diwalipic5 from "../assets/diwalipic5.png";

export const Connect = () => {
  return (
    <div className="w-full bg-white flex justify-center items-center">
      <div className="bg-white mx-auto py-20 px-6 sm:px-0 hidden min-[1025px]:block">
        {/* Grid layout */}
        <div className="flex items-center px-14 justify-between max-w-7xl">
          {/* First Row */}
          <div className="flex w-4/12 flex-col  gap-4">
            {/* Text */}
            <p
              className="text-[#3D155D] text-base xl:text-lg leading-5"
              style={{ fontFamily: "Hoves-reg" }}
            >
              If you’re ready to go beyond conversations ceilinged at approvals,
              feedback and deadlines, if building brands, even your own, is on
              the cards – we’d love to start a conversation.
            </p>

            {/* Careers Text */}
            <div>
              <p className="text-[#3D155D] text-lg font-medium">WRITE TO</p>
              <a
                href="mailto:careers@howl.in"
                className="text-[#3D155D] font-extrabold text-xl hover:underline"
                style={{ fontFamily: "Hovesbold" }}
              >
                CAREERS@HOWL.IN
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            {/* Two Images Side by Side */}
            <img
              src={diwalipic1}
              alt="Small Image 1"
              className="rounded-lg object-cover"
            />
            <img
              src={diwalipic2}
              alt="Small Image 2"
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="flex px-14 gap-4 mt-8">
          {/* Large Image */}
          <img src={diwalipic3} alt="Large Image" className="rounded-lg" />

          {/* Two Vertical Images */}
          <div className="flex items-end flex-col gap-4">
            <img
              src={diwalipic4}
              alt="Vertical Image 1"
              className="rounded-lg object-cover w-[347px] h-[215px] "
            />
            <img
              src={diwalipic5}
              alt="Vertical Image 2"
              className="rounded-lg w-[347px] h-[215px]"
            />
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="bg-white py-16 px-6 block min-[1025px]:hidden">
        {/* First Row */}
        <div className="flex flex-col gap-4">
          <p className="text-[#3D155D] text-lg reg leading-5 sm:w-4/6">
            If you’re ready to go beyond conversations ceilinged at approvals,
            feedback and deadlines, if building brands, even your own, is on the
            cards – we’d love to start a conversation.
          </p>
        </div>

        {/* Images */}
        <div className="flex flex-col gap-4 mt-6">
          {/* Two Images Side by Side */}
          <div className="flex gap-4">
            <img
              src={diwalipic1}
              alt="Small Image 1"
              className="rounded-lg object-cover w-[155px] h-[123px] sm:w-full sm:h-full"
            />
            <img
              src={diwalipic2}
              alt="Small Image 2"
              className="rounded-lg object-cover w-[155px] h-[123px] sm:w-full sm:h-full"
            />
          </div>

          <div className="flex gap-4">
            <img
              src={diwalipic4}
              alt="Vertical Image 1"
              className="rounded-lg object-cover w-[155px] h-[107px] sm:w-full sm:h-full"
            />
            <img
              src={diwalipic5}
              alt="Vertical Image 2"
              className="rounded-lg object-cover w-[155px] h-[107px] sm:w-full sm:h-full"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-4">
          <img
            src={diwalipic3}
            alt="Large Image"
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>

        <div>
          <p className="text-[#3D155D] mt-8 text-lg font-medium">WRITE TO</p>
          <a
            href="mailto:careers@howl.in"
            className="text-[#3D155D] font-extrabold text-xl hover:underline"
            style={{ fontFamily: "Hovesbold" }}
          >
            CAREERS@HOWL.IN
          </a>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};
