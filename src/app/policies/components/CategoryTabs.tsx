'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

const categories = [
  { id: 'all', name: '全部', param: '' },
  { id: 'policy', name: '政策文件', param: 'policy' },
  { id: 'standard', name: '行业标准', param: 'standard' },
];

export default function CategoryTabs() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category') || 'all';
  
  return (
    <div className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto py-4 scrollbar-hide">
          <nav className="flex space-x-4">
            {categories.map(category => {
              const isActive = category.id === 'all' 
                ? !searchParams.has('category')
                : currentCategory === category.param;
              
              const href = category.id === 'all' 
                ? '/policies' 
                : `/policies?category=${category.param}`;
              
              return (
                <Link
                  key={category.id}
                  href={href}
                  className={`px-4 py-2 text-sm font-medium rounded-md whitespace-nowrap transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
} 