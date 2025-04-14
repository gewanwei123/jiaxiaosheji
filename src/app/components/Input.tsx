'use client';

import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { ValidationError } from '../utils/validation';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
  inputSize?: 'sm' | 'md' | 'lg';
  prefixElement?: React.ReactNode;
  suffixElement?: React.ReactNode;
  isLoading?: boolean;
  containerClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    error, 
    label, 
    type = 'text',
    inputSize = 'md',
    prefixElement,
    suffixElement,
    isLoading,
    disabled,
    containerClassName,
    labelClassName,
    errorClassName,
    ...props 
  }, ref) => {
    const sizeClasses = {
      sm: 'px-2 py-1 text-sm',
      md: 'px-3 py-2',
      lg: 'px-4 py-3 text-lg'
    };

    return (
      <div className={twMerge('w-full', containerClassName)}>
        {label && (
          <label className={twMerge(
            'block text-sm font-medium text-gray-700 mb-1',
            labelClassName
          )}>
            {label}
          </label>
        )}
        <div className="relative">
          {prefixElement && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              {prefixElement}
            </div>
          )}
          <input
            type={type}
            className={twMerge(
              'w-full border rounded-md shadow-sm transition-all duration-200',
              'focus:outline-none focus:ring-2',
              sizeClasses[inputSize],
              prefixElement ? 'pl-10' : '',
              suffixElement ? 'pr-10' : '',
              error
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:ring-blue-500',
              disabled && 'bg-gray-100 cursor-not-allowed opacity-60',
              isLoading && 'pr-10',
              className
            )}
            ref={ref}
            disabled={disabled || isLoading}
            {...props}
          />
          {suffixElement && !isLoading && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              {suffixElement}
            </div>
          )}
          {isLoading && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <div className="animate-spin h-4 w-4 border-2 border-blue-500 rounded-full border-t-transparent" />
            </div>
          )}
        </div>
        {error && (
          <p className={twMerge(
            'mt-1 text-sm text-red-600',
            errorClassName
          )}>
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input; 