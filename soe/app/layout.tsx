import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_TAGLINE } from "./lib/constants";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_TAGLINE,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
