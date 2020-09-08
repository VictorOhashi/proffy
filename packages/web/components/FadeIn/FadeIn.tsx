import { memo } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const fadeInRightLeft = {
  initial: {
    x: 60,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    x: 60,
    opacity: 0,
  },
};

const fadeInDownUp = {
  initial: {
    y: -60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    y: -60,
    opacity: 0,
  },
};

const orientations = {
  'right-to-left': fadeInRightLeft,
  'down-to-up': fadeInDownUp,
};

const StyledMotionDiv = styled(motion.div)`
  width: 100%;
  height: 100%;
`;

type RootDivProps = {
  background?: string;
};

const RootDiv = styled.div<RootDivProps>`
  background: ${({ theme, background }) => theme.colors[background]};
  overflow-x: hidden;
  width: 100%;
  height: 100%;
`;

type FadeInProps = RootDivProps & {
  orientation: 'right-to-left' | 'down-to-up';
};

const FadeIn: React.FC<FadeInProps> = memo(
  ({ children, orientation, background }) => {
    return (
      <RootDiv background={background}>
        <StyledMotionDiv
          initial="initial"
          animate="animate"
          exit="exit"
          variants={orientations[orientation]}
        >
          {children}
        </StyledMotionDiv>
      </RootDiv>
    );
  }
);

export default FadeIn;
