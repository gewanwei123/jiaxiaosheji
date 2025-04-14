'use client';

import React, { useState } from 'react';
import { Form } from './Form';
import { Input } from './Input';
import { Button } from './Button';
import { validateEmail, validatePhone } from '../utils/validation';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

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

      // 清空表单
      const form = document.querySelector('form');
      if (form) {
        form.reset();
      }
      
      alert('提交成功！我们会尽快与您联系。');
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : '提交失败，请稍后重试');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">联系我们</h2>
      
      <Input
        label="姓名"
        name="name"
        type="text"
        validations={[
          { required: true, message: '请输入姓名' },
          { minLength: 2, message: '姓名至少需要2个字符' }
        ]}
      />

      <Input
        label="邮箱"
        name="email"
        type="email"
        validations={[
          { required: true, message: '请输入邮箱' },
          { validate: validateEmail, message: '请输入有效的邮箱地址' }
        ]}
      />

      <Input
        label="电话"
        name="phone"
        type="tel"
        validations={[
          { required: true, message: '请输入电话' },
          { validate: validatePhone, message: '请输入有效的电话号码' }
        ]}
      />

      <Input
        label="留言"
        name="message"
        type="textarea"
        validations={[
          { required: true, message: '请输入留言内容' },
          { minLength: 10, message: '留言至少需要10个字符' }
        ]}
      />

      {submitError && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
          {submitError}
        </div>
      )}

      <Button
        type="submit"
        isLoading={isSubmitting}
        className="w-full"
      >
        提交
      </Button>
    </Form>
  );
}; 