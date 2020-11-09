import styled from 'styled-components/native';
import { Picker } from '@react-native-picker/picker';

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.primaryText};
  font-family: Poppins_400Regular;
`;

export const SelectBox = styled.View`
  height: 54px;
  border-radius: 8px;
  overflow: hidden;
  justify-content: center;
  margin-top: 4px;
  margin-bottom: 16px;
`;

export const SelectBase = styled(Picker)`
  height: 54px;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors.inputBackground};
`;

export type SelectBlockProps = {
  grid?: number;
};

export const SelectBlock = styled.View<SelectBlockProps>`
  width: ${({ grid = 1 }) => `${grid > 1 ? 100 / grid - 2 : 100}%`};
`;
