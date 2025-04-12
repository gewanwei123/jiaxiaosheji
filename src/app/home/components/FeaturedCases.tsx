'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function FeaturedCases() {
  // 案例数据
  const cases = [
    {
      id: 1,
      title: '某大型驾校场地优化设计',
      category: '场地规划',
      description: '为某大型驾校提供场地优化设计方案，提高场地利用率30%，增加培训车位15个，改善学员体验。',
      image: null, // 暂时不使用图片
      client: '某市驾驶培训学校',
      link: '/cases/1',
      bgColor: 'bg-gradient-to-br from-blue-100 to-blue-50'
    },
    {
      id: 2,
      title: '新建驾校全套备案资料制作',
      category: '备案资料',
      description: '为新建驾校提供全套备案资料制作服务，包括场地平面图、教学计划等，一次性通过审核。',
      image: null, // 暂时不使用图片
      client: '某县机动车驾驶员培训中心',
      link: '/cases/2',
      bgColor: 'bg-gradient-to-br from-green-100 to-green-50'
    },
    {
      id: 3,
      title: '驾校训练场改造升级项目',
      category: '场地规划',
      description: '针对老旧驾校训练场进行改造升级设计，满足新规要求，增加科目二、科目三训练项目。',
      image: null, // 暂时不使用图片
      client: '某市交通驾校',
      link: '/cases/3',
      bgColor: 'bg-gradient-to-br from-yellow-100 to-yellow-50'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* 标题 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">精选成功案例</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            查看我们为客户提供的成功解决方案，每个案例都展示了我们的专业能力和服务价值
          </p>
        </div>
        
        {/* 案例展示 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {cases.map((caseItem, index) => (
            <div 
              key={caseItem.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* 案例图片 */}
              <div className={`relative h-56 overflow-hidden ${caseItem.bgColor}`}>
                {caseItem.image ? (
                  <Image 
                    src={caseItem.image}
                    alt={caseItem.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    {caseItem.category === '场地规划' ? (
                      <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                      </svg>
                    ) : (
                      <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                    )}
                  </div>
                )}
                
                {/* 类别标签 */}
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm shadow-md">
                  {caseItem.category}
                </div>
              </div>
              
              {/* 案例内容 */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{caseItem.title}</h3>
                <p className="text-sm text-gray-500 mb-3">客户: {caseItem.client}</p>
                <p className="text-gray-600 mb-4">{caseItem.description}</p>
                <Link href={caseItem.link} className="text-blue-600 font-medium flex items-center hover:text-blue-700 group">
                  查看详情
                  <svg className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* 查看更多按钮 */}
        <div className="text-center">
          <Link 
            href="/cases" 
            className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-8 py-3 rounded-full transition-colors hover:shadow-md"
          >
            查看更多案例
          </Link>
        </div>
      </div>
    </section>
  );
} 