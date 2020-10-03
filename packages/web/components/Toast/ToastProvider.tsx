import { memo, createContext, useContext, useState, useCallback } from 'react';

import { AnimatePresence } from 'framer-motion';
import { ToastContainer } from './styled';
import Toast, { ToastOptions } from './Toast';

type ToastContext = (text: string, options?: ToastOptions) => void;

export const ToastContext = createContext<any>(null);

export const useToast = () => useContext<ToastContext>(ToastContext);

const ToastProvider = memo(({ children }) => {
  const [toasts, setToasts] = useState([]);

  const toast = (text: string, options: ToastOptions) => {
    const id = Math.floor(Math.random() * 100) + Date.now();
    setToasts((prev) => [...prev, { id, text, ...options }]);
  };

  const handleClose = useCallback((id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <>
      <ToastContext.Provider value={toast}>{children}</ToastContext.Provider>
      <ToastContainer>
        <AnimatePresence>
          {toasts.length > 0 &&
            toasts.map((toast) => (
              <Toast key={toast.id} onClose={handleClose} {...toast} />
            ))}
        </AnimatePresence>
      </ToastContainer>
    </>
  );
});

export default ToastProvider;
