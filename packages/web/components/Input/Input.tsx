import { memo, useState, useCallback } from 'react';
import { InputBlock, Label, StyledInput } from './styled';
import stringFormat from '../../utils/stringFormat';

type Props = {
  name: string;
  label: string;
  color?: Colors;
  onChange: (target: { name: string; value: string | number }) => void;
};

type InputProps = Props &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof Props>;

export const Input: React.FC<InputProps> = memo(
  ({ name, label, color, onChange, ...rest }) => {
    const [value, setValue] = useState('');

    const parseNumber = (value: string) =>
      value === '' ? undefined : Number(value);

    const handleChange = useCallback(
      (event) => {
        const { value, type } = event.target;
        let inputValue = value,
          newValue = value;

        if (type === 'number') {
          inputValue = value.replace(/\D/g, '');
          newValue = parseNumber(inputValue);
        } else if (type === 'tel') {
          newValue = parseNumber(value.replace(/\D/g, ''));
          inputValue = stringFormat('(##) #####-####', newValue);
        }

        setValue(inputValue ?? '');
        onChange({ name, value: newValue });
      },
      [name]
    );

    return (
      <InputBlock>
        <Label htmlFor={name} color={color}>
          {label}
        </Label>
        <StyledInput
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          {...rest}
        />
      </InputBlock>
    );
  }
);

Input.defaultProps = {
  type: 'text',
  color: 'complementText',
};

export default Input;
