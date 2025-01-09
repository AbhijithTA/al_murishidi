import AboutSection from "./AboutUsLandingPage";
import CallToActionBanner from "./CallToActionBanner";
import FeaturedCategories from "./FeaturedCategories";

import HeroSection from "./HeroSection";
import MarqueeComponent from "./Marquee";
import ServicesSection from "./ServiceSectionLandingPage";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedCategories />
      <MarqueeComponent />
      <ServicesSection />
      <CallToActionBanner />
    </>
  );
};


export default LandingPage;
