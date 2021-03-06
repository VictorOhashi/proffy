import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary};

  @media (min-width: 700px) {
    height: 340px;
  }
`;

export const TopBarContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.primaryText};
  padding: 1.6rem 0;

  & > svg {
    height: 1.6rem;
    width: auto;
  }

  @media (min-width: 700px) {
    max-width: 1100px;
  }
`;

export const AnchorButton = styled.a`
  height: 3.2rem;
  transition: opacity 0.2s;
  cursor: pointer;
  outline: 0;
  transition: transform 0.15s linear;

  :hover,
  :focus {
    opacity: 0.6;
    transform: scale(1.1);
  }
`;

export const HeaderContent = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
  margin: 3.2rem auto;

  @media (min-width: 700px) {
    flex: 1;
    max-width: 740px;
    margin: 0 auto;
    padding-bottom: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const HeaderTitle = styled.strong`
  font: 700 3.6rem Archivo;
  line-height: 4.2rem;
  color: ${({ theme }) => theme.colors.primaryTitle};

  @media (min-width: 700px) {
    max-width: 350px;
  }
`;

export const HeaderSubtitle = styled.p`
  max-width: 30rem;
  font-size: 1.6rem;
  line-height: 2.6rem;
  color: ${({ theme }) => theme.colors.primaryText};
  margin-top: 2.4rem;
`;
