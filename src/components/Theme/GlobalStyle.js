import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts};
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    text-decoration: none;
  }

  body {
    background-color: ${({ theme }) => theme.colors.bg}
  }

  input, select, option {
    outline: none;
    border:none;
    background-image:none;
    background-color:transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;  
  }

  input:focus {
    outline: none;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;
