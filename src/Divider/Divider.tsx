import React from 'react';
import { DividerProps } from './Divider.types';

const Divider = ({ color, height, margin }: DividerProps) => {
  return (
    <div
      className={`
      ${color ? color : 'bg-gray-500'} 
      ${height ? height : 'h-0.5'} 
      ${margin ? margin : 'my-4'}
      w-full`}
    ></div>
  );
};

export default Divider;
