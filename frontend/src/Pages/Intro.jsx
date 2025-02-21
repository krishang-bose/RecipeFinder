import React from 'react';

const ChefMate = () => {
  return (
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
  );
};

export default ChefMate;