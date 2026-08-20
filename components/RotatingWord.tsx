"use client";

import { useEffect, useState } from "react";

/** Cycles through a list of words inside a highlighted box, matching the hero's rotating-keyword pattern. */
export function RotatingWord({ words, intervalMs = 2200 }: { words: string[]; intervalMs?: number }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [words.length, intervalMs]);

  return (
    <span
      key={index}
      className="animate-word-in mt-2 inline-block max-w-full truncate whitespace-nowrap rounded-md bg-secondary px-3 py-1 align-top text-black"
    >
      {words[index]}
    </span>
  );
}
