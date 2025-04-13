'use client';

import { useState, useEffect, useMemo } from 'react';
import { debounce } from 'lodash';

// 案例数据类型
export interface CaseItem {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  summary: string;
  completionDate: string;
  tags?: string[];
}

// 排序选项类型
export interface SortOption {
  value: string;
  label: string;
}

// 钩子参数类型
interface UseCaseFilterParams {
  cases: CaseItem[];
  sortOptions: SortOption[];
}

// 钩子返回类型
interface UseCaseFilterReturn {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeTags: string[];
  toggleTag: (tag: string) => void;
  sortOption: string;
  setSortOption: (option: string) => void;
  displayCount: number;
  loadMore: () => void;
  resetFilters: () => void;
  filteredCases: CaseItem[];
  displayedCases: CaseItem[];
  hasMore: boolean;
}

export default function useCaseFilter({ 
  cases, 
  sortOptions 
}: UseCaseFilterParams): UseCaseFilterReturn {
  // 状态管理
  const [activeCategory, setActiveCategory] = useState("全部");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState(sortOptions[0]?.value || "date-desc");
  const [displayCount, setDisplayCount] = useState(6); // 初始显示6个案例
  
  // 防抖处理搜索输入
  const debouncedSetSearchQuery = useMemo(
    () => debounce((value: string) => setSearchQuery(value), 300),
    []
  );
  
  // 切换标签
  const toggleTag = (tag: string) => {
    setActiveTags(prev => 
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };
  
  // 重置所有筛选条件
  const resetFilters = () => {
    setActiveCategory("全部");
    setSearchQuery("");
    setActiveTags([]);
    setSortOption(sortOptions[0]?.value || "date-desc");
    setDisplayCount(6);
  };
  
  // 加载更多案例
  const loadMore = () => {
    setDisplayCount(prev => prev + 3);
  };
  
  // 计算筛选后的案例列表
  const filteredCases = useMemo(() => {
    let filtered = [...cases];
    
    // 按分类筛选
    if (activeCategory !== "全部") {
      filtered = filtered.filter(c => c.category === activeCategory);
    }
    
    // 按标签筛选
    if (activeTags.length > 0) {
      filtered = filtered.filter(c => 
        c.tags?.some(tag => activeTags.includes(tag))
      );
    }
    
    // 按搜索关键词筛选
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(c => 
        c.title.toLowerCase().includes(query) ||
        c.summary.toLowerCase().includes(query) ||
        c.category.toLowerCase().includes(query) ||
        c.tags?.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    // 排序
    return filtered.sort((a, b) => {
      switch (sortOption) {
        case "date-desc":
          return new Date(b.completionDate).getTime() - new Date(a.completionDate).getTime();
        case "date-asc":
          return new Date(a.completionDate).getTime() - new Date(b.completionDate).getTime();
        case "name-asc":
          return a.title.localeCompare(b.title);
        case "name-desc":
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });
  }, [cases, activeCategory, activeTags, searchQuery, sortOption]);
  
  // 显示的案例（带分页）
  const displayedCases = useMemo(() => {
    return filteredCases.slice(0, displayCount);
  }, [filteredCases, displayCount]);
  
  // 判断是否还有更多可加载
  const hasMore = useMemo(() => {
    return displayedCases.length < filteredCases.length;
  }, [displayedCases.length, filteredCases.length]);
  
  // 重置搜索条件时清除现有搜索
  useEffect(() => {
    return () => {
      debouncedSetSearchQuery.cancel();
    };
  }, [debouncedSetSearchQuery]);
  
  return {
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery: debouncedSetSearchQuery,
    activeTags,
    toggleTag,
    sortOption,
    setSortOption,
    displayCount,
    loadMore,
    resetFilters,
    filteredCases,
    displayedCases,
    hasMore
  };
} 