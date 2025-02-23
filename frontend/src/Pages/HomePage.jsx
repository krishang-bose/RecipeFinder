import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Testimonials from "../Components/Testimonials";
import welcome from "../icons/welcome.png";
import cook from "../icons/cook.png";
import roll from '../icons/roll.png';
import chill from '../icons/chill.png';
import RecipeDiarySection from "./RecipeDiary";
import Trending from "./Trending";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [gradientProgress, setGradientProgress] = useState(0);
  const navigate = useNavigate();
  const salads = [
    {
      id: 1,
      name: 'Special Rolls',
      price: 120,
      image: 'image 1',
      description: 'Delicious, portable wraps filled with a variety of ingredients like veggies, meats, and sauces, wrapped in bread.'
    },
    {
      id: 2,
      name: 'Special Rolls',
      price: 120,
      image: 'image 2',
      description: 'Delicious, portable wraps filled with a variety of ingredients like veggies, meats, and sauces, wrapped in bread.'
    },
    {
      id: 3,
      name: 'Special Rolls',
      price: 120,
      image: 'image 3',
      description: 'Delicious, portable wraps filled with a variety of ingredients like veggies, meats, and sauces, wrapped in bread.'
    },
    {
      id: 4,
      name: 'Special Rolls',
      price: 120,
      image: 'image 4',
      description: 'Delicious, portable wraps filled with a variety of ingredients like veggies, meats, and sauces, wrapped in bread.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientProgress(prev => {
        const newValue = prev + 0.1;
        return newValue > 100 ? 0 : newValue;
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const getGradientStyle = () => {
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
      
      {/* Hero Section */}
      <section className="container mx-auto flex flex-col md:flex-row items-center justify-between py-24 px-6 md:px-16">
        <div className="md:w-1/2 text-left space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
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
          <img src={cook} alt="Cook" className="w-500 h-80" />
          </div>
        </div>
      </section>

      {/* Intro Page - Moved down slightly */}
      <div className="pt-24 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#963E1F] pl-17">Welcome to ChefMate</h1>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <p className="text-xl leading-relaxed text-gray-800 mb-4 text-center">
                Your ultimate kitchen companion! ChefMate simplifies cooking with smart recipe searches, AI-powered assistance, meal planning, and a foodie community.
              </p>
              <p className="text-xl leading-relaxed text-gray-800 text-center">
                Discover trending recipes, scale ingredients, find nearby grocery stores, and set the perfect cooking vibe. <br/> Make every meal special! 🍽️✨
              </p>
            </div>
            <div className="flex-shrink-0 relative top-[-100px] md:top-[-100px]">
              <div className="w-36 h-36 md:w-48 md:h-48">
                <img src={welcome} alt="Welcome" className="w-300 h-80" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Trending/>

      {/* Chill Corner Section */}
      <section className="py-24 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-6 text-left">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center">Chill</h2>
            <h2 className="text-3xl md:text-5xl font-bold text-emerald-600 text-center">Corner</h2>
          </div>
          
          <p className="text-gray-700 text-xl text-center">
            Because good food deserves good vibes!
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => navigate("/chillcorner")}
              className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition text-lg mx-auto"
            >
              Explore
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
          <img src={chill} alt="Chill" className="w-200 h-100" />
        </div>
      </section>

      <RecipeDiarySection />

      <Testimonials />

    </div>

  );
};

export default Home;