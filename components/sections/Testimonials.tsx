"use client";

import { FC } from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";
import { testimonials } from "@/constants";

const transitionSettings = { duration: 0.5, ease: "easeOut" };

const Testimonials: FC = () => {
  return (
    <section id="testimonials" className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Client <span className="text-primary">Testimonials</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map(({ name, content, role, image }, index) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transitionSettings, delay: index * 0.1 }}
          >
            <Card className="p-6 h-full flex flex-col bg-card border border-border/5">
              <Quote
                className="w-8 h-8 text-primary opacity-50 mb-6"
                aria-hidden="true"
              />
              <p className="text-muted-foreground mb-6 flex-grow">{content}</p>
              <div className="flex items-center gap-4">
                <Image
                  src={image}
                  alt={`${name}'s picture`}
                  width={50}
                  height={50}
                  className="rounded-full"
                  priority
                />
                <div>
                  <h4 className="font-semibold text-primary">{name}</h4>
                  <p className="text-sm text-muted-foreground">{role}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
