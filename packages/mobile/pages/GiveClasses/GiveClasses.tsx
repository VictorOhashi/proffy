import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Background,
  Title,
  Description,
  ConfirmButton,
  ConfirmText,
} from './styled';

import GiveClassesBackGround from '../../assets/give-classes-background.png';

const GiveClassesPage = () => {
  const { goBack } = useNavigation();
  return (
    <Container>
      <Background source={GiveClassesBackGround} resizeMode="contain">
        <Title>Quer ser Proffy?</Title>
        <Description>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web.
        </Description>
      </Background>
      <ConfirmButton onPress={() => goBack()}>
        <ConfirmText>Tudo bem</ConfirmText>
      </ConfirmButton>
    </Container>
  );
};

export default GiveClassesPage;
