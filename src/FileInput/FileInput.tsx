import React from 'react';
import { FileInputProps } from './FileInput.types';

const FileInput = ({
  onChange,
  onButtonClick,
  previewImage,
}: FileInputProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 space-y-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="flex flex-col items-center justify-center px-4 pt-5 pb-6">
          <svg
            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to Upload</span> or drag and
            drop.
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            PNG or JPG (MAX. 800x400px)
          </p>
        </div>
        {previewImage && (
          <img className="w-auto h-24 mt-4" src={previewImage} alt="preview" />
        )}
        <input
          onChange={onChange}
          accept="image/png, image/jpeg"
          id="dropzone-file"
          type="file"
          className="hidden"
        />
      </label>
      <button
        className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600"
        onClick={onButtonClick}
      >
        Upload
      </button>
    </div>
  );
};

export default FileInput;
