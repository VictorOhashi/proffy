import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1.4rem;
`;

export const Title = styled.h2`
  font: 700 3.6rem Archivo;
`;

export const SubTitle = styled.h3`
  margin-top: 1.4rem;
  max-width: 40rem;
  font-size: 1.6rem;
  line-height: 2.6rem;
`;

export const Button = styled.button`
  height: 3.8rem;
  padding: 1rem;
  outline: 0;
  border: 0;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  margin-top: 1rem;
  background: ${({ theme }) => theme.colors.primaryLighter};
  color: ${({ theme }) => theme.colors.buttonText};
  cursor: pointer;
  ${({ theme }) => theme.elevation[3]};

  :hover,
  :focus {
    background: ${({ theme }) => theme.colors.primaryLight};
    ${({ theme }) => theme.elevation[0]};
  }
`;
