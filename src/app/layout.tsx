import type { Metadata } from "next";
import {Inter, Cormorant_Infant } from "next/font/google";
import "./globals.css";
import { Navigation } from "./components/navigation";
import { Footer } from "./components/footer";

const inter = Inter({ subsets: ["latin"]});

const headingFont = Cormorant_Infant({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--heading-font",
})

export const metadata: Metadata = {
  title: "Next-Tour 🌍",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${headingFont.variable} bg-slate-200`}>
          <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
