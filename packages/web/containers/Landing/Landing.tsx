import {
  GiveClasses,
  PurpleHeart,
  Landing as LandingSVG,
  Logo,
  Study,
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
          <Logo style={{ height: '10rem' }} title="Proffy logo" />
          <h2>Sua plataforma de estudos online.</h2>
        </LogoContainer>
        <LandingSVG
          style={{ gridArea: 'hero', width: '100%' }}
          title="Proffy image"
        />
        <ButtonContainer>
          <AnchorButton
            href="/study"
            color="primaryLighter"
            hoverColor="primaryLight"
          >
            <Study title="Imagem livro" />
            Estudar
          </AnchorButton>
          <AnchorButton
            href="/give-classes"
            color="secundary"
            hoverColor="secundaryDark"
          >
            <GiveClasses title="Imagem apresentação" />
            Dar aulas
          </AnchorButton>
        </ButtonContainer>
        <TotalConnections>
          Total de {total} conexões já realizadas
          <PurpleHeart title="Coração" />
        </TotalConnections>
      </PageLandingContent>
    </PageLanding>
  );
};

export default Landing;
