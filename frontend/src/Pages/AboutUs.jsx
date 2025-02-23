import React from 'react';
import krishang from '../icons/krishang.png';
import shrey from '../icons/shrey.png';
import stuti from '../icons/stuti.png';
import ipshita from '../icons/ipshita.png';
import contactus from '../icons/contactus.png';

const AboutUs = () => {
  const creators = [
    {
      name: "Shrey kothari",
      image: shrey,
      description: "Shrey is an enthusiastic tech developer, always eager to learn and a great team player. Skilled in ML and MERN development, he thrives in collaborative environments. Currently pursuing a B.Tech in Information Technology and Engineering at MAIT, he is in his third year, continuously honing his expertise in cutting-edge technologies."
    },
    {
      name: "Ipshita Tandon",
      image: ipshita,
      description: "Ipshita is an enthusiastic tech developer, always eager to learn and a great team player. Skilled in Machine Learning, she enjoys tackling challenges with innovative solutions. Currently pursuing a B.Tech in CSE-AI at IGDTUW, she is in her third year, constantly expanding her expertise in AI and advanced technologies."
    },
    {
      name: "Krishang Bose",
      image: krishang,
      description: "Krishang Bose is an excellent full-stack developer with a sharp analytical mind for DSA solving and a strong team player. Currently in his second year pursuing CSE at BU, he is passionate about building scalable solutions and continuously enhancing his skills in development and problem-solving."
    },
    {
      name: "Stuti Tiwari",
      image: stuti,
      description: "Stuti is an enthusiastic tech developer, always eager to learn and a great team player. Skilled in Machine Learning, she excels in solving complex problems with innovative solutions. Currently pursuing a B.Tech in CSE-AI at IGDTUW, she is in her third year, actively expanding her knowledge in AI and emerging technologies."
    }
  ];

  return (
    <div className="p-8 bg-[#fdfde8] min-h-screen">
      {/* About Creators Section */}
      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-12 text-center">
          About <span className="text-teal-600">Creators</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {creators.map((creator, index) => (
            <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                <img 
                  src={creator.image}
                  alt={creator.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{creator.name}</h3>
              <p className="text-gray-600">{creator.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Contact Us</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Illustration */}
          <div className="w-full md:w-1/2">
            {/* <img 
              src="/api/placeholder/400/400" 
              alt="Cooking illustration"
              className="w-full"
            /> */}
            <img src={contactus} alt="contactus" className="w-100 h-100" />
          </div>
          
          {/* Contact Form */}
          <div className="w-full md:w-1/2">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 rounded-lg bg-[#e2f1e4]"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded-lg bg-[#e2f1e4]"
                />
              </div>
              <div>
                <textarea
                  placeholder="Any Queries/Feedback"
                  rows={4}
                  className="w-full p-3 rounded-lg bg-[#e2f1e4]"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-full bg-gradient-to-r from-green-400 to-green-300 text-black font-semibold hover:opacity-90 transition-opacity"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;