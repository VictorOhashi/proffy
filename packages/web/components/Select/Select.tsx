import { memo, useState, useCallback } from 'react';
import { SelectBlock, Label, StyledSelect } from './styled';

type Props = {
  name: string;
  label: string;
  color?: Colors;
  options?: Array<{ value: string | number; label: string }>;
  onChange: (target: { name: string; value: string | number }) => void;
};

type SelectProps = Props &
  Omit<React.InputHTMLAttributes<HTMLSelectElement>, keyof Props>;

export const Select: React.FC<SelectProps> = memo(
  ({ name, label, options, color, placeholder, onChange, ...rest }) => {
    const [value, setValue] = useState<number | string>('');

    const handleChange = useCallback(
      (event) => {
        const { value } = event.target;
        const newValue = value === '' ? undefined : Number(value);
        setValue(newValue);
        onChange({ name, value: newValue });
      },
      [name]
    );

    return (
      <SelectBlock>
        <Label htmlFor={name} color={color}>
          {label}
        </Label>
        <StyledSelect
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          {...rest}
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>

          {options.length === 0 && (
            <option disabled>Não há opções disponíveis</option>
          )}

          {options.map(({ value, label }) => (
            <option key={`${label}-${value}`} value={value}>
              {label}
            </option>
          ))}
        </StyledSelect>
      </SelectBlock>
    );
  }
);

Select.defaultProps = {
  color: 'complementText',
  placeholder: 'Selecione uma opção',
  defaultValue: '',
  options: [],
};

export default Select;
