"use client";

import { FC } from "react";
import { motion } from "framer-motion";

import GithubStats from "@/components/GithubStats";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Testimonials from "@/components/sections/Testimonials";

const Home: FC = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Skills />
      <Testimonials />
      <Projects />

      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Github <span className="text-primary"> Activity</span>
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <GithubStats username="RISHIRAJ-BHATTACHARJEE" />
        </motion.div>
      </section>

      <Contact />
    </main>
  );
};

export default Home;
