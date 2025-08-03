import React, { useContext } from 'react';
import { ThemeContext } from '../components/ThemeContext';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import teamMember1 from '../assets/hero.png'; // Import team member images
import teamMember2 from '../assets/hero.png';
import teamMember3 from '../assets/hero.png';

const Team = () => {
  const { darkMode } = useContext(ThemeContext);

  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      role: 'Chief Scientific Officer',
      bio: 'PhD in Veterinary Microbiology with 15+ years in poultry vaccine development',
      image: teamMember1,
      social: {
        linkedin: '#',
        twitter: '#',
        email: '#'
      }
    },
    {
      id: 2,
      name: 'Raj Patel',
      role: 'Head of Product Innovation',
      bio: 'Specializes in feed additives and gut health optimization',
      image: teamMember2,
      social: {
        linkedin: '#',
        twitter: '#',
        email: '#'
      }
    },
    {
      id: 3,
      name: 'Emily Chen',
      role: 'Director of Research',
      bio: 'Expert in molecular diagnostics and disease surveillance',
      image: teamMember3,
      social: {
        linkedin: '#',
        twitter: '#',
        email: '#'
      }
    }
  ];

  return (
    <section className="py-5" style={{ 
      backgroundColor: darkMode ? '#121212' : '#F9FAFB',
      transition: 'background-color 0.3s ease'
    }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold mb-3" style={{ color: darkMode ? 'white' : 'inherit' }}>
            Meet <span style={{ color: '#5FB0A5' }}>Our Team</span>
          </h1>
          <p className="lead" style={{ color: darkMode ? '#e0e0e0' : 'inherit' }}>
            The brilliant minds driving innovation in poultry health
          </p>
        </div>

        {/* Team Grid */}
        <div className="row g-4 justify-content-center">
          {teamMembers.map((member) => (
            <div key={member.id} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm" style={{ 
                borderRadius: '15px',
                backgroundColor: darkMode ? '#1e1e1e' : 'white',
                transition: 'transform 0.3s ease'
              }}>
                <div className="position-relative" style={{ height: '300px', overflow: 'hidden' }}>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="img-fluid w-100 h-100"
                    style={{ 
                      objectFit: 'cover',
                      filter: darkMode ? 'brightness(0.9)' : 'none'
                    }}
                  />
                </div>
                <div className="card-body p-4">
                  <h3 className="h5 mb-2" style={{ color: darkMode ? 'white' : 'inherit' }}>{member.name}</h3>
                  <p className="mb-3" style={{ 
                    color: '#5FB0A5',
                    fontWeight: '500'
                  }}>{member.role}</p>
                  <p className="small mb-4" style={{ color: darkMode ? '#b0b0b0' : '#6c757d' }}>{member.bio}</p>
                  <div className="d-flex gap-3">
                    <a href={member.social.linkedin} className="text-decoration-none">
                      <FaLinkedin style={{ color: darkMode ? '#5FB0A5' : '#0077b5', fontSize: '1.25rem' }} />
                    </a>
                    <a href={member.social.twitter} className="text-decoration-none">
                      <FaTwitter style={{ color: darkMode ? '#5FB0A5' : '#1DA1F2', fontSize: '1.25rem' }} />
                    </a>
                    <a href={`mailto:${member.social.email}`} className="text-decoration-none">
                      <FaEnvelope style={{ color: darkMode ? '#5FB0A5' : '#D44638', fontSize: '1.25rem' }} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-5">
          <h3 className="h4 fw-bold mb-4" style={{ color: darkMode ? 'white' : 'inherit' }}>
            Want to join our team?
          </h3>
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
            View Open Positions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;