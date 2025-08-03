import React, { useContext } from 'react';
import { FaFlask, FaMicroscope, FaChartLine, FaSeedling, FaBookOpen } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../components/ThemeContext';
import researchBanner from '../assets/research.png'; // Import your research banner image

const Research = () => {
  const navigate = useNavigate();
  const { darkMode } = useContext(ThemeContext);

  const handleContactClick = () => {
    navigate('/#contact');
  };
   
  const researchAreas = [
    {
      icon: <FaFlask style={{ color: '#5FB0A5' }} size={40} />,
      title: "Vaccine Development",
      description: "Innovative vaccine research for emerging poultry diseases including AI and NDV"
    },
    {
      icon: <FaMicroscope style={{ color: '#5FB0A5' }} size={40} />,
      title: "Diagnostic Technologies",
      description: "Rapid, accurate diagnostic tools for field and lab detection of pathogens"
    },
    {
      icon: <FaChartLine style={{ color: '#5FB0A5' }} size={40} />,
      title: "Epidemiology",
      description: "Disease tracking and predictive modeling for poultry health management"
    },
    {
      icon: <FaSeedling style={{ color: '#5FB0A5' }} size={40} />,
      title: "Nutrition & Immunity",
      description: "Feed additives that enhance gut health and disease resistance"
    }
  ];

  const recentPublications = [
    {
      title: "Novel Vaccine Platform for Avian Influenza",
      journal: "Poultry Science Journal",
      year: 2023
    },
    {
      title: "CRISPR-based Diagnostics for IBDV",
      journal: "Veterinary Research",
      year: 2022
    },
    {
      title: "Phytogenic Alternatives to AGPs",
      journal: "Animal Nutrition",
      year: 2022
    }
  ];

  return (
    <div style={{ backgroundColor: darkMode ? '#121212' : '#F9FAFB', transition: 'background-color 0.3s ease' }}>
      {/* Full-width research banner image */}
      <div className="w-100" style={{ height: '400px', overflow: 'hidden' }}>
        <img 
          src={researchBanner} 
          alt="Research Laboratory" 
          className="w-100 h-100 object-fit-cover"
          style={{ filter: darkMode ? 'brightness(0.7)' : 'none' }}
        />
      </div>

      <section className="py-5">
        <div className="container">
          {/* Hero Section */}
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bold mb-3" style={{ color: darkMode ? 'white' : 'inherit' }}>
              Advancing <span style={{ color: '#5FB0A5' }}>Poultry Health</span> Through Research
            </h1>
            <p className="lead" style={{ color: darkMode ? '#e0e0e0' : 'inherit' }}>
              Cutting-edge biotechnology solutions for sustainable poultry production
            </p>
          </div>

          {/* Research Focus Areas */}
          <div className="row g-4 mb-5">
            <div className="col-12">
              <h2 className="h3 fw-bold mb-4" style={{ color: '#5FB0A5' }}>Our Research Focus</h2>
            </div>
            {researchAreas.map((area, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm p-4 text-center" style={{ 
                  borderRadius: '15px',
                  backgroundColor: darkMode ? '#1e1e1e' : 'white',
                  transition: 'background-color 0.3s ease'
                }}>
                  <div className="mb-3">
                    {area.icon}
                  </div>
                  <h3 className="h5 mb-3" style={{ color: darkMode ? 'white' : 'inherit' }}>{area.title}</h3>
                  <p style={{ color: darkMode ? '#b0b0b0' : '#6c757d' }}>{area.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Research Highlights */}
          <div className="row g-4 mb-5">
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100" style={{ 
                borderRadius: '15px',
                backgroundColor: darkMode ? '#1e1e1e' : 'white',
                transition: 'background-color 0.3s ease'
              }}>
                <div className="card-body p-4">
                  <h2 className="h3 fw-bold mb-4" style={{ color: '#5FB0A5' }}>Current Projects</h2>
                  <ul className="list-unstyled">
                    <li className="mb-3 pb-2 border-bottom" style={{ borderColor: darkMode ? '#333' : '#eee' }}>
                      <h4 className="h5" style={{ color: darkMode ? 'white' : 'inherit' }}>Next-gen Marek's Disease Vaccine</h4>
                      <p style={{ color: darkMode ? '#b0b0b0' : '#6c757d' }}>Developing recombinant vector vaccines with enhanced protection</p>
                    </li>
                    <li className="mb-3 pb-2 border-bottom" style={{ borderColor: darkMode ? '#333' : '#eee' }}>
                      <h4 className="h5" style={{ color: darkMode ? 'white' : 'inherit' }}>Antimicrobial Alternatives</h4>
                      <p style={{ color: darkMode ? '#b0b0b0' : '#6c757d' }}>Identifying phytochemicals to replace growth-promoting antibiotics</p>
                    </li>
                    <li className="mb-3">
                      <h4 className="h5" style={{ color: darkMode ? 'white' : 'inherit' }}>Heat Stress Mitigation</h4>
                      <p style={{ color: darkMode ? '#b0b0b0' : '#6c757d' }}>Nutritional strategies to improve thermotolerance in broilers</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100" style={{ 
                borderRadius: '15px',
                backgroundColor: darkMode ? '#1e1e1e' : 'white',
                transition: 'background-color 0.3s ease'
              }}>
                <div className="card-body p-4">
                  <h2 className="h3 fw-bold mb-4" style={{ color: '#5FB0A5' }}>Recent Publications</h2>
                  <ul className="list-unstyled">
                    {recentPublications.map((pub, index) => (
                      <li key={index} className="mb-3 pb-2 border-bottom" style={{ borderColor: darkMode ? '#333' : '#eee' }}>
                        <h4 className="h5" style={{ color: darkMode ? 'white' : 'inherit' }}>{pub.title}</h4>
                        <p style={{ color: darkMode ? '#b0b0b0' : '#6c757d' }}>{pub.journal} ({pub.year})</p>
                      </li>
                    ))}
                  </ul>
                  <button 
                    className="btn btn-outliner mt-3"
                    style={{
                      border: '2px solid #5FB0A5',
                      transition: 'all 0.3s ease',
                      color: darkMode ? 'white' : '#5FB0A5',
                      backgroundColor: 'transparent'
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
                    View All Publications
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Partnerships */}
         <div className="card border-0 shadow-sm mb-5" style={{ 
  borderRadius: '15px',
  backgroundColor: darkMode ? '#1e1e1e' : 'white',
  transition: 'background-color 0.3s ease'
}}>
  <div className="card-body p-4">
    <h2 className="h3 fw-bold mb-4 text-center" style={{ color: '#5FB0A5' }}>Industry Collaborations</h2>
    <p className="text-center mb-4" style={{ color: darkMode ? '#e0e0e0' : 'inherit' }}>
      Strategic partnerships driving innovation in poultry health solutions
    </p>
    <div className="d-flex flex-wrap justify-content-center gap-4">
      {['ADM', 'Rohit Associate', 'Ecolex'].map((partner, index) => (
        <div key={index} className="p-3 rounded" style={{ 
          width: '150px', 
          height: '80px',
          backgroundColor: darkMode ? '#2a2a2a' : '#f8f9fa',
          transition: 'background-color 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <p className="text-center fw-bold mb-0" style={{ 
            color: darkMode ? 'white' : 'inherit',
            fontSize: '0.9rem'
          }}>
            {partner}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="h4 fw-bold mb-4" style={{ color: darkMode ? 'white' : 'inherit' }}>Interested in collaborating on research?</h3>
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
              onClick={handleContactClick}
            >
              Contact Our Research Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;