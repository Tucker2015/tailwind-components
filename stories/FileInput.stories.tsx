import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { FileInput, FileInputProps } from '../src';

export default {
  title: 'FileInput',
  component: FileInput,
} as Meta;

export const Basic = (args: FileInputProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = React.useState<string | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);

      // Generate a URL for the file to preview it
      const imageUrl = URL.createObjectURL(selectedFile);
      setPreviewImage(imageUrl);
    }
  };

  const onButtonClick = () => {
    console.log(file);
  };

  return (
    <FileInput
      onChange={onChange}
      onButtonClick={onButtonClick}
      previewImage={previewImage}
    />
  );
};
