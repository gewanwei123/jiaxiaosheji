import { NextResponse } from 'next/server';

// 简单的内存存储,生产环境建议使用Redis
const store = new Map<string, { count: number; resetTime: number }>();

const WINDOW_MS = 60 * 1000; // 1分钟
const MAX_REQUESTS = 5; // 每个IP每分钟最多5次请求

export async function middleware(request: Request) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  const now = Date.now();
  
  // 获取或初始化IP的请求记录
  let record = store.get(ip);
  if (!record || now > record.resetTime) {
    record = {
      count: 0,
      resetTime: now + WINDOW_MS
    };
    store.set(ip, record);
  }
  
  // 增加请求计数
  record.count++;
  
  // 检查是否超过限制
  if (record.count > MAX_REQUESTS) {
    return new Response('Too Many Requests', { 
      status: 429,
      headers: {
        'Content-Type': 'application/json',
        'Retry-After': Math.ceil((record.resetTime - now) / 1000).toString()
      }
    });
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
}; 