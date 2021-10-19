import styled from 'styled-components';

const Container = styled.div(
  ({ theme }) => `
  max-width: 343px;
  width: 100%;

  @media (min-width: ${theme.breakpoints.desktop}) {
    max-width: 1014px;
  }
`,
);

export default Container;
