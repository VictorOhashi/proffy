import styled from 'styled-components';

export const PageLanding = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const PageLandingContent = styled.div`
  width: 90vw;
  max-width: 700px;

  @media (min-width: 1100px) {
    max-width: 1100px;
    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas:
      'logo hero hero'
      'buttons buttons total';
  }
`;

export const LogoContainer = styled.div`
  text-align: center;
  align-self: center;
  align-items: center;
  margin-bottom: 3.2rem;
  grid-area: logo;

  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;

    @media (min-width: 1100px) {
      text-align: initial;
      font-size: 3.6rem;
    }
  }

  @media (min-width: 1100px) {
    text-align: left;
    margin: 0;

    img {
      height: 100%;
    }
  }

  @media (max-width: 700px) {
    img {
      width: 100%;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;
  cursor: pointer;
  grid-area: buttons;
`;

export const TotalConnections = styled.span`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  grid-area: total;

  img {
    margin-left: 0.8rem;
  }
`;
