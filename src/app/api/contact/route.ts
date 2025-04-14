import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { sanitizeFormData } from '@/lib/sanitize';

export async function POST(request: Request) {
  try {
    // 1. 获取并净化表单数据
    const formData = await request.json();
    const sanitizedData = sanitizeFormData(formData);
    const { name, phone, email, service, message } = sanitizedData;
    
    // 2. 从环境变量获取邮箱配置
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const emailRecipient = process.env.EMAIL_RECIPIENT;
    
    // 验证环境变量是否配置
    if (!emailUser || !emailPass || !emailRecipient) {
      console.error('邮箱配置环境变量缺失');
      return NextResponse.json(
        { success: false, message: '服务器配置错误，请联系管理员' },
        { status: 500 }
      );
    }
    
    // 3. 创建发送器
    let transporter = nodemailer.createTransport({
      host: 'smtp.qq.com',
      port: 465,
      secure: true, // 使用SSL
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });
    
    // 4. 发送邮件
    let info = await transporter.sendMail({
      from: `"驾校设计规划网站" <${emailUser}>`,
      to: emailRecipient,
      subject: "新的咨询表单提交",
      text: `
        收到新的咨询信息：
        姓名: ${name}
        电话: ${phone}
        邮箱: ${email || '未提供'}
        咨询服务: ${service}
        咨询内容: ${message}
      `,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #3b82f6;">收到新的网站咨询</h2>
          <p><strong>姓名:</strong> ${name}</p>
          <p><strong>电话:</strong> ${phone}</p>
          <p><strong>邮箱:</strong> ${email || '未提供'}</p>
          <p><strong>咨询服务:</strong> ${service}</p>
          <p><strong>咨询内容:</strong> ${message}</p>
          <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #e0e0e0;">
            <p style="color: #666; font-size: 14px;">此邮件由系统自动发送，请勿直接回复。</p>
          </div>
        </div>
      `
    });
    
    // 5. 打印邮件发送信息
    console.log("邮件已发送: %s", info.messageId);
    
    // 6. 返回成功响应
    return NextResponse.json({ 
      success: true, 
      message: '表单提交成功，我们会尽快联系您' 
    });
    
  } catch (error) {
    // 错误处理
    console.error('表单提交错误:', error);
    return NextResponse.json(
      { success: false, message: '服务器处理失败，请稍后再试' },
      { status: 500 }
    );
  }
} 