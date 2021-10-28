import React from 'react';
import AlignedWrapper from './components/AlignedWrapper';
import Container from './components/Container';
import Navbar from './components/Navbar';
import { GlobalStyle } from './components/Theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './components/Theme/Theme';
import CardDetails from './components/CardDetails';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <AlignedWrapper>
        <Container>
          <CardDetails sectionName='Border Countries' />
        </Container>
      </AlignedWrapper>
    </ThemeProvider>
  );
}

export default App;
