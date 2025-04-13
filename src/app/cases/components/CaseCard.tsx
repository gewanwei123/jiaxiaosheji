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
  tags?: string[];
}

export default function CaseCard({ 
  id, 
  title, 
  category, 
  thumbnail, 
  summary, 
  completionDate,
  tags = [] 
}: CaseCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
      <div className="relative h-48 w-full">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        <Image 
          src={thumbnail} 
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-3 left-3 z-20">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-600 text-white rounded-full">
            {category}
          </span>
        </div>
        <div className="absolute bottom-3 right-3 z-20">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-black/70 text-white rounded-full">
            {completionDate}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
          <Link href={`/cases/case-detail?id=${id}`}>
            {title}
          </Link>
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
          {summary}
        </p>
        
        {tags && tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index} 
                className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-md"
              >
                #{tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-md">
                +{tags.length - 3}
              </span>
            )}
          </div>
        )}
        
        <Link 
          href={`/cases/case-detail?id=${id}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-auto group"
        >
          查看详情
          <svg className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
} 