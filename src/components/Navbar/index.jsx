import React from 'react';
import styled from 'styled-components';
import { IoMoonOutline } from 'react-icons/io5';
import Container from '../../components/Container';
import AlignedWrapper from '../../components/AlignedWrapper';

const Navbar = ({ switchTheme }) => {
  return (
    <StyledNav>
      <AlignedWrapper>
        <Container>
          <NavContainer>
            <Title>Where in the world?</Title>
            <ThemeMode onClick={() => switchTheme()}>
              <Icon as={IoMoonOutline} />
              <p>Dark Mode</p>
            </ThemeMode>
          </NavContainer>
        </Container>
      </AlignedWrapper>
    </StyledNav>
  );
};

const StyledNav = styled.nav(
  ({ theme }) => `
  height: 80px;
  background: ${theme.colors.elements};
  color: ${theme.colors.text};
`,
);

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1(
  ({ theme }) => `
  font-weight: 900;
  font-size: ${theme.fontSizes.md};

  @media (min-width: ${theme.breakpoints.desktop}) {
    font-size:  ${theme.fontSizes.lg};
    font-weight: 800;
  }
`,
);

const ThemeMode = styled.div(
  ({ theme }) => `
  display: flex;
  align-items: center;
  height: 80px;
  font-size: ${theme.fontSizes.md};
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    font-weight: 700;
  }
`,
);

const Icon = styled.svg(
  ({ theme }) => `
  margin-right: 15px;

  path {

    fill: ${theme.colors.text == '#ffffff' ? theme.colors.text : 'none'};
  }
  `,
);

export default Navbar;
