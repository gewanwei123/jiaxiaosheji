'use client';

import React from 'react';
import Header from '@/app/home/components/Header';
import Footer from '@/app/home/components/Footer';
import CompanyIntro from './components/CompanyIntro';
import TeamSection from './components/TeamSection';
import Timeline from './components/Timeline';
import Culture from './components/Culture';
import Testimonial from './components/Testimonial';
import ContactInfo from './components/ContactInfo';

export default function AboutPage() {
  // 页面加载时滚动到顶部
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* 顶部横幅区域 */}
        <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          {/* 背景图片或渐变 */}
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-800" />
            
            {/* 装饰性图形元素 */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-200 blur-3xl"></div>
              <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-indigo-300 blur-3xl"></div>
            </div>
            
            {/* 半透明遮罩 */}
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* 标题内容 */}
          <div className="container mx-auto px-4 z-10 relative text-center pt-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">关于我们</h1>
            <div className="mb-6">
              <p className="text-xl md:text-2xl font-semibold text-white">郑州市中原区驾维素信息服务工作室</p>
              <p className="text-lg md:text-xl text-white/90 mt-2">专注于驾校设计规划和备案服务，助力驾培行业高质量发展</p>
            </div>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            
            {/* 数据统计 */}
            <div className="flex justify-center space-x-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">2025</div>
                <div className="text-gray-200">创立年份</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">200+</div>
                <div className="text-gray-200">成功案例</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-gray-200">客户满意度</div>
              </div>
            </div>
          </div>
        </div>

        {/* 页内导航 */}
        <div className="sticky top-0 bg-white shadow-md z-20">
          <div className="container mx-auto px-4">
            <div className="flex overflow-x-auto hide-scrollbar py-4">
              <a href="#company-intro" className="whitespace-nowrap px-4 py-2 text-gray-700 hover:text-blue-600 font-medium">公司介绍</a>
              <a href="#team" className="whitespace-nowrap px-4 py-2 text-gray-700 hover:text-blue-600 font-medium">团队介绍</a>
              <a href="#history" className="whitespace-nowrap px-4 py-2 text-gray-700 hover:text-blue-600 font-medium">发展历程</a>
              <a href="#culture" className="whitespace-nowrap px-4 py-2 text-gray-700 hover:text-blue-600 font-medium">企业文化</a>
              <a href="#testimonials" className="whitespace-nowrap px-4 py-2 text-gray-700 hover:text-blue-600 font-medium">客户评价</a>
              <a href="#contact" className="whitespace-nowrap px-4 py-2 text-gray-700 hover:text-blue-600 font-medium">联系我们</a>
            </div>
          </div>
        </div>

        {/* 公司介绍区域 */}
        <CompanyIntro />

        {/* 团队介绍区域 */}
        <TeamSection />

        {/* 发展历程区域 */}
        <Timeline />

        {/* 企业文化区域 */}
        <Culture />

        {/* 客户评价区域 */}
        <Testimonial />

        {/* 联系我们区域 */}
        <ContactInfo />
        
        {/* 返回顶部按钮 */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed right-8 bottom-8 bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-colors focus:outline-none"
          aria-label="返回顶部"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </button>
      </main>
      <Footer />
      
      {/* 自定义滚动条样式 */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          height: 0;
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
} 