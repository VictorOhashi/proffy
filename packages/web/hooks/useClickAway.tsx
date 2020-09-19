import { useCallback, useEffect } from 'react';

type ClickAway = (handleClickAway: () => void, ref: any) => void;

const useClickAway: ClickAway = (handleClickAway, ref) => {
  const handleClick = useCallback(
    (e) => {
      if (!ref.current?.contains(e.target)) {
        handleClickAway();
      }
    },
    [handleClickAway]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('focusin', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('focusin', handleClick);
    };
  }, []);
};

export default useClickAway;
