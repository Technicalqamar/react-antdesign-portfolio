import { useState } from 'react';
import { Card, Input, Rate, Button, message } from 'antd';
import './Feedback.css';

const sampleFeedbacks = [
  {
    name: 'Sarah Ahmed',
    rating: 5,
    message: 'Amazing developer! The portfolio website looks fantastic and the code is very clean.',
  },
  {
    name: 'Usman Khan',
    rating: 4,
    message: 'Great work on the projects. Very responsive and professional approach.',
  },
  {
    name: 'Fatima Ali',
    rating: 5,
    message: 'Highly skilled React developer. Delivered everything on time with excellent quality.',
  },
];

const Feedback = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(0);
  const [feedbackText, setFeedbackText] = useState('');

  const handleSubmit = () => {
    message.success('Thank you for your feedback!');
  };

  return (
    <section className="feedback" id="feedback">
      <div className="feedback-container">
        <h2 className="feedback-heading">Visitor Feedback</h2>
        <p className="feedback-intro">
          I value your opinion. Please take a moment to share your thoughts and
          feedback about my work and portfolio.
        </p>

        {/* Feedback form */}
        <Card className="feedback-form-card">
          <div className="form-group">
            <label>Full Name</label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Rating</label>
            <Rate value={rating} onChange={(value) => setRating(value)} />
          </div>

          <div className="form-group">
            <label>Feedback</label>
            <Input.TextArea
              rows={4}
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
            />
          </div>

          <Button
            type="primary"
            size="large"
            className="submit-btn"
            onClick={handleSubmit}
          >
            Submit Feedback
          </Button>
        </Card>

        {/* Sample feedback cards */}
        <div className="feedback-cards">
          {sampleFeedbacks.map((feedback) => (
            <Card key={feedback.name} className="feedback-card" hoverable>
              <h3 className="feedback-card-name">{feedback.name}</h3>
              <Rate disabled value={feedback.rating} />
              <p className="feedback-card-message">{feedback.message}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
