'use client';

import React from 'react';
import Form from './Form';
import { validateEmail, validatePhone } from '../utils/validation';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const fields = [
    {
      id: 'name',
      name: 'name',
      label: '姓名',
      type: 'text',
      placeholder: '请输入您的姓名',
      validation: [
        (value: string) => !value ? '请输入姓名' : null,
        (value: string) => value.length < 2 ? '姓名至少需要2个字符' : null,
      ]
    },
    {
      id: 'email',
      name: 'email',
      label: '邮箱',
      type: 'email',
      placeholder: '请输入您的邮箱',
      validation: [
        (value: string) => !value ? '请输入邮箱' : null,
        (value: string) => !validateEmail(value) ? '请输入有效的邮箱地址' : null,
      ]
    },
    {
      id: 'phone',
      name: 'phone',
      label: '电话',
      type: 'tel',
      placeholder: '请输入您的电话',
      validation: [
        (value: string) => !value ? '请输入电话' : null,
        (value: string) => !validatePhone(value) ? '请输入有效的电话号码' : null,
      ]
    },
    {
      id: 'message',
      name: 'message',
      label: '留言',
      type: 'textarea',
      placeholder: '请输入您的留言',
      validation: [
        (value: string) => !value ? '请输入留言内容' : null,
        (value: string) => value.length < 10 ? '留言至少需要10个字符' : null,
      ]
    }
  ];

  const handleSubmit = async (data: Record<string, string>) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('提交失败，请稍后重试');
      }

      return response.json();
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : '提交失败，请稍后重试');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">联系我们</h2>
      <Form
        fields={fields}
        onSubmit={handleSubmit}
        submitButtonText="提交"
        successMessage="提交成功！我们会尽快与您联系。"
      />
    </div>
  );
}; 