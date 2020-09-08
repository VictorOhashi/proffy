import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 700px;

  @media (min-width: 700px) {
    max-width: 100vw;
  }
`;

export const Form = styled.form`
  margin-top: 1.8rem;

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 2fr 2fr 1fr 1fr;
    column-gap: 16px;
    position: absolute;
    bottom: -28px;

    & > div {
      margin-top: 0 !important;
    }
  }
`;

export const MainContent = styled.main`
  margin: 3.2rem auto;
  width: 90%;

  @media (min-width: 700px) {
    padding: 3.2rem 0;
    max-width: 740px;
    margin: 0 auto;
  }
`;

export const SearchButton = styled.button`
  width: 100%;
  height: 5.6rem;
  background: ${({ theme }) => theme.colors.secundary};
  color: ${({ theme }) => theme.colors.buttonText};
  border: 0;
  border-radius: 0.8rem;
  cursor: pointer;
  font: 700 1.6rem Archivo;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: 0.2s;
  margin-top: 3.2rem;
  ${({ theme }) => theme.elevation[3]};

  & > svg {
    width: 3rem;
    height: 3rem;
  }

  & > p {
    display: none;
  }

  :hover {
    background: ${({ theme }) => theme.colors.secundaryDark};
    ${({ theme }) => theme.elevation[0]};
  }

  @media (max-width: 700px) {
    font-size: 1.8rem;

    & > p {
      display: initial;
    }

    & > svg {
      margin-right: 1rem;
      width: 2.2rem;
      height: 2.2rem;
    }
  }
`;
