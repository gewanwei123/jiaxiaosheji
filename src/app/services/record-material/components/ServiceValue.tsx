'use client';

import React from 'react';

// 定义价值点类型
type ValuePoint = {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
};

export default function ServiceValue() {
  // 定义服务价值点
  const valuePoints: ValuePoint[] = [
    {
      id: "approval",
      title: "通过率保障",
      description: "凭借丰富经验和专业知识，确保备案资料审批顺利通过",
      features: [
        "丰富的成功案例和经验积累",
        "严格的质量控制和审核流程",
        "精准把握审批要点和标准",
        "持续跟进直至通过审批"
      ],
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    },
    {
      id: "time",
      title: "时间效益",
      description: "高效的工作流程，为您节省宝贵时间，加速驾校业务启动",
      features: [
        "快速响应和高效工作流程",
        "缩短备案准备周期",
        "减少审批反复和修改时间",
        "加速驾校业务启动进程"
      ],
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    },
    {
      id: "quality",
      title: "专业品质",
      description: "严格把控每一份资料的质量，确保文件标准规范、内容专业",
      features: [
        "标准化和规范化的文件制作",
        "专业的文档排版和设计",
        "严谨的逻辑构建和内容表述",
        "细致的校对和质量控制"
      ],
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
        </svg>
      )
    },
    {
      id: "service",
      title: "一站式服务",
      description: "从咨询到提交的全流程支持，省心省力的整体解决方案",
      features: [
        "从咨询到提交的全流程支持",
        "资料准备和编制的整体解决方案",
        "提交后的跟进和问题解决",
        "持续的更新和优化服务"
      ],
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* 主标题 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">选择我们的理由</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            我们不仅提供专业的备案资料制作服务，更注重为客户创造实际价值。从合规性到高效性，从专业性到服务性，我们的每一项工作都以客户利益为中心。
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-8"></div>
        </div>
        
        {/* 核心价值点 */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {valuePoints.map((value) => (
            <div key={value.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
              
              <ul className="space-y-3 pl-20">
                {value.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* 与竞争对手差异 */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">我们的差异优势</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-blue-700 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
                专注驾校备案领域
              </h4>
              <p className="text-gray-700">
                我们专注于驾校备案领域，深度理解行业需求和政策要求，不同于泛泛而谈的通用服务，我们能提供更精准的行业解决方案。
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-blue-700 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                </svg>
                结合政策理解与实操经验
              </h4>
              <p className="text-gray-700">
                我们不仅精通政策法规，更结合丰富的实际操作经验，确保资料既符合政策要求，又能有效解决实际问题，真正做到理论与实践相结合。
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-blue-700 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                注重资料的实用性和有效性
              </h4>
              <p className="text-gray-700">
                我们注重制作的每一份资料的实用性和有效性，而非仅满足形式要求。确保资料能真正帮助客户解决备案难题，为驾校实际运营提供支持。
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-blue-700 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                </svg>
                提供个性化定制方案
              </h4>
              <p className="text-gray-700">
                根据客户的实际情况和需求，提供个性化的定制方案，而非简单套用模板。确保每个方案都能切实解决客户的特定问题。
              </p>
            </div>
          </div>
        </div>
        
        {/* 服务保障承诺 */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">我们的服务保障</h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-800 mb-2">资料审批通过保障</h4>
              <p className="text-gray-600 text-sm">
                未通过审批全额退款，确保您的投入有保障
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-800 mb-2">7*24小时响应</h4>
              <p className="text-gray-600 text-sm">
                全天候客户咨询响应，确保您的疑问得到及时解答
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-800 mb-2">一年免费更新</h4>
              <p className="text-gray-600 text-sm">
                一年内免费的资料调整与更新，应对政策变化
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-800 mb-2">长期技术咨询</h4>
              <p className="text-gray-600 text-sm">
                提供长期的技术咨询与问题解答，伴您成长
              </p>
            </div>
          </div>
        </div>
        
        {/* 行动号召 */}
        <div className="text-center">
          <a href="#contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
            开始备案资料制作
          </a>
          <p className="text-gray-600 mt-4">
            让专业的团队为您提供高品质的备案资料制作服务，助您轻松应对驾校备案流程
          </p>
        </div>
      </div>
    </section>
  );
} 