import React from 'react';

import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import { InputBase, InputBlock, Label, InputBlockProps } from './styled';
import { useState } from 'react';

type InputProps = TextInputProps &
  InputBlockProps & {
    label?: string;
    onChange: (value: string) => void;
  };

const Input: React.FC<InputProps> = ({ label, grid, onChange, ...props }) => {
  const theme = useTheme();
  const [value, setValue] = useState('');

  const handleChange: TextInputProps['onChangeText'] = (v) => {
    setValue(v);
    onChange(v);
  };

  return (
    <InputBlock grid={grid}>
      <Label>{label}</Label>

      <InputBase
        value={value}
        placeholderTextColor={theme.colors.primaryDisabled}
        onChangeText={handleChange}
        {...props}
      />
    </InputBlock>
  );
};

export default Input;
