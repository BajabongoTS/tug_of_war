"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  function handleJoinRed() {
    router.push('/tug_of_war_game?team=red');
  }

  function handleJoinBlue() {
    router.push('/tug_of_war_game?team=blue');
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8">
      <h1 className="text-4xl font-bold">Tug of War</h1>
      <div className="flex justify-center gap-4">
        <button
          onClick={handleJoinRed}
          className="bg-red-500 hover:bg-red-600 text-white text-xl px-8 py-4 rounded-lg shadow-lg"
        >
          Join Red Team
        </button>
        <button
          onClick={handleJoinBlue}
          className="bg-blue-500 hover:bg-blue-600 text-white text-xl px-8 py-4 rounded-lg shadow-lg"
        >
          Join Blue Team
        </button>
      </div>
    </div>
  );
}
