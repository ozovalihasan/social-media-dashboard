import React from 'react';
import styled from 'styled-components';
import store from '../store';
import Trend from '../Trend/Trend';

const Overview = () => {
  const cardValues = store.bottom;
  return (
    <div>

      <Title>
        Overview - Today
      </Title>
      <BottomDahsboard>

        {cardValues.map(oneCard => (
          <Card key={oneCard.id}>
            <CardLogoTitle>
              <div>{oneCard.title}</div>
              <img src={oneCard.logo} alt="" />
            </CardLogoTitle>
            <Total>
              <TotalValue>{oneCard.total}</TotalValue>
              <Trend
                trendDirection={oneCard.changeTrend}
                trendValue={oneCard.changeValue}
              />
            </Total>
          </Card>
        )) }
      </BottomDahsboard>

    </div>
  );
};

const BottomDahsboard = styled.div`
  display: grid;
  gap: 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Title = styled.div`
  font-size: 25px;
  margin: 30px 0;
`;

const Card = styled.div`
  padding: 30px;
  border-radius: 10px;
  background-color: ${props => props.theme.card_background};
`;

const CardLogoTitle = styled.div`
  margin: 10px;
  display: flex;
  justify-content: space-between;
`;

const Total = styled.div`
  margin: 20px 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  color: ${props => props.theme.text_second};
`;

const TotalValue = styled.div`
  font-size: 30px;
  font-weight: 700;
`;
export default Overview;
