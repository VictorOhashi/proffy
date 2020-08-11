import styled from 'styled-components';

type AnchorButtonProps = {
  color: string;
  hoverColor: string;
};

const AnchorButton = styled.a<AnchorButtonProps>`
  width: 30rem;
  height: 10.4rem;
  border-radius: 0.8rem;
  font: 700 2rem Archivo;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.buttonText};
  background-color: ${({ theme, color }) => theme.colors[color]};
  transition: background-color 0.2s;

  &:first-child {
    margin-right: 1.6rem;
  }

  &:hover {
    background-color: ${({ theme, hoverColor }) => theme.colors[hoverColor]};
  }

  svg {
    margin-right: 2.4rem;
    width: 4rem;
  }
`;

export default AnchorButton;
