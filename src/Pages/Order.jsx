import React from 'react';
import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

import browseAnim from '../assets/lottie/SearchLoader.json';
import selectAnim from '../assets/lottie/Select.json';
import chatAnim from '../assets/lottie/Chat.json';
import Pay from '../assets/lottie/Pay.json';

const steps = [
  {
    id: 1,
    title: 'Browse Our Collections',
    description: 'Scroll through our curated bridal, Ankara, and streetwear designs.',
    animation: browseAnim,
  },
  {
    id: 2,
    title: 'Select a Design',
    description: 'Tap your favorite look to preview price and click "Get Now".',
    animation: selectAnim,
  },
  {
    id: 3,
    title: 'Chat on WhatsApp',
    description: 'We’ll walk you through measurements, delivery & styling.',
    animation: chatAnim,
  },
  {
    id: 4,
    title: 'Confirm & Pay',
    description: 'Make payment and receive your custom design — fast & secure.',
    animation: Pay,
  },
];

export default function HowToOrder() {
  return (
    <>
    <Header />
    <section className="bg-white text-black min-h-screen px-6 md:px-16 py-16 space-y-16">
      <h1 className="text-4xl font-bold text-center mb-4">How to Order</h1>
      <p className="text-center text-lg max-w-2xl mx-auto text-gray-600 mb-12">
        Follow these 4 simple steps to get styled by OlaTomski 💫
      </p>

      <div className="space-y-16">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="flex flex-col justify-between md:flex-row items-center gap-6 "
          >
            <Player
              autoplay
              loop
              src={step.animation}
              style={{ height: '200px', width: '200px' }}
            />
            <div className="md:w-2/3 text-center md:text-left">
              <h2 className="text-2xl font-semibold mb-2">{step.title}</h2>
              <p className="text-gray-600 text-lg">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-12">
  <a
    href="https://wa.me/+2348131168712"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-black text-white px-6 py-3 rounded-full text-lg hover:bg-gray-800 transition"
  >
    Chat with Awimotalo Now
  </a>
</div>

    </section>
    <Footer />
    </>
  );
}
