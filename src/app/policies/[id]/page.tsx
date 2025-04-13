'use client';

import React, { useEffect } from 'react';
import Header from '@/app/home/components/Header';
import Footer from '@/app/home/components/Footer';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { policyDetails } from '@/data/policies';

// 定义政策详情接口
interface PolicyDetail {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  effectiveDate: string;
  documentNumber: string;
  category: string;
  tags: string[];
  summary: string;
  content: string;
  relatedPolicies: Array<{
    id: string;
    title: string;
  }>;
  viewCount?: number;
  downloadCount?: number;
}

// 章节导航组件
function ChapterNavigation({ content }: { content: string }) {
  const extractHeaders = () => {
    // 简化版，实际版本需要在浏览器环境使用DOMParser
    const headings: { id: string; text: string; level: number }[] = [];
    const matches = content.matchAll(/<h([23])[^>]*id="([^"]+)"[^>]*>([^<]+)<\/h\1>/g);
    
    for (const match of matches) {
      const level = parseInt(match[1], 10);
      const id = match[2];
      const text = match[3].trim();
      headings.push({ id, text, level });
    }
    
    return headings;
  };
  
  const headers = extractHeaders();
  
  return headers.length > 0 ? (
    <div className="sticky top-4 bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-3">目录</h3>
      <ul className="space-y-2">
        {headers.map((header, index) => (
          <li 
            key={index}
            className={`${header.level === 2 ? 'font-medium' : 'ml-4 text-sm'}`}
          >
            <a 
              href={`#${header.id}`}
              className="text-gray-700 hover:text-blue-600"
            >
              {header.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  ) : null;
}

// 使用可处理HTML内容的组件
function PolicyContent({ content }: { content: string }) {
  useEffect(() => {
    // 为标题添加ID，支持导航锚点
    const headings = document.querySelectorAll('.policy-content h2, .policy-content h3');
    headings.forEach((heading, index) => {
      if (!heading.id) {
        heading.id = `heading-${index}`;
      }
    });
    
    // 处理内容中的重要段落，添加高亮效果
    const importantNotes = document.querySelectorAll('.policy-content .important-note');
    importantNotes.forEach(note => {
      note.classList.add('bg-yellow-50', 'p-2', 'border-l-4', 'border-yellow-500');
    });
  }, [content]);
  
  return (
    <div 
      className="policy-content prose prose-lg max-w-none"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

export default function PolicyDetailPage() {
  const params = useParams();
  const policyId = params.id as string;
  
  // 获取当前政策数据，如果不存在则使用默认对象
  const policy = policyDetails[policyId] as PolicyDetail || {
    id: 'not-found',
    title: '政策文件未找到',
    issuer: '未知',
    issueDate: '未知',
    effectiveDate: '未知',
    documentNumber: '未知',
    category: '未知',
    tags: [],
    summary: '抱歉，您请求的政策文件不存在或已被移除。',
    content: '<p>找不到对应的政策内容</p>',
    relatedPolicies: []
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        {/* 导航栏 */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex text-sm text-gray-500">
              <Link href="/" className="hover:text-blue-600">首页</Link>
              <span className="mx-2">/</span>
              <Link href="/policies" className="hover:text-blue-600">政策法规</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">{policy.title}</span>
            </nav>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* 主内容区 */}
            <div className="lg:w-3/4">
              {/* 政策标题和基本信息 */}
              <div className="bg-white rounded-lg shadow-md p-8 mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{policy.title}</h1>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {policy.tags.map((tag: string) => (
                    <span key={tag} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6">{policy.summary}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-start">
                    <span className="text-gray-500 w-24">发布机构:</span>
                    <span className="text-gray-800 font-medium">{policy.issuer}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-500 w-24">文件编号:</span>
                    <span className="text-gray-800 font-medium">{policy.documentNumber}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-500 w-24">发布日期:</span>
                    <span className="text-gray-800 font-medium">{policy.issueDate}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-500 w-24">生效日期:</span>
                    <span className="text-gray-800 font-medium">{policy.effectiveDate}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-500 w-24">政策类别:</span>
                    <span className="text-gray-800 font-medium">{policy.category}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-500 w-24">浏览次数:</span>
                    <span className="text-gray-800 font-medium">{policy.viewCount || 0}</span>
                  </div>
                </div>
              </div>
              
              {/* 政策正文 */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="border-b pb-4 mb-6">
                  <h2 className="text-xl font-bold text-gray-800">政策正文</h2>
                </div>
                
                <PolicyContent content={policy.content} />
              </div>
            </div>
            
            {/* 侧边栏 */}
            <div className="lg:w-1/4">
              {/* 章节导航 */}
              <ChapterNavigation content={policy.content} />
              
              {/* 相关政策 */}
              {policy.relatedPolicies && policy.relatedPolicies.length > 0 && (
                <div className="bg-white rounded-lg shadow-md p-4 mt-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">相关政策</h3>
                  <ul className="space-y-3">
                    {policy.relatedPolicies.map(related => (
                      <li key={related.id}>
                        <Link 
                          href={`/policies/${related.id}`}
                          className="text-blue-600 hover:text-blue-800 hover:underline block"
                        >
                          {related.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* 打印和下载选项 */}
              <div className="bg-white rounded-lg shadow-md p-4 mt-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">文档操作</h3>
                <div className="space-y-3">
                  <button 
                    onClick={() => window.print()}
                    className="w-full bg-blue-50 text-blue-700 py-2 px-4 rounded flex items-center justify-center hover:bg-blue-100"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                    打印文档
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 