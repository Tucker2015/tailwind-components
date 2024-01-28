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
      onDragOver={(e: { preventDefault: () => void }) => {
        e.preventDefault(); // Prevent the default behavior
      }}
      onDrop={e => {
        e.preventDefault(); // Prevent the default behavior

        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
          const selectedFile = e.dataTransfer.files[0];
          setFile(selectedFile);

          // Generate a URL for the file to preview it
          const imageUrl = URL.createObjectURL(selectedFile);
          setPreviewImage(imageUrl);
        }
      }}
      onChange={onChange}
      onButtonClick={onButtonClick}
      previewImage={previewImage}
    />
  );
};
