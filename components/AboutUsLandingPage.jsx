import { useNavigate } from "react-router-dom";
import Img1 from "/Images/AboutUsHomePage.jpg";

const AboutSection = () => {
  const navigate = useNavigate();

  const handleContactNavigation = () => {
    navigate("/contact");
  };

  return (
    <section className="relative text-gray-800 py-16 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Image Section */}
        <div className="relative">
          <img
            src={Img1}
            alt="Car"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Text Section */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold">About Us</h2>
          <p className="sm:text-lg sm:leading-relaxed text-gray-600 ">
            Since our establishment in 1979,{" "}
            <span className="text-blue-600 font-semibold">
              [Your Company Name]
            </span>{" "}
            has grown to be a trusted name in the field of auto parts supply.
            With an unwavering commitment to quality and credibility, we
            provide high-grade spare parts to customers worldwide.
          </p>
          <p className="sm:text-lg sm:leading-relaxed text-gray-600">
            We deal with a wide range of auto parts for leading global
            automotive brands like Toyota, Nissan, Honda, and Mercedes, and
            have multiple outlets across major cities. Whether you're looking
            for retail, wholesale, or export services, we are your one-stop
            solution for premium auto parts.
          </p>
          <button
            onClick={handleContactNavigation}
            className="bg-redd hover:bg-bluee/80 text-white font-medium py-3 px-8 rounded-lg shadow-lg transition-all duration-300"
          >
            Know More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
