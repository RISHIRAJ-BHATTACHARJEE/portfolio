"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { technologies } from "@/constants";
import { Card } from "../ui/card";
import Image from "next/image";

const Skills: FC = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">
        <span className="text-primary">Skills</span> & Technologies
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
      >
        {technologies.map((tech) => (
          <Card
            key={tech.name}
            className="group py-4 flex flex-col items-center justify-center transition-all border border-transparent hover:border-primary hover:bg-yellow-300 hover:text-black hover:font-semibold"
            aria-label={tech.name}
          >
            <Image
              src={tech.logo}
              alt={`${tech.name} Logo`}
              width={48}
              height={48}
              className="transition-transform duration-400 group-hover:scale-200 group-hover:rotate-360"
            />
            <span className="text-sm font-medium">{tech.name}</span>
          </Card>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
