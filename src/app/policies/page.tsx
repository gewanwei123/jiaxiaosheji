'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/app/home/components/Header';
import Footer from '@/app/home/components/Footer';
import CategoryTabs from './components/CategoryTabs';
import PolicyCard from './components/PolicyCard';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { policyList } from '@/data/policies';
import WechatQrCode from '@/app/components/WechatQrCode';

// 过滤选项
const CATEGORIES = [
  { id: 'all', name: '全部' },
  { id: 'policy', name: '政策文件' },
  { id: 'standard', name: '行业标准' },
  { id: 'guide', name: '指南文件' },
  { id: 'opinion', name: '指导意见' },
  { id: 'safety', name: '安全规定' }
];

const TAGS = [
  '驾培机构', '管理规范', '安全管理', '教练场', '建设规范', 
  '技术标准', '备案资料', '资质审核', '申请流程', '考试内容', 
  '评分标准', '新能源车', '数字化转型', '智能培训', '科技应用',
  '安全生产', '风险防控', '应急处置', '服务规范', '消费者权益',
  '投诉处理', '新能源汽车', '专项培训', '驾校管理', '培训规范',
  '质量监督', '场地建设'
];

const SORT_OPTIONS = [
  { id: 'dateDesc', name: '最新发布' },
  { id: 'dateAsc', name: '最早发布' },
  { id: 'titleAsc', name: '标题 A-Z' },
  { id: 'titleDesc', name: '标题 Z-A' }
];

// 定义标签类型
type Tag = string;

export default function PoliciesPage() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all');
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [sortOption, setSortOption] = useState('dateDesc');
  const [showFilters, setShowFilters] = useState(false);
  const [visiblePolicies, setVisiblePolicies] = useState(4);
  
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
  
  // 当URL参数变化时更新selectedCategory
  useEffect(() => {
    setSelectedCategory(categoryParam || 'all');
    
    // 获取tags参数
    const tagsParam = searchParams.get('tags');
    if (tagsParam) {
      const tagArray = tagsParam.split(',');
      setSelectedTags(tagArray);
    } else {
      setSelectedTags([]);
    }
    
    // 获取sort参数
    const sortParam = searchParams.get('sort');
    if (sortParam && SORT_OPTIONS.some(option => option.id === sortParam)) {
      setSortOption(sortParam);
    }
    
    // 获取搜索参数
    const searchParam = searchParams.get('search');
    if (searchParam) {
      setSearchTerm(searchParam);
    }
  }, [searchParams, categoryParam]);
  
  // 创建包含当前筛选条件的URL
  const createFilterUrl = (params: {
    category?: string;
    tags?: Tag[];
    sort?: string;
    search?: string;
  }) => {
    const url = new URL(window.location.href);
    
    // 根据提供的参数更新URL
    if (params.category && params.category !== 'all') {
      url.searchParams.set('category', params.category);
    } else {
      url.searchParams.delete('category');
    }
    
    if (params.tags && params.tags.length > 0) {
      url.searchParams.set('tags', params.tags.join(','));
    } else {
      url.searchParams.delete('tags');
    }
    
    if (params.sort && params.sort !== 'dateDesc') {
      url.searchParams.set('sort', params.sort);
    } else {
      url.searchParams.delete('sort');
    }
    
    if (params.search && params.search.trim() !== '') {
      url.searchParams.set('search', params.search.trim());
    } else {
      url.searchParams.delete('search');
    }
    
    return url.pathname + url.search;
  };
  
  // 过滤和排序政策
  const filteredPolicies = policyList
    .filter(policy => {
      // 搜索词过滤
      const searchMatch = searchTerm === '' || 
        policy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        policy.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        policy.issuer.toLowerCase().includes(searchTerm.toLowerCase());
        
      // 分类过滤
      let categoryMatch = selectedCategory === 'all';
      if (!categoryMatch) {
        switch(selectedCategory) {
          case 'policy':
            categoryMatch = policy.category === '政策文件';
            break;
          case 'standard':
            categoryMatch = policy.category === '行业标准';
            break;
          case 'guide':
            categoryMatch = policy.category === '指南文件';
            break;
          case 'opinion':
            categoryMatch = policy.category === '指导意见';
            break;
          case 'safety':
            categoryMatch = policy.category === '安全规定';
            break;
        }
      }
        
      // 标签过滤
      const tagMatch = selectedTags.length === 0 || 
        selectedTags.some(tag => policy.tags.includes(tag));
        
      return searchMatch && categoryMatch && tagMatch;
    })
    .sort((a, b) => {
      switch(sortOption) {
        case 'dateDesc':
          return new Date(b.issueDate).getTime() - new Date(a.issueDate).getTime();
        case 'dateAsc':
          return new Date(a.issueDate).getTime() - new Date(b.issueDate).getTime();
        case 'titleAsc':
          return a.title.localeCompare(b.title);
        case 'titleDesc':
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });
    
  const displayedPolicies = filteredPolicies.slice(0, visiblePolicies);
  
  // 加载更多政策
  const loadMore = () => {
    setVisiblePolicies(prev => Math.min(prev + 4, filteredPolicies.length));
  };
  
  // 处理标签选择
  const toggleTag = (tag: Tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  
  // 清除所有过滤器
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedTags([]);
    setSortOption('dateDesc');
  };

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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* 页面标题 */}
        <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          {/* 背景 */}
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-800" />
            
            {/* 装饰性图形元素 */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-200 blur-3xl"></div>
              <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-indigo-300 blur-3xl"></div>
              <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-blue-400 blur-3xl"></div>
            </div>
            
            {/* 半透明遮罩 */}
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* 内容 */}
          <div className="container mx-auto px-4 z-10 relative text-center pt-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">政策法规中心</h1>
            <p className="text-lg md:text-xl text-white mb-6 max-w-3xl mx-auto">
              了解驾校设立和运营相关的最新政策法规、行业标准和审批要求，助力您的驾校业务合规发展。
            </p>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <div className="flex flex-wrap justify-center gap-8 mt-8 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-gray-200">政策文件</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">20+</div>
                <div className="text-gray-200">专业解读</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-gray-200">政策覆盖</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">每月</div>
                <div className="text-gray-200">定期更新</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 分类导航 */}
        <CategoryTabs />
        
        {/* 搜索和筛选区域 */}
        <div className="bg-gray-50 py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* 搜索框 */}
              <div className="relative mb-6">
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    const url = createFilterUrl({
                      category: selectedCategory === 'all' ? undefined : selectedCategory,
                      tags: selectedTags.length > 0 ? selectedTags : undefined,
                      sort: sortOption === 'dateDesc' ? undefined : sortOption,
                      search: searchTerm
                    });
                    window.location.href = url;
                  }}
                >
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="搜索政策法规、行业标准..."
                    className="w-full py-3 px-4 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <svg
                    className="absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  
                  <button type="submit" className="hidden">搜索</button>
                </form>
                
                {/* 筛选切换按钮 */}
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className="absolute right-3 top-2.5 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-600 text-sm rounded transition-colors flex items-center"
                >
                  筛选
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
                  </svg>
                </button>
              </div>
              
              {/* 筛选选项 */}
              {showFilters && (
                <div className="bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-200">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-gray-700">筛选选项</h3>
                    <Link 
                      href="/policies"
                      className="text-blue-500 hover:text-blue-700 text-sm"
                    >
                      清除全部
                    </Link>
                  </div>
                  
                  {/* 分类筛选 */}
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-2">文件类型</h4>
                    <div className="flex flex-wrap gap-2">
                      {CATEGORIES.map(category => (
                        <Link
                          key={category.id}
                          href={category.id === 'all' ? '/policies' : `/policies?category=${category.id}`}
                          className={`px-3 py-1 rounded-full text-sm ${
                            selectedCategory === category.id
                              ? 'bg-blue-500 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  {/* 标签筛选 */}
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-2">标签</h4>
                    <div className="flex flex-wrap gap-2">
                      {TAGS.slice(0, 12).map(tag => {
                        const isSelected = selectedTags.includes(tag);
                        const newTags = isSelected 
                          ? selectedTags.filter(t => t !== tag)
                          : [...selectedTags, tag];
                        
                        return (
                          <Link
                            key={tag}
                            href={createFilterUrl({
                              category: selectedCategory === 'all' ? undefined : selectedCategory,
                              tags: newTags,
                              sort: sortOption === 'dateDesc' ? undefined : sortOption,
                              search: searchTerm || undefined
                            })}
                            className={`px-3 py-1 rounded-full text-sm ${
                              isSelected
                                ? 'bg-green-500 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {tag}
                          </Link>
                        );
                      })}
                      {TAGS.length > 12 && (
                        <button className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 hover:bg-gray-200">
                          更多...
                        </button>
                      )}
                    </div>
                  </div>
                  
                  {/* 排序选项 */}
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">排序方式</h4>
                    <select
                      value={sortOption}
                      onChange={(e) => {
                        const newSort = e.target.value;
                        const url = createFilterUrl({
                          category: selectedCategory === 'all' ? undefined : selectedCategory,
                          tags: selectedTags.length > 0 ? selectedTags : undefined,
                          sort: newSort === 'dateDesc' ? undefined : newSort,
                          search: searchTerm || undefined
                        });
                        window.location.href = url;
                      }}
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      {SORT_OPTIONS.map(option => (
                        <option key={option.id} value={option.id}>{option.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
              
              {/* 搜索结果计数 */}
              <div className="text-gray-600 mb-4">
                找到 {filteredPolicies.length} 条政策法规
                {selectedCategory !== 'all' && ' · 已筛选'}
                {selectedTags.length > 0 && ` · ${selectedTags.length} 个标签`}
              </div>
            </div>
          </div>
        </div>
        
        {/* 政策列表 */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {selectedCategory === 'all' 
              ? '政策法规列表' 
              : CATEGORIES.find(c => c.id === selectedCategory)?.name + '列表'}
          </h2>
          
          {filteredPolicies.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">未找到相关政策</h3>
              <p className="text-gray-500 mb-4">请尝试调整您的筛选条件或搜索词</p>
              <Link 
                href="/policies"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
              >
                清除筛选条件
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {displayedPolicies.map(policy => (
                <PolicyCard 
                  key={policy.id}
                  id={policy.id}
                  title={policy.title}
                  issuer={policy.issuer}
                  issueDate={policy.issueDate}
                  category={policy.category}
                  summary={policy.summary}
                  isHighlighted={policy.isHighlighted}
                />
              ))}
            </div>
          )}
          
          {/* 查看更多按钮 */}
          {displayedPolicies.length < filteredPolicies.length && (
            <div className="text-center mt-8">
              <button 
                onClick={loadMore}
                className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-2 px-6 rounded-lg inline-flex items-center transition-colors"
              >
                加载更多
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
          )}
        </div>
        
        {/* 咨询服务 */}
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
                      <WechatQrCode
                        width={128}
                        height={128}
                        hasBorder={true}
                        borderColor="gray-200"
                        titleText="添加微信咨询"
                        description="扫码获取政策解读服务"
                      />
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
      </main>
      <Footer />
    </div>
  );
} 