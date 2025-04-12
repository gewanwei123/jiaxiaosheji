'use client';

import React, { useState } from 'react';

// 定义FAQ项目类型
type FAQItem = {
  id: number;
  question: string;
  answer: string;
  category: string;
};

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  // 切换FAQ的展开/折叠状态
  const toggleFAQ = (id: number) => {
    if (openFAQ === id) {
      setOpenFAQ(null);
    } else {
      setOpenFAQ(id);
    }
  };
  
  // FAQ数据
  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "备案资料制作服务的周期通常是多久？",
      answer: "根据资料的复杂程度和客户提供基础材料的情况，一般需要7-15个工作日完成。如有加急需求，可协商提供加急服务。",
      category: "service"
    },
    {
      id: 2,
      question: "我们需要提前准备哪些基础资料？",
      answer: "您需要准备的基础资料包括：营业执照、法人身份证明、场地证明文件、教练员资格证等。签约后，我们会提供详细的资料清单和准备指南。",
      category: "preparation"
    },
    {
      id: 3,
      question: "如何确保备案资料能够通过审批？",
      answer: "我们严格按照最新的国家标准和地方规范制作资料，并有丰富的成功案例经验。我们提供审批通过承诺，如因资料问题未通过审批，可获得退款或免费修改服务。",
      category: "quality"
    },
    {
      id: 4,
      question: "不同地区的备案要求有差异，如何应对？",
      answer: "我们的团队持续跟踪各地区的政策变化，并与当地审批部门保持沟通。在制作资料前，我们会详细了解您所在地区的具体要求，确保资料符合当地标准。",
      category: "policy"
    },
    {
      id: 5,
      question: "备案资料制作的收费标准是怎样的？",
      answer: "我们的收费根据驾校规模、资料复杂度和服务内容综合评估。基础套餐起价为5000元，可根据实际需求提供定制化报价。我们提供分阶段付款方案，确保服务质量。",
      category: "price"
    },
    {
      id: 6,
      question: "备案资料制作后，如果政策变更需要更新怎么办？",
      answer: "我们提供一年内的免费政策跟踪和资料更新服务。如遇重大政策变更，我们会主动联系客户，提供资料更新建议和服务。",
      category: "update"
    },
    {
      id: 7,
      question: "如何开始合作流程？",
      answer: "您可以通过网站表单、电话或邮件联系我们，我们会安排专业顾问与您进行初步沟通，了解需求后提供详细的服务方案和报价，双方确认后签订服务协议正式启动项目。",
      category: "cooperation"
    }
  ];
  
  // 按类别分组FAQ
  const faqCategories = [
    { id: "service", label: "服务流程" },
    { id: "preparation", label: "资料准备" },
    { id: "quality", label: "质量保障" },
    { id: "policy", label: "政策适应" },
    { id: "price", label: "费用说明" },
    { id: "update", label: "更新维护" },
    { id: "cooperation", label: "合作方式" }
  ];
  
  // 按类别获取FAQ
  const getFAQsByCategory = (category: string) => {
    return faqItems.filter(item => item.category === category);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* 主标题 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">关于备案资料的常见问题</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            以下是客户在咨询备案资料制作服务时常见的一些问题。如果您有其他疑问，欢迎随时联系我们的专业顾问。
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-8"></div>
        </div>
        
        {/* 按类别分组的FAQ */}
        <div className="max-w-4xl mx-auto">
          {faqCategories.map(category => (
            <div key={category.id} className="mb-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-blue-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                {category.label}相关问题
              </h3>
              
              <div className="space-y-4">
                {getFAQsByCategory(category.id).map(item => (
                  <div 
                    key={item.id} 
                    className="bg-white rounded-lg shadow-sm overflow-hidden"
                  >
                    <button
                      className="w-full text-left px-6 py-4 flex items-center justify-between focus:outline-none"
                      onClick={() => toggleFAQ(item.id)}
                    >
                      <span className="font-medium text-gray-800">{item.question}</span>
                      <svg 
                        className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${openFAQ === item.id ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>
                    
                    {openFAQ === item.id && (
                      <div className="px-6 py-4 border-t border-gray-100">
                        <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* 提交更多问题 */}
        <div className="max-w-4xl mx-auto mt-12 bg-blue-50 rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">还有其他问题？</h3>
          <p className="text-gray-700 mb-6">
            如果您有任何其他问题，欢迎随时联系我们，我们的专业顾问将为您提供详细解答。
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#contact" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300"
            >
              立即咨询
            </a>
            
            <a 
              href="tel:13525520521" 
              className="inline-block bg-white hover:bg-gray-100 text-blue-600 font-medium py-2 px-6 rounded-lg border border-blue-200 transition-colors duration-300"
            >
              电话联系
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 