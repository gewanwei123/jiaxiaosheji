'use client';

import React from 'react';
import Header from '../../home/components/Header';
import Footer from '../../home/components/Footer';
import ServiceIntro from './components/ServiceIntro';
import ServiceProcess from './components/ServiceProcess';
import MaterialRequirements from './components/MaterialRequirements';
import ProfessionalCapability from './components/ProfessionalCapability';
import CaseShowcase from './components/CaseShowcase';
import ServiceValue from './components/ServiceValue';
import FAQ from './components/FAQ';
import ContactSection from './components/ContactSection';
import CustomerFeedback from './components/CustomerFeedback';

export default function RecordMaterialServicePage() {
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
        
        {/* 资料清单与要求展示 */}
        <div className="bg-white">
          <MaterialRequirements />
        </div>
        
        {/* 专业能力展示 */}
        <div className="bg-gray-50">
          <ProfessionalCapability />
        </div>
        
        {/* 案例展示区域 */}
        <div className="bg-white">
          <CaseShowcase />
        </div>
        
        {/* 客户反馈展示 */}
        <div className="bg-gray-50">
          <CustomerFeedback />
        </div>
        
        {/* 服务价值区域 */}
        <div className="bg-white">
          <ServiceValue />
        </div>
        
        {/* 常见问题解答 */}
        <div className="bg-gray-50">
          <FAQ />
        </div>
        
        {/* 联系咨询区域 */}
        <div id="contact-section">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
} 