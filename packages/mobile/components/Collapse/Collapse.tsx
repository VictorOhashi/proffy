import React, { useState, ReactNode } from 'react';

import Collapsible from 'react-native-collapsible';
import { RectButton } from 'react-native-gesture-handler';
import styled, { useTheme } from 'styled-components/native';
import { Arrow } from '@proffy/assets/native';

type ExpandButtonProps = {
  collapsed: boolean;
};

const ExpandButton = styled(RectButton)<ExpandButtonProps>`
  height: 46px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px;
`;

const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.primaryText};
  font-family: Poppins_400Regular;
  font-size: 16px;
`;

const CollapseContainer = styled(Collapsible)`
  padding-top: 20px;
`;

const CollapseArrow = styled.View`
  justify-content: center;
  align-items: center;
`;

type CollapseProps = {
  text: string;
  startAdorment?: ReactNode;
};

const Collapse: React.FC<CollapseProps> = ({
  children,
  startAdorment,
  text,
}) => {
  const theme = useTheme();
  const [isOpen, setOpen] = useState(true);

  return (
    <>
      <ExpandButton collapsed={isOpen} onPress={() => setOpen((o) => !o)}>
        {startAdorment}
        <ButtonText>{text}</ButtonText>
        <CollapseArrow
          style={{ transform: [{ rotateX: isOpen ? '0deg' : '180deg' }] }}
        >
          <Arrow width="24" height="24" color={theme.colors.primaryText} />
        </CollapseArrow>
      </ExpandButton>

      <CollapseContainer collapsed={isOpen}>{children}</CollapseContainer>
    </>
  );
};

export default Collapse;
