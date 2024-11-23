import React, { useState } from 'react';
import { MapPin, Mail, Phone, MessageCircle, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import './Contact.css'

const Contact = () => {
  const [notification, setNotification] = useState({ show: false, message: '' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactInfo = {
    address: "Harit vihar Sant nagar delhi 110042",
    email: "nitinsisodia920@gmail.com",
    phone: "9258643785",
    whatsapp: "9258643785"
  };

  const showNotification = (message) => {
    setNotification({ show: true, message });
    setTimeout(() => setNotification({ show: false, message: '' }), 3000);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateName = (name) => {
    // Only allow alphabets, spaces, and minimum 2 characters
    const nameRegex = /^[A-Za-z\s]{2,50}$/;
    return nameRegex.test(name);
  };

  const validateForm = () => {
    let tempErrors = { name: '', email: '', message: '' };
    let formIsValid = true;

    // Name validation
    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required';
      formIsValid = false;
    } else if (!validateName(formData.name)) {
      tempErrors.name = 'Name must be 2-50 characters and contain only letters';
      formIsValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
      formIsValid = false;
    } else if (!validateEmail(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
      formIsValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
      formIsValid = false;
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Message must be at least 10 characters long';
      formIsValid = false;
    }

    setErrors(tempErrors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      showNotification('Thank you for your message! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear specific field error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleCopyText = (text, type) => {
    navigator.clipboard.writeText(text)
      .then(() => showNotification(`${type} copied to clipboard!`))
      .catch(() => showNotification('Failed to copy. Please try again.'));
  };

  return (
    <div className="contact-container">
      {notification.show && (
        <div className="notification">
          {notification.message}
        </div>
      )}

      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you. Please fill out this form or use our contact information below.</p>
      </div>

      <div className="contact-wrapper">
        <div className="contact-info">
          <div className="info-header">
            <h2>Contact Information</h2>
            <p>Choose your preferred way to reach us</p>
          </div>

          <div className="info-items">
            <div className="info-item" onClick={() => handleCopyText(contactInfo.address, 'Address')}>
              <div className="info-icon">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="info-content">
                <h3>Visit Us</h3>
                <p>{contactInfo.address}</p>
              </div>
              <div className="copy-indicator">Click to copy</div>
            </div>

            <div className="info-item" onClick={() => window.location.href = `mailto:${contactInfo.email}`}>
              <div className="info-icon">
                <Mail className="w-6 h-6" />
              </div>
              <div className="info-content">
                <h3>Email Us</h3>
                <p>{contactInfo.email}</p>
              </div>
              <div className="copy-indicator">Click to mail</div>
            </div>

            <div className="info-item" onClick={() => window.location.href = `tel:${contactInfo.phone}`}>
              <div className="info-icon">
                <Phone className="w-6 h-6" />
              </div>
              <div className="info-content">
                <h3>Call Us</h3>
                <p>{contactInfo.phone}</p>
              </div>
              <div className="copy-indicator">Click to call</div>
            </div>

            <div className="info-item" 
                 onClick={() => window.open(`https://wa.me/${contactInfo.whatsapp}`, '_blank')}>
              <div className="info-icon">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="info-content">
                <h3>WhatsApp</h3>
                <p>Click to chat with us</p>
              </div>
              <div className="copy-indicator">Open WhatsApp</div>
            </div>
          </div>

          <div className="social-links">
            <a href="#" className="social-link"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="social-link"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="social-link"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="social-link"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <h2>Send us a Message</h2>
            
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className={errors.name ? 'input-error' : ''}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                className={errors.email ? 'input-error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your Message"
                rows="5"
                className={errors.message ? 'input-error' : ''}
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            <button type="submit" className="submit-btn">
              Send Message
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>

      <div className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.455775009134!2d77.16828347507058!3d28.783692476251763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01f526d70d3d%3A0x9e01cc087e357799!2sHimgiri%20Enclave%2C%20Mukundpur%2C%20Delhi%2C%20110084!5e0!3m2!1sen!2sin!4v1699542507752!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Location Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;