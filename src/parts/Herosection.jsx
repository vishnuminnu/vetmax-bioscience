import React, { useContext } from 'react';
import heroImage from "../assets/hero.png";
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../components/ThemeContext';

const HeroSection = () => {
  const navigate = useNavigate();
  const { darkMode } = useContext(ThemeContext);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToProducts = () => {
    const contactSection = document.getElementById('products');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <section 
      className="hero-section py-5" 
      style={{ 
        backgroundColor: darkMode ? '#1a1a1a' : '#F9F1F2',
        transition: 'background-color 0.3s ease'
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content Column */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1 
              className="display-4 fw-bold mb-4"
              style={{ color: darkMode ? '#ffffff' : '#000000' }}
            >
              Transform Your <span style={{ color: '#5FB0A5' }}>Business</span> With Our Solutions
            </h1>
            <p 
              className="lead mb-4"
              style={{ color: darkMode ? '#e0e0e0' : '#333333' }}
            >
              At VetMax Bioscience, we combine advanced biotechnology with a commitment to animal well-being to deliver trusted diagnostic and therapeutic solutions. Our mission is to support healthier, more productive lives for animals across the globe—driven by science, guided by care.
            </p>
            <div className="d-flex gap-3">
              <button 
                className="btn btn-lg px-4 py-2" 
                style={{
                  border: '2px solid #5FB0A5',
                  color: darkMode ? '#ffffff' : '#5FB0A5',
                  backgroundColor: 'transparent',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#5FB0A5';
                  e.target.style.color = 'white';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = darkMode ? '#ffffff' : '#5FB0A5';
                }}
                // onClick={() => navigate('/allproducts')}
                onClick={scrollToProducts}
              >
                Our Products
              </button>
              <button 
                className="btn btn-lg px-4 py-2" 
                style={{
                  border: '2px solid #5FB0A5',
                  color: darkMode ? '#ffffff' : '#5FB0A5',
                  backgroundColor: 'transparent',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#5FB0A5';
                  e.target.style.color = 'white';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = darkMode ? '#ffffff' : '#5FB0A5';
                }}
                onClick={scrollToContact}
              >
                Contact US
              </button>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="col-lg-6">
            <div className="position-relative">
              <img 
                src={heroImage} 
                alt="Hero illustration" 
                className="img-fluid rounded shadow-lg" 
                style={{ 
                  maxHeight: '500px', 
                  width: "100%",
                  maxWidth: "700px",
                  objectFit: 'cover',
                  filter: darkMode ? 'brightness(0.85)' : 'none'
                }}
              />
              <div className="position-absolute bottom-0 start-0 p-3 rounded-end" 
                   style={{ 
                     zIndex: 1,
                     backgroundColor: '#5FB0A5',
                     color: 'white'
                   }}>
                <strong>Trusted by 500+ Companies</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;