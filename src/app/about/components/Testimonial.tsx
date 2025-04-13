'use client';

import React, { useState, useEffect } from 'react';

// 定义客户评价数据
const testimonialData = {
  reviews: [
    {
      content: "郑州市中原区驾维素信息服务工作室团队的专业度令我们印象深刻。他们不仅精通驾校场地规划的技术标准，还对行业政策有深入的了解。我们的教练场在他们的规划下既满足了监管要求，又最大化了空间利用率。",
      author: "张经理",
      position: "某大型驾校负责人",
      company: "某省会城市驾校",
      rating: 5
    },
    {
      content: "选择驾维素工作室是我们最正确的决定。他们提供的备案资料非常专业，一次性通过了审批，为我们节省了大量时间和精力。后续的技术支持也非常及时，有问题随时能得到解答。",
      author: "李总",
      position: "创始人",
      company: "某市区驾校",
      rating: 5
    },
    {
      content: "在驾校改扩建项目中，驾维素工作室为我们提供了全面的规划方案，不仅满足了新的场地标准要求，还考虑到了未来发展需求。他们的3D效果图帮助我们清晰地看到改造后的效果，非常专业。",
      author: "王主任",
      position: "运营总监",
      company: "某地级市驾校",
      rating: 4
    },
    {
      content: "作为一家新建驾校，我们对行业标准和申请流程不太了解。郑州市中原区驾维素信息服务工作室团队不仅提供了专业的场地规划，还全程指导我们完成了备案资料准备和提交，服务非常全面，值得推荐。",
      author: "赵经理",
      position: "投资人",
      company: "某县级市驾校",
      rating: 5
    },
    {
      content: "驾维素工作室对我们驾校的场地规划非常细致，充分考虑了教学需求和学员体验。他们的设计既符合规范要求，又很人性化，我们的学员对新场地非常满意，报名率也有明显提升。",
      author: "刘校长",
      position: "校长",
      company: "某综合性驾校",
      rating: 5
    }
  ]
};

// 星级评分组件
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <svg 
          key={i} 
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
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

export default function Testimonial() {
  const [activeSlide, setActiveSlide] = useState(0);
  
  // 自动轮播
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonialData.reviews.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">客户评价</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
        
        {/* 客户评价轮播 */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 md:p-12 rounded-lg shadow-md relative">
            <div className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4">
              <svg className="w-12 h-12 text-blue-300" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
              </svg>
            </div>
          
            <div className="min-h-[200px] mb-8 relative">
              {testimonialData.reviews.map((review, index) => (
                <div 
                  key={index}
                  className={`transition-opacity duration-500 w-full ${
                    index === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 hidden'
                  }`}
                >
                  <p className="text-gray-700 text-lg italic mb-6 leading-relaxed">"{review.content}"</p>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="font-semibold text-gray-800">{review.author}</p>
                      <p className="text-gray-600 text-sm">{review.position}，{review.company}</p>
                    </div>
                    <StarRating rating={review.rating} />
                  </div>
                </div>
              ))}
            </div>
            
            {/* 轮播指示器 */}
            <div className="flex justify-center space-x-2">
              {testimonialData.reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeSlide ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  aria-label={`查看第 ${index + 1} 条评价`}
                />
              ))}
            </div>
          </div>
          
          {/* 左右箭头 */}
          <button 
            onClick={() => setActiveSlide((prev) => (prev - 1 + testimonialData.reviews.length) % testimonialData.reviews.length)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-5 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none hidden md:block"
            aria-label="查看上一条评价"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button 
            onClick={() => setActiveSlide((prev) => (prev + 1) % testimonialData.reviews.length)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-5 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none hidden md:block"
            aria-label="查看下一条评价"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
} 