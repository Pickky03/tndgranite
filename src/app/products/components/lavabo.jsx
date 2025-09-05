'use client'
import React from 'react';
import {lavaboData} from '../../data/lavaboData';
import Image from 'next/image';
import { useState } from 'react';
export default function Lavabo() {   
    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = lavaboData;
    const handleViewDetails = (product) => {
        setSelectedProduct(product);
    };

    const closeDetails = () => {
        setSelectedProduct(null);
    };

    return (
        <div className="container mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold text-center mb-8 text-black-600">CÁC SẢN PHẨM LAVABO ỐP ĐÁ 
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
                        </div>
                    </div>
                ))}
            </div>
            



        </div>
    );
}