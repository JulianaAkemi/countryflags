import React from 'react';
import AlignedWrapper from './components/AlignedWrapper';
import Container from './components/Container';
import Navbar from './components/Navbar';
import { GlobalStyle } from './components/Theme/GlobalStyle';
import Theme from './components/Theme/Theme';

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <Navbar />
      <AlignedWrapper>
        <Container>Hello</Container>
      </AlignedWrapper>
    </Theme>
  );
}

export default App;
