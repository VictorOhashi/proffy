import React from 'react';

import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

type ButtonProps = {
  color: Colors;
};

const Button = styled(RectButton)<ButtonProps>`
  height: 150px;
  width: 48%;
  border-radius: 8px;
  padding: 24px;
  justify-content: space-between;
  background-color: ${({ theme, color }) => theme.colors[color]};
`;

const ButtonText = styled.Text`
  font-family: 'Archivo_700Bold';
  color: ${({ theme }) => theme.colors.primaryTitle};
  font-size: 20px;
`;

type AnchorButtonProps = {
  navigateTo: string;
  text: string;
} & ButtonProps;

const AnchorButton: React.FC<AnchorButtonProps> = React.memo(
  ({ navigateTo, children, text, color }) => {
    const { navigate } = useNavigation();

    return (
      <Button onPress={() => navigate(navigateTo)} color={color}>
        {children}
        <ButtonText>{text}</ButtonText>
      </Button>
    );
  }
);

export default AnchorButton;
