import React from 'react';
import { TextProps } from './Text.types';
import classNames from 'classnames';

const Text = ({
  children,
  size,
  bold,
  color,
  className,
  font,
  alignment,
}: TextProps) => {
  const textSizeClasses =
    typeof size === 'object'
      ? Object.entries(size)
          .map(([breakpoint, s]) => `${breakpoint}:${s}`)
          .join(' ')
      : size;
  const textBoldClass = bold ? 'font-bold' : '';
  const textColorClass = color ? `${color}` : '';
  const textFontClass = font ? `${font}` : '';
  const textAlignmentClass = alignment ? `${alignment}` : '';
  const classes = classNames(
    'font-poppins',
    textAlignmentClass,
    textBoldClass,
    textSizeClasses,
    textColorClass,
    textFontClass,
    className
  );

  return <div className={classes}>{children}</div>;
};

export default Text;
