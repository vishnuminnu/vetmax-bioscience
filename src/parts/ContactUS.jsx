import React, { useContext } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { ThemeContext } from '../components/ThemeContext';

const ContactUS = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section className="py-5" id="contact" style={{ 
      backgroundColor: darkMode ? '#121212' : '#F9FAFB',
      transition: 'background-color 0.3s ease'
    }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold" style={{ color: darkMode ? 'white' : 'inherit' }}>
            Contact <span style={{ color: '#5FB0A5' }}>VetMaxBio</span>
          </h2>
          <p className="lead" style={{ color: darkMode ? '#e0e0e0' : 'inherit' }}>
            We're here to support your poultry health needs
          </p>
        </div>

        <div className="row g-4">
          {/* Contact Information  */}
          <div className="col-lg-5">
            <div className="card h-100 border-0 shadow-sm p-4" style={{ 
              borderRadius: '15px',
              backgroundColor: darkMode ? '#1e1e1e' : 'white',
              transition: 'background-color 0.3s ease'
            }}>
              <h3 className="h4 mb-4" style={{ color: '#5FB0A5' }}>Get in Touch</h3>
              
              <div className="d-flex align-items-start mb-4">
                <FaPhone className="mt-1 me-3" size={20} style={{ color: '#5FB0A5' }} />
                <div>
                  <h4 className="h6 fw-bold mb-1" style={{ color: darkMode ? 'white' : 'inherit' }}>Phone</h4>
                  <p className="mb-0" style={{ color: darkMode ? '#b0b0b0' : 'inherit' }}>+1 (800) 555-1234</p>
                  <p style={{ color: darkMode ? '#b0b0b0' : 'inherit' }}>Mon-Fri: 8:00 AM - 5:00 PM</p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-4">
                <FaEnvelope className="mt-1 me-3" size={20} style={{ color: '#5FB0A5' }} />
                <div>
                  <h4 className="h6 fw-bold mb-1" style={{ color: darkMode ? 'white' : 'inherit' }}>Email</h4>
                  <p className="mb-0" style={{ color: darkMode ? '#b0b0b0' : 'inherit' }}>info@vetmaxbio.com</p>
                  <p style={{ color: darkMode ? '#b0b0b0' : 'inherit' }}>support@vetmaxbio.com</p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-4">
                <FaMapMarkerAlt className="mt-1 me-3" size={20} style={{ color: '#5FB0A5' }} />
                <div>
                  <h4 className="h6 fw-bold mb-1" style={{ color: darkMode ? 'white' : 'inherit' }}>Headquarters</h4>
                  <p className="mb-0" style={{ color: darkMode ? '#b0b0b0' : 'inherit' }}>123 Bioscience Park</p>
                  <p style={{ color: darkMode ? '#b0b0b0' : 'inherit' }}>Research Triangle, NC 27709</p>
                </div>
              </div>

              <div className="d-flex align-items-start">
                <FaClock className="mt-1 me-3" size={20} style={{ color: '#5FB0A5' }}/>
                <div>
                  <h4 className="h6 fw-bold mb-1" style={{ color: darkMode ? 'white' : 'inherit' }}>Business Hours</h4>
                  <p className="mb-0" style={{ color: darkMode ? '#b0b0b0' : 'inherit' }}>Monday-Friday: 9:00 AM - 5:00 PM</p>
                  <p style={{ color: darkMode ? '#b0b0b0' : 'inherit' }}>Saturday-Sunday: Closed</p>
                </div>
              </div>

              <div className="mt-4 pt-3">
                <h4 className="h6 fw-bold mb-3" style={{ color: darkMode ? 'white' : 'inherit' }}>Follow Us</h4>
                <div className="d-flex gap-3">
                  <a href="#" style={{ color: darkMode ? 'white' : 'inherit' }}><FaLinkedin size={24} /></a>
                  <a href="#" style={{ color: darkMode ? 'white' : 'inherit' }}><FaTwitter size={24} /></a>
                  <a href="#" style={{ color: darkMode ? 'white' : 'inherit' }}><FaInstagram size={24} /></a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm p-4" style={{ 
              borderRadius: '15px',
              backgroundColor: darkMode ? '#1e1e1e' : 'white',
              transition: 'background-color 0.3s ease'
            }}>
              <h3 className="h4 mb-4" style={{ color: '#5FB0A5' }}>Send Us a Message</h3>
     <form
  name="contact"
  method="POST"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
  className="needs-validation"
  action="/thank-you"  // optional redirect page after submit
>
  {/* Hidden input for Netlify mapping */}
  <input type="hidden" name="form-name" value="contact" />

  {/* Honeypot anti-spam field (hidden) */}
  <input type="text" name="bot-field" style={{ display: "none" }} />

  <div className="row g-3">
    <div className="col-md-6">
      <label htmlFor="name" className="form-label" style={{ color: darkMode ? 'white' : 'inherit' }}>Full Name</label>
      <input 
        type="text" 
        className="form-control" 
        id="name" 
        name="name"    // 👈 Added name attribute
        required 
        style={{ 
          backgroundColor: darkMode ? '#2a2a2a' : 'white',
          color: darkMode ? 'white' : 'inherit',
          borderColor: darkMode ? '#444' : '#ced4da'
        }}
      />
    </div>
    <div className="col-md-6">
      <label htmlFor="email" className="form-label" style={{ color: darkMode ? 'white' : 'inherit' }}>Email</label>
      <input 
        type="email" 
        className="form-control" 
        id="email" 
        name="email"   // 👈 Added name attribute
        required 
        style={{ 
          backgroundColor: darkMode ? '#2a2a2a' : 'white',
          color: darkMode ? 'white' : 'inherit',
          borderColor: darkMode ? '#444' : '#ced4da'
        }}
      />
    </div>
    <div className="col-md-6">
      <label htmlFor="phone" className="form-label" style={{ color: darkMode ? 'white' : 'inherit' }}>Phone Number</label>
      <input 
        type="tel" 
        className="form-control" 
        id="phone" 
        name="phone"   // 👈 Added name attribute
        placeholder="+1 (123) 456-7890" 
        required 
        style={{ 
          backgroundColor: darkMode ? '#2a2a2a' : 'white',
          color: darkMode ? 'white' : 'inherit',
          borderColor: darkMode ? '#444' : '#ced4da'
        }}
      />
    </div>
    <div className="col-md-6">
      <label htmlFor="subject" className="form-label" style={{ color: darkMode ? 'white' : 'inherit' }}>Subject</label>
      <input 
        type="text" 
        className="form-control" 
        id="subject" 
        name="subject"   // 👈 Added name attribute
        required 
        style={{ 
          backgroundColor: darkMode ? '#2a2a2a' : 'white',
          color: darkMode ? 'white' : 'inherit',
          borderColor: darkMode ? '#444' : '#ced4da'
        }}
      />
    </div>
    <div className="col-12">
      <label htmlFor="message" className="form-label" style={{ color: darkMode ? 'white' : 'inherit' }}>Message</label>
      <textarea 
        className="form-control" 
        id="message" 
        name="message"   // 👈 Added name attribute
        rows="5" 
        required 
        style={{ 
          backgroundColor: darkMode ? '#2a2a2a' : 'white',
          color: darkMode ? 'white' : 'inherit',
          borderColor: darkMode ? '#444' : '#ced4da'
        }}
      ></textarea>
    </div>
    <div className="col-12">
      <button 
        type="submit" 
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
        Send Message
      </button>
    </div>
  </div>
</form>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUS;
