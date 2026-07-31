import { Button, Card } from 'antd';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profileImage from '../../assets/images/profile.jpg';
import './Hero.css';

const githubUrl = 'https://github.com/Technicalqamar';
const linkedinUrl = 'https://www.linkedin.com/in/qamar-zaman-b7aab6377/';
const emailAddress = 'qamarzaman445556@gmail.com';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* Profile image */}
        <div className="hero-image">
          <Card className="hero-image-card">
            <img
              src={profileImage}
              alt="Qamar Zaman"
              className="hero-profile-image"
            />
          </Card>
        </div>

        {/* Text content */}
        <div className="hero-text">
          <h1 className="hero-name">Qamar Zaman</h1>
          <h2 className="hero-title">Frontend React Developer</h2>
          <p className="hero-description">
            I build modern, responsive, and user-friendly web applications
            using React. Passionate about clean code and great user experiences.
          </p>

          {/* Action buttons */}
          <div className="hero-buttons">
            <Button type="primary" size="large" href="#projects">
              View Projects
            </Button>
            <Button size="large" href={githubUrl} target="_blank">
              Download CV
            </Button>
          </div>

          {/* Social media links */}
          <div className="hero-social">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hero-social-link">
              <FaGithub className="hero-social-icon" />
            </a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hero-social-link">
              <FaLinkedin className="hero-social-icon" />
            </a>
            <a href={`mailto:${emailAddress}`} className="hero-social-link">
              <FaEnvelope className="hero-social-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
