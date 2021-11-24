import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
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
    /* grid-template-columns: 1fr repeat(12, minmax(auto, 5.281rem)) 1fr; */
    grid-template-columns: 1fr repeat(12, minmax(auto, 5.281rem)) 1fr;
  }
`;

export default Grid;
