import styled from 'styled-components/native';

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.primaryText};
  font-family: Poppins_400Regular;
`;

export const InputBase = styled.TextInput`
  height: 54px;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  border-radius: 8px;
  justify-content: center;
  padding: 0 16px;
  margin-top: 4px;
  margin-bottom: 16px;
`;

export type InputBlockProps = {
  grid?: number;
};

export const InputBlock = styled.View<InputBlockProps>`
  width: ${({ grid = 1 }) => `${grid > 1 ? 100 / grid - 2 : 100}%`};
`;
