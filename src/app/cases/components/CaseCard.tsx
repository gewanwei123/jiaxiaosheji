'use client';

import React from 'react';
import Image from 'next/image';

interface CaseCardProps {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  summary: string;
  completionDate: string;
}

export default function CaseCard({ 
  id, 
  title, 
  category, 
  thumbnail, 
  summary, 
  completionDate
}: CaseCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
      <div className="relative h-48 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        <Image 
          src={thumbnail} 
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-500 hover:scale-105"
          priority={false}
          loading="lazy"
        />
        <div className="absolute top-3 left-3 z-20">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-600 text-white rounded-full shadow-sm">
            {category}
          </span>
        </div>
        <div className="absolute bottom-3 right-3 z-20">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-black/70 text-white rounded-full shadow-sm">
            {completionDate}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 flex-grow">
          {summary}
        </p>
      </div>
    </div>
  );
} 