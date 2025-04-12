'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初始化检查
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className={`text-xl font-bold ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
            驾校设计规划
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="relative group">
            <button className={`flex items-center transition-colors ${
              isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'
            }`}>
              服务介绍
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <Link href="/services/field-planning" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">
                场地设计规划
              </Link>
              <Link href="/services/documentation" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">
                备案资料制作
              </Link>
            </div>
          </div>
          <Link href="/cases" className={`transition-colors ${
            isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'
          }`}>
            案例展示
          </Link>
          <Link href="/policies" className={`transition-colors ${
            isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'
          }`}>
            政策法规
          </Link>
          <Link href="/about" className={`transition-colors ${
            isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'
          }`}>
            关于我们
          </Link>
        </nav>

        {/* Contact Button */}
        <Link 
          href="/contact" 
          className={`hidden md:block px-5 py-2 rounded-full transition-colors ${
            isScrolled 
              ? 'bg-blue-600 hover:bg-blue-700 text-white' 
              : 'bg-white/20 hover:bg-white/30 text-white border border-white/50'
          }`}
        >
          联系我们
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden ${isScrolled ? 'text-gray-800' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <Link href="/services" className="text-gray-800 py-2 border-b border-gray-100">
              服务介绍
            </Link>
            <Link href="/services/field-planning" className="text-gray-800 py-2 pl-4 border-b border-gray-100">
              场地设计规划
            </Link>
            <Link href="/services/documentation" className="text-gray-800 py-2 pl-4 border-b border-gray-100">
              备案资料制作
            </Link>
            <Link href="/cases" className="text-gray-800 py-2 border-b border-gray-100">
              案例展示
            </Link>
            <Link href="/policies" className="text-gray-800 py-2 border-b border-gray-100">
              政策法规
            </Link>
            <Link href="/about" className="text-gray-800 py-2 border-b border-gray-100">
              关于我们
            </Link>
            <Link href="/contact" className="bg-blue-600 text-white py-2 px-4 rounded text-center">
              联系我们
            </Link>
          </div>
        </div>
      )}
    </header>
  );
} 