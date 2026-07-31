import { Card, QRCode, Button, message } from 'antd';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './QRSection.css';

const portfolioUrl = 'https://yourportfolio.com';
const githubUrl = 'https://github.com/your-username';
const linkedinUrl = 'https://linkedin.com/in/your-profile';
const emailAddress = 'your@email.com';

const socialLinks = [
  {
    title: 'GitHub',
    icon: <FaGithub className="qr-social-icon" />,
    description: 'Check out my open-source projects and contributions on GitHub.',
    url: githubUrl,
  },
  {
    title: 'LinkedIn',
    icon: <FaLinkedin className="qr-social-icon" />,
    description: 'Connect with me professionally on LinkedIn.',
    url: linkedinUrl,
  },
  {
    title: 'Email',
    icon: <FaEnvelope className="qr-social-icon" />,
    description: 'Send me an email for any inquiries or collaboration.',
    url: `mailto:${emailAddress}`,
  },
];

const QRSection = () => {
  const handleCopyLink = () => {
    message.success('Portfolio link copied!');
  };

  return (
    <section className="qr-section">
      <div className="qr-container">
        <h2 className="qr-heading">Connect With Me</h2>
        <p className="qr-intro">
          Scan the QR code to view my portfolio or use the links below to
          connect with me directly.
        </p>

        <div className="qr-content">
          {/* Left side: QR Code */}
          <div className="qr-left">
            <Card className="qr-code-card">
              <QRCode value={portfolioUrl} size={180} />
              <p className="qr-code-label">Scan to visit my portfolio</p>
              <Button type="primary" onClick={handleCopyLink}>
                Copy Portfolio Link
              </Button>
            </Card>
          </div>

          {/* Right side: Social cards */}
          <div className="qr-right">
            {socialLinks.map((link) => (
              <Card
                key={link.title}
                className="qr-social-card"
                hoverable
                onClick={() => window.open(link.url, '_blank')}
              >
                <div className="qr-social-card-content">
                  {link.icon}
                  <div>
                    <h3 className="qr-social-title">{link.title}</h3>
                    <p className="qr-social-description">{link.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRSection;
