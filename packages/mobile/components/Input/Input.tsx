import React from 'react';

import { TextInputProps } from 'react-native';
import styled, { useTheme } from 'styled-components/native';

const Label = styled.Text`
  color: ${({ theme }) => theme.colors.primaryText};
  font-family: Poppins_400Regular;
`;

const InputBase = styled.TextInput`
  height: 54px;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  border-radius: 8px;
  justify-content: center;
  padding: 0 16px;
  margin-top: 4px;
  margin-bottom: 16px;
`;

type InputBlockProps = {
  grid?: number;
};

const InputBlock = styled.View<InputBlockProps>`
  width: ${({ grid = 1 }) => `${grid > 1 ? 100 / grid - 2 : 100}%`};
`;

type InputProps = TextInputProps &
  InputBlockProps & {
    label?: string;
  };

const Input: React.FC<InputProps> = ({ label, grid, ...props }) => {
  const theme = useTheme();
  return (
    <InputBlock grid={grid}>
      <Label>{label}</Label>
      <InputBase
        placeholderTextColor={theme.colors.primaryDisabled}
        {...props}
      />
    </InputBlock>
  );
};

export default Input;
