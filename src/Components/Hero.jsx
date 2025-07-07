import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import jonkoso from '../assets/jonkoso.jpg';

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#fefaf6] text-[#3c1e12] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 overflow-hidden">
      
      {/* TEXT SECTION */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.4 }}
        className="md:w-1/2 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Where Heritage Meets Haute Couture
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-md">
          Discover timeless African fashion reimagined with a modern edge. Every stitch, every print tells a story of culture and class.
        </p>
        <Link
          to="/feature"
          className="inline-block bg-[#5a2c1e] text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-[#3c1e12] transition"
        >
          Explore Features
        </Link>
      </motion.div>

      {/* IMAGE SECTION */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true, amount: 0.4 }}
        className="md:w-1/2 mt-10 md:mt-0"
      >
        <img
          src={jonkoso}
          alt="Fashion showcase"
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </motion.div>
    </section>
  );
}
