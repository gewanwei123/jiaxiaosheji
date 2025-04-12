'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// 定义反馈项类型
type Feedback = {
  id: number;
  clientName: string;
  position: string;
  avatar: string;
  content: string;
  rating: number;
};

export default function CustomerFeedback() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  
  // 客户反馈数据
  const feedbacks: Feedback[] = [
    {
      id: 1,
      clientName: "李校长",
      position: "某大型连锁驾校负责人",
      avatar: "/images/feedback/avatar1.jpg",
      content: "作为一家连锁驾校，我们在多个城市有分校，备案资料的准备工作非常复杂。找到这家专业的备案资料制作服务后，我们省去了大量的时间和精力，各分校区的备案工作都顺利完成，非常感谢！",
      rating: 5
    },
    {
      id: 2,
      clientName: "王经理",
      position: "新建驾校创始人",
      avatar: "/images/feedback/avatar2.jpg",
      content: "第一次创建驾校，对备案流程和资料要求完全不了解，多亏了专业团队的帮助，不仅准备了全套合格的备案资料，还给了我们很多实用的建议。一次性通过审批，比预期提前了一个月开业！",
      rating: 5
    },
    {
      id: 3,
      clientName: "张总",
      position: "某驾校运营总监",
      avatar: "/images/feedback/avatar3.jpg",
      content: "我们遇到了政策变更，需要更新全部备案资料，时间紧任务重。专业团队响应迅速，在短时间内完成了所有资料的更新和优化，让我们顺利通过了新的审核标准。服务态度好，专业水平高！",
      rating: 4
    },
    {
      id: 4,
      clientName: "赵校长",
      position: "山区驾校负责人",
      avatar: "/images/feedback/avatar4.jpg",
      content: "我们驾校位于山区，场地条件特殊，备案资料准备面临很多困难。专业团队针对我们的特殊情况，量身定制了解决方案，并帮助我们成功获得了备案资格。真的很专业，强烈推荐！",
      rating: 5
    }
  ];
  
  // 自动轮播
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay, feedbacks.length]);
  
  // 暂停自动轮播
  const pauseAutoPlay = () => {
    setIsAutoPlay(false);
  };
  
  // 恢复自动轮播
  const resumeAutoPlay = () => {
    setIsAutoPlay(true);
  };
  
  // 切换到下一个反馈
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
    pauseAutoPlay();
  };
  
  // 切换到上一个反馈
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + feedbacks.length) % feedbacks.length);
    pauseAutoPlay();
  };
  
  // 直接跳转到指定反馈
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    pauseAutoPlay();
  };
  
  // 渲染星级评分
  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <svg 
            key={index} 
            className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
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
          <h2 className="text-3xl font-bold text-gray-800 mb-4">客户真实评价</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            听听我们的客户怎么说 — 这些都是接受过我们服务的驾校经营者的真实反馈
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-8"></div>
        </div>
        
        {/* 反馈轮播 */}
        <div 
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden" 
          onMouseEnter={pauseAutoPlay}
          onMouseLeave={resumeAutoPlay}
        >
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center">
              {/* 客户头像 */}
              <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-blue-100 rounded-full overflow-hidden relative">
                  {/* 使用占位图，实际项目中替换为真实头像 */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  {/* 如果有实际图片则使用：
                  <Image 
                    src={feedbacks[currentIndex].avatar}
                    alt={feedbacks[currentIndex].clientName}
                    layout="fill"
                    objectFit="cover"
                  /> */}
                </div>
                
                <div className="text-center mt-4">
                  <h3 className="font-semibold text-gray-800">
                    {feedbacks[currentIndex].clientName}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feedbacks[currentIndex].position}
                  </p>
                  <div className="mt-2 flex justify-center">
                    {renderStars(feedbacks[currentIndex].rating)}
                  </div>
                </div>
              </div>
              
              {/* 反馈内容 */}
              <div className="flex-grow">
                <div className="relative">
                  <svg className="absolute top-0 left-0 w-8 h-8 text-blue-200 transform -translate-x-6 -translate-y-6" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
                  </svg>
                  
                  <p className="text-gray-700 text-lg italic leading-relaxed">
                    {feedbacks[currentIndex].content}
                  </p>
                </div>
                
                {/* 导航按钮 */}
                <div className="flex justify-between items-center mt-8">
                  <button 
                    onClick={prevSlide}
                    className="w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-200 flex items-center justify-center transition-colors"
                  >
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                  </button>
                  
                  <div className="flex space-x-2">
                    {feedbacks.map((_, index) => (
                      <button 
                        key={index} 
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentIndex ? 'bg-blue-600' : 'bg-blue-200 hover:bg-blue-300'
                        }`}
                        aria-label={`转到反馈 ${index + 1}`}
                      ></button>
                    ))}
                  </div>
                  
                  <button 
                    onClick={nextSlide}
                    className="w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-200 flex items-center justify-center transition-colors"
                  >
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 信任指标 */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-blue-600 font-bold text-3xl mb-2">97%</div>
            <p className="text-gray-700">客户满意度</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-blue-600 font-bold text-3xl mb-2">100+</div>
            <p className="text-gray-700">成功服务客户</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-blue-600 font-bold text-3xl mb-2">95%</div>
            <p className="text-gray-700">一次审批通过率</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-blue-600 font-bold text-3xl mb-2">7天</div>
            <p className="text-gray-700">平均完成时间</p>
          </div>
        </div>
        
        {/* 服务引导 */}
        <div className="text-center mt-12">
          <a href="#contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
            成为下一个满意客户
          </a>
        </div>
      </div>
    </section>
  );
} 