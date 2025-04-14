'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  // 获取当前年份
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* 网站地图部分 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto text-center">
          <div>
            <h3 className="text-xl font-bold mb-4">关于我们</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">公司介绍</Link></li>
              <li><Link href="/about/team" className="text-gray-400 hover:text-white transition-colors">团队介绍</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">服务项目</h3>
            <ul className="space-y-3">
              <li><Link href="/services/field-planning" className="text-gray-400 hover:text-white transition-colors">场地规划设计</Link></li>
              <li><Link href="/services/record-material" className="text-gray-400 hover:text-white transition-colors">备案资料制作</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">案例展示</h3>
            <ul className="space-y-3">
              <li><Link href="/cases/field-planning" className="text-gray-400 hover:text-white transition-colors">场地规划案例</Link></li>
              <li><Link href="/cases/documentation" className="text-gray-400 hover:text-white transition-colors">备案资料案例</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">政策法规</h3>
            <ul className="space-y-3">
              <li><Link href="/policies" className="text-gray-400 hover:text-white transition-colors">政策法规</Link></li>
              <li><Link href="/policies?category=standard" className="text-gray-400 hover:text-white transition-colors">行业标准</Link></li>
            </ul>
          </div>
        </div>
        
        {/* 联系信息部分 */}
        <div className="text-center border-t border-gray-800 pt-8">
          <Link href="/" className="inline-block">
            <span className="text-2xl font-bold">驾校设计规划</span>
          </Link>
          <p className="text-gray-400 mt-3">专业的驾校场地规划与备案服务提供商</p>
        </div>
        
        {/* 版权信息部分 */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 mb-4">
            &copy; {currentYear} 驾校设计规划服务. 保留所有权利.
          </p>
          <div className="flex justify-center space-x-6">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">隐私政策</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">服务条款</Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 