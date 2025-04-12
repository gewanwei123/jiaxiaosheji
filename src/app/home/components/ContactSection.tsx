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
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">关注我们</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                  </svg>
                </a>
                <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
                <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.162 5.656a8.384 8.384 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.21 4.21 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.394 8.394 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 002.087-2.165z" />
                  </svg>
                </a>
                <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
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