import { useState } from 'react';
import {
  Card,
  Input,
  Select,
  DatePicker,
  Upload,
  Button,
  message,
  notification,
} from 'antd';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUpload } from 'react-icons/fa';
import './Contact.css';

const emailAddress = 'your@email.com';
const phoneNumber = '+92 300 1234567';
const locationText = 'Lahore, Pakistan';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [messageText, setMessageText] = useState('');
  const [reason, setReason] = useState(undefined);
  const [date, setDate] = useState(null);
  const [fileList, setFileList] = useState([]);

  const handleSendMessage = () => {
    message.success('Message sent successfully.');

    notification.success({
      message: 'Success',
      description:
        'Your message has been sent successfully. I will get back to you soon.',
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="contact-heading">Contact Me</h2>
        <p className="contact-intro">
          Have a question or want to work together? Feel free to reach out and
          I will get back to you as soon as possible.
        </p>

        <div className="contact-content">
          {/* Left side: Contact form */}
          <Card className="contact-form-card">
            <div className="form-group">
              <label>Full Name</label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <Input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <Input.TextArea
                rows={4}
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Reason for Contact</label>
              <Select
                value={reason}
                onChange={(value) => setReason(value)}
                placeholder="Select a reason"
                style={{ width: '100%' }}
                options={[
                  { value: 'Job Opportunity', label: 'Job Opportunity' },
                  { value: 'Freelance Project', label: 'Freelance Project' },
                  { value: 'Collaboration', label: 'Collaboration' },
                  { value: 'General Inquiry', label: 'General Inquiry' },
                ]}
              />
            </div>

            <div className="form-group">
              <label>Preferred Meeting Date</label>
              <DatePicker
                value={date}
                onChange={(dateValue) => setDate(dateValue)}
                style={{ width: '100%' }}
              />
            </div>

            <div className="form-group">
              <label>Attach File (Optional)</label>
              <Upload
                beforeUpload={() => false}
                fileList={fileList}
                onChange={({ fileList: newFileList }) =>
                  setFileList(newFileList)
                }
                maxCount={1}
              >
                <Button icon={<FaUpload />}>Click to Upload</Button>
              </Upload>
            </div>

            <Button
              type="primary"
              size="large"
              className="send-btn"
              onClick={handleSendMessage}
            >
              Send Message
            </Button>
          </Card>

          {/* Right side: Contact information */}
          <div className="contact-info">
            <Card className="contact-info-card">
              <div className="contact-info-item">
                <FaEnvelope className="contact-info-icon" />
                <div>
                  <h4>Email</h4>
                  <p>{emailAddress}</p>
                </div>
              </div>

              <div className="contact-info-item">
                <FaPhone className="contact-info-icon" />
                <div>
                  <h4>Phone</h4>
                  <p>{phoneNumber}</p>
                </div>
              </div>

              <div className="contact-info-item">
                <FaMapMarkerAlt className="contact-info-icon" />
                <div>
                  <h4>Location</h4>
                  <p>{locationText}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
