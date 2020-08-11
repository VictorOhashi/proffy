import React from 'react';

import { Logo, Study, GiveClasses, PurpleHeart } from '@proffy/assets';

import LandingImg from '@proffy/assets/images/landing.svg';

import styled from 'styled-components';

import PageLanding from './components/PageLanding';
import PageLandingContent from './components/PageLandingContent';
import LogoContainer from './components/LogoContainer';
import AnchorButton from './components/AnchorButton';
import TotalConnections from './components/TotalConnections';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;
  grid-area: buttons;
`;

const Landing = () => {
  return (
    <PageLanding>
      <PageLandingContent>
        <LogoContainer>
          <Logo height="10rem" />
          <h2>Sua plataforma de estudos online.</h2>
        </LogoContainer>
        <img src={LandingImg} style={{ gridArea: 'hero', width: '100%' }} />
        <ButtonContainer>
          <AnchorButton color="primaryLighter" hoverColor="primaryLight">
            <Study />
            Estudar
          </AnchorButton>
          <AnchorButton color="secundary" hoverColor="secundaryDark">
            <GiveClasses />
            Estudar
          </AnchorButton>
        </ButtonContainer>
        <TotalConnections>
          Total de 200 conexões já realizadas
          <PurpleHeart />
        </TotalConnections>
      </PageLandingContent>
    </PageLanding>
  );
};

export default Landing;
