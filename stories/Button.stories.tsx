import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '../src';
import '../src/bg.css';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    bgColor: {
      control: {
        type: 'select',
        options: [
          'bg-gray-500',
          'bg-red-500',
          'bg-yellow-500',
          'bg-green-500',
          'bg-blue-500',
          'bg-indigo-500',
          'bg-purple-500',
          'bg-pink-500',
        ],
      },
    },
    glassEffect: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  bgColor: 'bg-red-500',
  title: 'This is a Basic Button',
};

export const Glass: Story<ButtonProps> = args => (
  <div className="flex items-center justify-center min-h-screen background">
    <Button {...args} />
  </div>
);
Glass.args = {
  bgColor: 'bg-gray-500',
  title: 'This is a Glass Button',
  glassEffect: true,
};
