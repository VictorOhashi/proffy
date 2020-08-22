import styled from 'styled-components';

export const InputBlock = styled.div`
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

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: 1.4rem;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 5.6rem;
  margin-top: 0.8rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  border: 1px solid ${({ theme }) => theme.colors.lineWhite};
  outline: 0;
  padding: 0 1.6rem;
  font: 1.6rem Archivo;
  ${({ theme }) => theme.elevation[0]};
`;
