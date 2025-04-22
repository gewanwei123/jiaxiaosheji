'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

// 定义政策数据类型
interface Policy {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  category: string;
  summary: string;
  isHighlighted: boolean;
}

export default function PolicySummary() {
  const [latestPolicies, setLatestPolicies] = useState<Policy[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLatestPolicies = async () => {
      try {
        const response = await fetch('/api/content');
        const data = await response.json();
        
        if (data.policies) {
          // 按发布日期排序并获取最新的2条
          const sortedPolicies = [...data.policies].sort(
            (a: Policy, b: Policy) => new Date(b.issueDate).getTime() - new Date(a.issueDate).getTime()
          ).slice(0, 2);
          
          setLatestPolicies(sortedPolicies);
        }
      } catch (err) {
        setError('获取政策数据失败，请稍后重试');
        console.error('获取政策数据失败:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestPolicies();
  }, []);

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
          <div className="flex flex-col h-full">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
              </svg>
              最新政策
            </h3>
            <div className="space-y-4 flex-grow">
              {loading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                  <p className="text-gray-600 mt-2">加载中...</p>
                </div>
              ) : error ? (
                <div className="text-center py-8 text-red-600">
                  {error}
                </div>
              ) : latestPolicies.length === 0 ? (
                <div className="text-center py-8 text-gray-600">
                  暂无最新政策
                </div>
              ) : (
                <>
                  {latestPolicies.map(policy => (
                    <div key={policy.id} className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
                      <Link href={`/policies/${policy.id}`}>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2 hover:text-blue-600">
                          {policy.title}
                        </h4>
                      </Link>
                      <p className="text-gray-600 text-sm mb-2 line-clamp-2">{policy.summary}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500 text-sm">{policy.issueDate}</span>
                        <Link href={`/policies/${policy.id}`} className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                          查看详情 →
                        </Link>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
            <div className="mt-4">
              <Link 
                href="/policies" 
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                查看更多政策
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
          
          {/* 政策咨询服务 */}
          <div className="flex flex-col h-full">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              政策咨询服务
            </h3>
            <div className="bg-blue-50 rounded-lg p-6 flex-grow">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">专业的政策法规咨询</h4>
              <p className="text-gray-600 mb-4">
                我们提供专业的政策法规咨询服务，帮助您理解最新政策要求，规避合规风险，顺利完成驾校审批和备案。
              </p>
              <ul className="space-y-3 mb-4">
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
            </div>
            <div className="mt-4">
              <Link href="/policies#contact" className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                咨询详情
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 