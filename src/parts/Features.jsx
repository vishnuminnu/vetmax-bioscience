import React, { useContext } from 'react';
import { FaFlask, FaShieldAlt, FaChartLine, FaLeaf, FaMicroscope, FaClipboardCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../components/ThemeContext';

const Features = () => {
  const navigate = useNavigate();
  const { darkMode } = useContext(ThemeContext);

  const features = [
    {
      icon: <FaFlask style={{ color: '#5FB0A5' }} size={40} />,
      title: "Advanced Biotech Research",
      description: "Cutting-edge biotechnology solutions for poultry health and disease prevention"
    },
    {
      icon: <FaShieldAlt style={{ color: '#5FB0A5' }} size={40} />,
      title: "Disease Protection",
      description: "Comprehensive vaccines and therapeutics for common poultry pathogens"
    },
    {
      icon: <FaChartLine style={{ color: '#5FB0A5' }} size={40} />,
      title: "Growth Optimization",
      description: "Nutritional supplements and growth promoters for optimal poultry development"
    },
    {
      icon: <FaLeaf style={{ color: '#5FB0A5' }} size={40} />,
      title: "Natural Solutions",
      description: "Phytogenic feed additives and organic alternatives to antibiotics"
    },
    {
      icon: <FaMicroscope style={{ color: '#5FB0A5' }} size={40} />,
      title: "Diagnostic Kits",
      description: "Rapid, accurate diagnostic tools for early disease detection in flocks"
    },
    {
      icon: <FaClipboardCheck style={{ color: '#5FB0A5' }} size={40} />,
      title: "Quality Assurance",
      description: "GMP-certified production with rigorous quality control standards"
    }
  ];

  return (
    <section className="py-5" style={{ 
      backgroundColor: darkMode ? '#121212' : '#F9FAFB',
      transition: 'background-color 0.3s ease'
    }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
            VetMaxBio <span style={{ color: '#5FB0A5' }}>Poultry Solutions</span>
          </h2>
          <p className="lead" style={{ color: darkMode ? '#e0e0e0' : '#333333' }}>
            Innovative bioscience for healthier, more productive poultry operations
          </p>
        </div>
        
        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm p-4" style={{ 
                borderRadius: '15px',
                backgroundColor: darkMode ? '#1e1e1e' : 'white',
                transition: 'background-color 0.3s ease'
              }}>
                <div className="text-center mb-3">
                  {feature.icon}
                </div>
                <h3 className="h4 text-center mb-3" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
                  {feature.title}
                </h3>
                <p className="text-center" style={{ color: darkMode ? '#b0b0b0' : '#6c757d' }}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
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
            onClick={() => navigate('/research')}
          >
            Explore Our Research
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;