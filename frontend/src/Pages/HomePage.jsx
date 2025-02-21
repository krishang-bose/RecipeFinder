import { useState } from "react";
import { FaSearch } from "react-icons/fa"; 
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const salads = [
    {
      id: 1,
      name: 'Special Salad',
      price: 12,
      image: 'image 1',
      description: 'Food is any substance consumed by an organism for nutritional support.'
    },
    {
      id: 2,
      name: 'Russian Salad',
      price: 12,
      image: 'image 2',
      description: 'Food is any substance consumed by an organism for nutritional support.'
    },
    {
      id: 3,
      name: 'Asian Salad',
      price: 12,
      image: 'image 3',
      description: 'Food is any substance consumed by an organism for nutritional support.'
    },
    {
      id: 4,
      name: 'American Salad',
      price: 12,
      image: 'image 4',
      description: 'Food is any substance consumed by an organism for nutritional support.'
    }
  ];

  return (
    <div>

      {/* Intro Page */}
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#963E1F]">Welcome to ChefMate</h1>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <p className="text-lg md:text-xl leading-relaxed text-gray-800 mb-3">
                Your ultimate kitchen companion! ChefMate simplifies cooking with smart recipe searches, AI-powered assistance, meal planning, and a foodie community.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-800">
                Discover trending recipes, scale ingredients, find nearby grocery stores, and set the perfect cooking vibe. Make every meal special! 🍽️✨
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="w-48 h-48 md:w-56 md:h-56 relative">
                <img 
                  src="/api/placeholder/400/400" 
                  alt="chicken butter masala" 
                  className="rounded-full bg-[#E8F3A3] shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
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

      {/* Trending */}

        <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-lime-100 relative overflow-hidden">
        <div className="container mx-auto px-4 py-16">
          {/* Heading */}
          <h1 className="text-6xl font-bold text-center mb-20 text-gray-900">Let's See What's Trending...</h1>
          
          {/* Salad Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {salads.map((salad) => (
              <div key={salad.id} className="bg-white rounded-3xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                {/* Image Container */}
                <div className="relative">
                  <img 
                    src={salad.image} 
                    alt={salad.name}
                    className="w-full h-64 object-cover"
                    onError={(e) => {
                      e.target.src = "/api/placeholder/400/400";
                      e.target.alt = "Salad image placeholder";
                    }}
                  />
                  {/* Price Tag */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-black text-white font-bold rounded-full w-12 h-12 flex items-center justify-center">
                      ${salad.price}
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-center mb-3">{salad.name}</h2>
                  <p className="text-gray-700 text-center">
                    {salad.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Wave Decoration at Bottom */}
          <div className="absolute bottom-0 left-0 w-full">
            <svg className="w-full" viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,96L80,85.3C160,75,320,53,480,64C640,75,800,117,960,122.7C1120,128,1280,96,1360,80L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" fill="#D9F99D" fillOpacity="0.5"></path>
            </svg>
          </div>
        </div>
      </div>

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

    </div>
  );
};

export default Home;
