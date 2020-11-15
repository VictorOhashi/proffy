import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const SearchForm = styled.View`
  margin-bottom: 8px;
`;

export const InputGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const SubmitButton = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.secundary};
  height: 56px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SubmitText = styled.Text`
  color: ${({ theme }) => theme.colors.buttonText};
  font-family: Archivo_700Bold;
  font-size: 16px;
  margin-left: 16px;
`;
