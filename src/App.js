import React from 'react';
import Navbar from './components/Navbar';
import { GlobalStyle } from './components/Theme/GlobalStyle';
import GlobalMargin from './components/GlobalMargin/GlobalMargin';
import Theme from './components/Theme/Theme';

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <GlobalMargin>
        <Navbar />
        Hello
      </GlobalMargin>
    </Theme>
  );
}

export default App;
