'use client';

import React, { useState } from 'react';

// 定义资料项目的类型
type MaterialItem = {
  name: string;
  required: boolean;
  description: string;
};

// 定义资料类别的类型
type MaterialCategory = {
  id: 'basic' | 'facility' | 'staff' | 'system';
  label: string;
};

// 定义资料项目集合的类型
type MaterialItemsCollection = {
  [key in 'basic' | 'facility' | 'staff' | 'system']: MaterialItem[];
};

export default function MaterialRequirements() {
  const [activeTab, setActiveTab] = useState<'basic' | 'facility' | 'staff' | 'system'>('basic');
  
  // 定义资料类别
  const materialCategories: MaterialCategory[] = [
    { id: 'basic', label: '基础证明文件' },
    { id: 'facility', label: '场地设施文件' },
    { id: 'staff', label: '人员资质文件' },
    { id: 'system', label: '管理系统文件' }
  ];
  
  // 定义各类资料的详细项目
  const materialItems: MaterialItemsCollection = {
    'basic': [
      { name: '驾校法人身份证明', required: true, description: '法人身份证、营业执照等证明文件' },
      { name: '行业资质证明', required: true, description: '相关行业资质、工商管理手续等证明文件' },
      { name: '税务登记证明', required: true, description: '税务登记证原件或复印件' },
      { name: '组织机构代码证', required: true, description: '组织机构代码证原件或复印件' },
      { name: '申请书及承诺书', required: true, description: '按标准格式填写的申请文件和承诺书' }
    ],
    'facility': [
      { name: '场地所有权/使用权证明', required: true, description: '场地不动产权证书、租赁合同等' },
      { name: '教练场地设计图', required: true, description: '符合标准的教练场地布局设计图' },
      { name: '教室及办公设施证明', required: true, description: '教室、办公场所的证明文件与照片' },
      { name: '教学设备清单', required: true, description: '教学设备的型号、数量等详细清单' },
      { name: '多媒体教学设备证明', required: false, description: '多媒体教学设备的购买发票及照片' }
    ],
    'staff': [
      { name: '教练员资格证', required: true, description: '教练员的职业资格证及相关证明' },
      { name: '教练员社保证明', required: true, description: '教练员的社会保障缴纳证明' },
      { name: '管理人员任职文件', required: true, description: '各级管理人员的任职文件和证明' },
      { name: '安全管理人员证明', required: true, description: '安全管理人员的资格证书及任职文件' },
      { name: '师资力量证明材料', required: false, description: '师资团队的综合实力证明材料' }
    ],
    'system': [
      { name: '培训管理制度', required: true, description: '详细的培训管理规章制度文件' },
      { name: '安全管理制度', required: true, description: '安全生产管理制度和应急预案' },
      { name: '教学质量保障体系', required: true, description: '教学质量保障的制度和措施' },
      { name: '学员管理制度', required: true, description: '学员招生、培训、考核等管理制度' },
      { name: '档案管理制度', required: true, description: '学员档案和培训档案管理制度' }
    ]
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* 主标题 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">驾校备案资料清单与要求</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            全面了解驾校备案所需的各类资料及其要求，我们提供专业指导和制作服务
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-8"></div>
        </div>
        
        {/* 资料分类标签 */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {materialCategories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                activeTab === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* 资料清单内容 */}
        <div className="bg-gray-50 rounded-lg p-6 mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            {materialCategories.find(cat => cat.id === activeTab)?.label}资料清单
          </h3>
          
          <div className="grid gap-4">
            {materialItems[activeTab]?.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-5 border border-gray-200 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start">
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                    item.required ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
                  }`}>
                    {item.required ? '!' : '?'}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-1 flex items-center">
                      {item.name}
                      {item.required && <span className="ml-2 text-sm text-red-500">(必需)</span>}
                      {!item.required && <span className="ml-2 text-sm text-blue-500">(可选)</span>}
                    </h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* 特殊要求说明 */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-12">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <svg className="w-6 h-6 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            特殊要求说明
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3 flex-shrink-0">1</span>
              <p className="text-gray-700">各地方对备案资料的具体要求可能存在差异，需根据当地管理部门的规定进行准备。</p>
            </div>
            
            <div className="flex items-start">
              <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3 flex-shrink-0">2</span>
              <p className="text-gray-700">所有证明文件必须真实有效，复印件需加盖公章，并提供原件进行核验。</p>
            </div>
            
            <div className="flex items-start">
              <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3 flex-shrink-0">3</span>
              <p className="text-gray-700">部分资料需要按照特定格式和模板进行编制，我们可提供专业的编制服务。</p>
            </div>
            
            <div className="flex items-start">
              <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3 flex-shrink-0">4</span>
              <p className="text-gray-700">资料提交前需进行系统性整理和检查，确保内容完整、准确且符合要求。</p>
            </div>
          </div>
        </div>
        
        {/* 服务承诺 */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">我们的服务承诺</h3>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            我们提供专业的备案资料制作服务，确保所有资料符合最新标准和要求，大幅提高审批通过率。
            不仅如此，我们还提供资料整理、装订和提交指导，让您的备案流程更加顺畅高效。
          </p>
          
          <a href="#contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
            获取完整资料清单
          </a>
        </div>
      </div>
    </section>
  );
} 