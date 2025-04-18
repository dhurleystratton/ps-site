"use client";

import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-6 md:px-8 lg:px-12 max-w-screen-2xl mx-auto">
        <div className="flex-1">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={800}
            className="font-content text-lg md:text-xl cursor-pointer"
          >
            p-s
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="system"
            spy={true}
            smooth={true}
            offset={-100}
            duration={800}
            className="nav-link cursor-pointer hover:opacity-70"
          >
            System
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-100}
            duration={800}
            className="nav-link cursor-pointer hover:opacity-70"
          >
            Services
          </Link>
          <Link
            to="case-studies"
            spy={true}
            smooth={true}
            offset={-100}
            duration={800}
            className="nav-link cursor-pointer hover:opacity-70"
          >
            Cases
          </Link>
          <Link
            to="philosophy"
            spy={true}
            smooth={true}
            offset={-100}
            duration={800}
            className="nav-link cursor-pointer hover:opacity-70"
          >
            Philosophy
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={800}
            className="nav-link cursor-pointer hover:opacity-70"
          >
            Contact
          </Link>
        </nav>
        <div className="flex-1 flex justify-end">
          <button className="block md:hidden">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 6H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 18H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
