import React from 'react';
import Header from './components/Header';
import Maincontent from './components/Maincontent';
import Footer from './components/Footer';
import Research from './pages/Research';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './parts/Products';
import ProductsView from './pages/ProductsView';
import ScrollToTop from './components/ScrollToTop';
import ViewDetails from './pages/ViewDetails';
import AboutUs from './pages/AboutUs';
import ContactPage from './pages/Contactpage'; // Updated import (singular naming)
import Team from "./pages/Team";

const Layout = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Maincontent />} />
          <Route path="/research" element={<Research />} />
          <Route path="/contact" element={<ContactPage />} /> {/* Updated to use ContactPage */}
          <Route path="/allproducts" element={<ProductsView />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/ourteam" element={<Team />} />
          <Route path="/products/:id" element={<ViewDetails />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default Layout;