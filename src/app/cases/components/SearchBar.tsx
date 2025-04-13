'use client';

import { useState, useRef, useEffect } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import { debounce } from 'lodash';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchBar = ({ onSearch, placeholder = '搜索案例名称、关键词...', className = '' }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchBarRef = useRef<HTMLDivElement>(null);

  // 使用防抖优化搜索性能
  const debouncedSearch = useRef(
    debounce((searchQuery: string) => {
      onSearch(searchQuery);
    }, 300)
  ).current;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  const handleClearSearch = () => {
    setQuery('');
    debouncedSearch('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  // 点击外部区域时关闭搜索框的聚焦状态
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // 清理防抖函数
  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return (
    <div
      ref={searchBarRef}
      className={`relative flex items-center transition-all duration-300 ${
        isFocused ? 'bg-white shadow-md' : 'bg-gray-100'
      } rounded-full px-4 py-2 ${className}`}
    >
      <FiSearch className="text-gray-500 mr-2" />
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        className="flex-grow bg-transparent outline-none text-sm"
      />
      {query && (
        <button
          onClick={handleClearSearch}
          className="flex items-center justify-center p-1 rounded-full hover:bg-gray-200 transition-colors"
        >
          <FiX className="text-gray-500" />
        </button>
      )}
    </div>
  );
};

export default SearchBar; 