import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bseBackground from "../assets/bsebasebuidling.png";
import bsemobile from "../assets/bsemobile.png";
import bselogo from "../assets/bselogo.png";
import asianbg from "../assets/asianpbg.png";
import asianpaintsmobile from "../assets/asianpaintsmobile.png";
import asianlogo from "../assets/asian paints white 1.png";
import baggitbg from "../assets/baggitbg.png";
import baggitmobile from "../assets/baggitmobile.png";
import baggitlogo from "../assets/baggit 2.png";
import amazonmusicbg from "../assets/amazonmusicbg.png";
import amazonmobile from "../assets/amazonmobile.png";
import Amplogo from "../assets/APM logo 1.png";
import abbottbg from "../assets/abbotttbg.png";
import abbotmobile from "../assets/abbottmobile.png";
import abbottlogo from "../assets/abbott white logo 1.png";
import soapbg from "../assets/soapbg.png";
import flohmobile from "../assets/flohmobile.png";
import flohlogo from "../assets/floh white 1.png";
import aqabg from "../assets/aqabg.png";
import aquatienmobile from "../assets/aquatienmobile.png";
import aquatein from "../assets/aquatein white 1.png";
import niyobg from "../assets/niyobg.png";
import niyologo from "../assets/niyo global 1 (1).png";
import niyomobile from "../assets/niyomobile.png";
import zydusbg from "../assets/zydusbg.png";
import zydusmobile from "../assets/zydusmobile.png";
import zyduslogo from "../assets/zydus white 1.png";
import dbsbank from "../assets/dbsbank.png";
import dbsbanklogo from "../assets/dbsbanklogo.png";
import dbsmobilebg from "../assets/dbsmobilebg.png";
import next from "../assets/Next.png";
import prev from "../assets/Previous.png";

// Slide data with mobile backgrounds
const imageData = [
  {
    background: bseBackground,
    backgroundMobile: bsemobile,
    logo: bselogo,
    title: "BANKING & FINANCE",
    description:
      "Initiating investor communities to develop a more consumer-centric brand narrative.",
  },
  {
    background: asianbg,
    backgroundMobile: asianpaintsmobile,
    logo: asianlogo,
    title: "CONSTRUCTION & ENGINEERING",
    description:
      "Digitally converting an otherwise unattainable audience pool in the U.A.E.",
  },
  {
    background: baggitbg,
    backgroundMobile: baggitmobile,
    logo: baggitlogo,
    title: "FASHION & LIFESTYLE",
    description:
      "Taking a homegrown brand from trendy to trending, generating 10x website revenue in a year.",
  },
  {
    background: amazonmusicbg,
    backgroundMobile: amazonmobile,
    logo: Amplogo,
    title: "ENTERTAINMENT",
    description:
      "Social Listening to generate more organic impressions in a week than Amazon did in a year.",
  },
  {
    background: dbsbank,
    backgroundMobile: dbsmobilebg,
    logo: dbsbanklogo,
    title: "BANKING & FINANCE",
    description:
      "Purpose driven story-telling for Asia’s Safest and The World’s Best Bank.",
  },
  {
    background: abbottbg,
    backgroundMobile: abbotmobile,
    logo: abbottlogo,
    title: "HEALTHCARE & WELLNESS",
    description:
      "Launching a flagship product by turning content creators into brand custodians.",
  },
  {
    background: soapbg,
    backgroundMobile: flohmobile,
    logo: flohlogo,
    title: "HEALTHCARE & WELLNESS",
    description:
      "Taking a go to market strategy beyond awareness & sales to turn taboo into customers.",
  },
  {
    background: aqabg,
    backgroundMobile: aquatienmobile,
    logo: aquatein,
    title: "HEALTHCARE & WELLNESS",
    description:
      "Launching India’s first protein water & seeing the brand through an acquisition",
  },
  {
    background: niyobg,
    backgroundMobile: niyomobile,
    logo: niyologo,
    title: "BANKING & FINANCE",
    description:
      "An ambitious production effort to create infinite content, inspired to take Indians global.",
  },
  {
    background: zydusbg,
    backgroundMobile: zydusmobile,
    logo: zyduslogo,
    title: "HEALTHCARE & WELLNESS",
    description:
      "Packing innovation to re-invent the cough syrup experience for children and adults alike.",
  },
];

// Custom Next Arrow Component
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-7 sm:right-10 xl:right-20 bottom-[18px] sm:bottom[20px] transform -translate-y-1/2 z-10 cursor-pointer text-white"
    onClick={onClick}
  >
    <img src={next} alt="Next Slide" />
  </div>
);

// Custom Previous Arrow Component
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-7 sm:left-10 xl:left-20 bottom-[18px] sm:bottom[20px] transform -translate-y-1/2 z-10 cursor-pointer text-white"
    onClick={onClick}
  >
    <img src={prev} alt="Previous Slide" />
  </div>
);

export const Solutions = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 600,
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    centerMode: true, // Enable center mode
    centerPadding: "7%", // Show 5% of the adjacent slides
    nextArrow: <NextArrow />, // Custom Next Arrow
    prevArrow: <PrevArrow />, // Custom Previous Arrow
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 1024, // Tablet view
        settings: {
          centerPadding: "10%", // Adjust padding for smaller screens
        },
      },
      {
        breakpoint: 600, // Mobile view
        settings: {
          centerPadding: "5%", // Maintain 5% padding
        },
      },
      {
        breakpoint: 480, // Smaller mobile view
        settings: {
          centerPadding: "10%", // Maintain 5% padding
        },
      },
    ],
  };

  return (
    <>
      {/* Desktop Header Section */}
      <div className="hidden lg:block py-14 sm:py-20 bg-[#00031A] text-white">
        <div className="flex flex-row justify-center items-center w-10/12 mx-auto gap-y-8 gap-x-8">
          <h1 className="uppercase bold text-2xl sm:text-5xl lg:text-7xl 2xl:text-8xl font-bold overflow-hidden">
            SOLUTION
          </h1>
          <p className="text-sm reg sm:w-8/12 lg:w-5/12">
            What started as a digital pivot back to familiar territory, became
            an opportunity to deeply understand how brands are born, nurtured
            and successfully operated across digital media. We use these
            compounding learnings to continue scaling brands, and even start our
            own.
          </p>
        </div>

        {/* Subheader and Button Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center w-10/12 mx-auto gap-y-8 gap-x-8 mt-6">
          <h1 className="uppercase bold text-2xl sm:text-5xl lg:text-7xl 2xl:text-8xl font-bold text-center overflow-hidden">
            OVER SCOPE
          </h1>
          <button
            className="border-2 light w-1/3 py-4 rounded-tl-xl rounded-br-xl border-[#ffffff] hover:bg-[#3D155D] hover:text-white transition-colors"
            onClick={() =>
              window.open(
                "https://docs.google.com/presentation/d/1Fg0MCOv2U0cTgglORiWvv7fUwSAvcbvLKd38mNIkgrw/edit#slide=id.g2f3eaea9b21_0_0",
                "_blank"
              )
            }
          >
            View Our Portfolio
          </button>
        </div>
      </div>

      {/* Mobile Header Section */}
      <div className="block lg:hidden py-20 pl-6 sm:pl-10 text-white">
        <h1 className="uppercase bold text-4xl sm:text-7xl overflow-hidden">
          SOLUTION
        </h1>
        <h1 className="uppercase bold text-4xl sm:text-7xl overflow-hidden">
          OVER SCOPE
        </h1>
        <p className="reg mt-6 text-sm sm:text-lg sm:w-5/6">
          What started as a digital pivot back to familiar territory, became an
          opportunity to deeply understand how brands are born, nurtured and
          successfully operated across digital media. We use these compounding
          learnings to continue scaling brands, and even start our own.
        </p>
        <button className="border-2 light w-1/2 py-4 rounded-tl-xl rounded-br-xl border-white mt-8 hover:bg-[#3D155D] hover:text-white transition-colors">
          View Our Portfolio
        </button>
      </div>

      {/* Carousel Section */}
      <div className="bg-[#00010b] text-white h-[80vh] sm:h-[95vh] min-[1025px]:h-[113vh]">
        <div className="relative w-full h-[80vh] sm:h-[95vh] min-[1025px]:h-[113vh]">
          <Slider {...settings} className="w-full h-[80vh] sm:h-[95vh] min-[1025px]:h-full">
            {imageData.map((image, index) => (
              <div key={index} className="relative h-full">
                {/* Desktop Background */}
                <div
                  className="w-full h-screen bg-cover bg-center rounded-2xl hidden min-[1025px]:block"
                  style={{
                    backgroundImage: `url(${image.background})`,
                  }}
                ></div>

                {/* Mobile Background */}
                <div
                  className="w-full h-[70vh] sm:h-[85vh] rounded-2xl bg-cover bg-center block min-[1025px]:hidden"
                  style={{
                    backgroundImage: `url(${image.backgroundMobile})`,
                  }}
                ></div>

                {/* Overlay */}
                <div className="absolute top-0 left-0 w-full h-full"></div>

                {/* Dynamic Content */}
                <div className="absolute bottom-7 lg:bottom-20 left-5 lg:left-10 text-white">
                  {/* Dynamic Logo */}
                  <img
                    src={image.logo}
                    alt={`${image.title} Logo`}
                    className="mb-5 w-24 h-auto"
                  />
                  <h2 className="uppercase bold sm:text-lg text-sm">
                    {image.title}
                  </h2>
                  <p className="mt-2 text-xs sm:text-xl light w-2/3">
                    {image.description}
                  </p>
                </div>

                {/* View Case Study Button (Optional) */}
                {/* Uncomment if needed
                <button className="absolute hidden sm:block bottom-20 lg:bottom-24 sm:right-5 lg:right-10 border-2 light text-[#ffffff] mt-4 sm:mt-7 px-10 py-4 rounded-tl-xl rounded-br-xl border-[#ffffff] hover:bg-[#3D155D] hover:text-white transition-colors">
                  View Case Study
                </button>
                <button className="absolute block sm:hidden bottom-20 right-4 border-2 light text-[#ffffff] mt-4 px-6 py-4 rounded-tl-xl rounded-br-xl border-[#ffffff]">
                  {">"}
                </button>
                */}
              </div>
            ))}
          </Slider>

          {/* Custom Styling for Dots and Additional Styles */}
          <style jsx>{`
            .custom-dots {
              position: absolute;
              bottom: 20px; /* Adjusted position to reduce space */
              display: flex !important;
              justify-content: center;
              width: 100%;
              padding: 0;
              margin: 0;
              list-style: none;
            }

            .custom-dots li {
              margin: 0 1px; /* Adjusted space between dots */
            }

            .custom-dots li button {
              width: 7px;
              height: 7px;
              background: gray;
              border-radius: 50%;
              transition: background-color 0.3s ease;
              border: none;
              padding: 0;
            }

            .custom-dots li button:before {
              display: none; /* Remove the default black dots */
            }

            .custom-dots li.slick-active button {
              background: white; /* Active dot color */
            }

            /* Truncate description to 2 lines */
            .truncate-lines {
              display: -webkit-box;
              -webkit-line-clamp: 2; /* Limit to 2 lines */
              -webkit-box-orient: vertical;
              overflow: hidden;
              text-overflow: ellipsis;
            }

            /* Adjust Slide Container for Center Mode */
            .slick-slide {
              padding: 0 10px; /* Adjust padding as needed */
            }

            .slick-list {
              margin: 0 -10px; /* Negative margin to counteract slide padding */
            }

            /* Ensure the slide takes full height */
            .slick-slide > div {
              height: 100%;
            }
          `}</style>
        </div>
      </div>
    </>
  );
};

export default Solutions;
