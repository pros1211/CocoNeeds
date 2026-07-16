"use client";
import React, { useState, useEffect } from "react";
export default function Greeting() {
  const [greeting, setGreet] = useState("Welcome");
  const [mounted, setMount] = useState(false);
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setGreet("Good Morning");
    } else if (hour >= 12 && hour < 15) {
      setGreet("Good afternoon");
    } else if (hour >= 15 && hour < 18) {
      setGreet("Good evening");
    } else {
      setGreet("Good night");
    }
    setMount(true);
  }, []);
  if (!mounted) {
    return (
      <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
        Welcome, farmer !
      </h1>
    );
  }
  return (
    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
      {greeting}, farmer !
    </h1>
  );
}
