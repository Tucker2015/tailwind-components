import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Text, TextProps } from '../src';

export default {
  title: 'Text',
  component: Text,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: [
          'text-xs',
          'text-sm',
          'text-base',
          'text-md',
          'text-lg',
          'text-xl',
          'text-2xl',
          'text-3xl',
          'text-4xl',
          'text-5xl',
          'text-6xl',
          'text-7xl',
          'text-8xl',
          'text-9xl',
        ],
      },
    },
    color: {
      control: {
        type: 'select',
        options: [
          'text-gray-500',
          'text-red-500',
          'text-yellow-500',
          'text-green-500',
          'text-blue-500',
          'text-indigo-500',
          'text-purple-500',
          'text-pink-500',
        ],
      },
    },
  },
} as Meta;

const Template: Story<TextProps> = args => <Text {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  color: 'text-red-500',
  children: 'This is some text using the default font and color.',
};
