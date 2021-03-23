import React from 'react';
import styled from 'styled-components';
import store from '../store';
import Trend from '../Trend/Trend';

const TotalDashboard = () => {
  const cardValues = store.top;
  return (
    <TopDashboard>
      {cardValues.map(oneCard => (
        <CardContainer key={oneCard.id}>
          <CardTop color={oneCard.color} />
          <Card>
            <LogoUser>
              <Logo src={oneCard.logo} alt="" />
              <div>{oneCard.userName}</div>
            </LogoUser>

            <TotalNumber>{oneCard.numberFollowers}</TotalNumber>
            <Followers>{oneCard.followers}</Followers>
            <TrendDate>
              <Trend
                trendDirection={oneCard.changeTrend}
                trendValue={oneCard.changeValue}
                trendDate={oneCard.date}
              />
            </TrendDate>
          </Card>

        </CardContainer>
      )) }
    </TopDashboard>
  );
};

const TopDashboard = styled.div`
  display: grid;
  grid-gap: 20px;
  width: 100%;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const CardContainer = styled.div`
  text-align: center;
  border-radius: 10px;
  width: 100%;
  background-color: ${props => props.theme.card_background};
`;

const Card = styled.div`
  margin: 20px;
`;

const Logo = styled.img`
  padding-right: 10px;
`;

const TotalNumber = styled.div`
  font-size: 30px;
  margin: 10px;
  color: ${props => props.theme.text_second};
  font-weight: 700;
`;

const Followers = styled.div`
  font-size: 16px;
  margin-bottom: 20px;
`;

const CardTop = styled.div`
  background: ${props => props.theme[props.color]};
  height: 4px;
  border-radius: 10px 10px 0 0;

`;

const LogoUser = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TrendDate = styled.div`
  display: flex;
  justify-content: center;
`;

export default TotalDashboard;
