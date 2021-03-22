/* eslint-disable no-console */
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import reset from '../styleSheets/reset.css';
import index from '../styleSheets/index.css';
import darkTheme from '../styleSheets/dark';
import lightTheme from '../styleSheets/light';

const App = () => {
  const [themeName, setTheme] = useState(localStorage.theme);

  return (
    <ThemeProvider className={{ reset, index }} theme={themeName === 'dark' ? darkTheme : lightTheme}>
      <ThemeToggle setTheme={setTheme} themeName={themeName} />
    </ThemeProvider>
  );
};

export default App;
