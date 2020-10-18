import { memo } from 'react';
import { useRouter } from 'next/router';
import { Logo, Back } from '@proffy/assets';

import {
  Header,
  TopBarContainer,
  AnchorButton,
  HeaderContent,
  HeaderTitle,
  HeaderSubtitle,
} from './styled';

type PageHeaderProps = {
  title: string;
  subTitle?: string;
};

export const PageHeader: React.FC<PageHeaderProps> = memo(
  ({ title, subTitle, children }) => {
    const router = useRouter();

    const handleRoute = () => {
      router.push('/');
    };

    const handleKeydown = (e) => {
      if (e.key === 'Enter') {
        handleRoute();
      }
    };

    return (
      <Header>
        <TopBarContainer>
          <AnchorButton
            tabIndex={0}
            onClick={handleRoute}
            onKeyDown={handleKeydown}
          >
            <Back title="Voltar" />
          </AnchorButton>

          <Logo title="Proffy" />
        </TopBarContainer>
        <HeaderContent>
          <HeaderTitle>{title}</HeaderTitle>
          {subTitle && <HeaderSubtitle>{subTitle}</HeaderSubtitle>}
          {children}
        </HeaderContent>
      </Header>
    );
  }
);

export default PageHeader;
