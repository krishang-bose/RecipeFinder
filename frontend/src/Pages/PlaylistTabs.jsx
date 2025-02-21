import React from "react";

const playlists = {
  "Lo-Fi Vibes": {
    url: "https://open.spotify.com/embed/playlist/37i9dQZF1DXdPDLmy88MDk",
    accent: "bg-purple-600",
    hover: "hover:bg-purple-100",
  },
  "Jazz & Blues": {
    url: "https://open.spotify.com/embed/playlist/37i9dQZF1DXbITWG1ZJKYt",
    accent: "bg-blue-600",
    hover: "hover:bg-blue-100",
  },
  "Acoustic Chill": {
    url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX2NCjY9rFTg0",
    accent: "bg-amber-600",
    hover: "hover:bg-amber-100",
  },
  "Relaxing Piano": {
    url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX4sWSpwq3LiO",
    accent: "bg-rose-600",
    hover: "hover:bg-rose-100",
  },
};

export default function PlaylistTabs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {Object.entries(playlists).map(([genre, { url, color, accent, hover }]) => (
        <div
          key={genre}
          className={`${color} rounded-xl p-6 transition-all duration-300 ${hover}`}
        >
          <div className="flex flex-col h-full">
            <h2 className={`text-xl font-bold ${accent} bg-clip-text text-transparent mb-4`}>
              {genre}
            </h2>
            
            <div className="flex-grow">
              <iframe
                src={url}
                width="100%"
                height="380"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                className="rounded-lg shadow-md"
              ></iframe>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}