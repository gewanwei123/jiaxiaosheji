'use client';

import React from 'react';
import Image from 'next/image';

// 定义技术方法类型
type TechMethod = {
  id: string;
  title: string;
  description: string;
  capabilities: string[];
  icon: React.ReactNode;
};

// 定义团队专家类型
type TeamExpert = {
  title: string;
  description: string;
  experience: string;
  avatar: string;
};

export default function ProfessionalCapability() {
  // 定义技术方法数据
  const techMethods: TechMethod[] = [
    {
      id: "policy",
      title: "政策法规解读能力",
      description: "精通各类驾校备案相关法规标准，确保资料符合最新要求",
      capabilities: [
        "熟悉《机动车驾驶员培训机构资格条件》(GBT 30340--2013)",
        "掌握各省市地方备案标准和特殊要求",
        "能够准确解读和应用最新政策法规",
        "将抽象法规转化为具体文件要求"
      ],
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
        </svg>
      )
    },
    {
      id: "doc",
      title: "文件编制技术",
      description: "专业的文档设计与编写能力，打造规范高效的备案资料",
      capabilities: [
        "专业的表格和文档设计能力",
        "符合标准的文件格式和模板应用",
        "清晰规范的文字表述和逻辑构建",
        "多种文档软件的熟练应用"
      ],
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
      )
    },
    {
      id: "integrate",
      title: "资料整合方法",
      description: "系统化整合各类资料，确保资料间的一致性和完整性",
      capabilities: [
        "系统化的资料分类和整理方法",
        "多元素资料的有效整合能力",
        "资料间逻辑一致性保障",
        "完整性和规范性检查体系"
      ],
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
        </svg>
      )
    },
    {
      id: "communication",
      title: "沟通协调技巧",
      description: "高效的客户沟通和需求分析能力，确保服务精准到位",
      capabilities: [
        "有效的需求收集和分析能力",
        "与客户高效沟通的方法",
        "与审批部门良好互动的经验",
        "问题解决的协作流程"
      ],
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
        </svg>
      )
    }
  ];
  
  // 定义团队专家数据
  const teamExperts: TeamExpert[] = [
    {
      title: "资深行政管理专家",
      description: "10年以上政府行政部门工作经验，精通各类行政审批流程和要求，为众多驾校提供过备案咨询服务。",
      experience: "参与制定过地方驾校管理规范，熟悉审批部门的工作思路和关注重点。",
      avatar: "/images/team/expert1.jpg"
    },
    {
      title: "驾校运营顾问",
      description: "曾任多家大型驾校的运营总监，深度参与过10余家驾校的建设和备案全过程。",
      experience: "熟悉驾校从筹备到运营的全流程要点，能提供实用的备案材料编制建议。",
      avatar: "/images/team/expert2.jpg"
    },
    {
      title: "文档编制专家",
      description: "专业文档工程师，擅长各类规范性文件的编写和制作，精通各类办公软件和专业排版工具。",
      experience: "已完成超过50套驾校备案资料的编制，资料审批通过率100%。",
      avatar: "/images/team/expert3.jpg"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* 主标题 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">专业的技术实力与方法论</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            我们拥有丰富的驾校备案资料制作经验和专业知识，结合系统化的工作方法，能够高效解决各类资料制作难题，确保备案文件的规范性和有效性。
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-8"></div>
        </div>
        
        {/* 专业技术与方法 */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">专业技术与方法</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {techMethods.map((method) => (
              <div key={method.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                <div className="bg-blue-50 p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4 shadow-sm">
                      {method.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800">{method.title}</h4>
                  </div>
                  <p className="text-gray-600">{method.description}</p>
                </div>
                
                <div className="p-6 flex-grow">
                  <ul className="space-y-3">
                    {method.capabilities.map((capability, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className="text-gray-700">{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* 团队专业背景 */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">我们的专业团队</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamExperts.map((expert, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 relative bg-gray-200">
                  {/* 使用占位图，实际项目中替换为真实照片 */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-20 h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  {/* 如果有实际图片则使用：
                  <Image 
                    src={expert.avatar}
                    alt={expert.title}
                    layout="fill"
                    objectFit="cover"
                  /> */}
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">{expert.title}</h4>
                  <p className="text-gray-600 mb-4">{expert.description}</p>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-medium text-blue-800 mb-2">专业经验</h5>
                    <p className="text-blue-700 text-sm">{expert.experience}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-semibold text-gray-800 mb-4 text-center">我们的团队优势</h4>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p className="text-gray-700">拥有行政管理、法律和教育背景的专业团队</p>
              </div>
              
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p className="text-gray-700">多年驾校备案资料制作经验的专家顾问</p>
              </div>
              
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p className="text-gray-700">与审批部门保持良好沟通的行业关系</p>
              </div>
              
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p className="text-gray-700">持续的专业培训和知识更新机制</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* 服务引导 */}
        <div className="mt-12 text-center">
          <a href="#contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
            咨询专业服务
          </a>
        </div>
      </div>
    </section>
  );
} 