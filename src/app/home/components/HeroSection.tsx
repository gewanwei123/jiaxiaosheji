'use client';

import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 背景图片 */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat bg-gradient-to-r from-blue-900 via-blue-700 to-blue-800"
        />
        
        {/* 装饰性图形元素 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-blue-300 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-blue-200 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        {/* 半透明遮罩 */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* 内容 */}
      <div className="container mx-auto px-4 z-10 relative text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fadeIn leading-tight">
            专业驾校场地规划与备案服务
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 animate-fadeIn" style={{animationDelay: '0.3s'}}>
            助力驾校合规运营，提升场地使用效率
          </p>
          <p className="text-base sm:text-lg text-white/80 mb-8 mx-auto animate-fadeIn" style={{animationDelay: '0.6s'}}>
            我们拥有多年驾校场地规划与备案资料制作经验，熟悉政策法规，为您提供专业、高效的一站式服务。
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center animate-fadeIn" style={{animationDelay: '0.9s'}}>
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 rounded-full transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              免费咨询
            </Link>
            <Link 
              href="/services" 
              className="bg-white/10 hover:bg-white/20 text-white text-lg px-8 py-3 rounded-full transition-all border-2 border-white/30 hover:border-white/50"
            >
              了解更多
            </Link>
          </div>
        </div>
      </div>

      {/* 向下滚动提示 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
    </section>
  );
} 