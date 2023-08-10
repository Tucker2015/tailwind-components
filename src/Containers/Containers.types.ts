export interface VerticalContainerProps {
  children: React.ReactNode;
  className?: string;
  alignment?: 'left' | 'center' | 'right';
  spacing?: string;
  size?: 'small' | 'medium' | 'large';
  color?: string;
  font?: 'normal' | 'bold';
}
