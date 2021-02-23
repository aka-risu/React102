import './FeedbackOptions.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {options.map(option => (
      <button
        key={option}
        onClick={onLeaveFeedback}
        name={option}
        className="feedback_btn"
      >
        {option}
      </button>
    ))}
    {/* <button onClick={onLeaveFeedback} name="good">
      Good
    </button>
    <button onClick={onLeaveFeedback} name="neutral">
      Neutral
    </button>
    <button onClick={onLeaveFeedback} name="bad">
      Bad
    </button> */}
  </>
);
export default FeedbackOptions;
