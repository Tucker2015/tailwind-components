import { ReactNode } from 'react';

export type ToastProps = {
  message: string;
  variant: 'success' | 'error' | 'info';
};

export type ToastContextType = {
  /**
   * Show a toast message
   *
   * Example: showToast('Logged in successfully', 'success')
   * @param message Message to display
   * @param variant Type of toast message
   */
  showToast: (message: string, variant?: 'success' | 'error' | 'info') => void;
};

export type ToastProviderProps = {
  children: ReactNode;
};
