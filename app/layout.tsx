import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "KeepersXR | Immersive VR & AR Solutions in Uganda",
  description: "Pioneering Extended Reality (XR) development in Uganda. KeepersXR merges cutting-edge technology with cultural preservation and enterprise solutions.",
};

import CursorGlow from "@/components/CursorGlow";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} scroll-smooth`}>
      <body className="antialiased font-sans bg-dark-900 text-white min-h-screen">
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
