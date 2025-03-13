import { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "sonner";

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
        <body className={`${poppins.className} h-screen`}>
          {children}
          <Toaster />
        </body>
      </html>
    );
  }