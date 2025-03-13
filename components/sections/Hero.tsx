"use client";

import { Source_Code_Pro } from 'next/font/google';
import { FC } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Typewriter from "../Typewriter";

const typewriterFont = Source_Code_Pro({ subsets: ['latin'], weight: ['400'] });

const getGmailComposeURL = (email: string): string =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;

const Hero: FC = () => {
  return (
    <section className="container mx-auto px-4 pt-32 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I&apos;m <span className="text-primary">Rishiraj</span>
          </h1> */}
          <div 
            className={`flex justify-center items-center text-primary text-4xl md:text-6xl font-bold mb-6 w-fit ${typewriterFont.className}`}
          >
            <Typewriter
              text="Hi, I'm RISHIRAJ!"
              speed={80}
              loop
            />
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Full Stack Developer crafting modern web experiences
          </p>
          <div className="flex gap-4">
            <Link href={getGmailComposeURL("rishirajbhattacharjee974@gmail.com")} target="_blank">
              <Button variant="default" className="gap-2 font-semibold">
                <Mail className="w-4 h-4" />
                Contact Me
              </Button>
            </Link>

            <Link href="https://github.com/RISHIRAJ-BHATTACHARJEE" target="_blank">
              <Button variant="outline" className="gap-2">
                <Github className="w-4 h-4" />
                GitHub
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex justify-center"
        >
          <Image
            src="/hero.svg"
            alt="Hero section illustration of a developer"
            width={600}
            height={600}
            className="mt-10"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
