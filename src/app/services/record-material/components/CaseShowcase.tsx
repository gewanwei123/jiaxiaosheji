'use client';

import React, { useState } from 'react';
import Image from 'next/image';

// 定义案例类型
type Case = {
  id: number;
  title: string;
  challenge: string;
  solution: string;
  result: string;
  image: string;
  category: string;
  clientName?: string;
  clientPosition?: string;
  quote?: string;
};

export default function CaseShowcase() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  // 案例数据
  const cases: Case[] = [
    {
      id: 1,
      title: "某新建大型驾校备案资料制作",
      challenge: "首次申请备案，资料要求多，准备时间紧",
      solution: "系统化梳理资料要求，提供完整的备案资料包，包括管理制度、场地证明等全套文件",
      result: "一次性通过审批，节省约2个月的筹备时间",
      image: "/images/cases/case1.jpg",
      category: "new",
      clientName: "王经理",
      clientPosition: "驾校运营总监",
      quote: "专业的备案资料制作团队，让我们在短时间内顺利通过了审批，为驾校的顺利开业提供了有力保障。"
    },
    {
      id: 2,
      title: "某连锁驾校分校区备案资料更新",
      challenge: "政策变更后需更新多个分校区的备案资料",
      solution: "针对新政策要求，系统性更新和优化现有备案资料",
      result: "所有分校区均顺利通过新标准审核，无缝衔接业务运营",
      image: "/images/cases/case2.jpg",
      category: "update",
      clientName: "李校长",
      clientPosition: "连锁驾校负责人",
      quote: "政策变更给我们带来了不小的挑战，感谢团队高效专业的资料更新服务，让我们的多家分校区平稳过渡。"
    },
    {
      id: 3,
      title: "某山区特殊地形驾校备案资料定制",
      challenge: "特殊地形条件下的驾校备案资料特殊需求",
      solution: "深入研究当地要求，针对性编制符合特殊条件的备案资料",
      result: "成功获得审批通过，为当地首个此类型驾校",
      image: "/images/cases/case3.jpg",
      category: "special",
      clientName: "张总",
      clientPosition: "驾校创始人",
      quote: "面对特殊地形的挑战，团队专业的资料编制服务帮助我们成功获得了备案资格，解决了我认为最困难的问题。"
    }
  ];
  
  // 筛选案例
  const filteredCases = activeFilter === 'all' 
    ? cases 
    : cases.filter(c => c.category === activeFilter);
  
  // 案例分类
  const categories = [
    { id: 'all', label: '全部案例' },
    { id: 'new', label: '新建驾校' },
    { id: 'update', label: '资料更新' },
    { id: 'special', label: '特殊需求' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* 主标题 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">成功案例展示</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            以下是我们近期完成的部分备案资料制作项目，每个项目都充分考虑了客户的实际情况和当地审批要求，为客户提供了专业、高效的备案资料解决方案。
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-8"></div>
        </div>
        
        {/* 案例筛选标签 */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-5 py-2 rounded-full transition-colors duration-300 ${
                activeFilter === category.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* 案例展示卡片 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredCases.map(caseItem => (
            <div key={caseItem.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              {/* 案例图片区域 */}
              <div className="h-48 bg-gray-200 relative">
                {/* 使用占位图，实际项目中替换为真实案例图片 */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                {/* 如果有实际图片则使用：
                <Image 
                  src={caseItem.image}
                  alt={caseItem.title}
                  layout="fill"
                  objectFit="cover"
                /> */}
              </div>
              
              {/* 案例内容 */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{caseItem.title}</h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-medium text-blue-700 mb-1">挑战</h4>
                    <p className="text-gray-700 text-sm">{caseItem.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-blue-700 mb-1">解决方案</h4>
                    <p className="text-gray-700 text-sm">{caseItem.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-blue-700 mb-1">成果</h4>
                    <p className="text-gray-700 text-sm">{caseItem.result}</p>
                  </div>
                </div>
                
                {/* 客户评价 */}
                {caseItem.quote && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-blue-800 text-sm italic mb-2">"{caseItem.quote}"</p>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 text-sm">{caseItem.clientName}</p>
                        <p className="text-gray-600 text-xs">{caseItem.clientPosition}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* 信任指标 */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h3 className="text-xl font-semibold text-center text-gray-800 mb-8">信任我们的客户</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
              <p className="text-gray-700">成功服务客户数</p>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <p className="text-gray-700">客户满意度</p>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <p className="text-gray-700">一次审批通过率</p>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
              <p className="text-gray-700">覆盖城市数量</p>
            </div>
          </div>
        </div>
        
        {/* 服务引导 */}
        <div className="text-center">
          <a href="#contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
            了解您的专属解决方案
          </a>
          <p className="text-gray-600 mt-4">
            每个项目都会根据您的具体情况提供个性化的备案资料解决方案
          </p>
        </div>
      </div>
    </section>
  );
} 