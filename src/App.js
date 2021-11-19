import React, { useState } from 'react';
import AlignedWrapper from './components/AlignedWrapper';
import Container from './components/Container';
import Navbar from './components/Navbar';
import { GlobalStyle } from './components/Theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/Theme/Theme';
import Home from './views/Home';
import CardDetailsPage from './views/CardDetailsPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDarkMode } from './utils/useDarkMode';

function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <Router>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <Navbar switchTheme={themeToggler} />
        <Routes>
          <Route
            exact
            path='/'
            element={
              <AlignedWrapper>
                <Container>
                  <Home />
                </Container>
              </AlignedWrapper>
            }
          />
          <Route path='/card-details/*' element={<CardDetailsPage />} />
          <Route path='*' element={<h1>Page not found!</h1>} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
