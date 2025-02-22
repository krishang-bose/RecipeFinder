import React from "react";
import PlaylistTabs from "./PlaylistTabs";

export default function ChillCorner() {
  return (
    <div className="min-h-screen bg-lime-50">
      {/* Header Section */}
      <div className="py-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 leading-tight">
          Hello! It's Your <span className="text-lime-600">Chill</span> Corner 🎵
        </h1>
        <p className="text-xl text-gray-600 mt-3 italic">
          "Sit back, relax, and let the music take over!"
        </p>
      </div>

      {/* Main Content Section */}
      <div className="max-w-[1400px] mx-auto px-4">
        <PlaylistTabs />
      </div>
    </div>
  );
}