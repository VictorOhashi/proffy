import { AppProps } from 'next/app';

import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { SWRConfig } from 'swr';
import { AnimatePresence } from 'framer-motion';
import defaultTheme from '../styles/theme';
import api from '../services/api';

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

const axiosFetcher = (url: string, method: string) =>
  api[method](url).then((res: { data: any }) => res.data);

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SWRConfig value={{ refreshInterval: 3000, fetcher: axiosFetcher }}>
      <AnimatePresence exitBeforeEnter>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </AnimatePresence>
    </SWRConfig>
  );
};

export default App;
