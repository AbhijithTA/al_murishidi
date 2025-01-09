import {
  FaEnvelope,
  FaPhoneAlt,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white py-16">
      {/* Parent div */}
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-16">
          {/* About Us Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-yellow-400">About Us</h3>
            <p className="text-gray-400">
              We are a trusted spare parts supplier in the UAE, offering
              high-quality products for a wide variety of vehicles and
              machinery. Our goal is to deliver reliable, cost-effective
              solutions to keep your machines running smoothly.
            </p>
            <a
              href="/aboutus"
              className="text-yellow-400 font-semibold hover:text-yellow-500"
            >
              Learn More <span className="ml-2">&rarr;</span>
            </a>
          </div>
          {/* Our Products Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-yellow-400">Our Products</h3>
            <ul className="text-gray-400 space-y-3">
              <li>
                <a href="/products" className="hover:text-yellow-400">
                  Automotive Spare Parts
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-yellow-400">
                  Engine Parts
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-yellow-400">
                  Transmission Parts
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-yellow-400">
                  Brake Parts
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-yellow-400">
                  Lubricants & Fluids
                </a>
              </li>
            </ul>
          </div>
          {/* Quick Links Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-yellow-400">Quick Links</h3>
            <ul className="text-gray-400 space-y-3">
              <li>
                <a href="/aboutus" className="hover:text-yellow-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-yellow-400">
                  Products
                </a>
              </li>
              <li>
                <a href="/contactus" className="hover:text-yellow-400">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-yellow-400">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-yellow-400">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-yellow-400">Contact</h3>
            <ul className="text-gray-400 space-y-3">
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                <a
                  href="mailto:support@sparepartsuae.com"
                  className="hover:text-yellow-400"
                >
                  support@sparepartsuae.com
                </a>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-2" />
                <a href="tel:+97143561234" className="hover:text-yellow-400">
                  +971 4 356 1234
                </a>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-2" />
                <a href="tel:+97143567890" className="hover:text-yellow-400">
                  +971 4 356 7890
                </a>
              </li>
              <li className="flex items-center">
                <FaInstagram className="mr-2" />
                <a href="#" className="hover:text-yellow-400">
                  Instagram
                </a>
              </li>
              <li className="flex items-center">
                <FaYoutube className="mr-2" />
                <a href="#" className="hover:text-yellow-400">
                  YouTube
                </a>
              </li>
              <li className="flex items-center">
                <FaLinkedin className="mr-2" />
                <a href="#" className="hover:text-yellow-400">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="bg-[#333333] text-white p-2 rounded-full">
              {/* <img src={logo} alt="Logo" className="h-6 w-6" /> */}
              <img src="./logo.png" alt="Logo" className="h-6 w-6" />
            </span>
            <span className="text-white font-semibold">Spare Parts UAE</span>
          </div>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            ©2024 – Spare Parts UAE | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
