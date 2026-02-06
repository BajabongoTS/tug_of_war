"use client";

import { useEffect } from "react";
import { ref, set } from "firebase/database";
import { db } from "../app/lib/firebase";

export default function Page() {
  useEffect(() => {
    set(ref(db, "ping"), {
      status: "ok",
      time: Date.now(),
    })
      .then(() => console.log("✅ Firebase działa"))
      .catch(console.error);
  }, []);

  return <div>Firebase test</div>;
}