'use client';
import React from 'react';
import Image from 'next/image';

const bestSellingProducts = [
    {
        name: 'Đá Nung Kết Ấn ĐộĐộ',
        description: 'Sản phẩm đá nung kết Ấn Độ cao cấp, phù hợp cho mọi công trình.',
        image: '/images/da an do.jpg',
    },
    {
        name: 'Đá Granite Đen',
        description: 'Đá granite đen sang trọng, độ bền cao, thích hợp cho mặt bàn bếp và cầu thang.',
        image: '/images/granite-den.jpg',
    },
    {
        name: 'Đá Granite Vàng',
        description: 'Đá granite vàng tự nhiên, tạo điểm nhấn cho không gian sống.',
        image: '/images/granite-vang.jpg',
    },
];

export default function Main() {
    return (
        <main className="container mx-auto px-4 py-8">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-xl p-6 mb-12 shadow-sm">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    Giới thiệu về TND Granite
                </h1>
                <div className="max-w-3xl">
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">Chúng tôi là ai?</h2>
                    <p className="text-gray-600 leading-relaxed">
                        TND Granite là công ty chuyên cung cấp các loại đá granite chất lượng cao cho các công trình xây dựng, 
                        nội thất và ngoại thất. Với nhiều năm kinh nghiệm trong ngành, chúng tôi cam kết mang đến cho khách hàng 
                        những sản phẩm tốt nhất cùng dịch vụ chuyên nghiệp.
                    </p>
                </div>
            </section>

            {/* Features Section */}
            <section className="mb-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Chất lượng cao cấp</h3>
                        <p className="text-gray-600">Đá granite của chúng tôi được chọn lọc từ những mỏ đá tốt nhất, đảm bảo độ bền và tính thẩm mỹ.</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Đội ngũ chuyên nghiệp</h3>
                        <p className="text-gray-600">Nhân viên của chúng tôi có kinh nghiệm và được đào tạo bài bản để tư vấn và phục vụ khách hàng tốt nhất.</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Giá cả hợp lý</h3>
                        <p className="text-gray-600">Chúng tôi cam kết cung cấp sản phẩm chất lượng với mức giá cạnh tranh nhất trên thị trường.</p>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-8 text-center">Các sản phẩm bán chạy</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {bestSellingProducts.map((product, idx) => (
                        <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-102">
                            <div className="relative h-48 w-full">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
                                <p className="text-gray-600">{product.description}</p>
                                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300">
                                    Xem chi tiết
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-blue-600 text-white rounded-lg p-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Bạn cần tư vấn về sản phẩm đá granite?</h2>
                <p className="mb-6 max-w-2xl mx-auto">Hãy liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí và nhận báo giá tốt nhất.</p>
                <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                    Liên hệ ngay
                </button>
            </section>
        </main>
    );
}
