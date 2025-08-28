'use client';
import React from 'react';
import Image from 'next/image';

const bestSellingProducts = [
    {
        name: 'Đá Nung Kết Ấn Độ',
        description: 'Sản phẩm đá nung kết Ấn Độ cao cấp, phù hợp cho mọi công trình.',
        image: '/images/da an do.jpg',
        category: 'Đá Ấn Độ'
    },
    {
        name: 'Đá Granite Cao Cấp',
        description: 'Đá granite sang trọng, độ bền cao, thích hợp cho mặt bàn bếp và cầu thang.',
        image: '/images/granite/g1.png',
        category: 'Đá Granite'
    },
    {
        name: 'Đá Marble Tự Nhiên',
        description: 'Đá marble tự nhiên, tạo điểm nhấn sang trọng cho không gian sống.',
        image: '/images/marble/m1.jpg',
        category: 'Đá Marble'
    },
    {
        name: 'Đá Vicostone Cao Cấp',
        description: 'Đá vicostone cao cấp, đa dạng màu sắc, phù hợp với nhiều phong cách thiết kế.',
        image: '/images/vicostone/v1.png',
        category: 'Đá Vicostone'
    },
];

export default function Main() {
    return (
        <main className="container mx-auto px-4 py-8">
            {/* Hero Section */}
            <section className="relative bg-blue-700 rounded-xl overflow-hidden mb-12 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 opacity-90"></div>
                <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            Chất Lượng Tạo Nên <span className="text-yellow-300">Đẳng Cấp</span>
                        </h1>
                        <p className="text-blue-100 text-lg md:text-xl mb-8 leading-relaxed">
                            TND Granite - Nhà cung cấp đá granite, marble và các loại đá tự nhiên cao cấp hàng đầu tại Việt Nam.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="/products" className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-md hover:shadow-lg flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                                </svg>
                                Xem sản phẩm
                            </a>
                            <a href="/lien-he" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                                Liên hệ ngay
                            </a>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-3">
                                <div className="rounded-lg overflow-hidden shadow-lg transform translate-y-4">
                                    <Image src="/images/marble/m1.jpg" alt="Đá marble" width={300} height={200} className="object-cover w-full h-40" />
                                </div>
                                <div className="rounded-lg overflow-hidden shadow-lg">
                                    <Image src="/images/granite/g2.png" alt="Đá granite" width={300} height={200} className="object-cover w-full h-32" />
                                </div>
                            </div>
                            <div className="space-y-3 pt-6">
                                <div className="rounded-lg overflow-hidden shadow-lg">
                                    <Image src="/images/vicostone/v3.png" alt="Đá vicostone" width={300} height={200} className="object-cover w-full h-32" />
                                </div>
                                <div className="rounded-lg overflow-hidden shadow-lg">
                                    <Image src="/images/Indian/a1.png" alt="Đá Ấn Độ" width={300} height={200} className="object-cover w-full h-40" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Giới thiệu Section */}
            <section className="bg-white rounded-xl p-8 mb-12 shadow-md">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
                    Giới thiệu về <span className="text-blue-700">TND Granite</span>
                </h2>
                <div className="max-w-4xl mx-auto">
                    <p className="text-gray-600 leading-relaxed text-lg mb-6">
                        TND Granite là công ty chuyên cung cấp các loại đá granite, marble, và đá nhân tạo chất lượng cao cho các công trình xây dựng, 
                        nội thất và ngoại thất. Với nhiều năm kinh nghiệm trong ngành, chúng tôi cam kết mang đến cho khách hàng 
                        những sản phẩm tốt nhất cùng dịch vụ chuyên nghiệp.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        Chúng tôi tự hào là đối tác tin cậy của nhiều dự án lớn nhỏ trên khắp cả nước, cung cấp đa dạng các loại đá với mẫu mã phong phú,
                        đáp ứng mọi nhu cầu và phong cách thiết kế của khách hàng.
                    </p>
                </div>
            </section>

            {/* Features Section */}
            <section className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
                    Tại sao chọn <span className="text-blue-700">TND Granite</span>?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-blue-600">
                        <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                            <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-center">Chất lượng cao cấp</h3>
                        <p className="text-gray-600 text-center">Đá của chúng tôi được chọn lọc từ những mỏ đá tốt nhất, đảm bảo độ bền và tính thẩm mỹ vượt trội.</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-blue-600">
                        <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                            <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-center">Đội ngũ chuyên nghiệp</h3>
                        <p className="text-gray-600 text-center">Nhân viên của chúng tôi có kinh nghiệm và được đào tạo bài bản để tư vấn và phục vụ khách hàng tốt nhất.</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-blue-600">
                        <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                            <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-center">Giá cả hợp lý</h3>
                        <p className="text-gray-600 text-center">Chúng tôi cam kết cung cấp sản phẩm chất lượng với mức giá cạnh tranh nhất trên thị trường.</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-blue-600">
                        <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                            <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-center">Giao hàng đúng hẹn</h3>
                        <p className="text-gray-600 text-center">Chúng tôi luôn đảm bảo tiến độ giao hàng đúng như cam kết, giúp dự án của bạn hoàn thành đúng thời hạn.</p>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                    Sản phẩm <span className="text-blue-700">nổi bật</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {bestSellingProducts.map((product, idx) => (
                        <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                            <div className="relative h-56 w-full overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={400}
                                    height={300}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold py-1 px-2 rounded-full z-10">
                                    {product.category}
                                </div>
                            </div>
                            <div className="p-5">
                                <h3 className="text-lg font-bold mb-2 text-gray-800">{product.name}</h3>
                                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                                <a href="/products" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300">
                                    <span>Xem chi tiết</span>
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-10 text-center">
                    <a href="/products" className="inline-flex items-center justify-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg">
                        <span>Xem tất cả sản phẩm</span>
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </a>
                </div>
            </section>

            {/* Call to Action */}
            <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-xl p-10 mb-12 overflow-hidden shadow-xl">
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#pattern)" />
                        <defs>
                            <pattern id="pattern" patternUnits="userSpaceOnUse" width="10" height="10">
                                <circle cx="5" cy="5" r="1" fill="currentColor" />
                            </pattern>
                        </defs>
                    </svg>
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-6 md:mb-0 md:mr-8">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Bạn cần tư vấn về sản phẩm đá?</h2>
                        <p className="text-blue-100 max-w-xl">Hãy liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí và nhận báo giá tốt nhất cho dự án của bạn.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="/lien-he" className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                            Liên hệ ngay
                        </a>
                        <a href="tel:0935789363" className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-blue-700 transition-colors duration-300 flex items-center justify-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                            Gọi ngay
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
