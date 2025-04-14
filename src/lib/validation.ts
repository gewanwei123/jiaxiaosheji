// 表单验证工具

// 手机号验证
export function validatePhone(phone: string): { isValid: boolean; message: string } {
  if (!phone) {
    return { isValid: false, message: '请输入手机号码' };
  }
  
  const phoneRegex = /^1[3-9]\d{9}$/;
  if (!phoneRegex.test(phone)) {
    return { isValid: false, message: '请输入正确的手机号码' };
  }
  
  return { isValid: true, message: '' };
}

// 邮箱验证
export function validateEmail(email: string): { isValid: boolean; message: string } {
  if (!email) {
    return { isValid: true, message: '' }; // 邮箱可选
  }
  
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return { isValid: false, message: '请输入正确的邮箱地址' };
  }
  
  return { isValid: true, message: '' };
}

// 姓名验证
export function validateName(name: string): { isValid: boolean; message: string } {
  if (!name) {
    return { isValid: false, message: '请输入姓名' };
  }
  
  if (name.length < 2) {
    return { isValid: false, message: '姓名至少需要2个字符' };
  }
  
  if (name.length > 20) {
    return { isValid: false, message: '姓名不能超过20个字符' };
  }
  
  // 检查是否包含特殊字符
  const specialCharRegex = /[<>{}[\]\\]/;
  if (specialCharRegex.test(name)) {
    return { isValid: false, message: '姓名不能包含特殊字符' };
  }
  
  return { isValid: true, message: '' };
}

// 消息内容验证
export function validateMessage(message: string): { isValid: boolean; message: string } {
  if (!message) {
    return { isValid: false, message: '请输入咨询内容' };
  }
  
  if (message.length < 10) {
    return { isValid: false, message: '咨询内容至少需要10个字符' };
  }
  
  if (message.length > 500) {
    return { isValid: false, message: '咨询内容不能超过500个字符' };
  }
  
  return { isValid: true, message: '' };
}

// 服务类型验证
export function validateService(service: string): { isValid: boolean; message: string } {
  if (!service) {
    return { isValid: false, message: '请选择咨询服务' };
  }
  
  return { isValid: true, message: '' };
}

// 验证整个表单
export function validateForm(formData: Record<string, any>): { 
  isValid: boolean; 
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};
  
  // 验证各个字段
  const nameValidation = validateName(formData.name || '');
  if (!nameValidation.isValid) {
    errors.name = nameValidation.message;
  }
  
  const phoneValidation = validatePhone(formData.phone || '');
  if (!phoneValidation.isValid) {
    errors.phone = phoneValidation.message;
  }
  
  const emailValidation = validateEmail(formData.email || '');
  if (!emailValidation.isValid) {
    errors.email = emailValidation.message;
  }
  
  const serviceValidation = validateService(formData.service || '');
  if (!serviceValidation.isValid) {
    errors.service = serviceValidation.message;
  }
  
  const messageValidation = validateMessage(formData.message || '');
  if (!messageValidation.isValid) {
    errors.message = messageValidation.message;
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
} 