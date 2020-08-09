import { AppProps } from 'next/app';

import {
  ThemeProvider,
  DefaultTheme,
  createGlobalStyle,
} from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    background: '#F0F0F7',
    primaryLighter: '#9871F5',
    primaryLight: '#916BEA',
    primary: '#8257E5',
    primaryDark: '#774DD6',
    primaryDarker: '#6842C2',
    secundary: '#04D361',
    secundaryDark: '#04BF58',
    primaryTitle: '#FFFFFF',
    primaryText: '#D4C2FF',
    titleText: '#32264D',
    complementText: '#9C98A6',
    baseText: '#6A6180',
    lineWhite: '#E6E6F0',
    inputBackground: '#F8F8FC',
    buttonText: '#FFFFFF',
    boxBase: '#FFFFFF',
    boxFooter: '#FAFAFC',
  },
};

const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #__next {
    height: 100vh;
  }

  body { 
    background: ${({ theme }) => theme.colors.background}
  }

  #__next {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body, input, button, textarea {
    font: 500 1.6rem Poppins;
  }



  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }

`;

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
