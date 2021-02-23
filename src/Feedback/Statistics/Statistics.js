const Statistics = ({ good, bad, neutral, total, positivePercentage }) => (
  <>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>PositiveFeedback: {positivePercentage}%</p>
  </>
);
export default Statistics;
