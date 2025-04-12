import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    // 1. 获取表单数据
    const formData = await request.json();
    const { name, phone, email, service, message } = formData;
    
    // 2. 创建临时测试邮箱（开发阶段用）
    // 注意：这只是用于开发测试，实际使用时应配置真实邮箱
    let testAccount = await nodemailer.createTestAccount();
    
    // 3. 创建发送器
    let transporter = nodemailer.createTransport({
      host: 'smtp.qq.com',
      port: 465,
      secure: true, // 使用SSL
      auth: {
        user: '876261867@qq.com', // 您的QQ邮箱
        pass: 'bsxgyftacpbkbeji', // QQ邮箱的授权码，不是登录密码
      },
    });
    
    // 4. 发送邮件
    let info = await transporter.sendMail({
      from: '"驾校设计规划网站" <876261867@qq.com>',
      to: "876261867@qq.com", // 使用您的实际邮箱
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
    
    // 5. 打印测试邮件的URL（仅在开发环境）
    console.log("邮件已发送: %s", info.messageId);
    console.log("预览URL: %s", nodemailer.getTestMessageUrl(info));
    
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