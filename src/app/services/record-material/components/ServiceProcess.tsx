'use client';

import React, { useState } from 'react';

// 定义流程步骤类型
type ProcessStep = {
  id: number;
  title: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
};

export default function ServiceProcess() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  // 定义流程步骤
  const processSteps: ProcessStep[] = [
    {
      id: 1,
      title: "需求分析与情况评估",
      description: "详细了解需求，评估资料情况，分析备案要求",
      details: [
        "详细了解客户需求和期望",
        "评估驾校现有资料情况",
        "分析当地备案要求和特殊规定",
        "确定资料制作方案和时间计划"
      ],
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
        </svg>
      )
    },
    {
      id: 2,
      title: "资料收集与整理",
      description: "提供清单指南，收集和整理基础资料",
      details: [
        "提供详细的资料清单和要求说明",
        "指导客户准备基础证明材料",
        "收集和审核客户提供的原始材料",
        "系统化整理和分类所有资料"
      ],
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path>
        </svg>
      )
    },
    {
      id: 3,
      title: "专业文档编制",
      description: "按标准编写文件，设计图表和说明材料",
      details: [
        "按标准格式编写申请文件和表格",
        "制作管理制度和运营规范文件",
        "撰写技术文档和说明材料",
        "设计场地和设施相关图表"
      ],
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
      )
    },
    {
      id: 4,
      title: "资料审核与优化",
      description: "专业审核文件，检查完整性和一致性",
      details: [
        "专业审核所有编制文件",
        "检查资料完整性和一致性",
        "对照审批标准进行内容优化",
        "修正可能存在的问题点"
      ],
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
        </svg>
      )
    },
    {
      id: 5,
      title: "文件装订与提交准备",
      description: "专业装订归档，准备电子和纸质文件",
      details: [
        "按要求进行资料装订和归档",
        "准备电子版文件和纸质文件",
        "制作资料清单和目录索引",
        "生成完整的备案资料包"
      ],
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
        </svg>
      )
    },
    {
      id: 6,
      title: "提交指导与后续支持",
      description: "指导资料提交，协助解答和调整",
      details: [
        "提供资料提交指导和建议",
        "协助解答审批部门疑问",
        "根据反馈进行资料调整和补充",
        "持续的技术支持和咨询服务"
      ],
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
        </svg>
      )
    }
  ];

  // 切换显示步骤详情
  const toggleStep = (stepId: number) => {
    if (activeStep === stepId) {
      setActiveStep(null);
    } else {
      setActiveStep(stepId);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* 主标题 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">专业严谨的服务流程</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            我们采用系统化的工作方法，确保每个备案资料制作项目都能高质量完成。从初步沟通到最终交付，我们的专业团队全程跟进，确保资料完善、规范，顺利通过审批。
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-8"></div>
        </div>
        
        {/* PC端六边形流程图 */}
        <div className="hidden lg:block">
          <div className="relative flex flex-wrap justify-center items-center max-w-5xl mx-auto mb-12">
            {/* 连接线 */}
            <div className="absolute w-full h-2 bg-blue-200 top-1/2 -translate-y-1/2 z-0"></div>
            
            {/* 流程步骤 - 六边形布局 */}
            {processSteps.map((step) => (
              <div 
                key={step.id} 
                className="z-10 w-48 h-48 m-4 cursor-pointer"
                onClick={() => toggleStep(step.id)}
              >
                <div className={`
                  w-full h-full flex flex-col items-center justify-center text-center p-4
                  clip-path-hexagon transition-all duration-300
                  ${activeStep === step.id ? 'bg-blue-600 text-white scale-110' : 'bg-white text-gray-800 hover:bg-blue-50'}
                `}>
                  <div className={`mb-3 ${activeStep === step.id ? 'text-white' : ''}`}>
                    {step.icon}
                  </div>
                  <h3 className="font-semibold mb-1">{step.title}</h3>
                  <p className="text-xs">
                    {activeStep === step.id 
                      ? step.details[0] + "..." 
                      : step.description}
                  </p>
                  <div className="absolute -bottom-2 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                    {step.id}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* 选中步骤的详细说明 */}
          {activeStep && (
            <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto mb-12 transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                步骤 {activeStep}: {processSteps.find(s => s.id === activeStep)?.title}
              </h3>
              <ul className="space-y-2">
                {processSteps.find(s => s.id === activeStep)?.details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        {/* 移动端垂直时间轴 */}
        <div className="lg:hidden">
          <div className="relative max-w-md mx-auto">
            {/* 垂直连接线 */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-200 z-0"></div>
            
            {/* 流程步骤 - 垂直时间轴 */}
            <div className="space-y-8 relative z-10">
              {processSteps.map((step) => (
                <div key={step.id} className="flex">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center z-10">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                  <div 
                    className={`ml-4 bg-white p-4 rounded-lg shadow-sm flex-grow cursor-pointer
                      ${activeStep === step.id ? 'border-l-4 border-blue-600' : 'hover:bg-blue-50'}
                    `}
                    onClick={() => toggleStep(step.id)}
                  >
                    <div className="flex items-center mb-2">
                      <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center mr-2">
                        {step.id}
                      </div>
                      <h3 className="font-semibold text-gray-800">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                    
                    {activeStep === step.id && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <ul className="space-y-2">
                          {step.details.map((detail, index) => (
                            <li key={index} className="flex items-start text-sm">
                              <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">✓</span>
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* 服务承诺 */}
        <div className="text-center mt-12">
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            我们承诺按照这一专业流程为您提供高质量的备案资料制作服务，确保每个环节都精益求精，让您的驾校备案流程更加顺畅、高效。
          </p>
          
          <a href="#contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
            了解服务详情
          </a>
        </div>
      </div>

      {/* 添加六边形剪切路径的样式 */}
      <style jsx>{`
        .clip-path-hexagon {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
      `}</style>
    </section>
  );
} 