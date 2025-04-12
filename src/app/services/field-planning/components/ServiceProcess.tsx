'use client';

import React, { useState } from 'react';

export default function ServiceProcess() {
  // 鼠标悬停状态
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  
  // 流程步骤数据
  const processSteps = [
    {
      title: "需求分析与场地评估",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
        </svg>
      ),
      details: [
        "详细了解客户需求和期望",
        "场地实地勘测和条件评估",
        "分析场地优势和限制因素",
        "初步确定可行性方案"
      ]
    },
    {
      title: "方案设计与优化",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path>
        </svg>
      ),
      details: [
        "根据标准规范进行初步设计",
        "场地布局和功能区划分",
        "动线规划和空间优化",
        "技术参数测算和验证"
      ]
    },
    {
      title: "图纸绘制与文档编制",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
      ),
      details: [
        "详细的CAD图纸绘制",
        "三维效果图制作（按需）",
        "技术说明文档编写",
        "审批所需资料整理"
      ]
    },
    {
      title: "方案评审与调整",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      details: [
        "与客户沟通确认方案",
        "根据反馈进行调整优化",
        "必要时多轮修改完善",
        "最终方案确认"
      ]
    },
    {
      title: "实施指导与审批支持",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
        </svg>
      ),
      details: [
        "施工技术指导",
        "现场勘察和技术咨询",
        "审批申报资料支持",
        "与相关部门的沟通协调"
      ]
    },
    {
      title: "竣工验收与后续服务",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
      ),
      details: [
        "竣工检查和质量评估",
        "发现问题及时解决",
        "技术资料归档保存",
        "持续的技术支持服务"
      ]
    }
  ];
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* 流程标题 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">科学严谨的服务流程</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            我们采用系统化的工作方法，确保每个场地规划项目都能高质量完成。从初步沟通到最终交付，
            我们的专业团队全程陪伴，确保项目顺利实施。
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-8"></div>
        </div>
        
        {/* 横向时间轴流程图（桌面端） */}
        <div className="hidden md:block mb-10">
          <div className="relative">
            {/* 连接线 */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-blue-200 -translate-y-1/2 z-0"></div>
            
            {/* 流程步骤 */}
            <div className="relative z-10 flex justify-between">
              {processSteps.map((step, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center"
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center 
                    ${hoveredStep === index ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'} 
                    border-4 border-blue-600 transition-colors duration-300 mb-4`}
                  >
                    {step.icon}
                  </div>
                  <div className="text-center w-40">
                    <h3 className="font-semibold text-gray-800 mb-2">{step.title}</h3>
                    <div className={`transition-all duration-300 overflow-hidden ${hoveredStep === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <ul className="text-sm text-gray-600 text-left list-disc list-inside">
                        {step.details.map((detail, i) => (
                          <li key={i} className="mb-1">{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* 垂直时间轴流程图（移动端） */}
        <div className="md:hidden">
          <div className="relative">
            {/* 垂直连接线 */}
            <div className="absolute top-0 bottom-0 left-7 w-1 bg-blue-200 z-0"></div>
            
            {/* 流程步骤 */}
            <div className="relative z-10 space-y-10">
              {processSteps.map((step, index) => (
                <div key={index} className="flex">
                  <div className={`w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center 
                    bg-white text-blue-600 border-4 border-blue-600 z-10`}
                  >
                    {step.icon}
                  </div>
                  <div className="ml-6 pt-2">
                    <h3 className="font-semibold text-gray-800 mb-2">{step.title}</h3>
                    <ul className="text-sm text-gray-600 list-disc list-inside pl-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="mb-1">{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 