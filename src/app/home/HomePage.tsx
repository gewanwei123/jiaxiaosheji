'use client';

import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServiceOverview from './components/ServiceOverview';
import FeaturedCases from './components/FeaturedCases';
import PolicySummary from './components/PolicySummary';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* 英雄区域 - 背景为蓝色渐变 */}
        <HeroSection />
        
        {/* 服务概览 - 背景为灰色 */}
        <ServiceOverview />
        
        {/* 政策法规 - 背景改为白色 */}
        <div className="bg-white">
          <PolicySummary />
        </div>
        
        {/* 精选案例 - 保持背景为白色 */}
        <div className="bg-gray-50">
          <FeaturedCases />
        </div>
        
        {/* 联系我们 - 背景为蓝色 */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
} 