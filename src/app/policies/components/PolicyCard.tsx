'use client';

import React from 'react';
import Link from 'next/link';

interface PolicyCardProps {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  category: string;
  summary: string;
  isHighlighted?: boolean;
}

export default function PolicyCard({
  id,
  title,
  issuer,
  issueDate,
  category,
  summary,
  isHighlighted = false
}: PolicyCardProps) {
  return (
    <div className={`
      bg-white rounded-lg shadow-md overflow-hidden border-l-4 
      ${isHighlighted ? 'border-l-blue-600' : 'border-l-gray-300'}
      hover:shadow-lg transition-shadow duration-300
    `}>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className={`
              inline-block px-2 py-1 text-xs font-semibold rounded-full mb-2
              ${isHighlighted ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-700'}
            `}>
              {category}
            </span>
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          </div>
          {isHighlighted && (
            <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
              重要
            </span>
          )}
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-3">{summary}</p>
        
        <div className="flex justify-between items-center text-sm text-gray-500">
          <div>
            <span>发布机构: {issuer}</span>
            <span className="mx-2">|</span>
            <span>发布日期: {issueDate}</span>
          </div>
          <Link 
            href={`/policies/${id}`}
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
          >
            查看详情
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 