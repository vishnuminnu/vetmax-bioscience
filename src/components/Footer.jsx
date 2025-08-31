import React, { useContext } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { ThemeContext } from '../components/ThemeContext';

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <footer className="pt-5 pb-4" style={{ 
      backgroundColor: darkMode ? '#1a1a1a' : '#2C3E50', 
      color: 'white',
      transition: 'background-color 0.3s ease'
    }}>
      <div className="container">
        <div className="row g-4">
          {/* Company Info */}
          <div className="col-lg-4 mb-4">
            <h3 className="h4 mb-4" style={{ color: '#5FB0A5' }}>Vetmax Bioscience</h3>
            <p className="small" style={{ color: darkMode ? '#e0e0e0' : 'inherit' }}>
              Advancing animal health through innovative biotechnology solutions for poultry and livestock.
            </p>
            <div className="mt-4">
              <div className="d-flex align-items-center mb-2">
                <FaPhone className="me-3" style={{ color: '#5FB0A5' }} />
                <span style={{ color: darkMode ? '#e0e0e0' : 'inherit' }}>7013633917</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <FaEnvelope className="me-3" style={{ color: '#5FB0A5' }} />
                <span style={{ color: darkMode ? '#e0e0e0' : 'inherit' }}>info@vetmaxbio.in</span>
              </div>
              <div className="d-flex align-items-start">
                <FaMapMarkerAlt className="me-3 mt-1" style={{ color: '#5FB0A5' }} />
                <p style={{ color: darkMode ? '#e0e0e0' : 'inherit' }}>Plot No. SEP, SLNS Colony, Meerpet, Lenin Nagar, Balapur, Hyderabad,
Telangana - 500097.</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-4 mb-4">
            <h5 className="h6 mb-4" style={{ color: '#5FB0A5' }}>Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/" className="text-white text-decoration-none" style={{ color: darkMode ? '#e0e0e0' : 'inherit' }}>Home</a></li>
              <li className="mb-2"><a href="/aboutus" className="text-white text-decoration-none" style={{ color: darkMode ? '#e0e0e0' : 'inherit' }}>About Us</a></li>
              <li className="mb-2"><a href="/allproducts" className="text-white text-decoration-none" style={{ color: darkMode ? '#e0e0e0' : 'inherit' }}>Products</a></li>
              <li className="mb-2"><a href="/research" className="text-white text-decoration-none" style={{ color: darkMode ? '#e0e0e0' : 'inherit' }}>Research</a></li>
              <li className="mb-2"><a href="/#contact" className="text-white text-decoration-none" style={{ color: darkMode ? '#e0e0e0' : 'inherit' }}>Contact</a></li>
            </ul>
          </div>

          {/* Products */}
          <div className="col-lg-2 col-md-4 mb-4">
            <h5 className="h6 mb-4" style={{ color: '#5FB0A5' }}>Products</h5>
            <ul className="list-unstyled">
              {/* <li className="mb-2"><a href="#" className="text-white text-decoration-none" style={{ color: darkMode ? '#e0e0e0' : 'inherit' }}>Vaccines</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none" style={{ color: darkMode ? '#e0e0e0' : 'inherit' }}>Diagnostics</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none" style={{ color: darkMode ? '#e0e0e0' : 'inherit' }}>Nutrition</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none" style={{ color: darkMode ? '#e0e0e0' : 'inherit' }}>Pharmaceuticals</a></li> */}
              <li className="mb-2"><a href="/allproducts" className="text-white text-decoration-none" style={{ color: darkMode ? '#e0e0e0' : 'inherit' }}>Our Products</a></li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div className="col-lg-4 col-md-4 mb-4">
            <h5 className="h6 mb-4" style={{ color: '#5FB0A5' }}>Connect With Us</h5>
            <div className="d-flex gap-3 mb-4">
              <a href="#" className="text-white" style={{ color: darkMode ? '#e0e0e0' : 'inherit' }}><FaLinkedin size={20} /></a>
              {/* <a href="#" className="text-white" style={{ color: darkMode ? '#e0e0e0' : 'inherit' }}><FaTwitter size={20} /></a> */}
              <a href="#" className="text-white" style={{ color: darkMode ? '#e0e0e0' : 'inherit' }}><FaInstagram size={20} /></a>
            </div>
            
            <h5 className="h6 mb-3" style={{ color: '#5FB0A5' }}>Newsletter</h5>
            <div className="input-group mb-3">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Your email" 
                aria-label="Your email"
                style={{
                  backgroundColor: darkMode ? '#2a2a2a' : 'white',
                  color: darkMode ? 'white' : 'inherit',
                  borderColor: darkMode ? '#444' : '#ced4da'
                }}
              />
              <button 
                className="btn" 
                type="button"
                style={{ 
                  backgroundColor: '#5FB0A5', 
                  color: 'white',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = darkMode ? '#1e1e1e' : 'white';
                  e.target.style.color = '#5FB0A5';
                  e.target.style.border = '1px solid #5FB0A5';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = '#5FB0A5';
                  e.target.style.color = 'white';
                  e.target.style.border = '1px solid #5FB0A5';
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <hr className="mt-4 mb-4" style={{ borderColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.1)' }} />

        {/* Copyright */}
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p className="small mb-0" style={{ color: darkMode ? '#e0e0e0' : 'inherit' }}>
              © {new Date().getFullYear()} Vetmax Bioscience. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="small mb-0">
              <a href="#" className="text-white text-decoration-none me-3" style={{ color: darkMode ? '#e0e0e0' : 'inherit' }}>Privacy Policy</a>
              <a href="#" className="text-white text-decoration-none" style={{ color: darkMode ? '#e0e0e0' : 'inherit' }}>Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;