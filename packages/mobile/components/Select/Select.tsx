import React, { useState } from 'react';

import { useTheme } from 'styled-components';
import { PickerProps } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import {
  Label,
  SelectBase,
  SelectBox,
  SelectBlock,
  SelectBlockProps,
} from './styled';

type SelectProps = SelectBlockProps & {
  label: string;
  onChange: (value: any) => void;
  options: Array<PickerProps['selectedValue']>;
  placeholder?: string;
};

const Select: React.FC<SelectProps> = ({
  label,
  onChange,
  options,
  grid,
  placeholder,
}) => {
  const { colors } = useTheme();
  const [value, setValue] = useState();

  const handleChange: PickerProps['onValueChange'] = (value) => {
    setValue(value);
    !isNaN(value) ? onChange(value) : onChange(null);
  };

  return (
    <SelectBlock grid={grid}>
      <Label>{label}</Label>
      <SelectBox>
        <SelectBase selectedValue={value} onValueChange={handleChange}>
          <Picker.Item
            value=""
            label={placeholder}
            color={colors.complementText}
          />
          {options.map((option, i) => (
            <Picker.Item
              key={`${option.label}-${i}`}
              label={option.label}
              value={option.value}
              color={colors.baseText}
            />
          ))}
        </SelectBase>
      </SelectBox>
    </SelectBlock>
  );
};

Select.defaultProps = {
  placeholder: 'Selecione uma opção',
  options: [],
};

export default React.memo(Select);
