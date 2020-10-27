import React from 'react';

import {
  Landing,
  Study,
  GiveClasses,
  PurpleHeart,
} from '@proffy/assets/native';

import { Container } from '../../components';
import ArchorButton from './components/ArchorButton';
import { Title, TitleBold, ButtonContainer, TotalConnections } from './styled';

const LandingPage = () => {
  return (
    <Container>
      <Landing width="100%" />
      <Title>
        Seja bem-vindo, {'\n'}
        <TitleBold>O que deseja fazer?</TitleBold>
      </Title>
      <ButtonContainer>
        <ArchorButton navigateTo="Study" text="Estudar" color="primaryLighter">
          <Study />
        </ArchorButton>
        <ArchorButton
          navigateTo="GiveClasses"
          text="Dar aulas"
          color="secundary"
        >
          <GiveClasses />
        </ArchorButton>
      </ButtonContainer>
      <TotalConnections>
        Total de 285 conexões já realizadas. <PurpleHeart />
      </TotalConnections>
    </Container>
  );
};

export default LandingPage;
