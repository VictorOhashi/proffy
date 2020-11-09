import React from 'react';
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
  value?: string | number | undefined;
  onChange?: PickerProps['onValueChange'];
  options: Array<PickerProps['selectedValue']>;
};

const Select: React.FC<SelectProps> = ({
  label,
  value,
  onChange,
  options = [],
  grid,
}) => {
  return (
    <SelectBlock grid={grid}>
      <Label>{label}</Label>
      <SelectBox>
        <SelectBase selectedValue={value} onValueChange={onChange}>
          {options.map((option, i) => (
            <Picker.Item
              key={`${option.label}-${i}`}
              label={option.label}
              value={option.value}
            />
          ))}
        </SelectBase>
      </SelectBox>
    </SelectBlock>
  );
};

export default Select;
