import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

interface ContactProps {
  email: string;
  phone: string;
  location: string;
  linkedinUrl: string;
  githubUrl: string;
  mainTitle?: string;
  subtitle?: string;
}

const Contact: React.FC<ContactProps> = ({
  email,
  phone,
  location,
  linkedinUrl,
  githubUrl,
  mainTitle = "Let's Connect",
  subtitle = "I'm always open to discussing new opportunities, collaborations, or just having a conversation about technology and innovation."
}) => {
  const [name, setName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${formEmail})`);
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h2 className="contact-main-title">{mainTitle}</h2>
        <p className="contact-subtitle">{subtitle}</p>
      </div>

      <div className="contact-content">
        {/* Left Column */}
        <div className="contact-info-column">
          <h3 className="column-title">Get in Touch</h3>
          <div className="info-card">
            <div className="info-icon-wrapper"><FaEnvelope /></div>
            <div className="info-text">
              <h4>Email</h4>
              <p>{email}</p>
            </div>
          </div>
          <div className="info-card">
            <div className="info-icon-wrapper"><FaPhoneAlt /></div>
            <div className="info-text">
              <h4>Phone</h4>
              <p>{phone}</p>
            </div>
          </div>
          <div className="info-card">
            <div className="info-icon-wrapper"><FaMapMarkerAlt /></div>
            <div className="info-text">
              <h4>Location</h4>
              <p>{location}</p>
            </div>
          </div>

          <h3 className="column-title follow-me-title">Follow Me</h3>
          <div className="social-links">
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin />
            </a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="contact-form-column">
          <form className="form-container" onSubmit={handleSubmit}>
            <h3 className="form-title">
              <FaPaperPlane /> Send a Message
            </h3>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="form-input"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="your.email@example.com"
                value={formEmail}
                onChange={(e) => setFormEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                className="form-textarea"
                placeholder="Tell me about your project or just say hello!"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;