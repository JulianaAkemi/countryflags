import React from 'react';
import AlignedWrapper from './components/AlignedWrapper';
import Container from './components/Container';
import Navbar from './components/Navbar';
import { GlobalStyle } from './components/Theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './components/Theme/Theme';
import Home from './views/Home';
import CardDetailsPage from './views/CardDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />

        <AlignedWrapper>
          <Container>
            <Routes>
              <Route exact path='/' element={<Home />} />
            </Routes>
          </Container>
        </AlignedWrapper>

        <Routes>
          <Route path='/card-details' element={<CardDetailsPage />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
