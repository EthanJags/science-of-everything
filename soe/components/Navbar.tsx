"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "../app/lib/constants";
import Image from "next/image";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        isMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const menuStyles = {
    closed:
      "hidden md:block md:relative md:w-auto md:top-auto md:left-auto md:right-auto",
    open: "block absolute top-[70px] right-4 z-50 md:relative md:block md:w-auto md:top-auto md:left-auto md:right-auto",
  };

  const listStyles = {
    closed:
      "flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:p-0",
    open: "flex flex-col p-4 mt-4 rounded-lg bg-gray-800 shadow-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent md:p-0",
  };

  const isActive = (path: string) => {
    // Match exact paths and also treat root path specially
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const activeLinkClass = "font-bold text-blue-500 hover:text-blue-700";
  const normalLinkClass = "text-white hover:text-gray-300";

  return (
    <nav
      className={`w-full z-50 bg-transparent ${
        isHome ? "absolute text-white" : " text-white top-0"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo or Site name */}
        <Link href="/" className="text-xl font-bold">
          <div className="flex items-center">
            <Image
              src="/assets/science.svg"
              alt="Science Logo"
              width={32}
              height={32}
              className="mr-2 invert"
            />
          </div>
        </Link>

        {/* Hamburger button */}
        <button
          ref={buttonRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-400"
          aria-controls="navbar-menu"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          id="navbar-menu"
          ref={menuRef}
          className={menuStyles[isMenuOpen ? "open" : "closed"]}
        >
          <ul className={listStyles[isMenuOpen ? "open" : "closed"]}>
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`block py-2 pl-3 pr-4 ${
                    isActive(link.path) ? activeLinkClass : normalLinkClass
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
