'use client';

import React from 'react';
import Image from 'next/image';

export default function ServiceIntro() {
  return (
    <section className="pt-0 pb-16 bg-white">
      {/* 顶部大图 - 减小高度并保持导航栏效果 */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* 背景 */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-purple-900 via-indigo-800 to-purple-800" />
          
          {/* 装饰性图形元素 */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-200 blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-indigo-300 blur-3xl"></div>
            <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-purple-400 blur-3xl"></div>
          </div>
          
          {/* 半透明遮罩 */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* 内容 */}
        <div className="container mx-auto px-4 z-10 relative text-center pt-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">专业驾校场地规划设计服务</h1>
          <p className="text-lg md:text-xl text-white mb-6 max-w-3xl mx-auto">打造合规高效的驾校训练场地</p>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto">
            依据最新国家标准，为您量身定制符合规范、通过审批、优化使用的场地解决方案
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16">
        {/* 服务概述和价值主张 */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            我们提供全面的驾校场地规划设计服务，依据《机动车驾驶员培训教练场技术要求》（GBT 30341--2013）和各地方标准，
            为您量身定制符合规范、通过审批、优化使用的场地解决方案。
          </p>
          
          {/* 移除对外部图片的依赖，改用样式化的div */}
          <div className="relative h-80 w-full rounded-xl overflow-hidden mb-10 bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
            <div className="text-center p-8">
              <svg className="w-16 h-16 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
              </svg>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">专业场地规划方案</h3>
              <p className="text-gray-600">科学布局 · 合规设计 · 优化使用 · 高效运营</p>
            </div>
          </div>
        </div>
        
        {/* 核心价值主张 */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              合规标准保障
            </h3>
            <p className="text-gray-600">确保场地规划符合最新法规标准，顺利通过审批，避免返工和额外成本。</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              空间优化布局
            </h3>
            <p className="text-gray-600">优化场地空间布局，提高场地使用效率，更合理地安排训练区域和功能区。</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              科学动线规划
            </h3>
            <p className="text-gray-600">科学规划车辆动线，确保培训安全与高效，减少交叉干扰，提升培训体验。</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              经济合理方案
            </h3>
            <p className="text-gray-600">根据实际地形和预算提供经济合理的解决方案，控制建设成本，提高投资回报率。</p>
          </div>
        </div>
        
        {/* 关键特点与优势 */}
        <div className="bg-blue-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">我们的核心优势</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">专业规范</h3>
              <p className="text-gray-600">严格依据最新国家标准和地方标准</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">经验丰富</h3>
              <p className="text-gray-600">多年积累的场地规划设计经验</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">定制服务</h3>
              <p className="text-gray-600">根据实际场地条件和需求定制方案</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">全程支持</h3>
              <p className="text-gray-600">从测量规划到审批申报的全流程服务</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 