'use client';

import React, { useState } from 'react';
import { ValidationError } from '../utils/validation';

export interface FormField {
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder: string;
  validation: ((value: string) => string | null)[];
}

interface FormProps {
  fields: FormField[];
  onSubmit: (data: Record<string, string>) => Promise<any>;
  submitButtonText: string;
  successMessage: string;
}

const Form: React.FC<FormProps> = ({ fields, onSubmit, submitButtonText, successMessage }) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<ValidationError>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: null }));
  };

  const validateField = (field: FormField, value: string): string | null => {
    for (const validate of field.validation) {
      const error = validate(value);
      if (error) return error;
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    // 验证所有字段
    const newErrors: ValidationError = {};
    let hasErrors = false;

    fields.forEach(field => {
      const error = validateField(field, formData[field.name] || '');
      if (error) {
        newErrors[field.name] = error;
        hasErrors = true;
      }
    });

    if (hasErrors) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      await onSubmit(formData);
      setIsSuccess(true);
      setFormData({});
    } catch (error) {
      setErrors({ submit: error instanceof Error ? error.message : '提交失败，请稍后重试' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center p-6 bg-green-50 rounded-lg">
        <p className="text-green-600">{successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {fields.map(field => (
        <div key={field.id} className="space-y-2">
          <label htmlFor={field.id} className="block text-sm font-medium text-gray-700">
            {field.label}
          </label>
          {field.type === 'textarea' ? (
            <textarea
              id={field.id}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
              placeholder={field.placeholder}
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors[field.name] ? 'border-red-500' : 'border-gray-300'
              }`}
              rows={4}
            />
          ) : (
            <input
              id={field.id}
              name={field.name}
              type={field.type}
              value={formData[field.name] || ''}
              onChange={handleChange}
              placeholder={field.placeholder}
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors[field.name] ? 'border-red-500' : 'border-gray-300'
              }`}
            />
          )}
          {errors[field.name] && (
            <p className="text-sm text-red-600">{errors[field.name]}</p>
          )}
        </div>
      ))}

      {errors.submit && (
        <div className="text-sm text-red-600 text-center">{errors.submit}</div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
          isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {isSubmitting ? '提交中...' : submitButtonText}
      </button>
    </form>
  );
};

export default Form; 