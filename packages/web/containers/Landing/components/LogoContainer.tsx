import styled from 'styled-components';

const LogoContainer = styled.div`
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

    svg {
      height: 100%;
    }
  }
`;

export default LogoContainer;
