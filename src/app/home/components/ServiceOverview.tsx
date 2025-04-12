'use client';

import React from 'react';
import Link from 'next/link';

export default function ServiceOverview() {
  // 服务卡片数据
  const services = [
    {
      title: '专业场地规划',
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
        </svg>
      ),
      description: '根据场地特点和法规要求，提供专业的驾校场地规划设计，提高场地利用率，满足审批要求。',
      link: '/services/field-planning'
    },
    {
      title: '一站式备案服务',
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
      ),
      description: '专业团队负责驾校备案资料制作，熟悉各地备案要求，确保资料齐全、准确，快速通过审批。',
      link: '/services/documentation'
    }
  ];

  // 服务优势数据
  const advantages = [
    {
      title: '专业团队',
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      ),
      description: '多年经验的专业团队，熟悉各地政策法规'
    },
    {
      title: '丰富经验',
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
        </svg>
      ),
      description: '成功完成众多驾校场地规划和备案服务'
    },
    {
      title: '快速响应',
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      description: '快速响应客户需求，及时高效完成服务'
    },
    {
      title: '一站式服务',
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
        </svg>
      ),
      description: '从规划设计到备案资料，一站式解决驾校需求'
    }
  ];

  // 服务流程数据
  const processes = [
    {
      step: '需求沟通',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
        </svg>
      ),
      description: '充分了解客户需求和场地情况'
    },
    {
      step: '方案设计',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
        </svg>
      ),
      description: '根据需求和规范制定专业方案'
    },
    {
      step: '方案确认',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
      ),
      description: '与客户沟通确认最终方案'
    },
    {
      step: '执行实施',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
        </svg>
      ),
      description: '高质量执行方案，确保满足要求'
    },
    {
      step: '服务完成',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
      ),
      description: '交付成果并提供后续支持'
    }
  ];
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* 标题 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">我们的专业服务</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            提供驾校场地规划设计和备案资料制作的一站式专业服务，助力驾校事业发展
          </p>
        </div>
        
        {/* 服务卡片 */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden relative group"
            >
              {/* 底部装饰 */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              
              <div className="mb-6 text-blue-600 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link href={service.link} className="text-blue-600 font-medium flex items-center hover:text-blue-700 group">
                了解更多
                <svg className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          ))}
        </div>
        
        {/* 服务优势 */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-10">我们的优势</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow p-6 text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-md"
              >
                <div className="flex justify-center mb-4 text-blue-600">{advantage.icon}</div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">{advantage.title}</h4>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* 服务流程 */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-10">服务流程</h3>
          <div className="relative">
            {/* 连接线 */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2 z-0"></div>
            
            <div className="space-y-12">
              {processes.map((process, index) => (
                <div 
                  key={index} 
                  className={`relative z-10 flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* 流程点 */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none">
                    <div className="bg-blue-100 rounded-full p-3 border-4 border-white shadow-md transition-all duration-300 hover:bg-blue-200 hover:shadow-lg">
                      {process.icon}
                    </div>
                  </div>
                  
                  {/* 内容 */}
                  <div className={`bg-white rounded-xl shadow p-6 ml-16 md:ml-0 md:w-5/12 transition-all duration-300 hover:shadow-lg ${
                    index % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto'
                  }`}>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{`${index + 1}. ${process.step}`}</h4>
                    <p className="text-gray-600">{process.description}</p>
                  </div>
                  
                  {/* 中间空白 */}
                  <div className="hidden md:block md:w-2/12"></div>
                  
                  {/* 另一侧空白 */}
                  <div className="hidden md:block md:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 