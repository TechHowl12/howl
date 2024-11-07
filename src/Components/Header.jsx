import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo-nav.png";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Toggle navbar visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`bg-transparent fixed pt-6 px-2 sm:pt-6 xl:pt-10 top-0 left-0 w-full z-50 transition-transform duration-300 ${
          isVisible ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        <div className="lg:mx-6 xl:mx-10 2xl:mx-14 p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="hidden md:block py-2 px-5 lg:px-8 bg-opacity-50 rounded-tl-xl rounded-br-xl text-white capitalize">
              <div className="flex items-baseline gap-x-4 lg:gap-x-10 reg">
                <a
                  href="#"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary"
                >
                  Work
                </a>
                <a
                  href="#"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary"
                >
                  About
                </a>
                <a
                  href="#"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary"
                >
                  Career
                </a>
                <a
                  href="#"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`inline-flex items-center justify-center p-2 bg-[#2B2631] bg-opacity-50 rounded-tl-xl rounded-br-xl z-50 ${
                  isOpen ? "hidden" : ""
                }`}
                aria-expanded={isOpen}
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <h1 className="none">.</h1>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-8 h-8 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`fixed top-0 right-0 h-[100vh] w-full bg-[#2B2631] opacity-[95%] z-40 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-7 right-6 text-white inline-flex items-center justify-center p-2 bg-[#2B2631] opacity-[60%] border-2 rounded-tl-xl rounded-br-xl z-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              className="w-7 h-7 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="px-2 pt-20 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary"
            >
              About
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary"
            >
              Services
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
