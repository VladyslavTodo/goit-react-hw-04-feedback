import PropTypes from 'prop-types';
import React from 'react';
import { Card, Wrapper } from './Statistics.styled';

const Statistics = ({
  options:{good, neutral, bad},
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => (
  <>
    <Card>Statistics</Card>
    <Wrapper>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {countTotalFeedback()}</p>
      <p>Positive feedback: {countPositiveFeedbackPercentage()}%</p>
    </Wrapper>
  </>
);

Statistics.propTypes = {
  options: PropTypes.object.isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
};

export default Statistics;
