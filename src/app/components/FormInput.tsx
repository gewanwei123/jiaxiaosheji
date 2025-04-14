'use client';

import React from 'react';

interface FormInputProps {
  id: string;
  label: string;
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  rows?: number;
  className?: string;
}

export default function FormInput({
  id,
  label,
  type = 'text',
  value,
  onChange,
  error,
  placeholder,
  required = false,
  options,
  rows = 4,
  className = ''
}: FormInputProps) {
  const baseInputClasses = `w-full bg-white/5 border ${
    error ? 'border-red-500' : 'border-white/20'
  } rounded-md px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 ${className}`;

  const renderInput = () => {
    switch (type) {
      case 'textarea':
        return (
          <textarea
            id={id}
            value={value}
            onChange={onChange}
            className={baseInputClasses}
            placeholder={placeholder}
            required={required}
            rows={rows}
          />
        );
      case 'select':
        return (
          <select
            id={id}
            value={value}
            onChange={onChange}
            className={baseInputClasses}
            required={required}
          >
            <option value="" className="bg-blue-700">
              {placeholder || '请选择'}
            </option>
            {options?.map((option) => (
              <option key={option.value} value={option.value} className="bg-blue-700">
                {option.label}
              </option>
            ))}
          </select>
        );
      default:
        return (
          <input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            className={baseInputClasses}
            placeholder={placeholder}
            required={required}
          />
        );
    }
  };

  return (
    <div>
      <label htmlFor={id} className="block text-white/80 mb-1">
        {label}
      </label>
      {renderInput()}
      {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
    </div>
  );
} 