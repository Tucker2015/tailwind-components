import React, { createContext, useContext, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/solid';
import {
  ToastContextType,
  ToastProps,
  ToastProviderProps,
} from './Toast.types';

const variantStyles = {
  success: 'bg-green-500',
  error: 'bg-red-500',
  info: 'bg-blue-500',
};

const variantIcons = {
  success: <CheckCircleIcon className="w-8 h-8" />,
  error: <ExclamationCircleIcon className="w-8 h-8" />,
  info: <InformationCircleIcon className="w-8 h-8" />,
};

const Toast: React.FC<ToastProps> = ({ message, variant }) => {
  return (
    <div
      className={`toast-container flex items-center w-full max-w-xs p-4 space-x-4 text-gray-100 rounded-lg shadow ${variantStyles[variant]}`}
    >
      {variantIcons[variant]}
      <div className="pl-4 text-sm font-normal">{message}</div>
    </div>
  );
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toastElement, setToastElement] = useState<React.ReactElement | null>(
    null
  );
  const [toastRoot, setToastRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const toastRootEl = document.createElement('div');
    toastRootEl.id = 'toast-root';
    document.body.appendChild(toastRootEl);
    setToastRoot(toastRootEl);

    return () => {
      document.body.removeChild(toastRootEl);
    };
  }, []);

  const showToast = (
    message: string,
    variant: 'success' | 'error' | 'info' = 'info'
  ) => {
    const toast = <Toast message={message} variant={variant} />;
    setToastElement(toast);

    setTimeout(() => {
      setToastElement(null);
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toastRoot &&
        toastElement &&
        ReactDOM.createPortal(toastElement, toastRoot)}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
