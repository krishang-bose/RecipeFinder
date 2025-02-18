import React, { useEffect, useRef } from "react";

export default function MusicPlayer({ songUrl }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current && songUrl) {
      audioRef.current.src = songUrl;
      audioRef.current.play();
    }
  }, [songUrl]);

  return (
    <div className="mt-4">
      {songUrl ? (
        <audio ref={audioRef} controls autoPlay className="w-full">
          <source src={songUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      ) : (
        <p className="text-green-700 italic">Click a song to start playing! 🎧</p>
      )}
    </div>
  );
}