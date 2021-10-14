import React from 'react';
import styled from 'styled-components';
import { GlobalPadding } from '../styles/GlobalPadding';
import { darkText, lightElements } from '../styles/variables';

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  height: 80px;
  color: ${darkText};
  background: ${lightElements};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0587303);
  font-weight: 900;
  font-size: 16px;

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 992px) {
    font-size: 20px;
    font-weight: 800;
  }

  @media (min-width: 1200px) {
    font-size: 24px;
    font-weight: 800;
  }

  @media (min-width: 1400px) {
    font-size: 30px;
    font-weight: 800;
  }
`;

const Navbar = () => {
  return (
    <StyledNav>
      <GlobalPadding>Where in the world?</GlobalPadding>
    </StyledNav>
  );
};

export default Navbar;
