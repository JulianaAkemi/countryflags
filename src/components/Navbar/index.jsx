import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  height: 80px;
  background: ${({ theme }) => theme.lightTheme.lightElements};
  margin: 0 -16px;

  @media (min-width: 576px) {
    margin: 0 -57px;
  }

  @media (min-width: 768px) {
    margin: 0 -115px;
  }

  @media (min-width: 1200px) {
    margin: 0 -176px;
  }

  @media (min-width: 1400px) {
    margin: 0 -210px;
  }
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.lightTheme.darkText};
  font-weight: 900;
  font-size: 16px;
  margin: 0 16px;

  @media (min-width: 576px) {
    margin: 0 57px;
  }

  @media (min-width: 768px) {
    font-size: 18px;
    margin: 0 115px;
  }

  @media (min-width: 992px) {
    font-size: 20px;
    font-weight: 800;
  }

  @media (min-width: 1200px) {
    font-size: 24px;
    font-weight: 800;
    margin: 0 176px;
  }

  @media (min-width: 1400px) {
    font-size: 30px;
    font-weight: 800;
    margin: 0 210px;
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
