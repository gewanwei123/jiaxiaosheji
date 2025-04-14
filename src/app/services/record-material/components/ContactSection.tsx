'use client';

import React, { useState } from 'react';
import WechatQrCode from '@/app/components/WechatQrCode';

// 定义表单字段类型
type FormData = {
  name: string;
  phone: string;
  email: string;
  schoolType: string;
  needType: string;
  description: string;
  expectedTime: string;
};

// 定义驾校类型选项
type Option = {
  value: string;
  label: string;
};

export default function ContactSection() {
  // 初始表单数据
  const initialFormData: FormData = {
    name: '',
    phone: '',
    email: '',
    schoolType: '',
    needType: '',
    description: '',
    expectedTime: ''
  };
  
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  
  // 驾校类型选项
  const schoolTypeOptions: Option[] = [
    { value: 'new', label: '新建驾校' },
    { value: 'existing', label: '已有驾校' },
    { value: 'other', label: '其他' }
  ];
  
  // 备案需求选项
  const needTypeOptions: Option[] = [
    { value: 'first', label: '首次备案' },
    { value: 'update', label: '资料更新' },
    { value: 'special', label: '特殊需求' }
  ];
  
  // 预期完成时间选项
  const timeOptions: Option[] = [
    { value: 'urgent', label: '加急(3-5个工作日)' },
    { value: 'normal', label: '标准(7-10个工作日)' },
    { value: 'flexible', label: '灵活(具体商议)' }
  ];
  
  // 处理表单字段变化
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // 处理表单提交
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);
    
    try {
      // 调用API进行表单提交
      const response = await fetch('/api/record-material', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (result.success) {
        // 提交成功
        setSubmitStatus('success');
        setSubmitMessage(result.message || '提交成功！我们的客服团队将尽快与您联系。');
        setFormData(initialFormData);
      } else {
        // API返回错误
        setSubmitStatus('error');
        setSubmitMessage(result.message || '提交失败，请稍后重试或直接电话联系我们。');
      }
    } catch (error) {
      // 网络错误或其他异常
      console.error('表单提交错误:', error);
      setSubmitStatus('error');
      setSubmitMessage('网络错误，请稍后再试或直接拨打电话联系我们。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* 主标题 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">开始您的备案资料制作</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            无论您是新建驾校还是需要更新备案资料，我们都能为您提供专业的解决方案。立即联系我们，开启您的备案资料制作服务。
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* 联系信息 */}
          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">联系我们</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-1">电话咨询</h4>
                  <p className="text-gray-700 mb-1">135-2552-0521</p>
                  <p className="text-gray-500 text-sm">周一至周五 9:00-18:00</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-1">邮件联系</h4>
                  <p className="text-gray-700">876261867@qq.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-1">办公地址</h4>
                  <p className="text-gray-700">郑州市中原区嵩山北路299号郑州市创业孵化园3号楼2楼23号</p>
                </div>
              </div>
              
              {/* 微信二维码 */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                  </svg>
                </div>
                <div>
                  <WechatQrCode
                    width={128}
                    height={128}
                    hasBorder={true}
                    borderColor="gray-200"
                    titleText="添加微信咨询"
                    description="扫码咨询备案资料制作"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* 咨询表单 */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">填写咨询表单</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">姓名 <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="请输入您的姓名"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">联系电话 <span className="text-red-500">*</span></label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="请输入您的电话号码"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">电子邮箱</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder="请输入您的电子邮箱"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="schoolType" className="block text-gray-700 font-medium mb-2">驾校类型</label>
                  <select
                    id="schoolType"
                    name="schoolType"
                    value={formData.schoolType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  >
                    <option value="">请选择驾校类型</option>
                    {schoolTypeOptions.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="needType" className="block text-gray-700 font-medium mb-2">备案需求</label>
                  <select
                    id="needType"
                    name="needType"
                    value={formData.needType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  >
                    <option value="">请选择备案需求</option>
                    {needTypeOptions.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="description" className="block text-gray-700 font-medium mb-2">具体需求描述</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder="请详细描述您的备案资料需求和特殊情况"
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="expectedTime" className="block text-gray-700 font-medium mb-2">预期完成时间</label>
                <select
                  id="expectedTime"
                  name="expectedTime"
                  value={formData.expectedTime}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                >
                  <option value="">请选择预期完成时间</option>
                  {timeOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
              
              {submitMessage && (
                <div className={`p-4 rounded-lg ${submitStatus === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                  {submitMessage}
                </div>
              )}
              
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? '提交中...' : '提交咨询'}
                </button>
                
                <div className="text-gray-600">
                  <span className="text-red-500">*</span> 为必填项
                </div>
              </div>
            </form>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 text-sm">
                提交后，我们的专业顾问会在2小时内与您联系，请保持手机畅通
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 