'use client';

import React from 'react';
import Image from 'next/image';

interface KeyMetric {
  label: string;
  value: string;
  unit: string;
}

interface CaseOverviewProps {
  title: string;
  subtitle: string;
  category: string;
  completionDate: string;
  summary: string;
  coverImage: string;
  keyMetrics: KeyMetric[];
}

export default function CaseOverview({
  title,
  subtitle,
  category,
  completionDate,
  summary,
  coverImage,
  keyMetrics
}: CaseOverviewProps) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* 标题区域 */}
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
            {category}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-xl text-gray-600 mb-3">{subtitle}</p>
          <p className="text-gray-500">完成时间: {completionDate}</p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-8"></div>
        </div>
        
        {/* 案例概览 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12 items-center">
          <div>
            <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
              <Image 
                src={coverImage}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">项目概述</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {summary}
            </p>
            
            {/* 关键指标 */}
            <div className="grid grid-cols-2 gap-4">
              {keyMetrics.map((metric, index) => (
                <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                  <p className="text-gray-600 text-sm uppercase mb-1">{metric.label}</p>
                  <div className="flex items-end">
                    <span className="text-3xl font-bold text-blue-700">{metric.value}</span>
                    <span className="text-gray-700 ml-1">{metric.unit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 