import { useParams } from "react-router-dom";
import { categories } from "../store/Data";

const CategoryPage = () => {
  const { categoryId } = useParams();
  const category = Object.values(categories).find(
    (cat) => cat.categoryId === categoryId
  );

  console.log(category);
  console.log(categoryId);

  if (!category) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-red-600">Category Not Found</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Header Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6">
              {category.title}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {category.description}
            </p>
            <a
              href="#contact"
              className="inline-block bg-bluee text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-bluee hover:shadow-lg transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src={category.image}
              alt={category.title}
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Animated Cards Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Why Choose {category.title} from us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {["High Quality", "Durability", "Affordability"].map(
              (item, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-blue-900 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">{item}</h3>
                  </div>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse non urna vel sapien convallis laoreet.
                  </p>
                </div>
              )
            )}
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Contact Us
          </h2>
          <form className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-600 font-medium mb-2"
              >
                Name:
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-600 font-medium mb-2"
              >
                Email:
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-600 font-medium mb-2"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-bluee text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition-all duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
