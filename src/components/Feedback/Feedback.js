import PropTypes from 'prop-types';
import './Feedback.css';

function Feedback({ good, neutral, bad, total }) {
  return (
    <ul className="Feedback">
      <li className="FeedbackItem">
        <p className="FeedbackCount">good: {good}</p>
      </li>
      <li className="FeedbackItem">
        <p className="FeedbackCount">neutral: {neutral}</p>
      </li>
      <li className="FeedbackItem">
        <p className="FeedbackCount">bad: {bad}</p>
      </li>
      <li className="FeedbackItem">
        <p className="FeedbackCount">total: {total}</p>
      </li>
    </ul>
  );
}

Feedback.protoType = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Feedback;
