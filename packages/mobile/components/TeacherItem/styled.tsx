import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.boxBase};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.lineWhite};
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden;
`;

export const Profile = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 24px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.colors.lineWhite};
`;

export const ProfileInfo = styled.View`
  margin-left: 16px;
`;

export const Name = styled.Text`
  font-family: Archivo_700Bold;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.titleText};
`;

export const Subject = styled.Text`
  font-family: Poppins_400Regular;
  color: ${({ theme }) => theme.colors.baseText};
  font-size: 12px;
  margin-top: 4px;
`;

export const Bio = styled.Text`
  margin: 0px 24px;
  font-family: Poppins_400Regular;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.baseText};
`;

export const Footer = styled.View``;

export const Price = styled.Text``;

export const PriceValue = styled.Text``;

export const ButtonsContainer = styled.View``;

export const FavoriteButton = styled(RectButton)``;
