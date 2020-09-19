import { memo, useCallback } from 'react';
import { useRouter } from 'next/router';
import LogoImg from '@proffy/assets/images/logo.svg';
import BackIcon from '@proffy/assets/icons/back.svg';

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

    const handleRoute = useCallback(() => {
      router.push('/');
    }, [router]);

    const handleKeydown = useCallback(
      (e) => {
        if (e.key === 'Enter') {
          handleRoute();
        }
      },
      [handleRoute]
    );

    return (
      <Header>
        <TopBarContainer>
          <AnchorButton
            tabIndex={0}
            onClick={handleRoute}
            onKeyDown={handleKeydown}
          >
            <img src={BackIcon} alt="Voltar" />
          </AnchorButton>

          <img src={LogoImg} alt="Proffy" />
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
