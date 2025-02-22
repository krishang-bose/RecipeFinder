import React from 'react';

const RecipeDiarySection = () => {
  return (
    <div className="relative min-h-[500px] bg-gradient-to-br from-[#FFFBE6] to-[#F2F9C0] overflow-hidden">
      <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left side with illustration */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <img
              src="/api/placeholder/400/400"
              alt="Recipe book illustration"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Right side with text */}
        <div className="md:w-1/2 text-left space-y-6">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-6xl font-bold text-black">Recipe</h2>
            <h2 className="text-4xl md:text-6xl font-bold text-teal-600">Diary</h2>
          </div>
          
          <p className="text-2xl md:text-3xl text-gray-800 font-medium">
            Because good food deserves good vibes!
          </p>
          
          <button className="px-8 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-green-400 to-emerald-400 text-white hover:from-green-500 hover:to-emerald-500 transition-colors duration-300">
            Explore
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 right-10">
        <div className="w-12 h-12 text-yellow-400">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M2 2L22 22M2 22L22 2" />
          </svg>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-10">
        <div className="w-12 h-12 text-yellow-400">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M2 2L22 22M2 22L22 2" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default RecipeDiarySection;