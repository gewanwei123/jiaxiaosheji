'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { policyInterpretations } from '@/data/policies';
import Header from '@/app/home/components/Header';
import Footer from '@/app/home/components/Footer';

const PolicyInterpretationPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // 提取所有标签
  const allTags = Array.from(
    new Set(
      policyInterpretations.flatMap(interp => interp.tags)
    )
  );
  
  // 过滤解读
  const filteredInterpretations = policyInterpretations.filter(interp => {
    const matchesSearch = searchTerm === '' || 
      interp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      interp.summary.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTag = selectedTag === null || 
      interp.tags.includes(selectedTag);
    
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* 页面标题区 */}
        <div className="bg-blue-50 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">政策解读</h1>
            <p className="text-gray-600 mb-6">
              专业解读交通行业最新政策法规，帮助驾校管理者精准理解政策要点，指导实际操作
            </p>
            
            {/* 搜索框 */}
            <div className="relative max-w-xl">
              <input
                type="text"
                placeholder="搜索政策解读..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="absolute right-3 top-3 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* 标签筛选 */}
        <div className="bg-white py-4 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-gray-700 font-medium">按标签筛选：</span>
              <button
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedTag === null 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedTag(null)}
              >
                全部
              </button>
              {allTags.map(tag => (
                <button
                  key={tag}
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedTag === tag 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* 解读列表 */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 gap-8">
            {filteredInterpretations.length > 0 ? (
              filteredInterpretations.map(interp => (
                <div key={interp.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h2 className="text-xl font-bold text-gray-800 mb-2">
                          <Link href={`/policies/interpretation/${interp.id}`} className="hover:text-blue-600">
                            {interp.title}
                          </Link>
                        </h2>
                        <div className="flex items-center mb-3">
                          <span className="text-sm text-gray-600 mr-4">发布日期: {interp.publishDate}</span>
                          <span className="text-sm text-gray-600">作者: {interp.author.name}</span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="flex items-center mt-1">
                          <img
                            src={'avatar' in interp.author ? interp.author.avatar : '/images/experts/default-avatar.jpg'}
                            alt={interp.author.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{interp.summary}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {interp.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md"
                          onClick={() => setSelectedTag(tag)}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="block text-sm font-medium text-gray-700">
                          关联政策: 
                          <Link href={`/policies/${interp.relatedPolicyId}`} className="ml-1 text-blue-600 hover:underline">
                            查看政策原文
                          </Link>
                        </span>
                      </div>
                      <Link 
                        href={`/policies/interpretation/${interp.id}`}
                        className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                      >
                        阅读全文
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-lg font-medium text-gray-700 mb-2">未找到相关解读</h3>
                <p className="text-gray-500">尝试使用其他关键词或清除筛选条件</p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PolicyInterpretationPage; 