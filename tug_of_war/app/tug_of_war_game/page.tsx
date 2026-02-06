"use client";

import { useState } from "react";

export default function Home() {
  
  const [score, setScore] = useState(100);

  function handleRedTeamClick() {
    setScore(score + 1);
  }

  function handleBlueTeamClick() {
    setScore(score - 1);
  }

  return (
    <div>
      <h1>Tug of War</h1>
      <div className="flex justify-center gap-4">
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded" onClick={handleRedTeamClick}>Red Team</button>
        <p>{score}</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" onClick={handleBlueTeamClick}>Blue Team</button>
      </div>
    </div>
  );
}
