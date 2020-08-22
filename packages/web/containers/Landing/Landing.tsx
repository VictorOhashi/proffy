import LandingImg from '@proffy/assets/images/landing.svg';
import Logo from '@proffy/assets/images/logo.svg';
import Study from '@proffy/assets/icons/study.svg';
import GiveClasses from '@proffy/assets/icons/give-classes.svg';
import PurpleHeart from '@proffy/assets/icons/purple-heart.svg';

import {
  PageLanding,
  PageLandingContent,
  LogoContainer,
  ButtonContainer,
  TotalConnections,
} from './styled';
import AnchorButton from './components/AnchorButton';

const Landing = () => {
  return (
    <PageLanding>
      <PageLandingContent>
        <LogoContainer>
          <img src={Logo} style={{ height: '10rem' }} />
          <h2>Sua plataforma de estudos online.</h2>
        </LogoContainer>
        <img src={LandingImg} style={{ gridArea: 'hero', width: '100%' }} />
        <ButtonContainer>
          <AnchorButton
            href="/TeacherList"
            as="/study"
            color="primaryLighter"
            hoverColor="primaryLight"
          >
            <img src={Study} />
            Estudar
          </AnchorButton>
          <AnchorButton
            href="/TeacherForm"
            as="/give-classes"
            color="secundary"
            hoverColor="secundaryDark"
          >
            <img src={GiveClasses} />
            Estudar
          </AnchorButton>
        </ButtonContainer>
        <TotalConnections>
          Total de 200 conexões já realizadas
          <img src={PurpleHeart} />
        </TotalConnections>
      </PageLandingContent>
    </PageLanding>
  );
};

export default Landing;
