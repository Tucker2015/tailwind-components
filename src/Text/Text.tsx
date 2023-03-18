import React from 'react';
import { TextProps } from './Text.types';
import classNames from 'classnames';

const Text = ({
  children,
  size,
  color,
  className,
  font,
  alignment,
}: TextProps) => {
  const textSizeClasses = size ? `${size}` : '';
  const textColorClass = color ? `${color}` : '';
  const textFontClass = font ? `${font}` : '';
  const textAlignmentClass = alignment ? `${alignment}` : '';
  const classes = classNames(
    'font-poppins',
    textAlignmentClass,
    textSizeClasses,
    textColorClass,
    textFontClass,
    className
  );

  return <div className={classes}>{children}</div>;
};

export default Text;
