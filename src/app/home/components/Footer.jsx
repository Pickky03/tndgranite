'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">TND Granite</h3>
            <div className="flex items-center mb-4">
              <Image src="/images/logo.jpg" alt="Logo" width={80} height={40} className="rounded" />
            </div>
            <p className="text-gray-300 mb-4">
              Chuyên cung cấp đá granite cao cấp cho các công trình xây dựng, nội thất và ngoại thất.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Trang Chủ
                </Link>
              </li>
              <li>
                <Link href="/gioi-thieu" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href="/san-pham" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link href="/lien-he" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Thông tin liên hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="text-gray-300">77 Võ Chí Công, Hòa Xuân, Cẩm Lệ, Đà Nẵng</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span className="text-gray-300">0123 456 789</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span className="text-gray-300">info@tndgranite.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Theo dõi chúng tôi</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/thicongdatunhien?locale=vi_VN" className="bg-blue-600 hover:bg-blue-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12.07C22 6.26 17.19 1.45 11.38 1.45S.76 6.26.76 12.07c0 5.22 3.85 9.56 8.88 10.35v-7.32H6.9v-3.03h2.74V9.41c0-2.7 1.6-4.19 4.07-4.19 1.18 0 2.42.21 2.42.21v2.66h-1.36c-1.34 0-1.76.83-1.76 1.69v2.02h3l-.48 3.03h-2.52v7.32c5.03-.8 8.88-5.13 8.88-10.35z"></path>
                </svg>
              </a>
              <a href="#" className="bg-blue-400 hover:bg-blue-500 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.64 4.94c-.87.39-1.8.65-2.77.77 1-.6 1.76-1.54 2.12-2.66-.94.55-1.97.95-3.07 1.16-.88-.94-2.14-1.53-3.53-1.53-2.67 0-4.85 2.17-4.85 4.85 0 .38.04.75.12 1.1C7.15 8.5 3.8 6.59 1.55 3.77c-.42.72-.66 1.55-.66 2.44 0 1.68.85 3.17 2.15 4.04-.8-.03-1.55-.24-2.2-.6v.06c0 2.35 1.67 4.32 3.9 4.76-.41.11-.84.17-1.28.17-.31 0-.62-.03-.92-.08.62 1.93 2.42 3.33 4.55 3.37-1.67 1.31-3.77 2.1-6.05 2.1-.39 0-.78-.02-1.17-.07 2.16 1.38 4.72 2.19 7.47 2.19 8.96 0 13.87-7.42 13.87-13.87 0-.21 0-.42-.01-.63.95-.69 1.78-1.55 2.43-2.53z"></path>
                </svg>
              </a>
              <a href="#" className="bg-pink-600 hover:bg-pink-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.247 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.987.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.054-.059 1.37-.059 4.04 0 2.672.01 2.988.059 4.042.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058 2.67 0 2.987-.01 4.04-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.352.3-.882.344-1.857.048-1.054.058-1.37.058-4.041 0-2.67-.01-2.987-.058-4.04-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.054-.048-1.37-.058-4.041-.058zm0 3.063a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.468a3.333 3.333 0 100-6.666 3.333 3.333 0 000 6.666zm6.538-8.469a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"></path>
                </svg>
              </a>
              <a href="#" className="bg-red-600 hover:bg-red-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} TND Granite. Tất cả các quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
}
