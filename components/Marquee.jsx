import Marquee from "react-fast-marquee";
import logos from "../src/assets/logo/logos";

const MarqueeComponent = () => {
  return (
    <div className="py-4 overflow-hidden">
      <Marquee gradient={false} speed={80} className="logo-marquee" direction={"left"} pauseOnHover={true} >
        <div className="flex space-x-6 w-full">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex justify-center items-center shrink-0 border-2"
            >
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="h-20 w-20 md:h-32 md:w-32 object-contain border-2 p-5"
              />
            </div>
          ))}
          {logos.map((logo, index) => (
            <div
              key={`duplicate-${index}`}
              className="flex justify-center items-center shrink-0 border-2"
            >
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="h-20 w-20 md:h-32 md:w-32 object-contain border-2 p-5"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;