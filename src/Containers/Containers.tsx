import React from 'react';
import classNames from 'classnames';
import { VerticalContainerProps } from './Containers.types';

export const VerticalContainer = ({
  children,
  className,
  alignment,
  spacing,
  size,
  color,
  font,
  ...rest
}: VerticalContainerProps) => {
  const containerAlignmentClass = alignment ? `${alignment}` : '';
  const containerSpacingClass = spacing ? `${spacing}` : '';
  const containerSizeClass = size ? `${size}` : '';
  const containerColorClass = color ? `${color}` : '';
  const containerFontClass = font ? `${font}` : '';
  const classes = classNames(
    'flex flex-col',
    containerAlignmentClass,
    containerSpacingClass,
    containerSizeClass,
    containerColorClass,
    containerFontClass,
    className
  );
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};
