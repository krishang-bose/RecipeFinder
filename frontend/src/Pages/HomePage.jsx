import { useState } from "react";
import { FaSearch } from "react-icons/fa"; 
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <section className="container mx-auto flex flex-col md:flex-row items-center justify-between py-16 px-6 md:px-20">
        {/* Left Content */}
        <div className="md:w-1/2 text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Your Kitchen, <br /> Your Rules... <br />
            <span className="text-emerald-600">We Just Make It Easier!</span>
          </h1>

          {/* Search Bar */}
          <div className="bg-green-100 px-6 py-4 rounded-lg flex items-center gap-3 shadow-md w-full md:w-auto">
            <p className="text-gray-700 text-lg font-medium">
              Hey Stuti, what are you craving today?
            </p>
            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm w-full md:w-96">
              <input
                type="text"
                placeholder="Search for Recipes"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2 border-none outline-none bg-transparent text-gray-700"
              />
              <button className="text-emerald-600">
                <FaSearch size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <div className="w-80 h-80 md:w-96 md:h-96 bg-emerald-100 rounded-full flex items-center justify-center shadow-lg">
            <img
              src="../icons/hera.png"
              alt="Cooking Illustration"
              className="max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Chill Corner Section */}
      <section className="w-full bg-emerald-50 py-36 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between min-h-[70vh]">
        {/* Left Text Content */}
        <div className="md:w-1/2 space-y-6 text-left">
          <h2 className="text-5xl font-bold text-gray-900">
            Chill Corner
          </h2>
          <p className="text-gray-700 text-2xl">
            Because good food deserves good vibes!
          </p>
          <button
            onClick={() => navigate("/chill-corner")}
            className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition text-lg"
          >
            Explore
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src="../icons/chill-corner.png"
            alt="Chill Corner Illustration"
            className="w-full max-w-lg"
          />
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="bg-gray-100 py-12 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Subscribe for Our Latest Recipes & Updates
          </h2>
          <p className="text-gray-600 mb-6">
            Type your email and get the latest recipes directly in your inbox.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 w-full md:w-auto border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFA726] outline-none"
            />
            <button className="bg-[#FFA726] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#FB8C00] transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
