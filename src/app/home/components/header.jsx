'use client'

import Link from 'next/link'
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white text-black shadow-md sticky top-0 z-50">
      <div className=" mx-auto ">
        <div className="flex items-center justify-start gap-4">
          <Link href="/" className="flex items-center">
            <Image src="/images/logo.jpg" alt="Logo" width={80} height={40} className="object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="font-medium hover:text-blue-600 transition duration-300 border-b-2 border-transparent hover:border-blue-600 py-1">
              Trang Chủ
            </Link>
            <Link href="/gioi-thieu" className="font-medium hover:text-blue-600 transition duration-300 border-b-2 border-transparent hover:border-blue-600 py-1">
              Giới thiệu
            </Link>
            <Link href="/products" className="font-medium hover:text-blue-600 transition duration-300 border-b-2 border-transparent hover:border-blue-600 py-1">
              Sản phẩm
            </Link>
            <Link href="/lien-he" className="font-medium hover:text-blue-600 transition duration-300 border-b-2 border-transparent hover:border-blue-600 py-1">
              Liên hệ
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-3 border-t mt-3 space-y-3">
            <Link 
              href="/" 
              className="block py-2 px-2 hover:bg-gray-100 rounded transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Trang Chủ
            </Link>
            <Link 
              href="/gioi-thieu" 
              className="block py-2 px-2 hover:bg-gray-100 rounded transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Giới thiệu
            </Link>
            <Link 
              href="/products" 
              className="block py-2 px-2 hover:bg-gray-100 rounded transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Sản phẩm
            </Link>
            <Link 
              href="/lien-he" 
              className="block py-2 px-2 hover:bg-gray-100 rounded transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Liên hệ
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
