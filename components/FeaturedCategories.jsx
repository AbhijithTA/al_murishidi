import { Link } from "react-router-dom";
import tires from "/Images/TireCategoryCover.jpg"
import brakes from "/Images/BrakesCategoryCover.jpg"
import engine from "/Images/EngineCategoryCover.jpg"
import suspension from "/Images/SuspensionCategoryCover.jpg"

const FeaturedCategories = () => {
 
  const categories = [
    {
      id: 1,
      title: "Tires",
      image: tires, 
      link: "/category/tires",
    },
    {
      id: 2,
      title: "Brakes",
      image: brakes,
      link: "/category/brakes",
    },
    {
      id: 3,
      title: "Engine Components",
      image: engine,
      link: "/category/engine-components",
    },
    {
      id: 4,
      title: "Suspension",
      image: suspension,
      link: "/category/suspension",
    },
  ];

  return (
    <section className=" py-20">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12">
          Featured Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg bg-white"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300 items-center justify-center hidden group-hover:flex">
                <Link
                  to={category.link}
                  className="bg-bluee text-black font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-bluee/80 transition-colors duration-300"
                >
                  Shop Now
                </Link>
              </div>
              <div className="absolute bottom-4 left-4 text-white text-xl font-bold group-hover:translate-y-[-10px] transition-transform duration-300">
                {category.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
