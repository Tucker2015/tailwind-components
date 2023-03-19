import React from 'react';
import { Text } from '../Text';
import { ButtonProps } from './Button.types';

const Button = ({
  onClick,
  children,
  title,
  bgColor,
  glassEffect,
  type,
  disabled,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`
      ${disabled ? 'cursor-not-allowed bg-opacity-30' : ''}
        ${
          glassEffect
            ? 'bg-opacity-50 bg-clip-padding backdrop-filter backdrop-blur-sm hover:bg-opacity-30'
            : ''
        }
      ${bgColor} self-center outline-none shadow-lg w-auto p-3 rounded-lg text-zinc-50 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out hover:bg-opacity-900`}
    >
      <Text color="text-gray-50" size="text-lg" alignment="text-center">
        {title}
      </Text>
      {children}
    </button>
  );
};

export default Button;
