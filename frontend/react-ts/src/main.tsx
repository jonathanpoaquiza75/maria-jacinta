import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import Services from "./pages/Services";  // Agregado
import AboutUs from "./pages/AboutUs";    // Agregado
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/servicios" element={<Services />} />  {/* Ruta para Services */}
        <Route path="/sobre-nosotros" element={<AboutUs />} />  {/* Ruta para AboutUs */}
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
