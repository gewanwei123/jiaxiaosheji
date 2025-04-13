'use client';

import React, { useEffect, useState } from 'react';
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
  
  // 添加表单状态管理
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    consultType: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  
  // 处理表单输入变化
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // 处理表单提交
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 表单验证
    if (!formData.name.trim()) {
      setSubmitResult({
        success: false,
        message: '请输入您的姓名'
      });
      return;
    }
    
    if (!formData.phone.trim()) {
      setSubmitResult({
        success: false,
        message: '请输入您的联系电话'
      });
      return;
    }
    
    // 开始提交
    setIsSubmitting(true);
    setSubmitResult(null);
    
    try {
      // 调用API提交表单
      const response = await fetch('/api/policies-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      // 设置提交结果
      setIsSubmitting(false);
      setSubmitResult({
        success: result.success,
        message: result.message
      });
      
      // 如果提交成功，重置表单
      if (result.success) {
        setFormData({
          name: '',
          phone: '',
          email: '',
          consultType: '',
          description: ''
        });
        
        // 5秒后清除提交结果
        setTimeout(() => {
          setSubmitResult(null);
        }, 5000);
      }
    } catch (error) {
      // 处理网络错误
      setIsSubmitting(false);
      setSubmitResult({
        success: false,
        message: '网络错误，请稍后重试或直接电话联系我们'
      });
      console.error('表单提交错误:', error);
    }
  };
  
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
      
      {/* 咨询服务 - 与政策法规列表页保持一致 */}
      <div id="contact" className="bg-blue-50 py-12">
        <div className="container mx-auto px-4">
          {/* 主标题 */}
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">需要政策咨询服务？</h2>
            <p className="text-gray-600 mb-4 max-w-3xl mx-auto">
              我们的专业团队提供驾校政策法规咨询服务，帮助您理解最新政策变化，合规开展业务，避免潜在风险。
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* 联系信息 */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">联系我们</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-1">电话咨询</h4>
                    <p className="text-gray-700 mb-1">135-2552-0521</p>
                    <p className="text-gray-500 text-sm">周一至周五 9:00-18:00</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-1">邮件联系</h4>
                    <p className="text-gray-700">876261867@qq.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-1">办公地址</h4>
                    <p className="text-gray-700">郑州市中原区嵩山北路299号郑州市创业孵化园3号楼2楼23号</p>
                  </div>
                </div>
                
                {/* 微信二维码 */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-1">微信二维码</h4>
                    <div className="bg-white p-2 rounded-md w-32 h-32 mb-2 flex items-center justify-center border border-gray-200">
                      {/* 替换为实际的微信二维码图片 */}
                      <p className="text-blue-700 text-xs text-center">请替换为实际微信二维码图片</p>
                    </div>
                    <p className="text-gray-500 text-sm">扫码添加微信，获取更多政策咨询</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 咨询表单 */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">填写咨询表单</h3>
              
              {/* 提交结果提示 */}
              {submitResult && (
                <div className={`mb-6 p-4 rounded-lg ${
                  submitResult.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                }`}>
                  <div className="flex items-center">
                    {submitResult.success ? (
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                      </svg>
                    )}
                    <span>{submitResult.message}</span>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">姓名 <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">联系电话 <span className="text-red-500">*</span></label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="请输入您的电话号码"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">电子邮箱</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="请输入您的电子邮箱"
                  />
                </div>
                
                <div>
                  <label htmlFor="consultType" className="block text-gray-700 font-medium mb-2">咨询类型</label>
                  <select
                    id="consultType"
                    name="consultType"
                    value={formData.consultType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  >
                    <option value="">请选择咨询类型</option>
                    <option value="policy">政策解读</option>
                    <option value="approval">审批要求</option>
                    <option value="standard">行业标准</option>
                    <option value="other">其他问题</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="description" className="block text-gray-700 font-medium mb-2">咨询内容</label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="请详细描述您的咨询问题..."
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full ${
                      isSubmitting 
                        ? 'bg-blue-400 cursor-not-allowed' 
                        : 'bg-blue-600 hover:bg-blue-700'
                    } text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>提交中...</span>
                      </>
                    ) : (
                      <>
                        <span>提交咨询</span>
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
              
              <div className="mt-6 text-sm text-gray-500">
                <p>提交后，我们的专业顾问将在24小时内与您联系。如需紧急咨询，请直接拨打电话。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
} 