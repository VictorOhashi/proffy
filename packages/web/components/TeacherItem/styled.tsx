import styled from 'styled-components';

export const ContainerItem = styled.article`
  background: ${({ theme }) => theme.colors.boxBase};
  border: 1px solid ${({ theme }) => theme.colors.lineWhite};
  border-radius: 0.8rem;
  margin-top: 2.4rem;
  overflow: hidden;
  ${({ theme }) => theme.elevation[0]};

  & > p {
    padding: 0 2rem;
    font-size: 1.6rem;
    line-height: 2.8rem;

    @media (min-width: 700px) {
      padding: 0 3.2rem;
    }

    & + p {
      margin-top: 1.6rem;
    }
  }
`;

export const TeacherHeader = styled.header`
  padding: 3.2rem 2rem;
  display: flex;
  align-items: center;

  @media (min-width: 700px) {
    padding: 3.2rem;
  }

  & img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
  }

  & div {
    margin-left: 2.4rem;

    & strong {
      font: 2.4rem Archivo;
      display: block;
      color: ${({ theme }) => theme.colors.titleText};
    }

    & span {
      font: 1.6rem Archivo;
      display: block;
      margin-top: 0.4rem;
    }
  }
`;

export const TeacherFooter = styled.footer`
  padding: 3.2rem 2rem;
  background-color: ${({ theme }) => theme.colors.boxFooter};
  border-top: 1px solid ${({ theme }) => theme.colors.lineWhite};
  margin-top: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 700px) {
    padding: 3.2rem;
  }

  & p strong {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.6rem;
    display: block;

    @media (min-width: 700px) {
      display: initial;
      margin-left: 1.6rem;
    }
  }
`;

export const ContactButton = styled.a`
  width: 20rem;
  height: 5.6rem;
  background-color: ${({ theme }) => theme.colors.secundary};
  color: ${({ theme }) => theme.colors.buttonText};
  outline: 0;
  border-radius: 0.8rem;
  cursor: pointer;
  font: 700 1.4rem Archivo;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  transition: 0.2s;
  ${({ theme }) => theme.elevation[3]};

  :hover,
  :focus {
    background: ${({ theme }) => theme.colors.secundaryDark};
    ${({ theme }) => theme.elevation[0]};
  }

  @media (min-width: 700px) {
    width: 24.5rem;
    font-size: 1.6rem;
    justify-content: center;

    & img {
      margin-right: 1.6rem;
    }
  }
`;
