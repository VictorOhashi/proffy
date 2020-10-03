import styled from 'styled-components';

import { AnchorButton } from '../components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.primaryText};
  background: ${({ theme }) => theme.colors.primary};
`;

const StatusCode = styled.h1`
  font: 700 25rem Archivo;
  color: ${({ theme }) => theme.colors.lineWhite};
`;

const ErrorDescription = styled.h2`
  font: 600 5rem Archivo;
  margin-bottom: 3rem;

  @media (max-width: 1100px) {
    font-size: 3rem;
  }
`;

const Error404 = () => {
  return (
    <Container>
      <StatusCode>404</StatusCode>
      <ErrorDescription>Page not found</ErrorDescription>
      <AnchorButton href="/" color="secundary" hoverColor="secundaryDark">
        Retornar para o início
      </AnchorButton>
    </Container>
  );
};

export default Error404;
