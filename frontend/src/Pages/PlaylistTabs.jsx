import React, { useState } from "react";

const playlists = {
  "Lo-Fi Vibes": "https://open.spotify.com/embed/playlist/37i9dQZF1DXdPDLmy88MDk",
  "Jazz & Blues": "https://open.spotify.com/embed/playlist/37i9dQZF1DXbITWG1ZJKYt",
  "Acoustic Chill": "https://open.spotify.com/embed/playlist/37i9dQZF1DX2NCjY9rFTg0",
  "Relaxing Piano": "https://open.spotify.com/embed/playlist/37i9dQZF1DX4sWSpwq3LiO",
};

export default function PlaylistTabs() {
  const [selectedGenre, setSelectedGenre] = useState("Lo-Fi Vibes");

  return (
    <div className="mt-6 w-250 bg-green-800/90 rounded-xl p-5 shadow-lg">
      <h2 className="text-2xl font-semibold text-white">Choose Your Vibe ✨</h2>
      <div className="flex justify-center space-x-4 mt-4">
        {Object.keys(playlists).map((genre) => (
          <button
            key={genre}
            className={`px-8 py-4 text-5l rounded-lg font-semibold transition ${
              selectedGenre === genre ? "bg-green-900 font-semibold text-white" : "bg-green-300 hover:bg-green-500"
            }`}
            onClick={() => setSelectedGenre(genre)}
          >
            {genre}
          </button>
        ))}
      </div>

      <div className="mt-5">
        <iframe
          src={playlists[selectedGenre]}
          width="100%"
          height="500"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          className="rounded-lg shadow-md"
        ></iframe>
      </div>
    </div>
  );
}