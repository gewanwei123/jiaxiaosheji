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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">关于我们</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white">公司介绍</Link></li>
              <li><Link href="/about/team" className="text-gray-400 hover:text-white">团队介绍</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">服务项目</h3>
            <ul className="space-y-2">
              <li><Link href="/services/field-planning" className="text-gray-400 hover:text-white">场地规划设计</Link></li>
              <li><Link href="/services/record-material" className="text-gray-400 hover:text-white">备案资料制作</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">案例展示</h3>
            <ul className="space-y-2">
              <li><Link href="/cases/field-planning" className="text-gray-400 hover:text-white">场地规划案例</Link></li>
              <li><Link href="/cases/documentation" className="text-gray-400 hover:text-white">备案资料案例</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">政策法规</h3>
            <ul className="space-y-2">
              <li><Link href="/policies" className="text-gray-400 hover:text-white">政策法规</Link></li>
              <li><Link href="/policies/standard" className="text-gray-400 hover:text-white">行业标准</Link></li>
            </ul>
          </div>
        </div>
        
        {/* 联系信息部分 */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-8">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">驾校设计规划</span>
            </Link>
            <p className="text-gray-400 mt-2">专业的驾校场地规划与备案服务提供商</p>
          </div>
        </div>
        
        {/* 版权信息部分 */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} 驾校设计规划服务. 保留所有权利.
          </p>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <Link href="/privacy" className="text-gray-400 hover:text-white">隐私政策</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white">服务条款</Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-white">网站地图</Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 