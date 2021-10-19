import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <StyledNav>
      <Title>Where in the world?</Title>
    </StyledNav>
  );
};

const StyledNav = styled.nav(
  ({ theme }) => `
  display: flex;
  align-items: center;
  height: 80px;
  background: ${theme.colors.elements};
`,
);

const Title = styled.h1(
  ({ theme }) => `
  color: ${theme.colors.text};
  font-weight: 900;
  font-size: ${theme.fontSizes.md};
  display: block;
  max-width: 343px;
  width: 100%;
  margin: 0 auto;

  @media (min-width: ${theme.breakpoints.desktop}) {
    font-size:  ${theme.fontSizes.lg};
    font-weight: 800;
    max-width: 1014px;
  }
`,
);

export default Navbar;
