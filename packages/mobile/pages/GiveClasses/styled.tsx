import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  padding: 40px;
`;

export const Background = styled.ImageBackground`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: 'Archivo_700Bold';
  color: ${({ theme }) => theme.colors.primaryTitle};
  font-size: 32px;
  line-height: 37px;
  max-width: 180px;
`;

export const Description = styled.Text`
  margin-top: 24px;
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: 16px;
  line-height: 26px;
  font-family: 'Poppins_400Regular';
  max-width: 240px;
`;

export const ConfirmButton = styled(RectButton)`
  margin: 40px;
  background-color: ${({ theme }) => theme.colors.secundary};
  height: 58px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const ConfirmText = styled.Text`
  color: ${({ theme }) => theme.colors.primaryTitle};
  font-size: 16px;
  font-family: 'Archivo_700Bold';
`;
