"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const SOCIALS = [
  {
    href: "https://github.com/RISHIRAJ-BHATTACHARJEE",
    icon: <Github className="w-4 h-4" />,
  },
  {
    href: "https://www.linkedin.com/in/rishiraj-bhattacharjee-a6804324a/",
    icon: <Linkedin className="w-4 h-4" />,
  },
  {
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=rishirajbhattacharjee974@gmail.com",
    icon: <Mail className="w-4 h-4" />,
  },
];

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const CONTACTS = [
  { label: "Bengaluru, Karnataka" },
  {
    label: "rishirajbhattacharjee974@gmail.com",
    href: "mailto:rishirajbhattacharjee974@gmail.com",
  },
  { label: "+91 6003967823", href: "tel:+916003967823" },
];

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-primary mb-4">Rishiraj</h3>
            <p className="text-muted-foreground mb-4">
              Full Stack Developer crafting modern web experiences with a focus
              on user experience and performance.
            </p>
            <div className="flex gap-4">
              {SOCIALS.map(({ href, icon }) => (
                <Button key={href} variant="outline" size="icon" asChild>
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {[
            { title: "Quick Links", items: LINKS },
            { title: "Contact", items: CONTACTS },
          ].map(({ title, items }) => (
            <div key={title}>
              <h4 className="font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {items.map(({ label, href }) => (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {label}
                      </a>
                    ) : (
                      <span className="text-muted-foreground">{label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rishiraj. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500" /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
