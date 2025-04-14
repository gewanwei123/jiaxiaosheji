'use client';

import React from 'react';
import Link from 'next/link';

export default function PolicySummary() {
  // 最新政策数据
  const latestPolicies = [
    {
      id: 'policy-001',
      title: '关于进一步规范机动车驾驶员培训机构管理的通知',
      date: '2023-06-15',
      summary: '为加强机动车驾驶员培训机构管理，提高培训质量，保障道路交通安全，根据《中华人民共和国道路交通安全法》等法律法规，制定本通知。',
      link: '/policies/policy-001'
    },
    {
      id: 'standard-001',
      title: '机动车驾驶培训教练场地技术要求（2023版）',
      date: '2023-11-08',
      summary: '明确驾校教练场地的面积、设施、安全等方面的技术要求，为场地建设和备案提供依据。',
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
              {latestPolicies.map(policy => (
                <div key={policy.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                  <Link href={policy.link}>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2 hover:text-blue-600">
                      {policy.title}
                    </h4>
                  </Link>
                  <p className="text-gray-600 text-sm mb-3">{policy.summary}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">{policy.date}</span>
                    <Link href={policy.link} className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      查看详情 →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/policies" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                查看更多政策
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
          
          {/* 政策解读服务 */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              政策解读服务
            </h3>
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">专业的政策法规咨询</h4>
              <p className="text-gray-600 mb-6">
                我们提供专业的政策法规咨询服务，帮助您理解最新政策要求，规避合规风险，顺利完成驾校审批和备案。
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">政策要点解读</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">合规性评估</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">审批材料指导</span>
                </li>
              </ul>
              <Link href="/policies#contact" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                咨询详情
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 