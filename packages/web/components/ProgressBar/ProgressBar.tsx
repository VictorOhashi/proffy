import { memo } from 'react';

import styled, { keyframes } from 'styled-components';

type ProgressBarProps = {
  duration: number;
  color: string;
  run: boolean;
};

const rotate = keyframes`
  from {
     width: 100%;
  }
  to {
     width: 0%;
  }
`;

const Bar = styled.div<ProgressBarProps>`
  content: '';
  position: absolute;
  height: 5px;
  bottom: 0;
  background-color: ${({ theme, color }) => theme.colors[`${color}Dark`]};
  animation: ${rotate} ${({ duration }) => `${duration}ms`} linear;
  animation-play-state: ${({ run }) => (run ? 'running' : 'paused')};
`;

const ProgressBar: React.FC<ProgressBarProps> = memo(
  ({ duration, color, run }) => {
    return <Bar run={run} duration={duration} color={color} />;
  }
);

export default ProgressBar;
