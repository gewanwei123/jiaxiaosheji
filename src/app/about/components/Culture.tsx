'use client';

import React from 'react';

// 定义企业文化数据
const cultureData = {
  coreValues: {
    title: '核心价值观',
    description: '我们以"专业、创新、责任、共赢"为核心价值观，致力于为客户提供专业、高效、创新的驾校设计规划和备案服务，推动驾培行业高质量发展。',
    values: [
      {
        name: '专业',
        description: '我们注重专业能力的培养和提升，以专业的态度和技能为客户解决问题。',
        icon: 'ProfessionalIcon'
      },
      {
        name: '创新',
        description: '我们鼓励创新思维，不断探索行业最佳实践，为客户带来更高效的解决方案。',
        icon: 'InnovationIcon'
      },
      {
        name: '责任',
        description: '我们对每个项目都负责到底，确保按时按质完成，赢得客户的长期信任。',
        icon: 'ResponsibilityIcon'
      },
      {
        name: '共赢',
        description: '我们追求与客户、员工和合作伙伴的共同发展，创造共赢的合作关系。',
        icon: 'WinWinIcon'
      }
    ]
  },
  
  servicePromise: {
    title: '服务承诺',
    description: '我们承诺为每位客户提供专业、高效、满意的服务，解决驾校规划和备案中的实际问题，助力客户业务成功。',
    promises: [
      '严格按照行业标准和法规要求进行设计规划',
      '量身定制符合客户实际需求的解决方案',
      '及时响应客户需求，高效完成项目交付',
      '提供一年的售后服务支持和政策咨询',
      '保证所有交付成果的质量和合规性'
    ]
  },
  
  socialResponsibility: {
    title: '社会责任',
    description: '作为驾培行业的服务提供商，我们深知肩负的社会责任，致力于推动行业规范发展，提升道路交通安全水平。',
    initiatives: [
      {
        title: '行业标准推广',
        description: '积极参与行业标准制定和推广，提高驾培行业整体水平。'
      },
      {
        title: '安全教育支持',
        description: '为客户提供符合安全标准的驾校设计，助力交通安全教育。'
      },
      {
        title: '绿色环保设计',
        description: '在设计中融入环保理念，推动驾校场地的绿色环保建设。'
      },
      {
        title: '知识分享',
        description: '定期举办行业交流活动，免费分享专业知识和经验。'
      }
    ]
  }
};

// 图标组件
const IconComponent = ({ iconName }: { iconName: string }) => {
  switch (iconName) {
    case 'ProfessionalIcon':
      return (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      );
    case 'InnovationIcon':
      return (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        </svg>
      );
    case 'ResponsibilityIcon':
      return (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
        </svg>
      );
    case 'WinWinIcon':
      return (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
        </svg>
      );
    default:
      return null;
  }
};

export default function Culture() {
  return (
    <section id="culture" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">企业文化</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
        
        {/* 核心价值观 */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">{cultureData.coreValues.title}</h3>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            {cultureData.coreValues.description}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cultureData.coreValues.values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <IconComponent iconName={value.icon} />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">{value.name}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* 服务承诺 */}
        <div className="mb-20 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-600 py-6 px-8">
              <h3 className="text-2xl font-semibold text-white">{cultureData.servicePromise.title}</h3>
            </div>
            <div className="p-8">
              <p className="text-gray-600 mb-8 leading-relaxed">{cultureData.servicePromise.description}</p>
              
              <ul className="grid md:grid-cols-2 gap-4">
                {cultureData.servicePromise.promises.map((promise, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-700">{promise}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* 社会责任 */}
        <div>
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">{cultureData.socialResponsibility.title}</h3>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            {cultureData.socialResponsibility.description}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {cultureData.socialResponsibility.initiatives.map((initiative, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <h4 className="text-lg font-bold text-gray-800 mb-2">{initiative.title}</h4>
                <p className="text-gray-600">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 