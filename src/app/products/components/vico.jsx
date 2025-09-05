'use client';
import { useState } from 'react';
import Image from 'next/image';
import { vicoStoneData, demo } from '@/app/data/vicoStoneData';

export default function VicoStone() {   
    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = vicoStoneData ;
    const demoImages = demo;
    const handleViewDetails = (product) => {
        setSelectedProduct(product);
    };

    const closeDetails = () => {
        setSelectedProduct(null);
    };

    return (
        <div className="container mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold text-center mb-8 text-black-600">DÒNG ĐÁ THẠCH ANH VICOSTONE
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {products.map((product) => (
                    <div key={product.id} className="border-0 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group bg-gradient-to-br from-white to-gray-50">
                        <div 
                            className="relative h-64 sm:h-52 overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-[1.02]"
                            onClick={() => handleViewDetails(product)}
                        >
                            <Image 
                                src={product.image} 
                                alt={product.name} 
                                fill
                                priority
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                style={{objectFit: 'cover'}}
                                className="group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                                <div className="p-4 w-full">
                                    <p className="text-white text-sm block">
                                        {product.features[0]}
                                    </p>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 m-3 transform transition-transform duration-300 group-hover:translate-y-1 group-hover:translate-x-1">
                                <span className="text-blue-600 font-medium text-xs bg-white/90 px-3 py-1.5 rounded-full shadow-md backdrop-blur-sm">
                                    {product.code}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="mt-20">
                <div className="flex items-center justify-center mb-8">
                    <div className="h-0.5 bg-gray-200 flex-grow max-w-xs"></div>
                    <h2 className="text-3xl font-bold text-center px-6">Hình Ảnh Sản Phẩm Hoàn Thiện</h2>
                    <div className="h-0.5 bg-gray-200 flex-grow max-w-xs"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                {demoImages.map((item, index) => (
  <div key={`${item.id}-demo-${index}`} className="relative h-64 sm:h-80 shadow-xl rounded-xl overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl">
    <Image
      src={item.image}               
      alt={item.alt || `Demo ${index + 1}`}  
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      style={{ objectFit: 'cover' }}
      className="group-hover:scale-110 transition-transform duration-700 ease-in-out"
    />
  </div>
))}
                </div>
            </div>

            {selectedProduct && (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4 animate-fadeIn">
    <div className="bg-white rounded-2xl max-w-5xl w-full h-[90vh] md:h-auto p-0 relative overflow-hidden shadow-2xl border border-gray-100 animate-scaleIn">
      {/* Nút đóng */}
      <button 
        onClick={closeDetails}
        className="absolute top-3 right-3 text-white bg-black/40 hover:bg-black/60 p-2.5 rounded-full z-10 transition-all duration-300 hover:rotate-90 hover:scale-110"
        aria-label="Đóng"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="flex flex-col md:flex-row h-full md:h-auto">
        {/* Hình ảnh */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-gray-50 to-gray-100 relative aspect-video md:aspect-[4/5] overflow-hidden">
          <div className="relative w-full h-full">
            <Image 
              src={selectedProduct.image} 
              alt={selectedProduct.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              style={{objectFit: 'cover'}}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent md:hidden flex items-end">
              <div className="p-4 w-full">
                <h2 className="text-xl font-bold text-white">{selectedProduct.name}</h2>
                <div className="flex items-center gap-2 mt-1">
                  <span className="bg-white/80 text-blue-600 font-medium text-xs px-2 py-0.5 rounded">{selectedProduct.code}</span>
                  <span className="bg-black/30 text-white text-xs px-2 py-0.5 rounded">{selectedProduct.price_range}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nội dung mô tả */}
        <div className="w-full md:w-1/2 p-4 md:p-6 overflow-y-auto h-[55vh] md:h-auto">
          {/* Tên sản phẩm (desktop) */}
          <div className="hidden md:block">
            <h2 className="text-2xl font-bold mb-1">{selectedProduct.name}</h2>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-blue-600 font-medium text-sm bg-blue-50 px-2 py-1 rounded">{selectedProduct.code}</span>
              <span className="text-xs text-gray-500 border border-gray-200 rounded px-2 py-1">{selectedProduct.price_range}</span>
            </div>
          </div>

          {/* Mô tả và thông tin sản phẩm */}
          <div className="prose prose-sm max-w-none">
            <p className="text-gray-700 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              {selectedProduct.description}
            </p>

            <div className="mb-4 md:mb-6">
              <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 flex items-center gap-1 md:gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Đặc điểm nổi bật
              </h3>
              <ul className="list-none pl-0 space-y-1 md:space-y-2">
                {selectedProduct.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm md:text-base">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ứng dụng và kích thước */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-2 flex items-center gap-1 md:gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Ứng dụng
                </h3>
                <div className="flex flex-wrap gap-1 md:gap-2">
                  {selectedProduct.applications.map((app, index) => (
                    <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-2 flex items-center gap-1 md:gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                  </svg>
                  Kích thước
                </h3>
                <div className="text-sm">
                  <p className="mb-1">
                    <span className="font-medium text-gray-700">Độ dày:</span> {selectedProduct.dimensions.thickness.join(', ')}
                  </p>
                  <p>
                    <span className="font-medium text-gray-700">Kích thước tấm:</span> {selectedProduct.dimensions.size.join(', ')}
                  </p>
                </div>
              </div>
            </div>

            {/* Nút liên hệ */}
            <div className="mt-6 md:mt-8 flex justify-center">
              <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-3 md:px-7 md:py-3.5 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-3 text-sm md:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Liên hệ tư vấn
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

        </div>
    );
}
