import { NextResponse } from 'next/server';
import { generateToken, verifyToken } from '@/lib/csrf';

export async function middleware(request: Request) {
  // 只对POST请求进行CSRF验证
  if (request.method === 'POST') {
    const csrfToken = request.headers.get('x-csrf-token');
    
    if (!csrfToken || !verifyToken(csrfToken)) {
      return new Response('Invalid CSRF Token', { 
        status: 403,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
}; 