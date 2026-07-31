import { Card, Button } from 'antd';
import { FaUser, FaMapMarkerAlt, FaEnvelope, FaGraduationCap, FaCode } from 'react-icons/fa';
import profileImage from '../../assets/images/profile.jpg';
import './About.css';

const emailAddress = 'your@email.com';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="about-heading">About Me</h2>

        <div className="about-content">
          {/* Profile image */}
          <div className="about-image">
            <img
              src={profileImage}
              alt="Qamar Zaman"
              className="about-profile-image"
            />
          </div>

          {/* Content card with intro and personal info */}
          <Card className="about-card">
            <p className="about-intro">
              I am a passionate Frontend React Developer with a strong focus on building
              modern, responsive, and user-friendly web applications. I love turning
              complex problems into simple, beautiful, and intuitive designs. With a keen
              eye for detail and a commitment to clean code, I strive to create seamless
              digital experiences that make a difference.
            </p>

            {/* Personal information list */}
            <div className="about-info">
              <div className="about-info-item">
                <FaUser className="about-info-icon" />
                <span className="about-info-label">Name:</span>
                <span className="about-info-value">Qamar Zaman</span>
              </div>
              <div className="about-info-item">
                <FaMapMarkerAlt className="about-info-icon" />
                <span className="about-info-label">Location:</span>
                <span className="about-info-value">Karachi, Pakistan</span>
              </div>
              <div className="about-info-item">
                <FaEnvelope className="about-info-icon" />
                <span className="about-info-label">Email:</span>
                <span className="about-info-value">{emailAddress}</span>
              </div>
              <div className="about-info-item">
                <FaGraduationCap className="about-info-icon" />
                <span className="about-info-label">Education:</span>
                <span className="about-info-value">fsc Computer Science</span>
              </div>
              <div className="about-info-item">
                <FaCode className="about-info-icon" />
                <span className="about-info-label">Experience:</span>
                <span className="about-info-value">Frontend React Developer</span>
              </div>
            </div>

            <Button type="primary" size="large" href="#contact">
              Contact Me
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
