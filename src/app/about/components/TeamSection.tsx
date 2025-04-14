'use client';

import React, { useState } from 'react';

// 定义团队成员数据
const teamData = {
  management: [
    {
      name: '葛万威',
      title: '创始人 & CEO',
      image: '/images/team/placeholder.jpg', // 临时占位图
      description: '拥有12年驾校规划和管理经验，曾参与200多个驾校的规划设计项目，对行业法规和标准有深入研究。从2013年开始专注于驾校规划设计领域，带领团队为全国各地的驾校提供专业服务。致力于推动驾培行业规范化、专业化发展。',
      expertise: ['驾校规划', '行业标准', '战略规划']
    },
    {
      name: '李明',
      title: '技术总监',
      image: '/images/team/placeholder.jpg', // 临时占位图
      description: '建筑学硕士，专注于驾培场地设计规划10年，主导完成过50多个驾校场地规划项目。精通CAD、3D建模等专业软件，擅长优化空间利用率。',
      expertise: ['场地设计', '3D建模', 'CAD制图']
    },
    {
      name: '王丽',
      title: '法规顾问',
      image: '/images/team/placeholder.jpg', // 临时占位图
      description: '法学背景，8年驾培行业法规研究经验，熟悉各地区驾校审批和备案流程，为多家驾校提供政策咨询和备案资料制作服务。',
      expertise: ['政策解读', '备案资料', '合规咨询']
    }
  ],
  
  professional: [
    {
      name: '赵工',
      title: '高级设计师',
      image: '/images/team/placeholder.jpg', // 临时占位图
      expertise: ['场地规划', '建筑设计']
    },
    {
      name: '孙工',
      title: '工程顾问',
      image: '/images/team/placeholder.jpg', // 临时占位图
      expertise: ['工程造价', '施工管理']
    },
    {
      name: '钱工',
      title: '资料专家',
      image: '/images/team/placeholder.jpg', // 临时占位图
      expertise: ['备案文件', '资质申请']
    },
    {
      name: '周工',
      title: '3D模型师',
      image: '/images/team/placeholder.jpg', // 临时占位图
      expertise: ['3D建模', '效果图制作']
    }
  ],
  
  teamCulture: {
    title: '我们的团队文化',
    description: '我们是一支专业、高效、富有创新精神的团队，秉持"客户至上、专业为本、精益求精"的理念。每位成员都拥有丰富的行业经验和专业技能，通过跨学科合作，为客户提供最优质的服务。',
    values: [
      '专业导向 - 持续学习行业知识，不断提升专业能力',
      '客户为本 - 深入理解客户需求，提供定制化解决方案',
      '协作共赢 - 团队协作，发挥集体智慧，共同创造价值',
      '精益求精 - 对每个项目精益求精，追求卓越品质'
    ],
    images: [
      '/images/team/culture1.jpg', // 临时占位图
      '/images/team/culture2.jpg' // 临时占位图
    ]
  }
};

export default function TeamSection() {
  const [activeTeamMember, setActiveTeamMember] = useState<number | null>(null);
  
  return (
    <section id="team" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">我们的团队</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-10"></div>
        
        {/* 管理团队 */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-10">管理团队</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {teamData.management.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="aspect-w-3 aspect-h-2 relative">
                  <div className="w-full h-48 bg-blue-100 flex items-center justify-center">
                    {/* 临时占位，实际项目中应使用真实照片 */}
                    <svg className="w-24 h-24 text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h4>
                  <p className="text-blue-600 font-medium mb-4">{member.title}</p>
                  <p className="text-gray-600 mb-4">{member.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* 专业团队 */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-10">专业团队</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {teamData.professional.map((member, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow text-center hover:shadow-md transition-shadow"
                onMouseEnter={() => setActiveTeamMember(index)}
                onMouseLeave={() => setActiveTeamMember(null)}
              >
                <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  {/* 临时占位，实际项目中应使用真实照片 */}
                  <svg className="w-12 h-12 text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-1">{member.name}</h4>
                <p className="text-blue-600 text-sm font-medium mb-3">{member.title}</p>
                
                <div className={`flex flex-wrap justify-center gap-1 transition-opacity duration-300 ${
                  activeTeamMember === index ? 'opacity-100' : 'opacity-70'
                }`}>
                  {member.expertise.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="inline-block px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* 团队文化 */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">{teamData.teamCulture.title}</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 mb-6 leading-relaxed">{teamData.teamCulture.description}</p>
              <ul className="space-y-3">
                {teamData.teamCulture.values.map((value, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {/* 临时占位，实际项目中应使用真实照片 */}
              {[1, 2].map((_, index) => (
                <div key={index} className="bg-blue-50 rounded-lg overflow-hidden h-48 flex items-center justify-center">
                  <svg className="w-16 h-16 text-blue-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path>
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 