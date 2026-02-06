"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Tug of War</h1>
      <div className="flex justify-center gap-4">
        <Link href="/tug_of_war_game">Play Tug of War</Link>
      </div>
    </div>
  );
}
