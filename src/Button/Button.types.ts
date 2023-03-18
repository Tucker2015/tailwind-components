export interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  title?: string;
  bgColor?: string;
  glassEffect?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}
