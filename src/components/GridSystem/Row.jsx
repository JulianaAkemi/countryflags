import styled from 'styled-components';

const Row = styled.div`
  grid-column-start: ${(props) => (props.sm ? props.sm : '2')};
  grid-column-end: span ${(props) => (props.em ? props.em : '6')};

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    grid-column-start: ${(props) => (props.sd ? props.sd : '2')};
    grid-column-end: span ${(props) => (props.ed ? props.ed : '12')};
  }
`;

export default Row;
