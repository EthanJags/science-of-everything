"use client";

import React, { useEffect, useRef, useState } from "react";
import { Suspense, lazy } from "react";
import Link from "next/link";
import { NAV_LINKS } from "../app/lib/constants";
import Podcastlist from "./Podcastlist";
const Spline = lazy(() => import("@splinetool/react-spline"));

function HeroSplineBackground() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        pointerEvents: "auto",
        overflow: "hidden",
      }}
    >
      <Spline
        style={{
          width: "100%",
          height: "100vh",
          pointerEvents: "auto",
        }}
        scene="https://prod.spline.design/us3ALejTXl6usHZ7/scene.splinecode"
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          background: `
            linear-gradient(to right, rgba(0, 0, 0, 0.8), transparent 30%, transparent 70%, rgba(0, 0, 0, 0.8)),
            linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.9))
          `,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

function ScreenshotSection({
  screenshotRef,
}: {
  screenshotRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <section className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 mt-11 md:mt-12">
      <div
        ref={screenshotRef}
        className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700/50 w-full md:w-[80%] lg:w-[70%] mx-auto"
      >
        <div>
          <img
            src="https://cdn.sanity.io/images/s6lu43cv/production-v4/13b6177b537aee0fc311a867ea938f16416e8670-3840x2160.jpg?w=3840&h=2160&q=10&auto=format&fm=jpg"
            alt="App Screenshot"
            className="w-full h-auto block rounded-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

function HeroContent() {
  return (
    <div className="text-left text-white pt-16 sm:pt-24 md:pt-32 px-4 max-w-3xl">
      <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight tracking-wide">
        The Science of <br className="sm:hidden" />
        Everything
        <br className="sm:hidden" /> Podcast
      </h1>
      <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-80 max-w-xl">
        Exploring the wonders of our world through science, technology, and
        discovery.
      </p>
      <div className="flex pointer-events-auto flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-3">
        <button
          className="bg-[#8200DB29] hover:bg-black/50 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full transition duration-300 w-full sm:w-auto border border-[#322D36]"
          style={{ backdropFilter: "blur(8px)" }}
        >
          Listen Now
        </button>
        <button className="pointer-events-auto bg-[#0009] border border-gray-600 hover:border-gray-400 text-gray-200 hover:text-white font-medium py-2 sm:py-3 px-6 sm:px-8 rounded-full transition duration-300 flex items-center justify-center w-full sm:w-auto">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
          Watch the Video
        </button>
      </div>
    </div>
  );
}

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinkClass = (extraClasses = "") => {
    return `text-sm transition duration-150 text-gray-300 hover:text-white ${extraClasses}`;
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-20"
      style={{
        backgroundColor: "rgba(13, 13, 24, 0.3)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderRadius: "0 0 15px 15px",
      }}
    >
      <div className="container mx-auto px-4 py-4 md:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center space-x-6 lg:space-x-8">
          <div className="text-white" style={{ width: "32px", height: "32px" }}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM12.4306 9.70695C12.742 9.33317 13.2633 9.30058 13.6052 9.62118L19.1798 14.8165C19.4894 15.1054 19.4894 15.5841 19.1798 15.873L13.6052 21.0683C13.2633 21.3889 12.742 21.3563 12.4306 19.9991V9.70695Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <Link key={link.path} href={link.path} className={navLinkClass()}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-4 md:space-x-6">
          <a
            href="#"
            className="bg-[#8200DB29] hover:bg-black/50 text-white font-semibold py-2 px-5 rounded-full text-sm md:text-base border border-[#322D36]"
            style={{ backdropFilter: "blur(8px)" }}
          >
            Listen Now
          </a>
          <button
            className="lg:hidden text-white p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden bg-black bg-opacity-50 border-t border-gray-700/30 absolute top-full left-0 right-0 z-30
           overflow-hidden transition-all duration-300 ease-in-out
           ${isMobileMenuOpen ? "max-h-screen opacity-100 pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none"}
           `}
        style={{
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
      >
        <div className="px-4 py-6 flex flex-col space-y-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="text-gray-300 hover:text-gray-100 text-sm py-2 transition duration-150"
              onClick={toggleMobileMenu}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#"
            className="text-gray-300 hover:text-gray-100 text-sm py-2 transition duration-150"
            onClick={toggleMobileMenu}
          >
            Contact Sales
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-gray-100 text-sm py-2 transition duration-150"
            onClick={toggleMobileMenu}
          >
            Sign In
          </a>
        </div>
      </div>
    </nav>
  );
}

export const HeroSection = () => {
  const screenshotRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (screenshotRef.current && heroContentRef.current) {
        requestAnimationFrame(() => {
          const scrollPosition = window.pageYOffset;
          if (screenshotRef.current) {
            screenshotRef.current.style.transform = `translateY(-${scrollPosition * 0.5}px)`;
          }

          const maxScroll = 400;
          const opacity = 1 - Math.min(scrollPosition / maxScroll, 1);
          if (heroContentRef.current) {
            heroContentRef.current.style.opacity = opacity.toString();
          }
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* <Navbar /> */}

      <div className="relative min-h-screen">
        <div className="absolute inset-0 z-0 pointer-events-auto">
          <HeroSplineBackground />
        </div>

        <div
          ref={heroContentRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            zIndex: 10,
            pointerEvents: "none",
          }}
        >
          <div className="container mx-auto">
            <HeroContent />
          </div>
        </div>
      </div>

    </div>
  );
};
