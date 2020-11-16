import React, { useEffect, useState } from 'react';

import {
  Landing,
  Study,
  GiveClasses,
  PurpleHeart,
} from '@proffy/assets/native';

import ArchorButton from './components/ArchorButton';
import api from '../../services/api';

import {
  Container,
  Title,
  TitleBold,
  ButtonContainer,
  TotalConnections,
} from './styled';

const LandingPage = () => {
  const [totalConexoes, setTotalConexoes] = useState(0);

  useEffect(() => {
    api.get('/conexoes').then(({ data }) => setTotalConexoes(data.total));
  }, []);

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
        Total de {totalConexoes} conexões já realizadas. <PurpleHeart />
      </TotalConnections>
    </Container>
  );
};

export default LandingPage;
