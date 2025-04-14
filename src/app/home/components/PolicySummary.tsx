'use client';

import React from 'react';
import Link from 'next/link';

export default function PolicySummary() {
  // 最新政策数据
  const latestPolicies = [
    {
      id: 1,
      title: '关于进一步规范机动车驾驶员培训机构管理的通知',
      date: '2023-12-15',
      summary: '规范驾校培训机构资质审核，明确场地要求和教学标准，提高驾培行业服务质量。',
      link: '/policies/policy-001'
    },
    {
      id: 2,
      title: '机动车驾驶培训教练场地技术要求（2023版）',
      date: '2023-11-08',
      summary: '明确驾校教练场地的面积、设施、安全等方面的技术要求，为场地建设和备案提供依据。',
      link: '/policies/standard-001'
    },
    {
      id: 3,
      title: '关于优化机动车驾驶员培训备案流程的指导意见',
      date: '2023-10-01',
      summary: '简化和优化驾校备案流程，推行"一网通办"，减少材料提交，提高办事效率。',
      link: '/policies/3'
    }
  ];

  // 行业标准解析
  const industryStandards = [
    {
      id: 1,
      title: '《机动车驾驶员培训机构资格条件》解析',
      summary: '详细解析驾培机构资格条件的具体要求，包括场地、设施、人员配置和管理制度等方面。',
      link: '/policies/standard-001'
    },
    {
      id: 2,
      title: '《道路运输从业人员管理规定》重点条款解析',
      summary: '针对驾培行业管理人员和教练员资质要求的详细解析，明确持证上岗和定期培训要求。',
      link: '/policies/standard-001'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* 标题 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">政策法规资讯</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            及时了解最新行业政策法规，助力您的驾校合规发展
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* 最新政策 */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
              </svg>
              最新政策
            </h3>
            
            <div className="space-y-6">
              {latestPolicies.map((policy, index) => (
                <div 
                  key={policy.id} 
                  className="bg-white rounded-xl shadow p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-l-4 border-blue-600"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg font-semibold text-gray-800">{policy.title}</h4>
                    <span className="text-sm text-gray-500 whitespace-nowrap ml-2 bg-gray-100 px-2 py-1 rounded-full">{policy.date}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{policy.summary}</p>
                  <Link href={policy.link} className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center group">
                    阅读详情
                    <svg className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
          {/* 行业标准 */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              行业标准解析
            </h3>
            
            <div className="space-y-6">
              {industryStandards.map((standard, index) => (
                <div 
                  key={standard.id} 
                  className="bg-white rounded-xl shadow p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-l-4 border-green-600"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{standard.title}</h4>
                  <p className="text-gray-600 mb-4">{standard.summary}</p>
                  <Link href={standard.link} className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center group">
                    查看解析
                    <svg className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              ))}
              
              {/* 查看更多按钮 */}
              <div className="mt-8 text-center">
                <Link 
                  href="/policies?category=standard" 
                  className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-8 py-3 rounded-full transition-all hover:shadow-md hover:-translate-y-1"
                >
                  查看更多行业标准
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 