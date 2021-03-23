import React, { useContext } from 'react';
import styled from 'styled-components';
import { MyContext } from '../store';

const ThemeToggle = () => {
  const { themeName, setTheme } = useContext(MyContext);

  const handleClick = () => {
    if (localStorage.theme === 'dark') {
      localStorage.theme = 'light';
      setTheme('light');
    } else {
      localStorage.theme = 'dark';
      setTheme('dark');
    }
  };
  return (

    <ToggleContainer>
      <div>
        Dark Mode
      </div>
      <div>
        <ThemeButton type="button" name="toggle-theme" onClick={handleClick} aria-label="toggle-theme">
          <Slider theme-name={themeName} />
        </ThemeButton>
      </div>
    </ToggleContainer>
  );
};
const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.text_first};

  @media screen and (min-width: 768px) {
    justify-content: center;
  }
`;
const ThemeButton = styled.button`
  margin: 10px;
  width: 50px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.toggle};
  border-radius: 15px;
  outline: none;
`;

const Slider = styled.div`
  width: 15px;
  height: 15px;
  background: ${props => props.theme.toggle_slider};
  transform: translateX(${props => (props['theme-name'] === 'dark' ? '-10px' : '10px')});
  border-radius: 15px;
  transition: all 0.3s ease-out;
`;

export default ThemeToggle;
