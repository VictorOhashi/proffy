import React from 'react';


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
} from './styled';

const TeacherItem = () => {
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
          <PriceValue>2000</PriceValue>
        </Price>
        <ButtonsContainer>
          <FavoriteButton>
           
          </FavoriteButton>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
};

export default TeacherItem;
