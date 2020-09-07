import { useState, useEffect } from 'react';
import LandingImg from '@proffy/assets/images/landing.svg';
import Logo from '@proffy/assets/images/logo.svg';
import Study from '@proffy/assets/icons/study.svg';
import GiveClasses from '@proffy/assets/icons/give-classes.svg';
import PurpleHeart from '@proffy/assets/icons/purple-heart.svg';

import api from '../../services/api';

import {
  PageLanding,
  PageLandingContent,
  LogoContainer,
  ButtonContainer,
  TotalConnections,
} from './styled';

import { FadeIn, AnchorButton } from '../../components';

const Landing = () => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    api.get('/conexoes').then((res) => {
      setTotal(res.data.total);
    });
  }, []);

  return (
    <PageLanding>
      <PageLandingContent>
        <LogoContainer>
          <img src={Logo} style={{ height: '10rem' }} alt="Proffy logo" />
          <h2>Sua plataforma de estudos online.</h2>
        </LogoContainer>
        <img
          src={LandingImg}
          style={{ gridArea: 'hero', width: '100%' }}
          alt="Proffy image"
        />
        <ButtonContainer>
          <AnchorButton
            href="/TeacherList"
            as="/study"
            color="primaryLighter"
            hoverColor="primaryLight"
          >
            <img src={Study} alt="Imagem livro" />
            Estudar
          </AnchorButton>
          <AnchorButton
            href="/TeacherForm"
            as="/give-classes"
            color="secundary"
            hoverColor="secundaryDark"
          >
            <img src={GiveClasses} alt="Imagem apresentação" />
            Dar aulas
          </AnchorButton>
        </ButtonContainer>
        <TotalConnections>
          Total de {total} conexões já realizadas
          <img src={PurpleHeart} alt="Coração" />
        </TotalConnections>
      </PageLandingContent>
    </PageLanding>
  );
};

export default Landing;
