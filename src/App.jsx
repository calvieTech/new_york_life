import { useState } from 'react';
import './App.css';
import React from 'react';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import TestimonialPage from './pages/TestimonialPage';
import BlogPage from './pages/BlogPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/testimony" element={<TestimonialPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
