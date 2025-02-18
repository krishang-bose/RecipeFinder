import React from "react";
import PlaylistTabs from "./PlaylistTabs";
import NavBar from "../components/NavBar"; 
import Footer from "../components/Footer"; 

export default function ChillCorner() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar Section */}
      <NavBar />

      {/* Main Content Section */}
      <div className="flex-grow bg-lime-200/35 flex flex-col items-center justify-center text-center p-10">
        {/* Heading Section */}
        <div className="flex flex-col items-center justify-center flex-grow">
          <h1 className="text-4xl font-bold text-black leading-tight">
            Hello! It's Your <span className="text-lime-500">Chill</span> Corner 🎵
          </h1>
          <p className="text-2xl font-semibold text-green-900 mt-2 italic tracking-wide">
            "Sit back, relax, and let the music take over!"
          </p>
        </div>

        {/* Playlist Section with Proper Spacing */}
        <div className="w-full max-w-[1000px] flex justify-center items-center mt-5">
          <PlaylistTabs />
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
