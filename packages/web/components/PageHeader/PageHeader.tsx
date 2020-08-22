import Link from 'next/link';

import LogoImg from '@proffy/assets/images/logo.svg';
import BackIcon from '@proffy/assets/icons/back.svg';

import {
  Header,
  TopBarContainer,
  AnchorButton,
  HeaderContent,
  HeaderTitle,
} from './styled';

type PageHeaderProps = {
  title: string;
};

export const PageHeader: React.FC<PageHeaderProps> = ({ title, children }) => {
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
        {children}
      </HeaderContent>
    </Header>
  );
};

export default PageHeader;
