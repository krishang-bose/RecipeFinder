import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Testimonials from "../Components/Testimonials";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [gradientProgress, setGradientProgress] = useState(0);
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

  // Very slow color transition effect
  useEffect(() => {
    const interval = setInterval(() => {
      setGradientProgress(prev => {
        // Increment by 0.1% every 5 seconds - extremely slow
        const newValue = prev + 0.1;
        return newValue > 100 ? 0 : newValue;
      });
    }, 5000); // Update every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  // Calculate the gradient color based on progress
  const getGradientStyle = () => {
    // Start with yellow-green, slowly transition to lime-green
    return {
      background: `linear-gradient(135deg, 
        rgba(249, 250, 230, ${1 - gradientProgress/100}) 0%, 
        rgba(227, 241, 212, ${1 - gradientProgress/150}) 35%, 
        rgba(237, 248, 217, ${1 - gradientProgress/200}) 70%, 
        rgba(242, 249, 192, ${1 - gradientProgress/100}) 100%)`,
      transition: 'background 4s ease-in-out'
    };
  };

  return (
    <div className="min-h-screen relative" style={getGradientStyle()}>
      {/* Intro Page - Moved down slightly */}
      <div className="pt-24 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#963E1F]">Welcome to ChefMate</h1>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <p className="text-xl leading-relaxed text-gray-800 mb-4">
                Your ultimate kitchen companion! ChefMate simplifies cooking with smart recipe searches, AI-powered assistance, meal planning, and a foodie community.
              </p>
              <p className="text-xl leading-relaxed text-gray-800">
                Discover trending recipes, scale ingredients, find nearby grocery stores, and set the perfect cooking vibe. Make every meal special! 🍽️✨
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="w-36 h-36 md:w-48 md:h-48 relative">
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
      <section className="container mx-auto flex flex-col md:flex-row items-center justify-between py-24 px-6 md:px-16">
        <div className="md:w-1/2 text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Your Kitchen, <br /> Your Rules... <br />
            <span className="text-emerald-600">We Just Make It Easier!</span>
          </h1>
          <div className="bg-white/50 backdrop-blur-sm px-6 py-4 rounded-xl flex flex-col md:flex-row items-start md:items-center gap-4 shadow-md w-full">
            <p className="text-gray-700 text-xl font-medium">
              Hey Stuti, what are you craving today?
            </p>
            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm w-full md:w-96">
              <input
                type="text"
                placeholder="Search for Recipes"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2 border-none outline-none bg-transparent text-gray-700 text-lg"
              />
              <button className="text-emerald-600">
                <FaSearch size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
          <div className="w-64 h-64 md:w-80 md:h-80 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
            <img
              src="../icons/hera.png"
              alt="Cooking Illustration"
              className="max-w-full h-auto object-contain p-6"
            />
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <div className="py-24 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">Let&apos;s See What&apos;s Trending...</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto">
          {salads.map((salad) => (
            <div key={salad.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="relative">
                <img 
                  src={salad.image} 
                  alt={salad.name}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.src = "/api/placeholder/400/400";
                    e.target.alt = "Salad image placeholder";
                  }}
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-black text-white font-bold rounded-full w-12 h-12 flex items-center justify-center text-lg">
                    ${salad.price}
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-lg font-bold text-center mb-2">{salad.name}</h2>
                <p className="text-gray-700 text-center">
                  {salad.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chill Corner Section */}
      <section className="py-24 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-6 text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Chill Corner
          </h2>
          <p className="text-gray-700 text-xl">
            Because good food deserves good vibes!
          </p>
          <button
            onClick={() => navigate("/chill-corner")}
            className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition text-lg"
          >
            Explore
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
          <img
            src="../icons/chill-corner.png"
            alt="Chill Corner Illustration"
            className="w-full max-w-lg"
          />
        </div>
      </section>

      <Testimonials />

    </div>
  );
};

export default Home;