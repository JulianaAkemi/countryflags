import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  height: 80px;
  background: ${({ theme }) => theme.lightTheme.lightElements};
  margin: 0 -16px;

  @media (min-width: 1366px) {
    margin: 0 -176px;
  }
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.lightTheme.darkText};
  font-weight: 900;
  font-size: 16px;
  margin: 0 16px;

  @media (min-width: 1366px) {
    font-size: 24px;
    font-weight: 800;
    margin: 0 176px;
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
