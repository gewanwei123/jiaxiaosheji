import crypto from 'crypto';

const CSRF_SECRET = process.env.CSRF_SECRET || 'your-csrf-secret-key';

export function generateToken(): string {
  return crypto.randomBytes(32).toString('hex');
}

export function verifyToken(token: string): boolean {
  if (!token) return false;
  
  // 这里可以添加更多的验证逻辑
  // 比如检查token是否过期,是否在黑名单中等
  return token.length === 64;
}

export function getCsrfToken(): string {
  return generateToken();
} 