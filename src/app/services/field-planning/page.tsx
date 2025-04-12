'use client';

import React from 'react';
import Header from '../../home/components/Header';
import Footer from '../../home/components/Footer';
import ServiceIntro from './components/ServiceIntro';
import ServiceProcess from './components/ServiceProcess';
import TechnicalCapability from './components/TechnicalCapability';
import CaseShowcase from './components/CaseShowcase';
import ServiceValue from './components/ServiceValue';
import FAQ from './components/FAQ';
import ContactSection from './components/ContactSection';
import CustomerFeedback from './components/CustomerFeedback';

export default function FieldPlanningServicePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* 服务介绍区域 */}
        <ServiceIntro />
        
        {/* 服务流程展示 */}
        <div className="bg-gray-50">
          <ServiceProcess />
        </div>
        
        {/* 技术能力展示 */}
        <div className="bg-white">
          <TechnicalCapability />
        </div>
        
        {/* 案例展示区域 */}
        <div className="bg-gray-50">
          <CaseShowcase />
        </div>
        
        {/* 客户反馈展示 */}
        <div className="bg-white">
          <CustomerFeedback />
        </div>
        
        {/* 服务价值区域 */}
        <div className="bg-gray-50">
          <ServiceValue />
        </div>
        
        {/* 常见问题解答 */}
        <div className="bg-white">
          <FAQ />
        </div>
        
        {/* 联系咨询区域 */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
} 