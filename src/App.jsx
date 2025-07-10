import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Order from "./Pages/Order";
import Feature from "./Pages/Feature";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Collection" element={<Feature />} />
      <Route path='/Order' element={<Order/>}></Route>
    </Routes>
  );
}