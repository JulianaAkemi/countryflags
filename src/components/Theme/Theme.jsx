import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  lightTheme: {
    darkText: '#4A4A4A',
    inputDarkText: '#858585',
    lightBg: '#fafafa',
    lightElements: '#ffffff',
  },
};

const Theme = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default Theme;
