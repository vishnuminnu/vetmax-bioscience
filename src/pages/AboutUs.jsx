import React, { useContext } from 'react';
import { FaFlask, FaUsers, FaBullseye, FaHandshake } from 'react-icons/fa';
import poultryfarm from "../assets/poultryfarm.png"
import leadership from "../assets/leadership.png"
import { ThemeContext } from '../components/ThemeContext';

const AboutUs = () => {
  const { darkMode } = useContext(ThemeContext);

  const stats = [
    { value: "12+", label: "Years in Biotechnology" },
    { value: "500+", label: "Products Developed" },
    { value: "50+", label: "Research Partners" },
    { value: "10M+", label: "Animals Protected" }
  ];

  const values = [
    {
      icon: <FaFlask style={{ color: '#5FB0A5' }} size={40} />,
      title: "Scientific Excellence",
      description: "Rigorous research and evidence-based solutions"
    },
    {
      icon: <FaUsers style={{ color: '#5FB0A5' }} size={40} />,
      title: "Animal Welfare",
      description: "Committed to improving livestock health and wellbeing"
    },
    {
      icon: <FaBullseye style={{ color: '#5FB0A5' }} size={40} />,
      title: "Innovation",
      description: "Pioneering new approaches to poultry health"
    },
    {
      icon: <FaHandshake style={{ color: '#5FB0A5' }} size={40} />,
      title: "Partnership",
      description: "Collaborating with farmers and researchers"
    }
  ];

  return (
    <section className="py-5" style={{ 
      backgroundColor: darkMode ? '#121212' : '#F9FAFB',
      transition: 'background-color 0.3s ease'
    }}>
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold mb-3" style={{ color: darkMode ? 'white' : 'inherit' }}>
            About <span style={{ color: '#5FB0A5' }}>VetMaxBio</span>
          </h1>
          <p className="lead" style={{ color: darkMode ? '#e0e0e0' : 'inherit' }}>
            Pioneering biotechnology solutions for poultry health since 2010
          </p>
        </div>

        {/* Company Story */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="h3 fw-bold mb-4" style={{ color: '#5FB0A5' }}>Our Story</h2>
            <p className="mb-4" style={{ color: darkMode ? '#e0e0e0' : 'inherit' }}>
        At Vetmax Bioscience, we are committed to advancing poultry health through scientifically developed and field-tested solutions. Our product range includes vaccines, toxin binders, and nutritional supplements designed to enhance immunity, improve gut health, and protect against diseases. From innovative formulations like Toxinut Plus to essential eye drop vaccines, each product is developed with precision, safety, and efficacy in mind. Trusted by farmers and veterinary professionals, our mission is to support healthier flocks, higher productivity, and a more sustainable poultry industry.
            </p>
            <div className="d-flex gap-3">
              {/* <button 
                className="btn px-4 py-2" 
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
                Our History
              </button> */}
              <button 
                className="btn px-4 py-2" 
                style={{
                  backgroundColor: '#5FB0A5',
                  color: 'white',
                  border: '2px solid #5FB0A5',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = darkMode ? '#1e1e1e' : 'white';
                  e.target.style.color = '#5FB0A5';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = '#5FB0A5';
                  e.target.style.color = 'white';
                }}
              >
                Meet The Team
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <img 
              src={poultryfarm} 
              alt="VetMaxBio Team" 
              className="img-fluid rounded-3 shadow-lg" 
              style={{ 
                maxHeight: '400px', 
                width: '100%', 
                objectFit: 'cover',
                filter: darkMode ? 'brightness(0.8)' : 'none'
              }}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="row g-4 mb-5 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="col-6 col-md-3">
              <div className="card border-0 shadow-sm p-3 h-100" style={{ 
                borderRadius: '15px',
                backgroundColor: darkMode ? '#1e1e1e' : 'white'
              }}>
                <h3 className="display-6 fw-bold" style={{ color: '#5FB0A5' }}>{stat.value}</h3>
                <p className="mb-0" style={{ color: darkMode ? '#e0e0e0' : 'inherit' }}>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Core Values */}
        <div className="row mb-5">
          <div className="col-12 text-center mb-4">
            <h2 className="h3 fw-bold" style={{ color: '#5FB0A5' }}>Our Core Values</h2>
          </div>
          {values.map((value, index) => (
            <div key={index} className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 border-0 shadow-sm p-4 text-center" style={{ 
                borderRadius: '15px',
                backgroundColor: darkMode ? '#1e1e1e' : 'white',
                transition: 'background-color 0.3s ease'
              }}>
                <div className="mb-3">
                  {value.icon}
                </div>
                <h3 className="h5 mb-3" style={{ color: darkMode ? 'white' : 'inherit' }}>{value.title}</h3>
                <p style={{ color: darkMode ? '#b0b0b0' : '#6c757d' }}>{value.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership */}
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
            <h2 className="h3 fw-bold mb-4" style={{ color: '#5FB0A5' }}>Our Leadership</h2>
            <p className="mb-4" style={{ color: darkMode ? '#e0e0e0' : 'inherit' }}>
              Dr. Sarah Johnson, our founder and CEO, brings 20+ years of experience in veterinary microbiology. 
              Under her guidance, VetMaxBio has become a recognized name in poultry biotechnology.
            </p>
            <p style={{ color: darkMode ? '#e0e0e0' : 'inherit' }}>
              "Our mission is to bridge the gap between scientific discovery and practical farming solutions, 
              ensuring healthier animals and more sustainable food production."
            </p>
          </div>
          <div className="col-lg-6 order-lg-1">
            <img 
              src={leadership} 
              alt="Dr. Sarah Johnson, Founder" 
              className="img-fluid rounded-3 shadow-lg" 
              style={{ 
                maxHeight: '400px', 
                width: '100%', 
                objectFit: 'cover',
                filter: darkMode ? 'brightness(0.8)' : 'none'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;