'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function CaseShowcase() {
  const [activeCase, setActiveCase] = useState(0);
  
  // 案例数据
  const caseStudies = [
    {
      title: "河南某大型驾校训练场地规划",
      challenge: "场地形状不规则，需优化空间利用率",
      solution: "创新的功能区布局，采用&quot;回&quot;字形动线设计",
      result: "通过审批，空间利用率提升30%，可同时容纳培训车辆增加25%",
      image: "/images/cases/case-1.jpg", // 需要添加实际的图片路径
      tags: ["大型驾校", "空间优化", "功能布局"]
    },
    {
      title: "郑州市区紧凑型教练场改造",
      challenge: "有限空间内满足全部训练科目要求",
      solution: "科目二、科目三训练区合理重叠设计",
      result: "在原有面积基础上实现全科目训练功能，顺利通过审批",
      image: "/images/cases/case-2.jpg", // 需要添加实际的图片路径
      tags: ["场地改造", "紧凑设计", "多功能区域"]
    },
    {
      title: "山区驾校场地地形适应性设计",
      challenge: "场地高差大，坡度处理难度高",
      solution: "分区台阶式布局，科学的排水系统设计",
      result: "最小化土方工程，节省工程成本20%，实现全年安全培训",
      image: "/images/cases/case-3.jpg", // 需要添加实际的图片路径
      tags: ["山区场地", "地形适应", "排水系统"]
    },
    {
      title: "省级示范驾校科目三场地规划",
      challenge: "高标准要求，场地需支持大流量培训",
      solution: "多车道并行设计，智能交通流量控制方案",
      result: "日均培训能力提升40%，被评为省级示范性驾校场地",
      image: "/images/cases/case-4.jpg", // 需要添加实际的图片路径
      tags: ["示范驾校", "大流量", "科目三"]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* 主标题 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">成功案例展示</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            以下是我们近期完成的部分场地规划设计项目，每个项目都充分考虑了客户的实际需求，为客户提供了专业、高效的解决方案。
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-8"></div>
        </div>
        
        {/* 案例筛选标签 - 移动端下拉菜单，桌面端标签 */}
        <div className="mb-10 hidden md:block">
          <div className="flex flex-wrap justify-center gap-4">
            {caseStudies.map((caseItem, index) => (
              <button
                key={index}
                onClick={() => setActiveCase(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors 
                  ${activeCase === index 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              >
                {caseItem.title}
              </button>
            ))}
          </div>
        </div>
        
        <div className="md:hidden mb-8">
          <select 
            className="w-full p-2 border border-gray-300 rounded-md"
            value={activeCase}
            onChange={(e) => setActiveCase(Number(e.target.value))}
          >
            {caseStudies.map((caseItem, index) => (
              <option key={index} value={index}>
                {caseItem.title}
              </option>
            ))}
          </select>
        </div>
        
        {/* 案例展示卡片 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="md:flex">
            {/* 案例图片 */}
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <div className="h-full w-full bg-gray-300 flex items-center justify-center">
                <div className="text-gray-500 text-lg">案例图片 {activeCase + 1}</div>
                {/* 实际开发时替换为真实图片
                <Image
                  src={caseStudies[activeCase].image}
                  alt={caseStudies[activeCase].title}
                  fill
                  style={{objectFit: 'cover'}}
                  className="rounded-t-xl md:rounded-t-none md:rounded-l-xl"
                />
                */}
              </div>
            </div>
            
            {/* 案例内容 */}
            <div className="md:w-1/2 p-6 md:p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {caseStudies[activeCase].tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{caseStudies[activeCase].title}</h3>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">挑战：</h4>
                  <p>{caseStudies[activeCase].challenge}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">解决方案：</h4>
                  <p>{caseStudies[activeCase].solution}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">成果：</h4>
                  <p>{caseStudies[activeCase].result}</p>
                </div>
              </div>
              
              <div className="mt-6">
                <button className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800">
                  查看详细案例
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* 分页指示器 */}
        <div className="flex justify-center">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveCase(index)}
              className={`w-3 h-3 mx-1 rounded-full ${index === activeCase ? 'bg-blue-600' : 'bg-gray-300'}`}
              aria-label={`查看案例 ${index + 1}`}
            />
          ))}
        </div>
        
        {/* 客户评价 */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-center text-gray-800 mb-6">客户评价</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 italic mb-4">&quot;从最初的规划到最终交付，整个团队表现出高度的专业性。他们的场地布局方案不仅满足了所有监管要求，还大大提高了我们的培训效率。&quot;</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold mr-3">Z</div>
                <div>
                  <div className="font-medium text-gray-800">张总</div>
                  <div className="text-sm text-gray-500">某大型连锁驾校负责人</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 italic mb-4">&quot;他们提供的场地规划方案帮助我们成功通过了监管审批，且运营一年来未发现任何设计缺陷。特别感谢他们在坡度处理和排水系统设计方面的专业建议。&quot;</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold mr-3">L</div>
                <div>
                  <div className="font-medium text-gray-800">刘校长</div>
                  <div className="text-sm text-gray-500">新建驾校投资者</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 