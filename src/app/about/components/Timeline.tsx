'use client';

import React, { useState, useRef } from 'react';

// 定义发展历程数据
const timelineData = [
  {
    year: '2013年',
    title: '行业起步',
    description: '葛万威开始进行机动车驾驶人考试场地和机动车驾驶员培训教练场地设计规划工作，迈出驾培行业职业生涯第一步。',
    isKeyMilestone: true
  },
  {
    year: '2013-2020年',
    title: '经验积累阶段',
    description: '葛万威专注于驾校规划设计领域，参与多个驾校考场规划项目，不断积累行业经验和专业知识，逐步形成自己的设计理念。',
    isKeyMilestone: false
  },
  {
    year: '2020-2025年',
    title: '自由团队阶段',
    description: '葛万威组建并带领自由设计团队，为全国各地的驾校提供规划设计和备案服务，累计完成200多个成功项目，积累了丰富的行业经验和客户资源。',
    isKeyMilestone: true
  },
  {
    year: '2025年3月',
    title: '创始团队组建',
    description: '葛万威基于12年驾校规划设计经验和成功案例，组建了专业团队，开始筹备成立专业的驾校设计规划服务工作室，为正式创业奠定基础。',
    isKeyMilestone: false
  },
  {
    year: '2025年4月',
    title: '工作室正式成立',
    description: '郑州市中原区驾维素信息服务工作室正式注册成立，凭借创始人多年积累的行业资源和客户网络，业务范围直接覆盖全国市场，开启专业化发展新阶段。',
    isKeyMilestone: true
  },
  {
    year: '2025年4月',
    title: '全国业务布局',
    description: '工作室成立伊始即承接全国各地的驾校规划设计项目，客户网络已覆盖全国多个省份，在行业内形成了良好的口碑和影响力。',
    isKeyMilestone: false
  },
  {
    year: '2025年5月',
    title: '服务体系优化',
    description: '基于多年项目经验，建立全面标准化的服务流程和质量管控体系，从需求分析、方案设计到成果交付形成完整服务链，进一步提升工作效率和服务质量。',
    isKeyMilestone: false
  },
  {
    year: '2025年下半年',
    title: '技术创新推进',
    description: '计划引入先进的数字化设计工具和3D可视化技术，提升设计方案的展示效果和精准度，为客户提供更直观、更高效的设计服务。',
    isKeyMilestone: false
  },
  {
    year: '2026年',
    title: '业务深化拓展',
    description: '计划在巩固现有业务的基础上，深化服务内容，增加驾校运营咨询、智能化设备规划等服务项目，为客户提供更全面的解决方案。',
    isKeyMilestone: true
  },
  {
    year: '未来展望',
    title: '发展愿景',
    description: '致力于成为驾培行业规划设计的领军服务商，不断创新服务模式，引领行业标准，推动驾培行业高质量发展。',
    isKeyMilestone: true
  }
];

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scrollToItem = (index: number) => {
    setActiveIndex(index);
    
    // 滚动到选中的时间点
    if (scrollRef.current) {
      const items = scrollRef.current.querySelectorAll('.timeline-item');
      if (items[index]) {
        const container = scrollRef.current;
        const item = items[index] as HTMLElement;
        const containerWidth = container.offsetWidth;
        const itemLeft = item.offsetLeft;
        const itemWidth = item.offsetWidth;
        
        container.scrollTo({
          left: itemLeft - containerWidth / 2 + itemWidth / 2,
          behavior: 'smooth'
        });
      }
    }
  };
  
  return (
    <section id="history" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">发展历程</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
        
        {/* 时间轴导航 */}
        <div 
          ref={scrollRef}
          className="relative mb-12 overflow-x-auto pb-4 hide-scrollbar flex justify-center"
        >
          <div className="flex items-center justify-center space-x-1 min-w-max mx-auto">
            {timelineData.map((item, index) => (
              <div 
                key={index}
                className="timeline-item flex flex-col items-center justify-center cursor-pointer px-3"
                onClick={() => scrollToItem(index)}
              >
                <div 
                  className={`w-6 h-6 rounded-full border-2 transition-colors duration-300 ${
                    index === activeIndex 
                      ? 'bg-blue-600 border-blue-600' 
                      : item.isKeyMilestone 
                        ? 'bg-white border-blue-500' 
                        : 'bg-white border-gray-300'
                  }`}
                />
                <div 
                  className={`h-0.5 w-16 ${
                    index < activeIndex 
                      ? 'bg-blue-500' 
                      : 'bg-gray-300'
                  }`}
                  style={{
                    display: index === timelineData.length - 1 ? 'none' : 'block'
                  }}
                />
                <div 
                  className={`mt-2 text-sm font-medium text-center ${
                    index === activeIndex 
                      ? 'text-blue-600' 
                      : 'text-gray-500'
                  }`}
                >
                  {item.year}
                </div>
              </div>
            ))}
          </div>
          
          {/* 滚动提示 */}
          <div className="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-l from-white pointer-events-none" />
          <div className="absolute top-0 left-0 bottom-0 w-16 bg-gradient-to-r from-white pointer-events-none" />
        </div>
        
        {/* 当前选中的历程详情 */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-500">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium">
                {timelineData[activeIndex].year}
              </div>
              <div className="w-12 h-0.5 bg-gray-200 mx-4"></div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                {timelineData[activeIndex].title}
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {timelineData[activeIndex].description}
            </p>
            
            {/* 导航按钮 */}
            <div className="flex justify-between mt-8">
              <button 
                onClick={() => scrollToItem(Math.max(0, activeIndex - 1))}
                disabled={activeIndex === 0}
                className={`flex items-center px-4 py-2 rounded-lg ${
                  activeIndex === 0 
                    ? 'text-gray-400 cursor-not-allowed' 
                    : 'text-blue-600 hover:bg-blue-50'
                }`}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                上一步
              </button>
              <button 
                onClick={() => scrollToItem(Math.min(timelineData.length - 1, activeIndex + 1))}
                disabled={activeIndex === timelineData.length - 1}
                className={`flex items-center px-4 py-2 rounded-lg ${
                  activeIndex === timelineData.length - 1 
                    ? 'text-gray-400 cursor-not-allowed' 
                    : 'text-blue-600 hover:bg-blue-50'
                }`}
              >
                下一步
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* 未来规划 */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">我们的未来规划</h3>
          <p className="text-gray-600 mb-8 leading-relaxed">
            作为新成立的工作室，我们充满激情与活力，将秉持"专业服务、创新发展"的理念，不断提升服务品质，拓展服务范围。
            未来三年，我们计划逐步扩大业务覆盖范围，开发数字化设计工具，提升服务效率和用户体验，为驾培行业注入新的活力。
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-blue-600 text-xl font-bold mb-2">技术创新</div>
              <p className="text-gray-600">引入数字化设计工具和3D建模技术，提升驾校规划的可视化水平和效率</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-blue-600 text-xl font-bold mb-2">服务拓展</div>
              <p className="text-gray-600">持续优化全国服务网络，为各地客户提供更高效、更专业的设计规划服务</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-blue-600 text-xl font-bold mb-2">品牌建设</div>
              <p className="text-gray-600">打造专业服务品牌，通过优质案例和口碑传播，树立行业标杆形象</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* 自定义滚动条样式 */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          height: 0;
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
} 