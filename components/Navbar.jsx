/* eslint-disable react/no-unknown-property */
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  //toggle for mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <nav className="bg-[#38040e] shadow-md z-50 fixed w-full top-0 left-0">
        {/* parent div */}
        <div className="container mx-auto flex items-center justify-between py-3 px-6 lg:px-12">
          {/* left child */}
          <div className="flex items-center space-x-3">
            <img src="./logo.png" alt="logo" className="h-8" />
          </div>

          {/* right child desktop navbar Items*/}
          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="/"
              className="text-[#F9FAFB] font-semibold hover:text-white hover:bg-[#343a40] p-3 rounded-md transition duration-200"
            >
              Home
            </a>
            <a
              href="/"
              className="text-[#ECF0F1] font-semibold hover:text-white hover:bg-[#343a40] p-3 rounded-md transition duration-200"
            >
              Brands
            </a>
            <a
              href="/"
              className="text-[#ECF0F1] font-semibold hover:text-white hover:bg-[#343a40] p-3 rounded-md transition duration-200"
            >
              About
            </a>
            <a
              href="/"
              className="text-[#ECF0F1] font-semibold hover:text-white hover:bg-[#343a40] p-3 rounded-md transition duration-200"
            >
              Products
            </a>
            <a
              href="/"
              className="text-[#ECF0F1] font-semibold hover:text-white hover:bg-[#343a40] p-3 rounded-md transition duration-200"
            >
              Contact
            </a>
          </div>
          {/* mobile menu */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-800 p-3 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* mobile menu */}
        <div
          className={`lg:hidden ${
            isMobileMenuOpen ? "block" : "hidden"
          } bg-white shadow-md `}
        >
          <div className="flex flex-col items-center space-y-4 py-4">
            <a
              href="/"
              className="text-gray-800 font-semibold hover:text-white hover:bg-green-600 w-full text-center p-3 rounded-md transition duration-200"
            >
              Home
            </a>
            <a
              href="/"
              className="text-gray-800 font-semibold hover:text-white hover:bg-green-600 w-full text-center p-3 rounded-md transition duration-200"
            >
              Brands
            </a>
            <a
              href="/"
              className="text-gray-800 font-semibold hover:text-white hover:bg-green-600 w-full text-center p-3 rounded-md transition duration-200"
            >
              About
            </a>
            <a
              href="/"
              className="text-gray-800 font-semibold hover:text-white hover:bg-green-600 w-full text-center p-3 rounded-md transition duration-200"
            >
              Products
            </a>
            <a
              href="/"
              className="text-gray-800 font-semibold hover:text-white hover:bg-green-600 w-full text-center p-3 rounded-md transition duration-200"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
