"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import { projects } from "@/constants";
import { Card } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { Check, ExternalLink, Github } from "lucide-react";
import { Badge } from "../ui/badge";

const Projects: FC = () => {
  return (
    <section id="projects" className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore my latest projects showcasing my expertise in full-stack
          development, from e-commerce platforms to AI-powered applications.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(({ title, description, image, liveUrl, githubUrl, technologies, features }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="group overflow-hidden border border-border/5 bg-card hover:shadow-xl transition-all duration-300">
              {/* Image Section */}
              <div className="relative overflow-hidden aspect-video">
                <Image
                  src={image}
                  alt={title || "Project image"}
                  width={800}
                  height={600}
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button asChild variant="secondary" size="sm">
                    <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button asChild variant="secondary" size="sm">
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {title}
                </h3>
                <p className="text-muted-foreground mb-4">{description}</p>

                {/* Technologies & Features */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-secondary/50">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <ul className="space-y-2">
                    {features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
