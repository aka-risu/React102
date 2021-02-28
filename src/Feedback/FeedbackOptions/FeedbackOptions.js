import './FeedbackOptions.scss';
import Card from '@material-ui/core/Card';
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
  </>
);
export default FeedbackOptions;
