import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

const BaseTeacherButton = styled(RectButton)`
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

type FavoriteProps = {
  favored: boolean;
};

export const FavoriteButton = styled(BaseTeacherButton)<FavoriteProps>`
  background-color: ${({ theme, favored }) =>
    favored ? theme.colors.primary : theme.colors.error};
  width: 56px;
  padding: 16px;
`;

export const ContactButton = styled(BaseTeacherButton)`
  background-color: ${({ theme }) => theme.colors.secundary};
  flex: 1;
  flex-direction: row;
`;
