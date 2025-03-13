import Typewriter from "@/components/Typewriter";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <Typewriter text="Hello, I'm a Typewriter Animation!" speed={100} loop />
    </div>
  );
};

export default page;
