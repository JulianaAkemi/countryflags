import React from 'react';
import AlignedWrapper from './components/AlignedWrapper';
import Container from './components/Container';
import Navbar from './components/Navbar';
import { GlobalStyle } from './components/Theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './components/Theme/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <AlignedWrapper>
        <Container>Hello</Container>
      </AlignedWrapper>
    </ThemeProvider>
  );
}

export default App;
