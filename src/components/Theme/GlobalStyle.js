import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts};
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
`;
