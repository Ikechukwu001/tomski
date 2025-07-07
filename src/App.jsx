import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Feature from "./Pages/Feature";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/feature" element={<Feature />} />
    </Routes>
  );
}