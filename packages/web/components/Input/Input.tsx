import { InputBlock, Label, StyledInput } from './styled';

type InputProps = {
  id: string;
  label: string;
};

export const Input: React.FC<InputProps> = ({ id, label }) => {
  return (
    <InputBlock>
      <Label htmlFor={id}>{label}</Label>
      <StyledInput type="text" id={id} />
    </InputBlock>
  );
};

export default Input;
