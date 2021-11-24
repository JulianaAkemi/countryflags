import styled from 'styled-components';

const FullWidthSection = styled.section`
  display: grid;
  grid-column: 1 / span 8;
  grid-template-columns: minmax(1rem, auto) repeat(6, minmax(3.573rem, auto)) minmax(
      1rem,
      auto
    );
  grid-template-rows: max-content;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tablet}) {
    grid-template-columns: 1fr repeat(6, 1fr) 1fr;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    grid-column: 1 / span 14;
    grid-template-columns: 1fr repeat(12, minmax(auto, 5.281rem)) 1fr;
  }
`;

export default FullWidthSection;
