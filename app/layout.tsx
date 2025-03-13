import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import { Toaster } from "@/components/ui/sonner";
import { Footer } from "@/components/layout/Footer";

const poppins = Poppins({ weight: "200", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rishiraj | Fullstack Developer.",
  description: "Fullstack developer specializing in modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Header />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
