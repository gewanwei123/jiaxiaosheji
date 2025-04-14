'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import WechatQrCode from '@/app/components/WechatQrCode';
import { validateForm, validatePhone, validateEmail, validateName, validateMessage, validateService } from '@/lib/validation';

export default function ContactSection() {
  // 表单数据状态
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  
  // 表单验证错误状态
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  // 表单提交状态
  const [submitStatus, setSubmitStatus] = useState({
    submitting: false,
    submitted: false,
    success: false,
    message: ''
  });
  
  // CSRF Token状态
  const [csrfToken, setCsrfToken] = useState('');
  
  // 组件加载时获取CSRF Token
  useEffect(() => {
    const token = crypto.randomUUID();
    setCsrfToken(token);
  }, []);
  
  // 处理表单输入变化
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    
    // 实时验证
    let validationResult;
    switch (id) {
      case 'name':
        validationResult = validateName(value);
        break;
      case 'phone':
        validationResult = validatePhone(value);
        break;
      case 'email':
        validationResult = validateEmail(value);
        break;
      case 'service':
        validationResult = validateService(value);
        break;
      case 'message':
        validationResult = validateMessage(value);
        break;
      default:
        return;
    }
    
    setErrors(prev => ({
      ...prev,
      [id]: validationResult.message
    }));
  };
  
  // 表单提交处理
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 验证整个表单
    const validation = validateForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }
    
    // 设置提交中状态
    setSubmitStatus({
      submitting: true,
      submitted: false,
      success: false,
      message: '正在提交...'
    });
    
    try {
      // 发送表单数据到API端点
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-csrf-token': csrfToken
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (result.success) {
        // 提交成功
        setSubmitStatus({
          submitting: false,
          submitted: true,
          success: true,
          message: '表单提交成功，我们会尽快联系您！'
        });
        
        // 清空表单和错误
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: '',
          message: ''
        });
        setErrors({});
      } else {
        // API返回错误
        setSubmitStatus({
          submitting: false,
          submitted: true,
          success: false,
          message: result.message || '提交失败，请稍后再试'
        });
      }
    } catch (error) {
      // 网络错误或其他异常
      console.error('表单提交错误:', error);
      setSubmitStatus({
        submitting: false,
        submitted: true,
        success: false,
        message: '网络错误，请稍后再试'
      });
    }
  };
  
  return (
    <section id="contact" className="py-20 bg-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">联系我们</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            无论您是咨询服务还是寻求解决方案，我们都将为您提供专业的支持和帮助
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* 联系信息 */}
          <div>
            <h3 className="text-2xl font-bold mb-6">联系方式</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-white/80 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <div>
                  <h4 className="text-lg font-semibold mb-1">公司地址</h4>
                  <p className="text-white/80">郑州市中原区嵩山北路 299 号郑州市创业孵化园 3 号楼 2 楼 23 号</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-6 h-6 text-white/80 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <div>
                  <h4 className="text-lg font-semibold mb-1">联系电话</h4>
                  <p className="text-white/80">135-2552-0521 (同微信)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-6 h-6 text-white/80 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <div>
                  <h4 className="text-lg font-semibold mb-1">电子邮箱</h4>
                  <p className="text-white/80">876261867@qq.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-6 h-6 text-white/80 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                  <h4 className="text-lg font-semibold mb-1">工作时间</h4>
                  <p className="text-white/80">周一至周五: 9:00 - 18:00</p>
                  <p className="text-white/80">周末: 休息</p>
                </div>
              </div>
              
              {/* 使用可复用的微信二维码组件 */}
              <div className="flex items-start">
                <svg className="w-6 h-6 text-white/80 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                </svg>
                <div>
                  <WechatQrCode 
                    width={128}
                    height={128}
                    showTitle={true}
                    titleText="添加微信咨询"
                    description="扫一扫，立即获取专业服务"
                    hasBorder={true}
                    borderColor="white-20"
                    titleColor="text-white"
                    descriptionColor="text-white/80"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* 咨询表单 */}
          <div>
            <h3 className="text-2xl font-bold mb-6">在线咨询</h3>
            
            <form onSubmit={handleSubmit} className="bg-white/10 rounded-lg p-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-white/80 mb-1">姓名</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/20'} rounded-md px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30`}
                    placeholder="请输入您的姓名"
                    required
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-white/80 mb-1">联系电话</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full bg-white/5 border ${errors.phone ? 'border-red-500' : 'border-white/20'} rounded-md px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30`}
                    placeholder="请输入您的联系电话"
                    required
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white/80 mb-1">电子邮箱</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/20'} rounded-md px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30`}
                    placeholder="请输入您的电子邮箱"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-white/80 mb-1">咨询服务</label>
                  <select 
                    id="service" 
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full bg-white/5 border ${errors.service ? 'border-red-500' : 'border-white/20'} rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/30`}
                    required
                  >
                    <option value="" className="bg-blue-700">请选择咨询服务</option>
                    <option value="场地规划设计" className="bg-blue-700">场地规划设计</option>
                    <option value="备案资料制作" className="bg-blue-700">备案资料制作</option>
                    <option value="其他服务" className="bg-blue-700">其他服务</option>
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-sm text-red-400">{errors.service}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white/80 mb-1">咨询内容</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/20'} rounded-md px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30`}
                    placeholder="请详细描述您的需求"
                    required
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                  )}
                </div>
                
                {/* 提交状态反馈 */}
                {submitStatus.submitted && (
                  <div className={`p-3 rounded ${submitStatus.success ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                    {submitStatus.message}
                  </div>
                )}
                
                <div>
                  <button 
                    type="submit" 
                    disabled={submitStatus.submitting}
                    className="w-full bg-white text-blue-700 hover:bg-white/90 font-medium px-6 py-3 rounded-md transition-colors disabled:opacity-75"
                  >
                    {submitStatus.submitting ? '提交中...' : '提交咨询'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 