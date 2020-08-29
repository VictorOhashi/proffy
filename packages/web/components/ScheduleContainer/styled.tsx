import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1.6rem;

  & :first-child {
    grid-column: 1 / -1;
  }

  @media (min-width: 700px) {
    grid-template-columns: 2fr repeat(2, 1fr);
    & :first-child {
      grid-column: initial;
    }
  }
`;

export const LegendButton = styled.button`
  background: none;
  border: 0;
  color: ${({ theme }) => theme.colors.primary};
  font: 700 1.6rem Archivo;
  cursor: pointer;
  transition: color 0.2s;
  :hover {
    color: ${({ theme }) => theme.colors.primaryDark};
  }
`;
