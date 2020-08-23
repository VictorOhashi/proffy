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
  margin-top: 3.2rem;

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
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
