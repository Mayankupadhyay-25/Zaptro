import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import About from "./pages/About";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
