import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 2fr repeat(2, 1fr);
  column-gap: 1rem;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    & :first-child {
      grid-column: 1 / -1;
    }
  }
`;

export const LegendButton = styled.button`
  display: flex;
  flex-direction: column;
  background: none;
  border: 0;
  outline: 0;
  color: ${({ theme }) => theme.colors.primary};
  font: 700 1.6rem Archivo;
  cursor: pointer;

  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.primaryDark};
  }

  :focus:after,
  :hover:after {
    width: 100%;
    height: 2px;
    content: '';
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

export const DeleteButton = styled.button`
  height: 3.8rem;
  outline: 0;
  border: 0;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  padding: 1rem;
  margin-top: 1rem;
  grid-column: 1 / -1;
  background: ${({ theme }) => theme.colors.primaryLighter};
  color: ${({ theme }) => theme.colors.buttonText};
  cursor: pointer;
  ${({ theme }) => theme.elevation[3]};

  & > svg {
    width: 2rem;
    height: 2rem;
  }

  :hover,
  :focus {
    background: ${({ theme }) => theme.colors.primaryLight};
    ${({ theme }) => theme.elevation[0]};
  }

  @media (min-width: 700px) {
    position: absolute;
    padding: 0;
    right: -5rem;
    bottom: 1rem;
    border-radius: 50%;
    width: 3.6rem;

    & > p {
      display: none;
    }
  }
`;
