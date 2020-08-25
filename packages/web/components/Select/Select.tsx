import { SelectBlock, Label, StyledSelect } from './styled';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  color?: Colors;
  options?: Array<{ value: string | number; label: string }>;
}

export const Select: React.FC<SelectProps> = ({
  name,
  label,
  options,
  color,
  placeholder,
  ...rest
}) => {
  return (
    <SelectBlock>
      <Label htmlFor={name} color={color}>
        {label}
      </Label>
      <StyledSelect id={name} name={name} {...rest}>
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
};

Select.defaultProps = {
  color: 'complementText',
  placeholder: 'Selecione uma opção',
  defaultValue: '',
  options: [],
};

export default Select;
