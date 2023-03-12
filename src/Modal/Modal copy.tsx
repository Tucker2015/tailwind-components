import React, { useEffect, useRef } from 'react';
import { XIcon } from '@heroicons/react/solid';
import { ModalProps } from './Modal.types';

const Modal = ({ isOpen, onClose, children, title, bgColor }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`${
        isOpen ? 'block' : 'hidden'
      } fixed z-10 inset-0 overflow-y-auto drop-shadow-xl`}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div
          className={`
        ${bgColor ? bgColor : 'bg-white'}
        relative w-11/12 rounded-lg md:w-1/2`}
          ref={modalRef}
        >
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button onClick={onClose}>
              <XIcon className="w-6 h-6 text-gray-500" />
            </button>
          </div>
          <div className="p-4">
            <h2 className="text-2xl font-bold text-center">{title}</h2>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
