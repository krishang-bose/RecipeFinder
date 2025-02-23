import React from 'react';
import { useNavigate } from 'react-router-dom';
import diary from '../icons/diary.png';

const RecipeDiarySection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-24 px-6 md:px-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left side with illustration */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
          <img src={diary} alt="Diary" className="w-100 h-50" />
          </div>
        </div>

        {/* Right side with text */}
        <div className="md:w-1/2 text-left space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center">Recipe</h2>
            <h2 className="text-3xl md:text-5xl font-bold text-emerald-600 text-center">Diary</h2>
          </div>
          
          <p className="text-gray-700 text-xl text-center">
            Because good food deserves good vibes!
          </p>
          
          <div className="flex justify-center">
            <button
                onClick={() => navigate("/MyRecipeDiary")}
                className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition text-lg"
            >
                Explore
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeDiarySection;