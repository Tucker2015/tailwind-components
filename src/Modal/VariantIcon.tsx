import {
  CheckCircleIcon,
  ExclamationIcon,
  InformationCircleIcon,
} from '@heroicons/react/solid';
import React from 'react';

type IVariantProps = {
  variantType?: 'info' | 'success' | 'warning' | 'basic' | 'error';
};

const variants = {
  info: {
    icon: InformationCircleIcon,
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-800',
  },
  success: {
    icon: CheckCircleIcon,
    bgColor: 'bg-green-100',
    textColor: 'text-green-800',
  },
  warning: {
    icon: ExclamationIcon,
    bgColor: 'bg-yellow-100',
    textColor: 'text-yellow-800',
  },
  basic: {
    icon: ExclamationIcon,
    bgColor: 'bg-gray-100',
    textColor: 'text-gray-800',
  },
  error: {
    icon: ExclamationIcon,
    bgColor: 'bg-red-100',
    textColor: 'text-red-800',
  },
};

export const VariantIcon = ({ variantType }: IVariantProps) => {
  if (!variantType) return null;
  if (variantType === 'basic') return null;
  const variant = variants[variantType];
  const Icon = variant.icon;
  return (
    <div
      className={`flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto rounded-full sm:mx-0 sm:h-10 sm:w-10 ${variant.bgColor} ${variant.textColor}`}
    >
      <Icon className="w-8 h-8" />
    </div>
  );
};
