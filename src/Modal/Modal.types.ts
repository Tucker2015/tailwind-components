export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAction?: () => void;
  children: React.ReactNode;
  title?: string;
  bgColor?: string;
  noButtons?: boolean;
  buttonTitle?: string;
  titlePosition?: 'center' | 'left' | 'right';
  variant?: 'basic' | 'warning' | 'error' | 'success' | 'info';
}
