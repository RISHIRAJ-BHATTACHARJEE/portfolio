"use client";
import { FC, useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { Card } from "../ui/card";
import ContactForm from "../ContactForm";
import Image from "next/image";

const SOCIAL_LINKS = [
  {
    href: "https://github.com/RISHIRAJ-BHATTACHARJEE",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/rishiraj-bhattacharjee-a6804324a/",
    icon: Linkedin,
    label: "LinkedIn",
  },
];

const Contact: FC = () => {
  const emailURL = useMemo(
    () => `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent("rishirajbhattacharjee974@gmail.com")}`,
    []
  );

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6">
            Let&apos;s <span className="text-primary">Connect</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mb-8">
            {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
              <Button key={label} variant="outline" size="icon" asChild>
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <Icon className="w-5 h-5" />
                </a>
              </Button>
            ))}
            <Button variant="outline" size="icon" asChild>
              <a href={emailURL} target="_blank" rel="noopener noreferrer" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Contact Form */}
          <Card className="px-6 py-6">
            <ContactForm />
          </Card>
        </motion.div>

        {/* Right Section - Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center mt-20"
        >
          <Image
            src="/contact.svg"
            alt="Contact Illustration"
            width={600}
            height={600}
            priority
            className="object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
