import React from 'react';

import { BorderlessButton } from 'react-native-gesture-handler';
import { Back, Logo } from '@proffy/assets/native';

import { Container, TopBar, Title } from './styled';
import { useNavigation } from '@react-navigation/native';

type PageHeaderProps = {
  title: string;
};

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  const { navigate } = useNavigation();
  return (
    <Container>
      <TopBar>
        <BorderlessButton onPress={() => navigate('Landing')}>
          <Back />
        </BorderlessButton>
        <Logo viewBox="0 0 434 127" width={49} height={32} />
      </TopBar>
      <Title>{title}</Title>
    </Container>
  );
};

export default PageHeader;
