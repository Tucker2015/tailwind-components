import React from 'react';
import { Meta, Story } from '@storybook/react';
import { VerticalContainer, VerticalContainerProps } from '../src';

export default {
  title: 'VerticalContainer',
  component: VerticalContainer,
  argTypes: {
    alignment: {
      control: {
        type: 'select',
        options: ['items-start', 'items-end', 'items-center'],
      },
    },
    spacing: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta;

const Template: Story<VerticalContainerProps> = args => {
  return (
    <VerticalContainer spacing={'space-y-2'}>
      <p>This is some text using the default font and color.</p>
      <p>This is some text using the default font and color.</p>
    </VerticalContainer>
  );
};

export const Basic = Template.bind({});

Basic.args = {
  alignment: 'items-center',
  spacing: 'space-y-2',
  children: 'This is some text using the default font and color.',
};

export const WithText = Template.bind({});
WithText.args = {
  alignment: 'items-center',
  spacing: 'space-x-2',
  children: 'This is some text using the default font and color.',
};
