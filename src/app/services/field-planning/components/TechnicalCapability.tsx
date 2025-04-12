'use client';

import React from 'react';
import Image from 'next/image';
import { FaTools, FaCheck } from 'react-icons/fa';

export default function TechnicalCapability() {
  // 技术卡片数据
  const techCards = [
    {
      title: "场地布局优化算法",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
        </svg>
      ),
      description: "应用数学模型优化场地空间利用率，确保每个训练区域的合理布局与连接"
    },
    {
      title: "交通流量分析技术",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
        </svg>
      ),
      description: "通过交通模拟分析技术，确保场地内各类车辆的高效流动与安全操作"
    },
    {
      title: "3D可视化建模",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
        </svg>
      ),
      description: "使用先进的3D建模软件，为客户提供真实的场地效果预览，助力决策制定"
    },
    {
      title: "规范标准体系",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
        </svg>
      ),
      description: "全面掌握国家和地方驾校场地设计标准，确保每个项目都符合最新法规要求"
    }
  ];

  // 团队专业背景数据
  const teamExperts = [
    {
      title: "规划设计专家",
      count: "5+",
      description: "平均10年以上行业经验，熟悉各类驾校场地设计要求"
    },
    {
      title: "工程技术顾问",
      count: "8+",
      description: "具备土木工程和交通工程背景，精通工程施工标准"
    },
    {
      title: "交通安全专家",
      count: "3+",
      description: "专注于场地安全设计，确保训练环境安全可靠"
    },
    {
      title: "成功项目案例",
      count: "200+",
      description: "覆盖全国多个省市，各类规模的驾校场地规划设计"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* 主标题 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">我们的技术优势</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            拥有专业的技术团队和先进的设计工具，为您的场地设计提供科学、高效的解决方案
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-8"></div>
        </div>

        {/* 技术能力卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {techCards.map((card, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>

        {/* 专业工具与团队实力 */}
        <div className="mt-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">专业工具与团队实力</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              强大的工具支持与专业的人才团队，为每个项目提供可靠的技术保障
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* 专业软件工具 */}
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <FaTools className="text-blue-600 text-xl" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800">专业软件工具</h4>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2 flex-shrink-0" />
                  <span>专业制图软件应用</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2 flex-shrink-0" />
                  <span>3D建模与效果图制作</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2 flex-shrink-0" />
                  <span>地理信息系统技术应用</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2 flex-shrink-0" />
                  <span>专业的测量与计算工具</span>
                </li>
              </ul>
            </div>

            {/* 团队专业背景 */}
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center mb-4 justify-center">
                <h4 className="text-xl font-semibold text-gray-800">团队专业背景</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {teamExperts.map((expert, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">{expert.count}</div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">{expert.title}</h4>
                    <p className="text-gray-600">{expert.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 