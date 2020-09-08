import { memo } from 'react';
import Link, { LinkProps } from 'next/link';

import styled from 'styled-components';

type StyledAnchorButtonProps = {
  color: Colors;
  hoverColor: string;
};

const StyledAnchorButton = styled.a<StyledAnchorButtonProps>`
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
  ${({ theme }) => theme.elevation[3]};

  :first-child {
    margin-right: 1.6rem;
  }

  :hover {
    background-color: ${({ theme, hoverColor }) => theme.colors[hoverColor]};
    ${({ theme }) => theme.elevation[0]};
  }

  img {
    margin-right: 2.4rem;
    width: 4rem;
  }
`;

type AnchorButtonProps = StyledAnchorButtonProps & LinkProps;

const AnchorButton: React.FC<AnchorButtonProps> = memo((props) => {
  const { color, hoverColor, children, ...rest } = props;
  return (
    <Link {...rest}>
      <StyledAnchorButton color={color} hoverColor={hoverColor}>
        {children}
      </StyledAnchorButton>
    </Link>
  );
});

export default AnchorButton;
