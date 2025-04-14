// 基本的XSS防护
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// 手机号净化
function sanitizePhone(phone: string): string {
  return phone.replace(/[^\d]/g, '');
}

// 邮箱净化
function sanitizeEmail(email: string): string {
  return email.toLowerCase().trim();
}

// 文本净化
function sanitizeText(text: string): string {
  return escapeHtml(text.trim());
}

export const sanitize = {
  phone: sanitizePhone,
  email: sanitizeEmail,
  text: sanitizeText
};

// 净化整个表单数据
export function sanitizeFormData(data: Record<string, any>): Record<string, any> {
  const sanitized: Record<string, any> = {};
  
  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'string') {
      switch (key) {
        case 'phone':
          sanitized[key] = sanitizePhone(value);
          break;
        case 'email':
          sanitized[key] = sanitizeEmail(value);
          break;
        default:
          sanitized[key] = sanitizeText(value);
      }
    } else {
      sanitized[key] = value;
    }
  }
  
  return sanitized;
} 