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
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

type FadeInProps = RootDivProps & {
  orientation: 'right-to-left' | 'down-to-up';
};

const FadeIn: React.FC<FadeInProps> = ({
  children,
  orientation,
  background,
}) => {
  return (
    <RootDiv background={background}>
      <StyledMotionDiv
        initial="initial"
        animate="animate"
        exit={{ opacity: 0 }}
        variants={orientations[orientation]}
      >
        {children}
      </StyledMotionDiv>
    </RootDiv>
  );
};

export default FadeIn;
