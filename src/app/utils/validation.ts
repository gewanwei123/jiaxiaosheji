export interface ValidationError {
  [key: string]: string | null;
}

export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  validate?: (value: string) => boolean;
  message: string;
}

export const required = (value: string): string | null => {
  if (!value || value.trim() === '') {
    return '此字段为必填项';
  }
  return null;
};

export const email = (value: string): string | null => {
  if (!value) return null;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    return '请输入有效的邮箱地址';
  }
  return null;
};

export const phone = (value: string): string | null => {
  if (!value) return null;
  const phoneRegex = /^1[3-9]\d{9}$/;
  if (!phoneRegex.test(value)) {
    return '请输入有效的手机号码';
  }
  return null;
};

export const minLength = (min: number) => (value: string): string | null => {
  if (!value) return null;
  if (value.length < min) {
    return `最少需要 ${min} 个字符`;
  }
  return null;
};

export const maxLength = (max: number) => (value: string): string | null => {
  if (!value) return null;
  if (value.length > max) {
    return `最多允许 ${max} 个字符`;
  }
  return null;
};

export const validateLength = (value: string, fieldName: string, min: number, max: number): string | null => {
  if (value.length < min) return `${fieldName}不能少于${min}个字符`;
  if (value.length > max) return `${fieldName}不能超过${max}个字符`;
  return null;
};

export const validateEmail = (value: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
};

export const validatePhone = (value: string): boolean => {
  // 支持中国大陆手机号格式
  const phoneRegex = /^1[3-9]\d{9}$/;
  return phoneRegex.test(value);
};

export const validateForm = (value: string, rules: ValidationRule[]): string | null => {
  for (const rule of rules) {
    if (rule.required && !value) {
      return rule.message;
    }
    
    if (rule.minLength && value.length < rule.minLength) {
      return rule.message;
    }
    
    if (rule.maxLength && value.length > rule.maxLength) {
      return rule.message;
    }
    
    if (rule.validate && !rule.validate(value)) {
      return rule.message;
    }
  }
  
  return null;
}; 