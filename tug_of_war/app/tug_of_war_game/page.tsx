"use client";

import { useState } from "react";

export default function Home() {

  const [score, setScore] = useState(50);

  function handleRedTeamClick() {
    setScore(Math.min(100, score + 1));
  }

  function handleBlueTeamClick() {
    setScore(Math.max(0, score - 1));
  }

  if (score === 100) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-8">
        <h1 className="text-4xl font-bold">Red Team Wins!</h1>
      </div>
    );
  }

  if (score === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-8">
        <h1 className="text-4xl font-bold">Blue Team Wins!</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8">
      <h1 className="text-4xl font-bold">Tug of War</h1>

      <div className="flex w-3/4 h-12 border-2 border-black rounded-full overflow-hidden">
        <div
          className="bg-red-500 h-full transition-all duration-100 ease-out flex items-center justify-center text-white font-bold"
          style={{ width: `${score}%` }}
        >
          {score > 10 ? `${score}%` : ''}
        </div>
        <div
          className="bg-blue-500 h-full flex-1 transition-all duration-100 ease-out flex items-center justify-center text-white font-bold"
        >
          {100 - score > 10 ? `${100 - score}%` : ''}
        </div>
      </div>

      <div className="flex justify-center gap-10">
        <button className="bg-red-500 hover:bg-red-600 text-white text-xl px-8 py-4 rounded-lg shadow-lg" onClick={handleRedTeamClick}>Red Team</button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white text-xl px-8 py-4 rounded-lg shadow-lg" onClick={handleBlueTeamClick}>Blue Team</button>
      </div>
    </div>
  );
}
