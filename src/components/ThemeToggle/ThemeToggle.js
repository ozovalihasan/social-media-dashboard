import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import * as color from '../styleVariables';

const ThemeToggle = ({ setTheme, themeName }) => {
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

    <div>
      <div>
        <ThemeButton type="button" name="toggle-theme" onClick={handleClick} aria-label="toggle-theme">
          <Span theme-name={themeName} />
        </ThemeButton>
      </div>
    </div>
  );
};

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

const Span = styled.div`
  width: 15px;
  height: 15px;
  background: ${props => props.theme.twitter};
  transform: translateX(${props => (props['theme-name'] === 'dark' ? '10px' : '-10px')});
  border-radius: 15px;
  transition: all 0.3s ease-out;
`;

ThemeToggle.propTypes = {
  setTheme: PropTypes.func.isRequired,
  themeName: PropTypes.string.isRequired,
};
export default ThemeToggle;
