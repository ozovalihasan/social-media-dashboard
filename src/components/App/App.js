/* eslint-disable no-console */
import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import reset from '../styleSheets/reset.css';
import index from '../styleSheets/index.css';
import darkTheme from '../styleSheets/dark';
import lightTheme from '../styleSheets/light';
import TotalDashboard from '../TotalDashboard/TotalDashboard';
import Overview from '../Overview/Overview';
import { MyContext } from '../store';
import Header from '../Header/Header';

const App = () => {
  const [themeName, setTheme] = useState(localStorage.theme);

  return (
    <ThemeProvider className={{ reset, index }} theme={themeName === 'dark' ? darkTheme : lightTheme}>
      <MyContext.Provider value={{ themeName, setTheme }}>
        <AppContainer>
          <Header />
          <TotalDashboard />
          <Overview />
        </AppContainer>
      </MyContext.Provider>
    </ThemeProvider>
  );
};

const AppContainer = styled.div`
  background-color: ${props => props.theme.background_theme};
  color: ${props => props.theme.text_first};
  padding: 30px;
  min-height: 100vh;
`;
export default App;
