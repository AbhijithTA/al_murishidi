
import { FaTools, FaTruck, FaWrench } from "react-icons/fa"; // Using react-icons for professional icons

const ServicesSection = () => {
  // Dummy data for services
  const services = [
    {
      id: 1,
      icon: <FaWrench className="text-redd text-5xl" />,
      title: "Installation",
      description:
        "Professional installation services to ensure your spare parts fit perfectly and work flawlessly.",
    },
    {
      id: 2,
      icon: <FaTruck className="text-redd text-5xl" />,
      title: "Delivery",
      description:
        "Fast and reliable delivery services to get your parts wherever you need them.",
    },
    {
      id: 3,
      icon: <FaTools className="text-redd text-5xl" />,
      title: "Repair",
      description:
        "Expert repair services to keep your vehicle running smoothly and efficiently.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
