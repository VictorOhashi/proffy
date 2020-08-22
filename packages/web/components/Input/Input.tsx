import styled from 'styled-components';

const InputBlock = styled.div`
  position: relative;

  :focus-within:after {
    width: calc(100% - 3.2rem);
    height: 2px;
    content: '';
    background-color: ${({ theme }) => theme.colors.primaryLight};
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
  }

  & + & {
    margin-top: 1.4rem;
  }

  @media (min-width: 700px) {
    & + & {
      margin-top: 0;
    }
  }
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: 1.4rem;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 5.6rem;
  margin-top: 0.8rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  border: 1px solid ${({ theme }) => theme.colors.lineWhite};
  outline: 0;
  padding: 0 1.6rem;
  font: 1.6rem Archivo;
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
`;

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
