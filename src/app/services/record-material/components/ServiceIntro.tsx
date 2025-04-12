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
          <div className="w-full h-full bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-800" />
          
          {/* 装饰性图形元素 */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-200 blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-indigo-300 blur-3xl"></div>
            <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-blue-400 blur-3xl"></div>
          </div>
          
          {/* 半透明遮罩 */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* 内容 */}
        <div className="container mx-auto px-4 z-10 relative text-center pt-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">专业驾校备案资料制作服务</h1>
          <p className="text-lg md:text-xl text-white mb-6 max-w-3xl mx-auto">确保合规高效的驾校备案流程</p>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto">
            专业团队为您量身定制符合规范、通过审批的备案资料解决方案
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16">
        {/* 服务概述区域 */}
        <div className="mb-16">
          <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">服务概述</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              我们提供全面的驾校备案资料制作服务，根据《机动车驾驶员培训机构资格条件》（GBT 30340--2013）和各地方标准，为您量身定制符合规范、通过审批的备案资料解决方案。从材料准备、文档编制到审批申报，一站式服务助您轻松应对驾校备案全流程。
            </p>
            
            {/* 服务特点展示 - 图标+文字 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">合规保障</h3>
                <p className="text-gray-600">严格按照最新政策法规标准，确保备案资料符合审批要求</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">高效便捷</h3>
                <p className="text-gray-600">专业团队快速响应，缩短备案时间，提高审批通过率</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">定制方案</h3>
                <p className="text-gray-600">根据客户实际情况和当地要求，提供个性化资料制作方案</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">全程支持</h3>
                <p className="text-gray-600">从资料准备到审批申报的全流程服务，解决您的一切备案难题</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* 核心价值主张 */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">我们的核心价值</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </span>
                提高审批效率
              </h3>
              <p className="text-gray-600 pl-11">专业编制的备案资料能大幅提高审批效率，减少反复修改和补充材料的时间，加速驾校开业进程。</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </span>
                降低合规风险
              </h3>
              <p className="text-gray-600 pl-11">严格依据最新法规标准编制的备案资料，能有效规避合规风险，避免因资料问题导致的行政处罚。</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </span>
                节约时间成本
              </h3>
              <p className="text-gray-600 pl-11">专业团队高效制作备案资料，让您专注于驾校核心业务发展，无需耗费大量时间研究政策法规。</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </span>
                专业指导建议
              </h3>
              <p className="text-gray-600 pl-11">除提供备案资料外，我们还将根据您的实际情况提供专业建议，助您更好地理解和应对备案流程。</p>
            </div>
          </div>
        </div>
        
        {/* 行动号召 */}
        <div className="text-center mb-8">
          <a href="#contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
            免费咨询备案资料服务
          </a>
        </div>
      </div>
    </section>
  );
} 