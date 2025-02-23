import React from 'react';
import roll from '../icons/roll.png'

const Trending = () => {
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
    <div className="py-24 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">Let&apos;s See What&apos;s Trending...</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto">
          {salads.map((salad) => (
            <div key={salad.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="relative">
                <img src={roll} alt="Roll" className="w-40 h-40 rounded-full mx-auto m-5" />
                <div className="absolute top-4 left-4">
                  <div className="bg-black text-white font-bold rounded-full w-12 h-12 flex items-center justify-center text-lg">
                    ₹{salad.price}
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
      );
    };

export default Trending;