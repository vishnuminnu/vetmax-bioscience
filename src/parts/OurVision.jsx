import React, { useContext } from 'react';
import { FaGlobe, FaAtom, FaHandshake, FaLeaf, FaArrowRight } from 'react-icons/fa';
import { ThemeContext } from '../components/ThemeContext';

const OurVision = () => {
  const { darkMode } = useContext(ThemeContext);

  const visionPillars = [
    {
      icon: <FaGlobe style={{ color: '#5FB0A5' }} />,
      title: "Global Impact",
      description: "Expand access to affordable veterinary solutions across emerging markets"
    },
    {
      icon: <FaAtom style={{ color: '#5FB0A5' }} />,
      title: "Scientific Leadership",
      description: "Pioneer next-generation vaccines and diagnostics through R&D"
    },
    {
      icon: <FaHandshake style={{ color: '#5FB0A5' }} />,
      title: "Industry Collaboration",
      description: "Partner with farmers and researchers to solve pressing challenges"
    },
    {
      icon: <FaLeaf style={{ color: '#5FB0A5' }} />,
      title: "Sustainability",
      description: "Develop eco-friendly products that reduce agriculture's environmental footprint"
    }
  ];

  return (
    <section className="py-5" style={{ 
      backgroundColor: darkMode ? '#121212' : '#F9FAFB',
      transition: 'background-color 0.3s ease'
    }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column - Text Content */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="pe-lg-5">
              <h2 className="display-5 fw-bold mb-4" style={{ color: darkMode ? 'white' : 'inherit' }}>
                Our <span style={{ color: '#5FB0A5' }}>Vision</span>
              </h2>
              <p className="lead mb-5" style={{ color: darkMode ? '#e0e0e0' : 'inherit' }}>
                To revolutionize animal healthcare through innovative biotechnology, ensuring healthier livestock and sustainable farming worldwide.
              </p>
              
              <div className="row g-4">
                {visionPillars.map((pillar, index) => (
                  <div key={index} className="col-md-6">
                    <div className="d-flex">
                      <div className="me-4" style={{ fontSize: '2rem' }}>
                        {pillar.icon}
                      </div>
                      <div>
                        <h3 className="h5 fw-bold mb-2" style={{ color: darkMode ? 'white' : 'inherit' }}>
                          {pillar.title}
                        </h3>
                        <p className="mb-0" style={{ color: darkMode ? '#b0b0b0' : '#6c757d' }}>
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
{/* 
              <button 
                className="btn btn-lg mt-5 px-4 py-2" 
                style={{
                  border: '2px solid #5FB0A5',
                  color: darkMode ? 'white' : '#5FB0A5',
                  backgroundColor: 'transparent',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#5FB0A5';
                  e.target.style.color = 'white';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = darkMode ? 'white' : '#5FB0A5';
                }}
              >
                Join Our Mission <FaArrowRight className="ms-2" />
              </button> */}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="col-lg-6">
            <div className="position-relative">
              <img 
                src="https://images.unsplash.com/photo-1569466593977-94ee7ed02ec9?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="VetMaxBio Vision" 
                className="img-fluid rounded-3 shadow-lg" 
                style={{ 
                  width: '100%', 
                  height: '500px', 
                  objectFit: 'cover',
                  filter: darkMode ? 'brightness(0.8)' : 'none'
                }}
              />
              <div 
                className="position-absolute bottom-0 start-0 text-white p-3 rounded-end" 
                style={{ 
                  backgroundColor: '#5FB0A5',
                  zIndex: 1
                }}
              >
                <strong>Driven by Science, Guided by Care</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;