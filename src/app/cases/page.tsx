'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/app/home/components/Header';
import Footer from '@/app/home/components/Footer';
import CaseCard from './components/CaseCard';
import WechatQrCode from '@/app/components/WechatQrCode';

// 模拟案例数据（将来会从API或静态数据获取）
const DUMMY_CASES = [
  {
    id: "case-001",
    title: "河南某大型驾校训练场地规划",
    category: "场地规划设计",
    thumbnail: "/images/cases/case1.jpg", // 注意：需要添加实际图片
    summary: "针对形状不规则的训练场地，采用创新的功能区布局和回字形动线设计，优化空间利用率，提升培训车辆容纳量。项目实现了空间利用率提升30%，同时培训车辆容量增加25%，成功通过审批并获得客户高度评价。",
    completionDate: "2022年11月",
    tags: ["空间优化", "动线设计", "审批支持"]
  },
  {
    id: "case-002",
    title: "郑州市区紧凑型教练场改造",
    category: "场地规划设计",
    thumbnail: "/images/cases/case2.jpg", // 注意：需要添加实际图片
    summary: "通过科目二、科目三训练区合理重叠设计，在有限空间内满足全部训练科目要求，实现全科目训练功能。该项目解决了市区寸土寸金的场地限制问题，在不增加场地面积的情况下完成全功能升级改造。",
    completionDate: "2023年3月",
    tags: ["场地改造", "空间利用", "科目整合"]
  },
  {
    id: "case-003",
    title: "某驾校备案资料全套制作",
    category: "备案资料制作",
    thumbnail: "/images/cases/case3.jpg", // 注意：需要添加实际图片
    summary: "为新建驾校提供从场地测量到资料编制的全流程服务，编制符合最新标准的完整备案资料，助力客户顺利通过审批。本项目包含了场地平面图、训练区域图、交通标识标线图等10余项专业文件，客户首次提交即顺利通过审核。",
    completionDate: "2023年5月",
    tags: ["资料编制", "审批文件", "标准合规"]
  },
  {
    id: "case-004",
    title: "山区驾校场地地形适应性设计",
    category: "场地规划设计",
    thumbnail: "/images/cases/case4.jpg", // 注意：需要添加实际图片
    summary: "针对场地高差大、坡度处理难度高的山区场地，采用分区台阶式布局和科学的排水系统设计，最小化土方工程。该方案节省工程成本20%，解决了雨季排水难题，确保全年安全培训，成为当地山区驾校的典型示范案例。",
    completionDate: "2023年7月",
    tags: ["地形适应", "排水设计", "成本优化"]
  },
  {
    id: "case-006",
    title: "某驾校智能化系统规划与实施",
    category: "场地规划设计",
    thumbnail: "/images/cases/case6.jpg", // 注意：需要添加实际图片
    summary: "为大型综合驾校提供智能化训练场地规划与系统实施，结合物联网技术实现训练过程智能监控与管理。项目通过电子围栏、智能计时、轨迹记录等技术，提升了训练质量和管理效率，实现了人力成本节约40%，学员满意度提升35%。",
    completionDate: "2023年12月",
    tags: ["智能系统", "信息化", "效率提升"]
  },
  {
    id: "case-007",
    title: "驾校科目三实训基地规划",
    category: "场地规划设计",
    thumbnail: "/images/cases/case7.jpg", // 注意：需要添加实际图片
    summary: "针对某省级示范驾校科目三实训基地进行专项规划，设计包含各类典型路况的模拟道路系统。项目在60亩土地上规划了城市、乡村、高速等多种道路环境，配套交通标志标线系统，成为当地最具特色的科目三训练基地。",
    completionDate: "2024年2月",
    tags: ["科目三", "实训基地", "道路系统"]
  },
  {
    id: "case-008",
    title: "某驾校环保节能改造方案",
    category: "场地规划设计",
    thumbnail: "/images/cases/case8.jpg", // 注意：需要添加实际图片
    summary: "为老牌驾校提供环保节能改造解决方案，包括太阳能照明系统、雨水收集利用、电动车充电站等绿色设施规划。项目实现了能源消耗降低30%，打造了行业内首个'绿色驾校'示范点，获得当地政府环保项目补贴支持。",
    completionDate: "2024年3月",
    tags: ["环保改造", "节能设计", "绿色驾校"]
  },
  {
    id: "case-010",
    title: "某驾校标准化备案资料模板开发",
    category: "备案资料制作",
    thumbnail: "/images/cases/case10.jpg", // 注意：需要添加实际图片
    summary: "为省级驾培行业协会开发标准化备案资料模板系统，提供给全省驾校使用。项目设计了符合最新法规的全套文档模板，配套详细填写指南，显著提高了全省驾校备案资料的规范性和通过率，获得行业广泛认可。",
    completionDate: "2023年12月",
    tags: ["标准化", "模板系统", "行业应用"]
  },
  {
    id: "case-011",
    title: "新能源汽车教练车队规划方案",
    category: "场地规划设计",
    thumbnail: "/images/cases/case11.jpg", // 注意：需要添加实际图片
    summary: "为响应国家低碳政策，为大型驾校设计新能源教练车专用训练场和充电设施规划。项目包括智能充电桩布局、光伏发电系统集成和电池管理解决方案，实现了驾校日常运营碳排放降低45%，年均节省运营成本15万元，获得多家媒体报道和行业关注。",
    completionDate: "2024年4月",
    tags: ["新能源", "低碳规划", "充电设施"]
  }
];

// 分类选项
const CATEGORIES = [
  "全部", 
  "场地规划设计", 
  "备案资料制作"
];

// 排序选项
const SORT_OPTIONS = [
  { value: "date-desc", label: "最新案例优先" },
  { value: "date-asc", label: "最早案例优先" },
  { value: "name-asc", label: "名称升序" },
  { value: "name-desc", label: "名称降序" }
];

export default function CasesPage() {
  // 状态管理
  const [activeCategory, setActiveCategory] = useState("全部");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("date-desc");
  const [displayCount, setDisplayCount] = useState(6); // 初始显示6个案例
  
  // 表单状态
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    urgency: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  
  // 处理表单字段变化
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: checkbox.checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };
  
  // 处理表单提交
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);
    
    try {
      // 表单验证
      if (!formData.name.trim() || !formData.phone.trim()) {
        throw new Error('请填写必填字段');
      }
      
      // 调用API提交表单
      const response = await fetch('/api/cases-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus('success');
        setSubmitMessage(result.message || '提交成功！我们的客服团队将尽快与您联系。');
        setFormData({
          name: '',
          phone: '',
          email: '',
          serviceType: '',
          urgency: '',
          description: ''
        });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.message || '提交失败，请稍后重试或直接电话联系我们。');
      }
    } catch (error) {
      console.error('表单提交错误:', error);
      setSubmitStatus('error');
      setSubmitMessage(error instanceof Error ? error.message : '提交失败，请稍后重试或直接电话联系我们。');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // 筛选案例
  const filteredCases = DUMMY_CASES
    // 按分类筛选
    .filter(c => activeCategory === "全部" || c.category === activeCategory)
    // 按搜索关键词筛选
    .filter(c => {
      if (!searchQuery) return true;
      const query = searchQuery.toLowerCase();
      return (
        c.title.toLowerCase().includes(query) ||
        c.summary.toLowerCase().includes(query) ||
        c.category.toLowerCase().includes(query)
      );
    });
  
  // 排序案例
  const sortedCases = [...filteredCases].sort((a, b) => {
    switch (sortOption) {
      case "date-desc":
        return new Date(b.completionDate).getTime() - new Date(a.completionDate).getTime();
      case "date-asc":
        return new Date(a.completionDate).getTime() - new Date(b.completionDate).getTime();
      case "name-asc":
        return a.title.localeCompare(b.title);
      case "name-desc":
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });
  
  // 分页案例
  const paginatedCases = sortedCases.slice(0, displayCount);
  
  // 加载更多案例
  const handleLoadMore = () => {
    setDisplayCount(prev => prev + 3);
  };
  
  // 重置筛选条件
  const handleReset = () => {
    setActiveCategory("全部");
    setSearchQuery("");
    setSortOption("date-desc");
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">驾校服务成功案例展示</h1>
            <p className="text-lg md:text-xl text-white mb-6 max-w-3xl mx-auto">
              查看我们为驾校提供的场地规划设计和备案资料制作服务的成功案例，了解我们如何帮助客户解决实际问题，提升运营效率。
            </p>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <div className="flex justify-center space-x-8 mt-8 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">30+</div>
                <div className="text-gray-200">成功案例</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">95%</div>
                <div className="text-gray-200">客户满意度</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">20+</div>
                <div className="text-gray-200">合作城市</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 分类过滤器 */}
        <div className="bg-white py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-700 mb-3">案例分类</h3>
              <div className="flex flex-wrap justify-start gap-3">
                {CATEGORIES.map(category => (
                  <button
                    key={category}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeCategory === category
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                    {category !== "全部" && (
                      <span className="ml-2 bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
                        {DUMMY_CASES.filter(c => c.category === category).length}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* 案例列表 */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            {/* 搜索栏 */}
            <div className="mb-10 max-w-xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="搜索案例关键词..."
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
              </div>
            </div>
            
            {/* 结果统计 */}
            <div className="mb-8 text-gray-600">
              找到 <span className="font-medium">{filteredCases.length}</span> 个符合条件的案例
            </div>
            
            {filteredCases.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {paginatedCases.map(caseItem => (
                    <CaseCard
                      key={caseItem.id}
                      id={caseItem.id}
                      title={caseItem.title}
                      category={caseItem.category}
                      thumbnail={caseItem.thumbnail}
                      summary={caseItem.summary}
                      completionDate={caseItem.completionDate}
                    />
                  ))}
                </div>
                
                {/* 分页或加载更多 */}
                {displayCount < filteredCases.length && (
                  <div className="mt-12 text-center">
                    <button 
                      onClick={handleLoadMore}
                      className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-3 px-6 rounded-lg inline-flex items-center transition-colors duration-300"
                    >
                      <span>加载更多案例</span>
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-20 bg-white rounded-lg shadow-sm">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p className="text-xl text-gray-600 mb-2">暂无符合条件的案例</p>
                <p className="text-gray-500">请尝试调整筛选条件或搜索关键词</p>
                <button 
                  onClick={() => setActiveCategory("全部")} 
                  className="mt-4 text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                  </svg>
                  返回全部案例
                </button>
              </div>
            )}
          </div>
        </div>
        
        {/* 咨询部分 - 移除原有的简单咨询部分，替换为联系方式和咨询表单 */}
        <section id="contact" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            {/* 主标题 */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">需要专业的驾校服务解决方案？</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                无论您是新建驾校还是现有场地改造升级，我们都能为您提供专业的规划设计和资料制作服务，助力您的项目顺利实施。
              </p>
              <div className="w-24 h-1 bg-blue-600 mx-auto mt-8"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* 联系信息 */}
              <div className="bg-blue-50 rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">联系我们</h3>
                
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
                        description="扫码咨询项目合作"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 咨询表单 */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">填写咨询表单</h3>
                
                {submitStatus && (
                  <div className={`mb-6 p-4 rounded-lg ${
                    submitStatus === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 
                    'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    <div className="flex items-center">
                      {submitStatus === 'success' ? (
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      )}
                      <span>{submitMessage}</span>
                    </div>
                  </div>
                )}
                
                <form className="space-y-6" onSubmit={handleFormSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">姓名 <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
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
                        onChange={handleFormChange}
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
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="请输入您的电子邮箱"
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="serviceType" className="block text-gray-700 font-medium mb-2">服务类型</label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleFormChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      >
                        <option value="">请选择服务类型</option>
                        <option value="field-planning">场地规划设计</option>
                        <option value="record-material">备案资料制作</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="urgency" className="block text-gray-700 font-medium mb-2">紧急程度</label>
                      <select
                        id="urgency"
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleFormChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      >
                        <option value="">请选择紧急程度</option>
                        <option value="urgent">加急(3-5个工作日)</option>
                        <option value="normal">标准(7-10个工作日)</option>
                        <option value="flexible">灵活(具体商议)</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="description" className="block text-gray-700 font-medium mb-2">需求描述</label>
                    <textarea
                      id="description"
                      name="description"
                      rows={4}
                      value={formData.description}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="请简要描述您的需求或问题..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full ${isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 