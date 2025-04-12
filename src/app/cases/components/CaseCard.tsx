'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CaseCardProps {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  summary: string;
  completionDate: string;
}

export default function CaseCard({ id, title, category, thumbnail, summary, completionDate }: CaseCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image 
          src={thumbnail} 
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <div className="mb-3">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
            {category}
          </span>
          <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full ml-2">
            {completionDate}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {summary}
        </p>
        
        <Link 
          href={`/cases/case-detail?id=${id}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          查看详情
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
} 