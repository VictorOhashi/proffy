import { memo } from 'react';
import Link from 'next/link';
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
    return (
      <Header>
        <TopBarContainer>
          <Link href="/">
            <AnchorButton>
              <img src={BackIcon} alt="Voltar" />
            </AnchorButton>
          </Link>
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
