import React from 'react';

import {
  HeartOutline,
  HeartDislikeOutline,
  Whatsapp,
} from '@proffy/assets/native';

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
  FavoriteButton,
  ContactButton,
  ContactButtonText,
} from './styled';

import toCurrency from '../../utils/toCurrency';

const TeacherItem = () => {
  const favored = false;
  return (
    <Container>
      <Profile>
        <Avatar source={{ uri: 'https://github.com/VictorOhashi.png' }} />
        <ProfileInfo>
          <Name>Victor</Name>
          <Subject>Quimica</Subject>
        </ProfileInfo>
      </Profile>
      <Bio>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Bio>
      <Footer>
        <Price>
          {`Preço/hora:  `}
          <PriceValue>{toCurrency(20000000)}</PriceValue>
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
