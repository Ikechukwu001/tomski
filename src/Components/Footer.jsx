import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#fefaf6] text-[#3c1e12] px-6 py-10"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">

        {/* Navigation Links */}
        <div className="space-y-2">
          <h2 className="font-bold text-lg">Explore</h2>
          <nav className="flex flex-col space-y-1 text-sm">
            <Link to="/feature" className="hover:text-[#5a2c1e] transition">Features</Link>
            <Link to="/" className="hover:text-[#5a2c1e] transition">About</Link>
            <Link to="/" className="hover:text-[#5a2c1e] transition">Book a Fitting</Link>
            <Link to="/" className="hover:text-[#5a2c1e] transition">Contact</Link>
          </nav>
        </div>

        {/* Social Icons */}
        <div className="space-y-2">
          <h2 className="font-bold text-lg">Follow Us</h2>
          <div className="flex gap-4 justify-center md:justify-start">
            {/* Instagram */}
            <a href="#" aria-label="Instagram">
              <svg className="w-6 h-6 fill-current hover:text-[#5a2c1e]" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5C19.55 2 22 4.45 22 7.75v8.5C22 19.55 19.55 22 16.25 22h-8.5C4.45 22 2 19.55 2 16.25v-8.5C2 4.45 4.45 2 7.75 2zm0 2C5.68 4 4 5.68 4 7.75v8.5C4 18.32 5.68 20 7.75 20h8.5C18.32 20 20 18.32 20 16.25v-8.5C20 5.68 18.32 4 16.25 4h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm5.5-1a1 1 0 110 2 1 1 0 010-2z" />
              </svg>
            </a>
            {/* TikTok */}
            <a href="#" aria-label="TikTok">
              <svg className="w-6 h-6 fill-current hover:text-[#5a2c1e]" viewBox="0 0 24 24">
                <path d="M15.6 2h2a5.35 5.35 0 004.4 4.2v2.3a7.52 7.52 0 01-4.4-1.3v6.3a6.6 6.6 0 11-6.6-6.6h.6v2.6h-.6a4 4 0 104 4v-11.5z" />
              </svg>
            </a>
            {/* YouTube */}
            <a href="#" aria-label="YouTube">
              <svg className="w-6 h-6 fill-current hover:text-[#5a2c1e]" viewBox="0 0 24 24">
                <path d="M21.6 7.2s-.2-1.5-.8-2.2c-.8-.8-1.7-.8-2.2-.9C15.3 4 12 4 12 4s-3.3 0-6.6.1c-.5 0-1.4.1-2.2.9-.6.6-.8 2.2-.8 2.2S2 8.9 2 10.6v2.8c0 1.6.2 3.4.2 3.4s.2 1.5.8 2.2c.8.8 1.8.8 2.2.9 1.6.1 6.6.1 6.6.1s3.3 0 6.6-.1c.5 0 1.4-.1 2.2-.9.6-.6.8-2.2.8-2.2s.2-1.6.2-3.4v-2.8c0-1.7-.2-3.4-.2-3.4zM10 15V9l5 3-5 3z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-sm text-center md:text-right mt-4 md:mt-0">
          <p>© {new Date().getFullYear()} OlaTomski✂️ — All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
}
