'use client';

import React, { useState } from 'react';

export default function FAQ() {
  // 常见问题数据
  const faqData = [
    {
      question: "场地规划设计服务的周期通常是多久？",
      answer: "一般项目从初步沟通到最终方案交付需要2-4周的时间，具体取决于场地复杂度、需求调整次数等因素。紧急项目可协商加急处理。"
    },
    {
      question: "如何确保设计方案能通过审批？",
      answer: "我们严格按照最新的国家标准和地方规范进行设计，同时积累了丰富的审批经验。我们会全程提供审批资料支持和必要的沟通协调，确保方案顺利通过审批。"
    },
    {
      question: "对场地面积和形状有什么要求？",
      answer: "根据最新标准，C1驾校教练场地最小面积要求为10000平方米（各地可能有所不同）。对于形状不规则的场地，我们有丰富的优化经验，能够最大化空间利用率。"
    },
    {
      question: "已有场地需要改造升级，是否提供相关服务？",
      answer: "是的，我们提供现有场地的改造升级服务。我们会评估现有条件，在尽可能保留原有设施的基础上，进行优化调整，满足新标准要求。"
    },
    {
      question: "服务费用如何计算？",
      answer: "费用根据场地面积、复杂度、服务内容等因素综合评估。我们提供分阶段付款方案，确保您满意后再支付下一阶段费用。具体费用请联系我们获取定制报价。"
    },
    {
      question: "是否提供施工图和施工指导？",
      answer: "是的，我们提供详细的施工图纸，包括平面布局图、施工尺寸图、标线图、标识图等。同时，我们也提供施工技术指导，确保现场实施符合设计要求。"
    },
    {
      question: "如何开始合作流程？",
      answer: "您可以通过网站表单、电话或邮件联系我们，我们会安排专业顾问与您初步沟通，了解需求后提供初步方案和报价，双方确认后签订服务协议正式启动项目。"
    }
  ];

  // 折叠面板状态
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // 切换面板开关状态
  const togglePanel = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // 滚动到联系部分
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* 主标题 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">关于场地规划的常见问题</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            以下是客户在考虑场地规划设计服务时常见的一些问题。如果您有其他疑问，欢迎随时联系我们的专业团队。
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-8"></div>
        </div>
        
        {/* 折叠面板式问答 */}
        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => togglePanel(index)}
                className="w-full flex justify-between items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 focus:outline-none"
              >
                <span className="text-left font-medium text-gray-800">{item.question}</span>
                <svg 
                  className={`w-5 h-5 text-gray-600 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 rounded-b-lg ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="bg-white p-4 border-t border-gray-100">
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* 提交更多问题的入口 */}
        <div className="text-center mt-12">
          <p className="text-gray-700 mb-4">还有其他问题？我们很乐意为您解答</p>
          <button 
            onClick={scrollToContact}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300"
          >
            提交您的问题
          </button>
        </div>
        
        {/* 额外相关资源 */}
        <div className="mt-16 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">相关资源</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="#" className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
              <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              <span className="text-gray-700">驾校场地规划标准指南</span>
            </a>
            <a href="#" className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
              <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
              </svg>
              <span className="text-gray-700">场地规划视频讲解</span>
            </a>
            <a href="#" className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
              <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <span className="text-gray-700">最新政策法规解读</span>
            </a>
            <a href="#" className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
              <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
              </svg>
              <span className="text-gray-700">服务与收费说明</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 