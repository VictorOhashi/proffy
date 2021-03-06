import { memo } from 'react';
import { useRouter } from 'next/router';

import styled from 'styled-components';

type StyledAnchorButtonProps = {
  color: Colors;
  hoverColor: string;
};

const StyledAnchorButton = styled.a<StyledAnchorButtonProps>`
  width: 30rem;
  height: 10.4rem;
  border-radius: 0.8rem;
  outline: 0;
  font: 700 2rem Archivo;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.buttonText};
  background-color: ${({ theme, color }) => theme.colors[color]};
  transition: background-color 0.2s;
  ${({ theme }) => theme.elevation[3]};
  cursor: pointer;

  :first-child {
    margin-right: 1.6rem;
  }

  :hover,
  :focus {
    background-color: ${({ theme, hoverColor }) => theme.colors[hoverColor]};
    ${({ theme }) => theme.elevation[0]};
  }

  svg {
    margin-right: 2.4rem;
    width: 4rem;
  }
`;

type AnchorButtonProps = StyledAnchorButtonProps & {
  href: string;
};

const AnchorButton: React.FC<AnchorButtonProps> = memo((props) => {
  const { color, hoverColor, children, href } = props;

  const router = useRouter();

  const handleRoute = () => {
    router.push(href);
  };

  const handleKeydown = (e) => {
    if (e.key === 'Enter') {
      handleRoute();
    }
  };

  return (
    <StyledAnchorButton
      tabIndex={0}
      color={color}
      hoverColor={hoverColor}
      onClick={handleRoute}
      onKeyDown={handleKeydown}
    >
      {children}
    </StyledAnchorButton>
  );
});

export default AnchorButton;
