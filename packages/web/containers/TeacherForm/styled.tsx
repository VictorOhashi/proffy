import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  & header div {
    margin-bottom: 6.4rem;

    @media (min-width: 700px) {
      margin-bottom: 0;
    }
  }
`;

export const Content = styled.main`
  background-color: ${({ theme }) => theme.colors.boxBase};
  width: 100%;
  max-width: 74rem;
  border-radius: 0.8rem;
  margin: -3.2rem auto 3.2rem;
  padding-top: 6.4rem;
  overflow: hidden;
  ${({ theme }) => theme.elevation[0]};
`;

export const Fieldset = styled.fieldset`
  border: 0;
  padding: 0 2.4rem;

  & + & {
    margin-top: 6.4rem;
  }

  @media (min-width: 700px) {
    padding: 0 6.4rem;
  }
`;

export const Legend = styled.legend`
  font: 700 2.4rem Archivo;
  color: ${({ theme }) => theme.colors.titleText};
  margin-bottom: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 1.6rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lineWhite};
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

export const TimeContainer = styled.div`
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

export const Footer = styled.footer`
  padding: 4rem 2.4rem;
  background: ${({ theme }) => theme.colors.lineWhite};
  border-top: 1px solid ${({ theme }) => theme.colors.lineWhite};
  margin-top: 6.4rem;

  @media (min-width: 700px) {
    padding: 4rem 6.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const FooterText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.colors.complementText};

  & img {
    margin-right: 2rem;
  }

  @media (min-width: 700px) {
    justify-content: space-between;
  }
`;

export const SaveButton = styled.button`
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

  :hover {
    background: ${({ theme }) => theme.colors.secundaryDark};
    ${({ theme }) => theme.elevation[0]};
  }

  @media (min-width: 700px) {
    width: 20rem;
    margin-top: 0;
  }
`;