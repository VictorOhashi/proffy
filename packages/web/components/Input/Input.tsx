import { InputBlock, Label, StyledInput } from './styled';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  color?: Colors;
}

export const Input: React.FC<InputProps> = ({
  name,
  label,
  color,
  ...rest
}) => {
  return (
    <InputBlock>
      <Label htmlFor={name} color={color}>
        {label}
      </Label>
      <StyledInput id={name} name={name} {...rest} />
    </InputBlock>
  );
};

Input.defaultProps = {
  type: 'text',
  color: 'complementText',
};

export default Input;
