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

export const Footer = styled.View`
  background-color: ${({ theme }) => theme.colors.boxFooter};
  padding: 24px;
  margin-top: 24px;
  align-items: center;
`;

export const Price = styled.Text`
  font-family: Poppins_400Regular;
  color: ${({ theme }) => theme.colors.baseText};
  font-size: 14px;
`;

export const PriceValue = styled.Text`
  font-family: Archivo_700Bold;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;

type FavoriteProps = {
  favored: boolean;
};

export const FavoriteButton = styled(RectButton)<FavoriteProps>`
  background-color: ${({ theme, favored }) =>
    favored ? theme.colors.primary : theme.colors.error};
  width: 56px;
  height: 56px;
  padding: 16px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const ContactButton = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.secundary};
  flex: 1;
  height: 56px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const ContactButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.buttonText};
  font-family: Archivo_700Bold;
  font-size: 16px;
  margin-left: 16px;
`;
