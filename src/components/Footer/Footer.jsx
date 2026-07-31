import { Button } from 'antd';
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowUp,
} from 'react-icons/fa';
import './Footer.css';

const githubUrl = 'https://github.com/your-username';
const linkedinUrl = 'https://linkedin.com/in/your-profile';
const facebookUrl = 'https://facebook.com/your-profile';
const instagramUrl = 'https://instagram.com/your-profile';
const emailAddress = 'your@email.com';
const phoneNumber = '+92 300 1234567';
const locationText = 'Lahore, Pakistan';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const contactInfo = [
  { icon: <FaEnvelope />, text: emailAddress },
  { icon: <FaPhone />, text: phoneNumber },
  { icon: <FaMapMarkerAlt />, text: locationText },
];

const socialIcons = [
  { icon: <FaGithub />, href: githubUrl },
  { icon: <FaLinkedin />, href: linkedinUrl },
  { icon: <FaFacebook />, href: facebookUrl },
  { icon: <FaInstagram />, href: instagramUrl },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Section 1: About */}
          <div className="footer-section">
            <h3 className="footer-logo">Qamar Zaman</h3>
            <p className="footer-description">
              A passionate Frontend React Developer focused on building modern,
              responsive, and user-friendly web applications with clean code
              and great design.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div className="footer-section">
            <h4 className="footer-section-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Contact Information */}
          <div className="footer-section">
            <h4 className="footer-section-title">Contact</h4>
            <ul className="footer-contact">
              {contactInfo.map((item, index) => (
                <li key={index} className="footer-contact-item">
                  <span className="footer-contact-icon">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: Social Media */}
          <div className="footer-section">
            <h4 className="footer-section-title">Follow Me</h4>
            <div className="footer-social">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; 2026 Qamar Zaman. All Rights Reserved.
          </p>
          <Button
            type="primary"
            shape="circle"
            icon={<FaArrowUp />}
            onClick={scrollToTop}
            className="back-to-top"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
