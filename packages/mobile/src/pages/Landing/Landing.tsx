import React from 'react';

import { Landing } from '@proffy/assets/dist/native';
import { Container } from './styled';

const LandingPage = () => {
  return (
    <Container>
      <Landing viewBox="0 0 300 300" />
    </Container>
  );
};

export default LandingPage;
