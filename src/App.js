import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './config/theme';

import GlobalStyles from './components/GlobalStyles';
import Header from './components/Header';

export default function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
      </ThemeProvider>
    </div>
  );
}
