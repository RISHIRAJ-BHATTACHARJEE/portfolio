"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
  text: string;
  speed?: number; // typing speed in ms per character
  loop?: boolean; // optional looping
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 100,
  loop = false,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (loop) {
      setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, 1000);
    }
  }, [index, text, speed, loop]);

  return (
    <motion.span
      // className="font-mono text-3xl sm:text-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
      <motion.span
        // className="inline-block w-2 h-5 bg-white ml-1"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </motion.span>
  );
};

export default Typewriter;
