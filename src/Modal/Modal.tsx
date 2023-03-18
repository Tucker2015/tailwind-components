import React, { Fragment, useRef } from 'react';
import { ModalProps } from './Modal.types';
import { Dialog, Transition } from '@headlessui/react';
import { VariantIcon } from './VariantIcon';

const Modal = ({
  isOpen,
  onClose,
  children,
  title,
  onAction,
  noButtons,
  variant,
  buttonTitle,
}: ModalProps) => {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-gray-600 bg-opacity-75" />
        </Transition.Child>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-full p-2 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative items-center justify-center overflow-hidden text-center transition-all transform bg-blue-400 rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-lg">
                <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <VariantIcon variantType={variant} />
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className={`text-base text-center font-semibold leading-6 text-gray-900`}
                      >
                        {title}
                      </Dialog.Title>
                      <div className="mt-2">{children}</div>
                    </div>
                  </div>
                </div>
                {noButtons ? null : (
                  <div className="px-4 py-3 bg-gray-50 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex justify-center w-full px-3 py-2 text-sm font-semibold text-white bg-red-600 rounded-md shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                      onClick={onAction || onClose}
                    >
                      {variant === 'error' ? 'Ok' : buttonTitle || 'Confirm'}
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center w-full px-3 py-2 mt-3 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={onClose}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
