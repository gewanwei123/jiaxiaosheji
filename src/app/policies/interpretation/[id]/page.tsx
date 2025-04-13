'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { policyInterpretations, policyDetails } from '@/data/policies';
import Header from '@/app/home/components/Header';
import Footer from '@/app/home/components/Footer';
import { notFound } from 'next/navigation';

// 定义类型
interface CaseStudy {
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

const PolicyInterpretationDetail = () => {
  const { id } = useParams();
  const idString = Array.isArray(id) ? id[0] : id as string;
  
  // 查找当前解读
  const currentInterpretation = policyInterpretations.find(
    interp => interp.id === idString
  );
  
  // 如果找不到解读，返回404
  if (!currentInterpretation) {
    return notFound();
  }
  
  // 查找关联政策
  const relatedPolicy = policyDetails[currentInterpretation.relatedPolicyId];
  
  // 检查是否具有可选属性
  const hasApplicationGuide = 'applicationGuide' in currentInterpretation;
  const hasCaseStudies = 'caseStudies' in currentInterpretation && 
    Array.isArray(currentInterpretation.caseStudies) && 
    currentInterpretation.caseStudies.length > 0;
  const hasFaqs = 'faqs' in currentInterpretation && 
    Array.isArray(currentInterpretation.faqs) && 
    currentInterpretation.faqs.length > 0;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* 面包屑导航 */}
        <div className="bg-gray-100 py-3 border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600">首页</Link>
              <span className="mx-2">/</span>
              <Link href="/policies" className="hover:text-blue-600">政策法规</Link>
              <span className="mx-2">/</span>
              <Link href="/policies/interpretation" className="hover:text-blue-600">政策解读</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-500">{currentInterpretation.title}</span>
            </div>
          </div>
        </div>
        
        {/* 解读头部信息 */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{currentInterpretation.title}</h1>
            
            <div className="flex items-center mb-6">
              <div className="flex items-center mr-6">
                <img 
                  src={'avatar' in currentInterpretation.author 
                    ? currentInterpretation.author.avatar 
                    : '/images/experts/default-avatar.jpg'} 
                  alt={currentInterpretation.author.name}
                  className="w-10 h-10 rounded-full mr-3 object-cover"
                />
                <div>
                  <div className="font-medium">{currentInterpretation.author.name}</div>
                  <div className="text-sm text-gray-500">
                    {currentInterpretation.author.title}，{currentInterpretation.author.organization}
                  </div>
                </div>
              </div>
              
              <div className="text-gray-500 text-sm">
                发布日期: {currentInterpretation.publishDate}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {currentInterpretation.tags.map(tag => (
                <Link 
                  key={tag}
                  href={`/policies/interpretation?tag=${tag}`}
                  className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-md hover:bg-blue-100"
                >
                  {tag}
                </Link>
              ))}
            </div>
            
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
              <h3 className="font-medium text-gray-800 mb-2">核心要点</h3>
              <ul className="list-disc list-inside space-y-1">
                {currentInterpretation.keyPoints.map((point, index) => (
                  <li key={index} className="text-gray-700">{point}</li>
                ))}
              </ul>
            </div>
            
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              {currentInterpretation.summary}
            </p>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8">
              <div className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium text-gray-800">关联政策</span>
              </div>
              <div>
                <Link 
                  href={`/policies/${currentInterpretation.relatedPolicyId}`}
                  className="text-blue-600 hover:underline"
                >
                  {relatedPolicy && relatedPolicy.title}
                </Link>
                <span className="text-gray-500 ml-2">
                  ({relatedPolicy && relatedPolicy.issueDate})
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* 解读内容 */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="p-6 lg:p-8">
              <article className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: currentInterpretation.content }} />
              </article>
              
              {hasApplicationGuide && (
                <div className="mt-8 pt-8 border-t">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">应用指南</h3>
                  <div className="prose prose-lg max-w-none">
                    <div dangerouslySetInnerHTML={{ 
                      __html: (currentInterpretation as any).applicationGuide 
                    }} />
                  </div>
                </div>
              )}
              
              {hasCaseStudies && (
                <div className="mt-8 pt-8 border-t">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">案例分析</h3>
                  <div className="space-y-6">
                    {(currentInterpretation as any).caseStudies.map((caseStudy: CaseStudy, index: number) => (
                      <div key={index} className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="text-xl font-bold text-gray-800 mb-2">{caseStudy.title}</h4>
                        <p className="text-gray-700">{caseStudy.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {hasFaqs && (
                <div className="mt-8 pt-8 border-t">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">常见问题</h3>
                  <div className="space-y-6">
                    {(currentInterpretation as any).faqs.map((faq: FAQ, index: number) => (
                      <div key={index} className="mb-6">
                        <h4 className="text-lg font-bold text-gray-800 mb-2">{faq.question}</h4>
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* 相关解读 */}
          <div className="mt-10">
            <h3 className="text-xl font-bold text-gray-800 mb-6">相关解读</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {policyInterpretations
                .filter(interp => interp.id !== idString)
                .slice(0, 2)
                .map(interp => (
                  <div key={interp.id} className="bg-white rounded-lg shadow overflow-hidden border border-gray-200">
                    <div className="p-6">
                      <h4 className="text-lg font-bold text-gray-800 mb-2">
                        <Link href={`/policies/interpretation/${interp.id}`} className="hover:text-blue-600">
                          {interp.title}
                        </Link>
                      </h4>
                      <p className="text-gray-600 mb-3 line-clamp-2">{interp.summary}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">{interp.publishDate}</span>
                        <Link 
                          href={`/policies/interpretation/${interp.id}`}
                          className="text-blue-600 text-sm hover:text-blue-800"
                        >
                          阅读更多
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PolicyInterpretationDetail; 