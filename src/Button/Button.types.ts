export interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  title?: string;
  bgColor?: string;
  glassEffect?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  /**
   * Spacing between the button
   * @default '0'
   * @example '0.5rem'
   */
  spacing?: string;
  className?: string;
}
