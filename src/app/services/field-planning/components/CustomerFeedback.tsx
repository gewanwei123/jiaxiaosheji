'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function CustomerFeedback() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 客户反馈数据
  const feedbacks = [
    {
      name: "李总",
      position: "某大型驾校校长",
      avatar: "/images/avatars/client-1.jpg", // 需要添加实际的图片路径
      content: "与贵公司合作场地规划已有三年，每次都能提供专业的解决方案。特别是最近一次扩建项目，在有限的空间内优化出了远超预期的培训容量，非常满意！",
      rating: 5
    },
    {
      name: "张经理",
      position: "交通培训中心主管",
      avatar: "/images/avatars/client-2.jpg", // 需要添加实际的图片路径
      content: "从最初的规划设计到最终的实施，全程专业指导。方案不仅符合所有监管要求，还特别考虑了我们的经营特点，为我们节省了大量的运营成本。",
      rating: 5
    },
    {
      name: "王校长",
      position: "新建驾校投资人",
      avatar: "/images/avatars/client-3.jpg", // 需要添加实际的图片路径
      content: "作为新进入行业的投资者，我对驾校场地规划一无所知。感谢贵公司团队的耐心讲解和专业建议，帮助我们避开了许多常见的设计陷阱，成功通过了首次验收。",
      rating: 4
    },
    {
      name: "刘主任",
      position: "某政府交通部门负责人",
      avatar: "/images/avatars/client-4.jpg", // 需要添加实际的图片路径
      content: "在我们区域性驾校标准化改造项目中，贵公司展现了卓越的专业能力，提供的解决方案兼顾了安全性、效率和成本控制，为我区的驾培行业树立了新标准。",
      rating: 5
    }
  ];

  // 处理轮播切换
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? feedbacks.length - 1 : prevIndex - 1));
  };

  // 渲染星级评分
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center mt-2">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${
              index < rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* 主标题 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">客户的声音</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            我们为每一位客户提供的满意服务，是我们最大的骄傲
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-8"></div>
        </div>

        {/* 客户评价轮播 */}
        <div className="max-w-4xl mx-auto relative">
          {/* 轮播按钮 - 上一个 */}
          <button 
            onClick={prevSlide} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100 focus:outline-none"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          
          {/* 轮播内容 */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-blue-100">
                  {/* 如果有实际头像，可以替换下面的div为Image组件 */}
                  <div className="w-full h-full bg-blue-200 flex items-center justify-center text-blue-700 text-2xl font-bold">
                    {feedbacks[currentIndex].name.charAt(0)}
                  </div>
                </div>
              </div>
              <div className="md:w-3/4 md:pl-8">
                <div className="flex mb-3">
                  {renderStars(feedbacks[currentIndex].rating)}
                </div>
                <p className="text-gray-700 italic mb-6">&quot;{feedbacks[currentIndex].content}&quot;</p>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{feedbacks[currentIndex].name}</h4>
                  <p className="text-gray-600">{feedbacks[currentIndex].position}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* 轮播按钮 - 下一个 */}
          <button 
            onClick={nextSlide} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100 focus:outline-none"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
          
          {/* 指示点 */}
          <div className="flex justify-center mt-8">
            {feedbacks.map((_, index) => (
              <button 
                key={index} 
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
                aria-label={`转到评价 ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* 额外的信任指标 */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-8">受到信赖的行业合作伙伴</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="h-16 flex items-center justify-center text-xl font-bold text-gray-500">合作伙伴标志1</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="h-16 flex items-center justify-center text-xl font-bold text-gray-500">合作伙伴标志2</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="h-16 flex items-center justify-center text-xl font-bold text-gray-500">合作伙伴标志3</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="h-16 flex items-center justify-center text-xl font-bold text-gray-500">合作伙伴标志4</div>
            </div>
          </div>
          <p className="mt-8 text-gray-600">
            已为50+驾校提供专业场地规划服务，100%通过验收率
          </p>
        </div>
      </div>
    </section>
  );
} 