import { memo } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  align-self: center;
  cursor: pointer;
  background: none;
  border: 0;
  outline: 0;
  transition: transform 0.15s linear;

  :not(:last-child) {
    :after {
      content: '';
      align-self: center;
      height: 2rem;
      width: 1px;
      margin: 0 2px;
      background-color: ${({ theme }) => theme.colors.primaryLight};
    }
  }

  :hover,
  :focus {
    svg {
      transform: scale(1.1);
    }
  }

  svg {
    height: 2.5rem;
  }
`;

const SelectButton: React.FC<React.ButtonHTMLAttributes<
  HTMLButtonElement
>> = memo(({ children, ...rest }) => {
  return (
    <Button {...rest} type="button">
      {children}
    </Button>
  );
});

export default SelectButton;
