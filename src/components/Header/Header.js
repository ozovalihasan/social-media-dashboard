import React from 'react';
import styled from 'styled-components';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Header = () => (
  <HeaderContainer>
    <div>
      <Title>
        Social Media Dashboard
      </Title>
      <Subtitle>
        Total Followers: 23,004
      </Subtitle>
    </div>
    <Line />
    <ThemeToggle />
  </HeaderContainer>
);

const HeaderContainer = styled.div`
  margin: 20px 0;
  color: ${props => props.theme.text_second};
  font-weight: 700;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Title = styled.div`
  font-size: 35px;
`;

const Subtitle = styled.div`
  color: ${props => props.theme.text_first};
`;
const Line = styled.div`
  margin-top: 10px;
  height: 1px;
  background-color: ${props => props.theme.text_first};

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export default Header;
