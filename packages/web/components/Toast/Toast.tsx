import { memo, useState, useCallback, useRef, useEffect } from 'react';

import {
  CloseOutline,
  AlertCircleOutline,
  AlertTriangleOutline,
} from '@styled-icons/evaicons-outline';
import { InfoCircle, CheckCircle } from '@styled-icons/boxicons-regular';

import { FadeIn, ProgressBar } from '..';
import {
  ToastItem,
  CloseButton,
  ToastText,
  CloseIcon,
  ToastIcon,
} from './styled';

const ToastType = {
  success: { color: 'success', icon: <CheckCircle /> },
  info: { color: 'info', icon: <InfoCircle /> },
  warning: { color: 'warning', icon: <AlertTriangleOutline /> },
  error: { color: 'error', icon: <AlertCircleOutline /> },
};

export type ToastOptions = {
  type?: keyof typeof ToastType;
  duration?: number;
};

type ToastProps = ToastOptions & {
  id: number;
  text: string;
  onClose: (id: number) => void;
};

const Toast: React.FC<ToastProps> = memo((props) => {
  const { id, text, type, duration, onClose } = props;

  const [timerOn, setTimerOn] = useState(true);
  const [current, setCurrent] = useState({
    current: Date.now(),
    timeLeft: duration,
  });

  const handleTime = useCallback((shouldStop) => {
    if (shouldStop) {
      setCurrent(({ current, timeLeft }) => ({
        timeLeft: timeLeft - (Date.now() - current),
        current,
      }));
      setTimerOn(false);
    } else {
      setCurrent(({ timeLeft }) => ({
        timeLeft,
        current: Date.now(),
      }));
      setTimerOn(true);
    }
  }, []);

  const timeoutRef = useRef<number>();
  useEffect(() => {
    if (timerOn) {
      timeoutRef.current = setTimeout(() => {
        onClose(id);
      }, current.timeLeft);
    }
    return () => clearInterval(timeoutRef.current);
  }, [timerOn, current.timeLeft]);

  const color = ToastType[type].color;

  return (
    <FadeIn orientation="right-to-left">
      <ToastItem
        color={color}
        onMouseEnter={() => handleTime(true)}
        onMouseLeave={() => handleTime(false)}
      >
        <ToastIcon>{ToastType[type].icon}</ToastIcon>
        <ToastText>{text}</ToastText>
        <CloseButton onClick={() => onClose(id)}>
          <CloseIcon>
            <CloseOutline />
          </CloseIcon>
        </CloseButton>
        <ProgressBar color={color} duration={duration} run={timerOn} />
      </ToastItem>
    </FadeIn>
  );
});

Toast.defaultProps = {
  type: 'info',
  duration: 3000,
};

export default Toast;
