import React from 'react';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import Footer from '../Components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <section className="text-center px-6 md:px-16 py-12 bg-[#fefaf6] text-[#3c1e12]">
  <h1 className="text-3xl md:text-4xl font-bold mb-4">
    More Than Fashion — It's a Statement
  </h1>
  <p className="max-w-2xl mx-auto text-lg text-center">
    At Awimotalo✂️, every piece is a bold blend of culture, elegance, and craftsmanship. 
    From custom cuts to heritage prints, our designs tell stories stitched with purpose.
  </p>
</section>
        <Footer />
    </div>
  );
}