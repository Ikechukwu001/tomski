import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import GridFeature from '../Components/GridFeature';
import Footer from '../Components/Footer';

export default function Feature() {
  return (
    <div>
      <Header />
      <GridFeature />
      <Footer />
    </div>
  );
}