import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-[#5a2c1e] text-white p-4">
      <nav className="container mx-auto flex justify-between items-center relative">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          Awimotalo
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="px-4 py-2 hover:bg-[#3c1e12] rounded">
            Home
          </Link>
          <Link to="/Collection" className="px-4 py-2 hover:bg-[#3c1e12] rounded">
            Collection
          </Link>
          <Link to="/Order" className="px-4 py-2 hover:bg-[#3c1e12] rounded">
            Order
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden" ref={menuRef}>
          <button
            className="focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {/* Animated icon */}
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${
                menuOpen ? "rotate-90" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute right-0 mt-2 bg-[#3c1e12] rounded shadow-lg py-2 w-40 z-50"
              >
                <Link
                  to="/"
                  className="block px-4 py-2 hover:bg-[#4a2619]"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/Collection"
                  className="block px-4 py-2 hover:bg-[#4a2619]"
                  onClick={() => setMenuOpen(false)}
                >
                  Collection
                </Link>
                <Link
                  to="/Order"
                  className="block px-4 py-2 hover:bg-[#4a2619]"
                  onClick={() => setMenuOpen(false)}
                >
                  Order
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
}
