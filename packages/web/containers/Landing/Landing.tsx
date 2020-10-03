import {
  GiveClassesSVG,
  PurpleHeartSVG,
  LandingSVG,
  LogoSVG,
  StudySVG,
} from '@proffy/assets';

import {
  PageLanding,
  PageLandingContent,
  LogoContainer,
  ButtonContainer,
  TotalConnections,
} from './styled';

import { AnchorButton } from '../../components';

type LandingProps = {
  total: number;
};

const Landing: React.FC<LandingProps> = ({ total }) => {
  return (
    <PageLanding>
      <PageLandingContent>
        <LogoContainer>
          <img src={LogoSVG} style={{ height: '10rem' }} alt="Proffy logo" />
          <h2>Sua plataforma de estudos online.</h2>
        </LogoContainer>
        <img
          src={LandingSVG}
          style={{ gridArea: 'hero', width: '100%' }}
          alt="Proffy image"
        />
        <ButtonContainer>
          <AnchorButton
            href="/study"
            color="primaryLighter"
            hoverColor="primaryLight"
          >
            <img src={StudySVG} alt="Imagem livro" />
            Estudar
          </AnchorButton>
          <AnchorButton
            href="/give-classes"
            color="secundary"
            hoverColor="secundaryDark"
          >
            <img src={GiveClassesSVG} alt="Imagem apresentação" />
            Dar aulas
          </AnchorButton>
        </ButtonContainer>
        <TotalConnections>
          Total de {total} conexões já realizadas
          <img src={PurpleHeartSVG} alt="Coração" />
        </TotalConnections>
      </PageLandingContent>
    </PageLanding>
  );
};

export default Landing;
