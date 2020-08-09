import React from 'react';

import {
  Logo,
  Landing as LandingImg,
  Study,
  GiveClasses,
  PurpleHeart,
} from '@proffy/assets';

import styled from 'styled-components';

const PageLanding = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.primaryText};
  background: ${({ theme }) => theme.colors.primary};
`;

const PageLandingContent = styled.div`
  width: 90vw;
  max-width: 700px;

  @media (min-width: 1100px) {
    max-width: 1100px;
    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas:
      'logo hero hero'
      'buttons buttons total';
  }
`;

const LogoContainer = styled.div`
  text-align: center;
  align-self: center;
  align-items: center;
  margin-bottom: 3.2rem;
  grid-area: logo;

  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;

    @media (min-width: 1100px) {
      text-align: initial;
      font-size: 3.6rem;
    }
  }

  @media (min-width: 1100px) {
    text-align: left;
    margin: 0;

    svg {
      height: 100%;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;
  grid-area: buttons;
`;

type AnchorButtonProps = {
  color: string;
  hoverColor: string;
};

const AnchorButton = styled.a<AnchorButtonProps>`
  width: 30rem;
  height: 10.4rem;
  border-radius: 0.8rem;
  font: 700 2rem Archivo;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.buttonText};
  background-color: ${({ theme, color }) => theme.colors[color]};
  transition: background-color 0.2s;

  &:first-child {
    margin-right: 1.6rem;
  }

  &:hover {
    background-color: ${({ theme, hoverColor }) => theme.colors[hoverColor]};
  }

  svg {
    margin-right: 2.4rem;
    width: 4rem;
  }
`;

const TotalConnections = styled.span`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  grid-area: total;

  svg {
    margin-left: 0.8rem;
  }
`;

const Landing = () => {
  return (
    <PageLanding>
      <PageLandingContent>
        <LogoContainer>
          <Logo height="10rem" />
          <h2>Sua plataforma de estudos online.</h2>
        </LogoContainer>
        <LandingImg width="100%" style={{ gridArea: 'hero' }} />
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
