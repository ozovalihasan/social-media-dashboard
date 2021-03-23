import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import upArrow from '../../assets/images/icon-up.svg';
import downArrow from '../../assets/images/icon-down.svg';

const Trend = ({ trendDirection, trendValue, trendDate = '' }) => (
  <div>
    {trendDirection === 'increase'
      ? (
        <TrendValue color="green">
          <img src={upArrow} alt="increase trend" />
          <div>
            {trendValue}
          </div>
          {trendDate
          && (
          <TrendDate>
            {trendDate}
          </TrendDate>
          )}
        </TrendValue>
      )
      : (
        <TrendValue color="red">
          <img src={downArrow} alt="decrease trend" />
          <div>
            {trendValue}
          </div>
          {trendDate
          && (
          <TrendDate>
            {trendDate}
          </TrendDate>
          )}
        </TrendValue>
      )}

  </div>
);

const TrendValue = styled.div`
  color: ${props => (props.color === 'green' ? props.theme.lime_green : props.theme.bright_red)};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TrendDate = styled.div`
  margin-left: 2px;
`;

Trend.propTypes = {
  trendDirection: PropTypes.string.isRequired,
  trendValue: PropTypes.string.isRequired,
  trendDate: PropTypes.string.isRequired,
};

export default Trend;
