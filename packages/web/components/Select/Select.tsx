import { SelectBlock, Label, StyledSelect, Option } from './styled';

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
        <Option value="" disabled hidden>
          {placeholder}
        </Option>

        {options.length === 0 && (
          <Option disabled>Não há opções disponíveis</Option>
        )}

        {options.map(({ value, label }) => (
          <Option key={`${label}-${value}`} value={value}>
            {label}
          </Option>
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
