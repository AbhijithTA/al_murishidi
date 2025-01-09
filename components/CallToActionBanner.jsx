
import { useNavigate } from "react-router-dom";

const CallToActionBanner = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <section className="bg-bluee/80 py-10">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="text-center lg:text-left">
          <h2 className="text-2xl lg:text-3xl font-bold  mb-4">
            Looking for a specific part?
          </h2>
          <p className="text-lg ">
            We’ve got you covered! Get in touch with us now to find the perfect spare part for your needs.
          </p>
        </div>

        {/* Button */}
        <div className="mt-6 lg:mt-0">
          <button
            onClick={handleContactClick}
            className="bg-redd hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-lg shadow-md transition-all duration-300"
          >
            Contact Us Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionBanner;
