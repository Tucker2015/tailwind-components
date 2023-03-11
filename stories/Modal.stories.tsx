import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Modal, ModalProps } from '../src';

const meta: Meta = {
  title: 'Layout/Modal',
  component: Modal,
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
    bgColor: {
      control: {
        type: 'string',
      },
      defaultValue: 'bg-white',
    },
    isOpen: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ModalProps> = args => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={handleOpenModal}>Open Modal</button>
      <Modal {...args} isOpen={isOpen} onClose={handleCloseModal}>
        <p>Modal Content</p>
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Modal Test',
  bgColor: 'bg-gray-600',
};
