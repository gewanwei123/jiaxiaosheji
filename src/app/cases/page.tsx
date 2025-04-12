'use client';

import React, { useState } from 'react';
import Header from '@/app/home/components/Header';
import Footer from '@/app/home/components/Footer';
import CaseCard from './components/CaseCard';

// 模拟案例数据（将来会从API或静态数据获取）
const DUMMY_CASES = [
  {
    id: "case-001",
    title: "河南某大型驾校训练场地规划",
    category: "场地规划设计",
    thumbnail: "/images/cases/case1.jpg", // 注意：需要添加实际图片
    summary: "针对形状不规则的训练场地，采用创新的功能区布局和回字形动线设计，优化空间利用率，提升培训车辆容纳量。",
    completionDate: "2022年11月"
  },
  {
    id: "case-002",
    title: "郑州市区紧凑型教练场改造",
    category: "场地规划设计",
    thumbnail: "/images/cases/case2.jpg", // 注意：需要添加实际图片
    summary: "通过科目二、科目三训练区合理重叠设计，在有限空间内满足全部训练科目要求，实现全科目训练功能。",
    completionDate: "2023年3月"
  },
  {
    id: "case-003",
    title: "某驾校备案资料全套制作",
    category: "备案资料制作",
    thumbnail: "/images/cases/case3.jpg", // 注意：需要添加实际图片
    summary: "为新建驾校提供从场地测量到资料编制的全流程服务，编制符合最新标准的完整备案资料，助力客户顺利通过审批。",
    completionDate: "2023年5月"
  },
  {
    id: "case-004",
    title: "山区驾校场地地形适应性设计",
    category: "场地规划设计",
    thumbnail: "/images/cases/case4.jpg", // 注意：需要添加实际图片
    summary: "针对场地高差大、坡度处理难度高的山区场地，采用分区台阶式布局和科学的排水系统设计，最小化土方工程。",
    completionDate: "2023年7月"
  },
  {
    id: "case-005",
    title: "驾培机构政策法规咨询服务",
    category: "政策咨询",
    thumbnail: "/images/cases/case5.jpg", // 注意：需要添加实际图片
    summary: "为多家驾培机构提供政策解读和法规咨询服务，协助客户理解最新政策变化，调整经营策略，顺应行业发展趋势。",
    completionDate: "2023年9月"
  }
];

// 分类选项
const CATEGORIES = ["全部", "场地规划设计", "备案资料制作", "政策咨询"];

export default function CasesPage() {
  const [activeCategory, setActiveCategory] = useState("全部");
  
  // 根据选择的分类筛选案例
  const filteredCases = activeCategory === "全部" 
    ? DUMMY_CASES 
    : DUMMY_CASES.filter(c => c.category === activeCategory);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* 页面标题 */}
        <div className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">成功案例展示</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              查看我们为驾校提供的场地规划设计、备案资料制作和政策咨询服务的成功案例，了解我们如何帮助客户解决实际问题。
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-8"></div>
          </div>
        </div>
        
        {/* 分类过滤器 */}
        <div className="bg-white py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
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
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* 案例列表 */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            {filteredCases.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCases.map(caseItem => (
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
            ) : (
              <div className="text-center py-20">
                <p className="text-xl text-gray-600">暂无符合条件的案例</p>
              </div>
            )}
          </div>
        </div>
        
        {/* 咨询部分 */}
        <div className="bg-blue-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">需要类似的解决方案？</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              无论您是新建驾校还是现有场地改造升级，我们都能为您提供专业的规划设计和资料制作服务，助力您的项目顺利实施。
            </p>
            <a 
              href="/services/field-planning#contact-section" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
            >
              立即咨询
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 