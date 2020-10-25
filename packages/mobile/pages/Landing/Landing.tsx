import React from 'react';

import {
  Landing,
  Study,
  GiveClasses,
  PurpleHeart,
} from '@proffy/assets/native';

import {
  Container,
  Title,
  TitleBold,
  ButtonContainer,
  Button,
  ButtonText,
  TotalConnections,
} from './styled';

const LandingPage = () => {
  return (
    <Container>
      <Landing width="100%" />
      <Title>
        Seja bem-vindo, {'\n'}
        <TitleBold>O que deseja fazer?</TitleBold>
      </Title>
      <ButtonContainer>
        <Button color="primaryLighter">
          <Study />
          <ButtonText>Estudar</ButtonText>
        </Button>
        <Button color="secundary">
          <GiveClasses />
          <ButtonText>Dar aulas</ButtonText>
        </Button>
      </ButtonContainer>
      <TotalConnections>
        Total de 285 conexões já realizadas. <PurpleHeart />
      </TotalConnections>
    </Container>
  );
};

export default LandingPage;
