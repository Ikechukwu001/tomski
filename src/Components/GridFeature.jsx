import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

import Jonkoso from '../assets/Jonkoso.jpg';
import Jonkoso2 from '../assets/Jonkoso2.jpg';
import Jonkoso3 from '../assets/Jonkoso3.jpg';
import Jonkoso4 from '../assets/Jonkoso4.jpg';
import TraditionalOne from '../assets/Images/TraditionalOne.jpg';
import TraditionalTwo from '../assets/Images/TraditionalTwo.jpg';
import TraditionalThree from '../assets/Images/TraditionalThree.jpg';
import TraditionalFour from '../assets/Images/TraditionalFour.jpg';
import BaggyPantsOne from '../assets/Images/BaggyPantOne.jpg';
import BaggyPantsTwo from '../assets/Images/BaggyPantTwo.jpg';
import BaggyPantsThree from '../assets/Images/BaggyPantThree.jpg';
import ClassicOne from '../assets/Images/ClassicJonkosoOne.jpg';
import ClassicTwo from '../assets/Images/ClassicJonkosoTwo.jpg';
import ClassicThree from '../assets/Images/ClassicJonkosoThree.jpg';

const data = {
  "Traditional Couples Attire": [
    { id: 1, title: "Traditional Attire 1", image: TraditionalOne, price: "₦---" },
    { id: 2, title: "Traditional Attire 2", image: TraditionalTwo, price: "₦---" },
    { id: 3, title: "Traditional Attire 3", image: TraditionalThree, price: "₦---" },
    { id: 4, title: "Traditional Attire 4", image: TraditionalFour, price: "₦---" },
    { id: 5, title: "Traditional Attire 5", image: TraditionalTwo, price: "₦---" },
    { id: 6, title: "Traditional Attire 6", image: TraditionalThree, price: "₦---" },
    { id: 7, title: "Traditional Attire 7", image: TraditionalOne, price: "₦---" },
    { id: 8, title: "Traditional Attire 8", image: TraditionalTwo, price: "₦---" },
  ],
  "Classic Premium Senator": [
    { id: 10, title: "Premium Senator 1", image: ClassicOne, price: "₦---" },
    { id: 11, title: "Premium Senator 2", image: Jonkoso4, price: "₦---" },
    { id: 12, title: "Premium Senator 3", image: Jonkoso3, price: "₦---" },
    { id: 13, title: "Premium Senator 4", image: Jonkoso, price: "₦---" },
    { id: 14, title: "Premium Senator 5", image: Jonkoso2, price: "₦---" },
    { id: 15, title: "Premium Senator 6", image: ClassicTwo, price: "₦---" },
    { id: 16, title: "Premium Senator 7", image: ClassicThree, price: "₦---" },
    { id: 17, title: "Premium Senator 8", image: Jonkoso, price: "₦---" },
    { id: 18, title: "Premium Senator 9", image: Jonkoso3, price: "₦---" },
  ],
  "Baggy Pants": [
    { id: 19, title: "Baggy Pants 1", image: BaggyPantsOne, price: "₦---" },
    { id: 20, title: "Baggy Pants 2", image: BaggyPantsTwo, price: "₦---" },
    { id: 21, title: "Baggy Pants 3", image: BaggyPantsThree, price: "₦---" },
    { id: 22, title: "Baggy Pants 4", image: BaggyPantsOne, price: "₦---" },
    { id: 23, title: "Baggy Pants 5", image: BaggyPantsTwo, price: "₦---" },
    { id: 24, title: "Baggy Pants 6", image: BaggyPantsThree, price: "₦---" },
    { id: 25, title: "Baggy Pants 7", image: BaggyPantsOne, price: "₦---" },
    { id: 26, title: "Baggy Pants 8", image: BaggyPantsTwo, price: "₦---" },
  ],
};

export default function GridFeature() {
  const rowRefs = useRef({});
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

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

          <div
            className="overflow-x-auto"
            ref={(el) => (rowRefs.current[sectionTitle] = el)}
          >
            <motion.div
              className="flex space-x-4 pb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
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
                      href={`https://wa.me/+2348131168712?text=Hi,%20I%27m%20interested%20in%20"${encodeURIComponent(
                        item.title
                      )}"%20for%20${encodeURIComponent(item.price)}.`}
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
