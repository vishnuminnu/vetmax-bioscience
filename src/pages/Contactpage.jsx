import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus('sending');

    const formPayload = new FormData();
    formPayload.append('name', formData.name);
    formPayload.append('email', formData.email);
    formPayload.append('phone', formData.phone);
    formPayload.append('subject', formData.subject);
    formPayload.append('message', formData.message);
    formPayload.append('_replyto', formData.email);

    try {
      const response = await fetch('https://formspree.io/f/mgvzldoj', {
        method: 'POST',
        body: formPayload,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmissionStatus('error');
    }
  };


  return (
    <section className="py-5" style={{ backgroundColor: '#F9FAFB' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Contact <span style={{ color: '#5FB0A5' }}>VetMaxBio</span></h2>
          <p className="lead">We're here to support your poultry health needs</p>
        </div>

        <div className="row g-4">
          {/* Contact Information */}
          <div className="col-lg-5">
            <div className="card h-100 border-0 shadow-sm p-4" style={{ borderRadius: '15px' }}>
              <h3 className="h4 mb-4" style={{ color: '#5FB0A5' }}>Get in Touch</h3>
              
              <div className="d-flex align-items-start mb-4">
                <FaPhone className="mt-1 me-3" size={20} style={{ color: '#5FB0A5' }} />
                <div>
                  <h4 className="h6 fw-bold mb-1">Phone</h4>
                  <p className="mb-0">+1 (800) 555-1234</p>
                  <p>Mon-Fri: 8:00 AM - 5:00 PM</p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-4">
                <FaEnvelope className="mt-1 me-3" size={20} style={{ color: '#5FB0A5' }} />
                <div>
                  <h4 className="h6 fw-bold mb-1">Email</h4>
                  <p className="mb-0">info@vetmaxbio.in</p>
                  <p>support@vetmaxbio.in</p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-4">
                <FaMapMarkerAlt className="mt-1 me-3" size={20} style={{ color: '#5FB0A5' }} />
                <div>
                  <h4 className="h6 fw-bold mb-1">Headquarters</h4>
                  <p className="mb-0">123 Bioscience Park</p>
                  <p>Research Triangle, NC 27709</p>
                </div>
              </div>

              <div className="d-flex align-items-start">
                <FaClock className="mt-1 me-3" size={20} style={{ color: '#5FB0A5' }}/>
                <div>
                  <h4 className="h6 fw-bold mb-1">Business Hours</h4>
                  <p className="mb-0">Monday-Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday-Sunday: Closed</p>
                </div>
              </div>

              <div className="mt-4 pt-3">
                <h4 className="h6 fw-bold mb-3">Follow Us</h4>
                <div className="d-flex gap-3">
                  <a href="#" className="text-dark"><FaLinkedin size={24} /></a>
                  <a href="#" className="text-dark"><FaTwitter size={24} /></a>
                  <a href="#" className="text-dark"><FaInstagram size={24} /></a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
              <div className="col-lg-7">
        <div className="card border-0 shadow-sm p-4" style={{ borderRadius: '15px' }}>
          <h3 className="h4 mb-4" style={{ color: '#5FB0A5' }}>Send Us a Message</h3>
          <form onSubmit={handleSubmit}>
            {/* Keep all your existing form fields */}
            
            <div className="col-12">
              {submissionStatus === 'success' && (
                <div className="alert alert-success" role="alert">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              {submissionStatus === 'error' && (
                <div className="alert alert-danger" role="alert">
                  Failed to send message. Please try again later.
                </div>
              )}
              <button 
                type="submit" 
                className="btn px-4 py-2" 
                disabled={submissionStatus === 'sending'}
                style={{
                  backgroundColor: '#5FB0A5',
                  color: 'white',
                  border: '2px solid #5FB0A5',
                  transition: 'all 0.3s ease'
                }}
              >
                {submissionStatus === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;