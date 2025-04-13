'use client';

import React, { useEffect, useState } from 'react';

// 定义公司介绍部分的数据
const companyData = {
  foundedYear: '2025年4月',
  overview: `郑州市中原区驾维素信息服务工作室是一家专注于驾校设计规划和备案资料制作的专业服务机构，成立于2025年4月。虽然工作室刚刚成立，但创始人葛万威从2013年就开始进行机动车驾驶人考试场地和驾驶员培训教练场地设计规划工作，团队由经验丰富的行业专家组成，自由团队阶段已成功服务200多个项目案例，客户网络已遍布全国。凭借多年积累的行业资源和口碑，工作室成立伊始即实现了全国业务布局。我们致力于为驾校投资者和管理者提供一站式解决方案，从场地规划设计到资质备案全程护航，帮助客户打造标准化、规范化的驾培基地。我们的使命是推动驾培行业高质量发展，用专业服务助力客户成功。`,
  
  coreAdvantages: [
    {
      icon: 'ProfessionalIcon',
      title: '专业团队',
      description: '拥有经验丰富的规划设计师和政策法规专家，团队核心成员平均从业经验超过8年'
    },
    {
      icon: 'SolutionIcon',
      title: '全面解决方案',
      description: '提供从选址评估、场地规划到备案资料制作的一站式服务，全方位满足客户需求'
    },
    {
      icon: 'PolicyIcon',
      title: '政策把控',
      description: '深入研究驾培行业政策法规，确保设计方案和备案资料符合最新标准要求'
    },
    {
      icon: 'EfficiencyIcon',
      title: '高效交付',
      description: '采用最新设计方法与流程，缩短项目周期，让客户尽快投入运营，提前收益'
    }
  ],
  
  statistics: [
    { number: 5, suffix: '+', label: '在谈项目', prefix: '' },
    { number: 200, suffix: '+', label: '历史成功案例', prefix: '' },
    { number: 100, suffix: '%', label: '客户满意度', prefix: '' },
    { number: 12, suffix: '+', label: '行业资源', prefix: '' }
  ]
};

// 计数动画效果 Hook
const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      setCount(Math.floor(percentage * end));
      
      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);
  
  return count;
};

// 构建图标组件
const IconComponent = ({ iconName }: { iconName: string }) => {
  switch (iconName) {
    case 'ProfessionalIcon':
      return (
        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      );
    case 'SolutionIcon':
      return (
        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
        </svg>
      );
    case 'PolicyIcon':
      return (
        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path>
        </svg>
      );
    case 'EfficiencyIcon':
      return (
        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      );
    default:
      return null;
  }
};

// 数据统计展示组件
const StatisticItem = ({ item }: { item: typeof companyData.statistics[0] }) => {
  const count = useCountUp(item.number);
  
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2 flex items-center justify-center">
        {item.prefix && <span className="text-lg text-gray-600 mr-1">{item.prefix}</span>}
        <span>{count}</span>
        {item.suffix && <span>{item.suffix}</span>}
      </div>
      <div className="text-sm md:text-base text-gray-600">{item.label}</div>
    </div>
  );
};

export default function CompanyIntro() {
  return (
    <section id="company-intro" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">公司介绍</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-10"></div>
          
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
              成立于 {companyData.foundedYear}
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{companyData.overview}</p>
          </div>
        </div>
        
        {/* 核心优势 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {companyData.coreAdvantages.map((advantage, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="mb-4 bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center">
                <IconComponent iconName={advantage.icon} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
        
        {/* 统计数据 */}
        <div className="bg-gray-50 py-12 px-6 rounded-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {companyData.statistics.map((stat, index) => (
              <StatisticItem key={index} item={stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 