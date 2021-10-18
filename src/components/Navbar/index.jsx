import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  height: 80px;
  background: ${({ theme }) => theme.lightTheme.lightElements};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.lightTheme.darkText};
  font-weight: 900;
  font-size: 16px;
  display: block;
  max-width: 343px;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 1024px) {
    font-size: 24px;
    font-weight: 800;
    max-width: 1014px;
  }
`;

const Navbar = () => {
  return (
    <StyledNav>
      <Title>Where in the world?</Title>
    </StyledNav>
  );
};

export default Navbar;
