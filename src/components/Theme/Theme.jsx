const defaultTheme = {
  fonts: 'Nunito Sans, sans-serif',
  fontSizes: {
    sm: '12px',
    md: '16px',
    lg: '24px',
    xlg: '32px',
  },
  breakpoints: { mobile: '375px', desktop: '1024px' },
};

export const lightTheme = {
  ...defaultTheme,
  colors: {
    text: '#4A4A4A',
    inputText: '#858585',
    bg: '#fafafa',
    elements: '#ffffff',
    outline: '#ededed',
  },
};

export const darkTheme = {
  ...defaultTheme,
  colors: {
    text: '#ffffff',
    inputText: '#959BA1',
    bg: '#202D36',
    elements: '#2B3743',
    outline: '#404B55',
  },
};
