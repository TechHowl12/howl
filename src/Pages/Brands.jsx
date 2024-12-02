import React from "react";
import HRX from "../assets/hrx-new-brands-img.png";
import Amex from "../assets/amex-new-brands-img.png";
import Schindler from "../assets/schindler-new-brands-img.png";
import HRXLogo from "../assets/hrx logo 1.png"; // Logo for the first card
import AmexLogo from "../assets/am ex white logo 1.png"; // Logo for the second card
import SchindlerLogo from "../assets/white logo-02 1.png"; // Logo for the third card


export const Brands = () => {
  const gradientBorder = "linear-gradient(to right, #F79A5F 0%, #F69976 9%, #F399B1 29%, #F399C1 33%, #C7A7CF 69%, #A1B5DD 99%)";

  return (
    <div className="bg-[#0A001F] min-h-screen flex items-center justify-center sm:py-20">
      <div className="grid grid-cols-1 min-[1025px]:grid-cols-3 gap-12 px-6 md:px-16 py-10">
        {/* Card 1 */}
        <div
          className="relative flex flex-col items-center"
          style={{
            width: "334px",
            height: "694px",
            background: gradientBorder,
            padding: "0.9px",
            borderRadius: "12px",
          }}
        >
          <div className="w-full h-full bg-[#0A001F] rounded-xl flex flex-col items-center">
            {/* Main Image */}
            <img
              src={HRX}
              alt="HRX"
              className="mt-6"
              style={{ width: "297.4px", height: "390px" }}
            />
            {/* Logo Image */}
            <img
              src={HRXLogo}
              alt="HRX Logo"
              className="mt-12"
            />
            {/* Content */}
            <div className="text-center mt-4 px-4">
              <h3
                className="text-[#FCF5FF] text-center text-sm font-bold mb-2"
                style={{ fontFamily: "Hovesbold" }}
              >
                Creating A 1,000 Crore <br /> Brand Through DMs
              </h3>
              <p
                className="text-[#FCF5FF] text-xs mb-4"
                style={{ fontFamily: "Hoves-light" }}
              >
                Building offline communities, ideating product lines, defining
                go-to-market strategies to use social media to inspire a billion
                Indians to be the best version of themselves.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="relative flex flex-col items-center"
          style={{
            width: "334px",
            height: "694px",
            background: gradientBorder,
            padding: "0.9px",
            borderRadius: "12px",
          }}
        >
          <div className="w-full h-full bg-[#0A001F] rounded-xl flex flex-col items-center">
            {/* Main Image */}
            <img
              src={Schindler}
              alt="Schindler"
              className="mt-6"
              style={{ width: "297.4px", height: "390px" }}
            />
            {/* Logo Image */}
            <img
              src={SchindlerLogo}
              alt="Schindler Logo"
              className="mt-8"
            />
            {/* Content */}
            <div className="text-center mt-4 px-4">
              <h3
                className="text-[#FCF5FF] text-center text-sm font-bold mb-2"
                style={{ fontFamily: "Hovesbold" }}
              >
                Building Ad Funnels That <br /> Sold Elevators Online
              </h3>
              <p
                className="text-[#FCF5FF] text-xs mb-4"
                style={{ fontFamily: "Hoves-light" }}
              >
                Building offline communities, ideating product lines, defining
                go-to-market strategies to use social media to inspire a billion
                Indians to be the best version of themselves.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="relative flex flex-col items-center"
          style={{
            width: "334px",
            height: "694px",
            background: gradientBorder,
            padding: "0.9px",
            borderRadius: "12px",
          }}
        >
          <div className="w-full h-full bg-[#0A001F] rounded-xl flex flex-col items-center">
            {/* Main Image */}
            <img
              src={Amex}
              alt="American Express"
              className="mt-6"
              style={{ width: "297.4px", height: "390px" }}
            />
            {/* Logo Image */}
            <img
              src={AmexLogo}
              alt="American Express Logo"
              className="mt-14"
            />
            {/* Content */}
            <div className="text-center mt-4 px-4">
              <h3
                className="text-[#FCF5FF] text-center text-sm font-bold mb-2"
                style={{ fontFamily: "Hovesbold" }}
              >
                Curating Communication To <br /> Retain The Indian Market
              </h3>
              <p
                className="text-[#FCF5FF] text-xs mb-4"
                style={{ fontFamily: "Hoves-light" }}
              >
                Building offline communities, ideating product lines, defining
                go-to-market strategies to use social media to inspire a billion
                Indians to be the best version of themselves.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
