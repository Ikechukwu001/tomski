import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Jonkoso from '../assets/Jonkoso.jpg';
import Jonkoso2 from '../assets/Jonkoso2.jpg';
import Jonkoso3 from '../assets/Jonkoso3.jpg';
import Jonkoso4 from '../assets/Jonkoso4.jpg';

const data = {
  "Bridal Elegance": [
    { id: 1, title: "Royal White", image: Jonkoso, price: "₦45,000" },
    { id: 2, title: "Ivory Flow", image: Jonkoso2, price: "₦38,000" },
    { id: 3, title: "Pearl Grace", image: Jonkoso3, price: "₦41,500" },
    { id: 4, title: "Golden Veil", image: Jonkoso4, price: "₦50,000" },
    { id: 5, title: "Silk Dream", image: Jonkoso, price: "₦48,000" },
    { id: 6, title: "Lace Whisper", image: Jonkoso2, price: "₦46,000" },
    { id: 7, title: "Blush Elegance", image: Jonkoso3, price: "₦49,000" },
    { id: 8, title: "Vintage Charm", image: Jonkoso4, price: "₦44,000" },
    { id: 9, title: "Satin Glow", image: Jonkoso, price: "₦47,000" },
  ],
    "Casual Chic": [
    { id: 10, title: "Urban Vibe", image: Jonkoso2, price: "₦25,000" },
    { id: 11, title: "Weekend Comfort", image: Jonkoso4, price: "₦22,000" },
    { id: 12, title: "Street Style", image: Jonkoso3, price: "₦28,000" },
    { id: 13, title: "Boho Bliss", image: Jonkoso, price: "₦30,000" },
    { id: 14, title: "Denim Dreams", image: Jonkoso3, price: "₦26,000" },
    { id: 15, title: "Casual Luxe", image: Jonkoso2, price: "₦27,000" },
    { id: 16, title: "Effortless Elegance", image: Jonkoso4, price: "₦24,000" },
    { id: 17, title: "Chic Layers", image: Jonkoso, price: "₦29,000" },
    { id: 18, title: "Relaxed Fit", image: Jonkoso, price: "₦23,000" },
    ],
    "Evening Glam": [
        { id: 19, title: "Midnight Sparkle", image: Jonkoso, price: "₦60,000" },
        { id: 20, title: "Gala Glow", image: Jonkoso4, price: "₦65,000" },
        { id: 21, title: "Red Carpet Ready", image: Jonkoso2, price: "₦70,000" },
        { id: 22, title: "Elegant Noir", image: Jonkoso, price: "₦68,000" },
        { id: 23, title: "Champagne Dreams", image: Jonkoso4, price: "₦72,000" },
        { id: 24, title: "Starlit Elegance", image: Jonkoso3, price: "₦75,000" },
        { id: 25, title: "Glamour Goddess", image: Jonkoso, price: "₦78,000" },
        { id: 26, title: "Twilight Radiance", image: Jonkoso4, price: "₦80,000" },
        { id: 27, title: "Crystal Chic", image: Jonkoso2, price: "₦82,000" },
    ],
};

export default function GridFeature() {
  const rowRefs = useRef({});
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  const [dragLimits, setDragLimits] = useState({});

  useEffect(() => {
    const newLimits = {};
    Object.keys(rowRefs.current).forEach((key) => {
      const container = rowRefs.current[key];
      if (container) {
        const scrollWidth = container.scrollWidth;
        const clientWidth = container.clientWidth;
        newLimits[key] = {
          left: -(scrollWidth - clientWidth),
          right: 0,
        };
      }
    });
    setDragLimits(newLimits);
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-[#FAF9F6] text-black min-h-screen px-6 md:px-16 py-12 space-y-16"
    >
      <h2 className="text-4xl font-bold text-center mb-4">Discover Our Collections</h2>

      {Object.entries(data).map(([sectionTitle, items]) => (
        <div key={sectionTitle} className="relative">
          <h3 className="text-2xl font-semibold mb-4">{sectionTitle}</h3>

          <div className="overflow-hidden" ref={(el) => (rowRefs.current[sectionTitle] = el)}>
            <motion.div
              drag="x"
              dragConstraints={dragLimits[sectionTitle] || { left: 0, right: 0 }}
              className="flex space-x-4 pb-4 cursor-grab active:cursor-grabbing"
            >
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="relative min-w-[220px] h-[320px] bg-white rounded-xl overflow-hidden shadow-lg"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full transition duration-300 opacity-90 hover:opacity-100"
                  />

                  {/* Title overlay */}
                  <div className="absolute bottom-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent w-full p-4">
                    <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                  </div>

                  {/* Price + WhatsApp CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full px-4 text-center"
                  >
                    <p className="text-sm text-white bg-black/60 rounded px-2 py-1 inline-block mb-2">
                      {item.price}
                    </p>
                    <a
                      href={`https://wa.me/+2348131168712?text=Hi,%20I%27m%20interested%20in%20"${encodeURIComponent(item.title)}"%20for%20${encodeURIComponent(item.price)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#eab308] text-black font-semibold px-4 py-2 rounded-full hover:bg-yellow-500 transition"
                    >
                      Get Now
                    </a>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      ))}
    </motion.section>
  );
}
