import { memo } from 'react';
import styled from 'styled-components';
import { StyledIcon } from '@styled-icons/styled-icon';

import { Container, Title, SubTitle, Button } from './styled';

type EmptyStateProps = {
  title: string;
  subTitle: string;
  icon: StyledIcon;
  buttonText?: string;
  onClick?: () => void;
};

const EmptyState: React.FC<EmptyStateProps> = memo(
  ({ title, subTitle, icon, buttonText, onClick }) => {
    const Icon = styled(icon)`
      width: 30rem;
    `;
    return (
      <Container>
        <Icon />
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        {buttonText && <Button onClick={onClick}>{buttonText}</Button>}
      </Container>
    );
  }
);

export default EmptyState;
