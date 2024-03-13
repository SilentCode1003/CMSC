import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/HomePage/navbar/Nav";
import HomePage from "./components/HomePage/home/Homes";
import AboutPage from "./components/AboutPage/Header";
import ServicePage from "./components/ServicePage/Services";
import ProductPage from "./components/ProductPage/Products";
import NewsPage from "./components/NewsPage/News";
import ContactPage from "./components/ContactPage/Contacts";

const App = () => {
  return (
    <div>
      <Nav />
      {/* Routing */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contacts" element={<ContactPage />} />
      </Routes>
    </div>
  );
};

export default App;
