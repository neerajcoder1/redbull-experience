import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Red Bull Cinematic Experience | Unleash Your Energy",
  description: "Experience the premium Red Bull-inspired interactive landing page. Apple-style scroll storytelling, immersive animations, and dynamic product features.",
  authors: [{ name: "Antigravity Team" }],
  keywords: ["Red Bull", "Energy Drink", "Cinematic Web", "GSAP ScrollTrigger", "Framer Motion", "Next.js", "Tailwind CSS v4"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${spaceGrotesk.variable} dark scroll-smooth`}
    >
      <body className="bg-[#020813] text-white font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
