'use client';

import React from 'react';
import Link from 'next/link';

export default function ContactSection() {
  // 表单提交处理
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 在实际项目中这里应该处理表单提交逻辑
    console.log('表单提交');
  };
  
  return (
    <section className="py-20 bg-blue-700 text-white">
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
              
              {/* 微信二维码 */}
              <div className="flex items-start">
                <svg className="w-6 h-6 text-white/80 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                </svg>
                <div>
                  <h4 className="text-lg font-semibold mb-1">微信二维码</h4>
                  <div className="bg-white p-2 rounded-md w-32 h-32 mb-2 flex items-center justify-center">
                    {/* 替换为实际的微信二维码图片 */}
                    <p className="text-blue-700 text-xs text-center">请替换为实际微信二维码图片</p>
                  </div>
                  <p className="text-white/80">扫码添加微信，获取更多服务信息</p>
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
                    className="w-full bg-white/5 border border-white/20 rounded-md px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="请输入您的姓名"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-white/80 mb-1">联系电话</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full bg-white/5 border border-white/20 rounded-md px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="请输入您的联系电话"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white/80 mb-1">电子邮箱</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-white/5 border border-white/20 rounded-md px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="请输入您的电子邮箱"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-white/80 mb-1">咨询服务</label>
                  <select 
                    id="service" 
                    className="w-full bg-white/5 border border-white/20 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                    required
                  >
                    <option value="" className="bg-blue-700">请选择咨询服务</option>
                    <option value="field-planning" className="bg-blue-700">场地规划设计</option>
                    <option value="documentation" className="bg-blue-700">备案资料制作</option>
                    <option value="other" className="bg-blue-700">其他服务</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white/80 mb-1">咨询内容</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full bg-white/5 border border-white/20 rounded-md px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="请详细描述您的需求"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    className="w-full bg-white text-blue-700 hover:bg-white/90 font-medium px-6 py-3 rounded-md transition-colors"
                  >
                    提交咨询
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