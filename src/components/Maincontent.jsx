import React, { useEffect } from 'react'; // Add useEffect to the import
import Herosection from '../parts/Herosection';
import Features from '../parts/Features';
import Products from '../parts/Products';
import OurVision from '../parts/OurVision';
import ContactUS from '../parts/ContactUS';
import { useLocation } from 'react-router-dom';
import { Helmet } from "react-helmet-async";

const Maincontent = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#contact') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
       <Helmet>
        <title>Home - Vetmax Bioscience</title>
        <meta name="description" content="Welcome to My Website. Discover our products, features, and vision." />
        <meta name="keywords" content="React, Products, Features, Vision, Contact" />
        <meta property="og:title" content="My Website" />
        <meta property="og:description" content="Discover our products, features, and vision." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Herosection/>
      <Features/>
      <Products/>
      <OurVision/>
      <ContactUS/>
    </>
  );
};

export default Maincontent;