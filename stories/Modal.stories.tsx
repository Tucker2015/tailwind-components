import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Modal, ModalProps } from '../src';

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
    buttonTitle: {
      control: {
        type: 'text',
      },
      defaultValue: 'Confirm',
    },
    onAction: {
      control: {
        type: 'function',
      },
    },
    variant: {
      control: {
        type: 'radio',
        options: ['info', 'success', 'warning', 'basic', 'error'],
      },
      defaultValue: 'basic',
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
      <Button bgColor="bg-gray-600" onClick={handleOpenModal}>
        Open Modal
      </Button>
      <Modal {...args} isOpen={isOpen} onClose={handleCloseModal}>
        <p className="text-sm text-gray-500">
          Are you sure you want to deactivate your account? All of your data
          will be permanently removed. This action cannot be undone.
        </p>
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Modal Test',
  bgColor: 'bg-gray-600',
  onAction: () => console.log('Action'),
};
