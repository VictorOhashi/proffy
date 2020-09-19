import styled from 'styled-components';

export const TextareaBlock = styled.div`
  position: relative;
  margin-top: 1.4rem;

  :focus-within:after,
  :hover:after {
    width: calc(100% - 3.2rem);
    height: 2px;
    content: '';
    background-color: ${({ theme }) => theme.colors.primaryLight};
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 7px;
  }
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  height: 16rem;
  min-height: 8rem;
  margin-top: 0.8rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  border: 1px solid ${({ theme }) => theme.colors.lineWhite};
  outline: 0;
  resize: vertical;
  padding: 1.2rem 1.6rem;
  font: 1.6rem Archivo;
  ${({ theme }) => theme.elevation[0]};
`;
