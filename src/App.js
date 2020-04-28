import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from 'config/theme';

import GlobalStyles from 'components/GlobalStyles';
import Header from 'components/Header';
import SurveySteps from 'components/SurveySteps';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <SurveySteps />
    </ThemeProvider>
  );
}
