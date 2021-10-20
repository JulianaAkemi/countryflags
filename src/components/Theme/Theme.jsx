import styled from 'styled-components';

const theme = {
  colors: {
    text: '#4A4A4A',
    inputText: '#858585',
    bg: '#fafafa',
    elements: '#ffffff',
    outline: '#ededed',
  },
  fonts: 'Nunito Sans, sans-serif',
  fontSizes: {
    sm: '12px',
    md: '16px',
    lg: '24px',
    xlg: '32px',
  },
  breakpoints: { mobile: '375px', desktop: '1024px' },
};

export const FormField = styled.div`
  width: 100%;
  height: 48px;
  border: 1px solid ${theme.colors.outline};
  background-color: ${theme.colors.elements};
  display: flex;
  align-items: center;
  color: ${theme.colors.inputText};
`;

export default theme;
