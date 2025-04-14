'use client';

import React, { useState } from 'react';
import WechatQrCode from '@/app/components/WechatQrCode';

export default function ContactSection() {
  // 表单状态
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    fieldInfo: '',
    requirements: '',
  });
  
  // 提交状态
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  // 处理输入变化
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    
    try {
      // 发送表单数据到API端点
      const response = await fetch('/api/field-planning', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      setIsSubmitting(false);
      
      if (result.success) {
        // 提交成功
        setSubmitSuccess(true);
        
        // 重置表单
        setTimeout(() => {
          setSubmitSuccess(false);
          setFormData({
            name: '',
            phone: '',
            email: '',
            projectType: '',
            fieldInfo: '',
            requirements: '',
          });
        }, 3000);
      } else {
        // API返回错误
        alert(result.message || '提交失败，请稍后再试或直接联系我们');
      }
    } catch (error) {
      // 网络错误或其他异常
      setIsSubmitting(false);
      alert('网络错误，请稍后再试');
      console.error('提交表单出错:', error);
    }
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* 主标题 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">开始您的场地规划项目</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            无论您是新建驾校还是场地改造升级，我们都能为您提供专业的解决方案。立即联系我们，开启您的场地规划设计项目。
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* 联系信息 */}
          <div>
            <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm h-full">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">联系方式</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800">电话</h4>
                    <p className="text-gray-600">135-2552-0521</p>
                    <p className="text-gray-500 text-sm">工作日 9:00-18:00</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800">电子邮箱</h4>
                    <p className="text-gray-600">876261867@qq.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800">地址</h4>
                    <p className="text-gray-600">郑州市中原区嵩山北路299号郑州市创业孵化园3号楼2楼23号</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800">工作时间</h4>
                    <p className="text-gray-600">周一至周五 9:00-18:00</p>
                  </div>
                </div>
                
                {/* 微信二维码 */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                    </svg>
                  </div>
                  <div>
                    <WechatQrCode
                      width={128}
                      height={128}
                      hasBorder={true}
                      borderColor="gray-200"
                      titleText="添加微信咨询"
                      description="扫码咨询场地规划方案"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 咨询表单 */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm h-full">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">咨询表单</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-1">姓名 <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-1">联系电话 <span className="text-red-500">*</span></label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-1">电子邮箱</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                
                <div>
                  <label htmlFor="projectType" className="block text-gray-700 mb-1">项目类型</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">请选择项目类型</option>
                    <option value="新建场地">新建场地</option>
                    <option value="场地改造">场地改造</option>
                    <option value="其他">其他</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="fieldInfo" className="block text-gray-700 mb-1">场地基本情况</label>
                  <input
                    type="text"
                    id="fieldInfo"
                    name="fieldInfo"
                    value={formData.fieldInfo}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                
                <div>
                  <label htmlFor="requirements" className="block text-gray-700 mb-1">具体需求 <span className="text-red-500">*</span></label>
                  <textarea
                    id="requirements"
                    name="requirements"
                    rows={4}
                    value={formData.requirements}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="请详细描述您的场地规划需求，如场地面积、用途、特殊要求等"
                    required
                  ></textarea>
                  <p className="mt-1 text-sm text-gray-500">详细的需求描述有助于我们更好地了解您的项目，提供更精准的服务方案</p>
                </div>
              </div>
              
              {submitSuccess && (
                <div className="p-4 bg-green-50 text-green-700 rounded-md mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>表单提交成功，我们会尽快联系您!</span>
                </div>
              )}
              
              <div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-md font-medium transition-colors ${
                    isSubmitting 
                      ? 'bg-gray-400 text-white cursor-not-allowed' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>提交中...</span>
                    </div>
                  ) : '提交咨询'}
                </button>
              </div>
              
              <p className="text-sm text-gray-500 mt-4">
                提交后，我们会在24小时内与您联系。如需紧急咨询，请直接拨打电话。
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 