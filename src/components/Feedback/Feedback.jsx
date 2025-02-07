import css from './Feedback.module.css';

const Feedback = ({feedback, totalFeedback, positiveFeedback}) => {
  return (
    <ul className={css.feedbackWrapper}>
      <li>Good: {feedback.good}</li>
      <li>Neutral: {feedback.neutral}</li>
      <li>Bad: {feedback.bad}</li>
      <li>Total: {totalFeedback} </li>
      <li>Positive: {positiveFeedback}%</li>
    </ul>
  );
};

export default Feedback;
