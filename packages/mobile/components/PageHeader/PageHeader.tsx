import React from 'react';

import { BorderlessButton } from 'react-native-gesture-handler';
import { Back, Logo } from '@proffy/assets/native';

import { Container, TopBar, Title } from './styled';

const PageHeader = () => {
  return (
    <Container>
      <TopBar>
        <BorderlessButton onPress={() => {}}>
          <Back />
        </BorderlessButton>
        <Logo viewBox="0 -200 127 534" />
      </TopBar>
      <Title>Proffys disponíveis</Title>
    </Container>
  );
};

export default PageHeader;
