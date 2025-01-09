import { useState } from "react";
import hero1 from "/Images/HeroSecton1.jpg";
import hero2 from "/Images/HeroSection2.jpg";
import hero3 from "/Images/HeroSection3.jpg";
import hero4 from "/Images/HeroSection4.jpg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Top Quality",
      subtitle: "Choose our high-quality car parts for smooth driving.",
      buttonText: "Discover More",
      image: hero1,
    },
    {
      title: "Premium Parts",
      subtitle: "Get the best parts to keep your car running like new.",
      buttonText: "Learn More",
      image: hero2,
    },
    {
      title: "Drive Confidently",
      subtitle: "Drive Confidently with Premium Spare Parts.",
      buttonText: "Want to Know More?",
      image: hero3,
    },
    {
      title: "Trusted Quality",
      subtitle: "Your Trusted Source for Quality Car Parts in UAE.",
      buttonText: "Learn More",
      image: hero4,
    },
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className=" px-10">
      {/* Slider Section */}
      <div className="relative w-full h-[600px] overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {/* Render Slide Content Dynamically */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0 grid grid-cols-1 lg:grid-cols-2 items-center"
            >
              {/* Left Section - Text */}
              <div className="flex flex-col justify-center items-start p-8 lg:p-16 bg-gradient-to-r sm:mx-10">
                <h3 className="text-sm sm:text-xl font-semibold uppercase text-gray-500 tracking-wide">
                  {slide.title}
                </h3>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mt-4 text-gray-800 ">
                  {slide.subtitle}
                </h2>
                <button className="mt-6 py-3 px-8 font-bold text-white bg-redd hover:bg-bluee/80 rounded-lg shadow-lg transition-all duration-300">
                  {slide.buttonText}
                </button>
              </div>

              {/* Right Section - Image */}
              <div className="h-full flex justify-center items-center ">
                <img
                  src={slide.image}
                  alt={slide.subtitle}
                  className="object-cover max-w-[650px] max-h-[550px]  rounded-lg shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Slider Controls */}
        <button
          onClick={handlePrevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-bluee hover:bg-bluee/80 text-white p-3 rounded-full shadow-lg transition-all duration-300 hidden sm:block"
        >
          &#8592;
        </button>
        <button
          onClick={handleNextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-bluee hover:bg-bluee/80 text-white p-3 rounded-full shadow-lg transition-all duration-300 hidden sm:block"
        >
          &#8594;
        </button>

        {/* Slider Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index
                  ? "bg-bluee"
                  : "bg-gray-300 hover:bg-gray-400"
              } transition-all duration-300`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
