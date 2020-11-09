import React from 'react';

import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import { InputBase, InputBlock, Label, InputBlockProps } from './styled';

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
