import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    // 1. 获取表单数据
    const formData = await request.json();
    const { name, phone, email, serviceType, urgency, description } = formData;
    
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
    
    // 服务类型映射
    const serviceTypeMap: {[key: string]: string} = {
      'field-planning': '场地规划设计',
      'record-material': '备案资料制作',
      'policy-consulting': '政策咨询'
    };
    
    // 紧急程度映射
    const urgencyMap: {[key: string]: string} = {
      'urgent': '加急(3-5个工作日)',
      'normal': '标准(7-10个工作日)',
      'flexible': '灵活(具体商议)'
    };
    
    // 4. 发送邮件
    let info = await transporter.sendMail({
      from: `"驾校设计规划网站" <${emailUser}>`,
      to: emailRecipient,
      subject: "案例页面新的咨询",
      text: `
        收到来自案例展示页的新咨询：
        姓名: ${name}
        电话: ${phone}
        邮箱: ${email || '未提供'}
        服务类型: ${serviceType ? serviceTypeMap[serviceType] || serviceType : '未提供'}
        紧急程度: ${urgency ? urgencyMap[urgency] || urgency : '未提供'}
        需求描述: ${description || '未提供'}
      `,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #3b82f6;">收到来自案例展示页的新咨询</h2>
          <p><strong>姓名:</strong> ${name}</p>
          <p><strong>电话:</strong> ${phone}</p>
          <p><strong>邮箱:</strong> ${email || '未提供'}</p>
          <p><strong>服务类型:</strong> ${serviceType ? serviceTypeMap[serviceType] || serviceType : '未提供'}</p>
          <p><strong>紧急程度:</strong> ${urgency ? urgencyMap[urgency] || urgency : '未提供'}</p>
          <p><strong>需求描述:</strong> ${description || '未提供'}</p>
          <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #e0e0e0;">
            <p style="color: #666; font-size: 14px;">此邮件由系统自动发送，请勿直接回复。</p>
          </div>
        </div>
      `
    });
    
    // 5. 打印邮件发送信息
    console.log("案例页面咨询邮件已发送: %s", info.messageId);
    
    // 6. 返回成功响应
    return NextResponse.json({ 
      success: true, 
      message: '提交成功！我们的客服团队将尽快与您联系。' 
    });
    
  } catch (error) {
    // 错误处理
    console.error('表单提交错误:', error);
    return NextResponse.json(
      { success: false, message: '提交失败，请稍后重试或直接电话联系我们。' },
      { status: 500 }
    );
  }
} 