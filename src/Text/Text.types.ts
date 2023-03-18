export interface TextProps {
  children: React.ReactNode;
  /** The font size for the text. */
  size?:
    | 'text-2xs'
    | 'text-xs'
    | 'text-sm'
    | 'text-base'
    | 'text-md'
    | 'text-lg'
    | 'text-xl'
    | 'text-2xl'
    | 'text-3xl'
    | 'text-4xl'
    | 'text-5xl'
    | 'text-6xl'
    | 'text-7xl'
    | 'text-8xl'
    | 'text-9xl';
  /**
   * The color of the text.
   *
   * @param {'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink'} color - The color to set for the text.
   * @example 'text-gray-500'
   */
  color?: string;
  className?: string;
  font?: string;
  alignment?: 'text-left' | 'text-center' | 'text-right' | 'text-justify';
}
