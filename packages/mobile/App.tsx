import React from 'react';

import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import {
  Archivo_400Regular,
  Archivo_700Bold,
  useFonts,
} from '@expo-google-fonts/archivo';
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';

import Landing from './pages/Landing';
import defaultTheme from './styles/theme';

const App = () => {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Landing />
      <StatusBar style="light" />
    </ThemeProvider>
  );
};

export default App;
