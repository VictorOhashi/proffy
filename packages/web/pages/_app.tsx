import { AppProps } from 'next/app';

import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import defaultTheme from '../styles/theme';

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
    color: ${({ theme }) => theme.colors.baseText}
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }

`;

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </AnimatePresence>
  );
};

export default App;
