import  { useState } from 'react';
import { motion } from 'framer-motion';
import hero1 from '../src/assets/images/hero-bg1.jpg';
import hero2 from '../src/assets/images/hero-bg-2.jpg';
import hero3 from '../src/assets/images/hero-bg-3.jpg';
import hero4 from '../src/assets/images/hero-bg-4.jpg';

const HeroSection = () => {
  const images = [hero1, hero2, hero3,hero4];
//   const texts = [
//     "Explore the world with our new travel packages.",
//     "Get ready for the ultimate adventure.",
//     "Experience the luxury of our exclusive services."
//   ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Image Carousel */}
      <motion.div
        className="absolute inset-0 flex transition-transform duration-1000"
        initial={{ x: '100%' }}
        animate={{ x: `-${currentIndex * 100}%` }}
        exit={{ x: '100%' }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="w-full h-full flex-shrink-0 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={image}
              alt={`hero-image-${index}`}
              className="w-full h-full object-cover"
            />
            {/* Text overlay */}
            <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4">
            
              <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition">
                Discover More
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>

      {/* Arrow Controls */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-4xl bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition"
      >
        ❮
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-4xl bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition"
      >
        ❯
      </button>
    </section>
  );
};

export default HeroSection;
