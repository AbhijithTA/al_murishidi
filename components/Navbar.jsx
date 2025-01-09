import { useState } from "react";

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      {/* Main Parent Div */}
      <div className="w-full flex items-center justify-between bg-white p-4 shadow-md">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-16 w-auto object-contain"
          />
        </div>

        {/* hamburger menu for small screens */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links Section */}
        <div className="hidden lg:flex space-x-8 text-black font-medium">
          <a
            href="#home"
            className="hover:underline hover:text-bluee uppercase tracking-wide"
          >
            Home
          </a>
          <a
            href="#about-us"
            className="hover:underline hover:text-bluee uppercase tracking-wide"
          >
            About Us
          </a>
          <a
            href="#products"
            className="hover:underline hover:text-bluee uppercase tracking-wide"
          >
            Our Products
          </a>
          <a
            href="#blog"
            className="hover:underline hover:text-bluee uppercase tracking-wide"
          >
            Services
          </a>
          <a
            href="#contact"
            className="hover:underline hover:text-bluee uppercase tracking-wide"
          >
            Contact
          </a>
        </div>

        {/* Toll-Free and Phone Section */}
        <div className="hidden lg:flex flex-col items-center space-x-6">
          {/* Toll-Free Number */}
          <div className="bg-redd text-black font-bold py-2 px-6 rounded-md uppercase">
            Toll Free Number <span className="text-white">8003969</span> 
          </div>

          {/* Phone Number */}
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10l9 9m0 0l9-9m-9 9V3"
              />
            </svg>
            <span className="text-black font-medium">056 688 5293</span>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md p-4 space-y-4">
          <a
            href="#home"
            className="block text-black hover:text-yellow-500 uppercase tracking-wide"
          >
            Home
          </a>
          <a
            href="#aboutUs"
            className="block text-black hover:text-yellow-500 uppercase tracking-wide"
          >
            About Us
          </a>
          <a
            href="#Products"
            className="block text-black hover:text-yellow-500 uppercase tracking-wide"
          >
            Our Products
          </a>
          <a
            href="#servicec"
            className="block text-black hover:text-yellow-500 uppercase tracking-wide"
          >
            Services
          </a>
          <a
            href="#Contact"
            className="block text-black hover:text-yellow-500 uppercase tracking-wide"
          >
            Contact
          </a>
          <div className="block text-black bg-yellow-400 font-bold py-2 px-6 rounded-md uppercase text-center">
            Toll Free Number 8003969
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarComponent;
