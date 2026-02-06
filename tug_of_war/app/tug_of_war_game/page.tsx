"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { db } from "../lib/firebase";
import { ref, onValue, set } from "firebase/database";

function Game() {
  const searchParams = useSearchParams();
  const team = searchParams.get('team');
  const [score, setScore] = useState(50);

  useEffect(() => {
    const scoreRef = ref(db, 'score');
    const unsubscribe = onValue(scoreRef, (snapshot) => {
      const data = snapshot.val();
      if (typeof data === 'number') {
        setScore(data);
      }
    });

    return () => unsubscribe();
  }, []);

  function handleRedTeamClick() {
    if (team !== 'red') return;
    const newScore = Math.min(100, score + 1);
    set(ref(db, 'score'), newScore);
  }

  function handleBlueTeamClick() {
    if (team !== 'blue') return;
    const newScore = Math.max(0, score - 1);
    set(ref(db, 'score'), newScore);
  }

  if (score === 100) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-8">
        <h1 className="text-4xl font-bold">Red Team Wins!</h1>
        <Link href="/" className="text-blue-500 hover:underline text-xl">Back to Home</Link>
      </div>
    );
  }

  if (score === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-8">
        <h1 className="text-4xl font-bold">Blue Team Wins!</h1>
        <Link href="/" className="text-blue-500 hover:underline text-xl">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8">
      <h1 className="text-4xl font-bold">Tug of War</h1>

      {team && <h2 className="text-2xl font-semibold uppercase">You are on the <span className={team === 'red' ? "text-red-500" : "text-blue-500"}>{team}</span> Team</h2>}

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
        <button
          disabled={team !== 'red'}
          className={`text-white text-xl px-8 py-4 rounded-lg shadow-lg ${team === 'red' ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-400 cursor-not-allowed'}`}
          onClick={handleRedTeamClick}
        >
          Red Team
        </button>
        <button
          disabled={team !== 'blue'}
          className={`text-white text-xl px-8 py-4 rounded-lg shadow-lg ${team === 'blue' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'}`}
          onClick={handleBlueTeamClick}
        >
          Blue Team
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Game />
    </Suspense>
  );
}
