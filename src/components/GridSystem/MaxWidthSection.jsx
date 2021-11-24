import styled from 'styled-components';

const MaxWidthSection = styled.section`
  display: grid;
  grid-column: 2 / span 6;
  grid-template-columns: repeat(6, minmax(3.573rem, auto));
  grid-template-rows: max-content;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tablet}) {
    grid-column: 2 / span 6;
    grid-template-columns: repeat(6, 1fr);
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    grid-column: 2 / span 12;
    grid-template-columns: repeat(12, minmax(auto, 5.281rem));
  }
`;

export default MaxWidthSection;
