import React from 'react';
import { StatusBar } from 'expo-status-bar';

import Landing from './src/pages/Landing';

const App = () => {
  return (
    <>
      <Landing />
      <StatusBar />
    </>
  );
};

export default App;
