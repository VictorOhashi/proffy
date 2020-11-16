import React from 'react';

import { Aula } from 'proffy';
import {
  HeartOutline,
  HeartDislikeOutline,
  Whatsapp,
} from '@proffy/assets/native';
import { toNativeCurrency } from '@proffy/utils';

import {
  Container,
  Profile,
  Avatar,
  ProfileInfo,
  Name,
  Subject,
  Bio,
  Footer,
  Price,
  PriceValue,
  ButtonsContainer,
  ContactButtonText,
} from './styled';

import { FavoriteButton, ContactButton } from './components/Buttons';

type TeacherItemProps = {
  aula: Aula;
};

const TeacherItem: React.FC<TeacherItemProps> = ({ aula }) => {
  const favored = false;
  return (
    <Container>
      <Profile>
        <Avatar source={{ uri: aula.avatar }} />
        <ProfileInfo>
          <Name>{aula.nome}</Name>
          <Subject>{aula.materia}</Subject>
        </ProfileInfo>
      </Profile>
      <Bio>{aula.bio}</Bio>
      <Footer>
        <Price>
          {`Preço/hora:  `}
          <PriceValue>{toNativeCurrency(aula.custo)}</PriceValue>
        </Price>
        <ButtonsContainer>
          <FavoriteButton favored={favored}>
            {favored ? <HeartOutline /> : <HeartDislikeOutline />}
          </FavoriteButton>

          <ContactButton>
            <Whatsapp />
            <ContactButtonText>Entrar em contato</ContactButtonText>
          </ContactButton>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
};

export default TeacherItem;
