'use client';
import React, { useState, useEffect } from 'react';
import { Tabs, BackTop } from 'antd';
import { UpOutlined } from '@ant-design/icons';
import Header from '../home/components/header';
import Footer from '../home/components/Footer';
import IndiaStone from './components/IndiaStone';
import NormalStone from './components/NormalStone';
import Lux from './components/lux';
import VicoStone from './components/vico';
import TerrazzoStone from './components/terrazzoStone';
import GraniteStone from './components/graniteStone';
import MarbleStone from './components/marbleStone';

export default function Products() {
    const [mounted, setMounted] = useState(false);
    
    useEffect(() => {
        setMounted(true);
    }, []);

    const items = [
        {
            key: '1',
            label: 'Đá Nung Kết Ấn Độ',
            children: <IndiaStone />,
        },
        {
            key: '2',
            label: 'Đá Nung Kết',
            children: <NormalStone />,
        },
        {
            key: '3',
            label: 'Đá Thạch Anh Lux Quartz',
            children: <Lux />,
        },
        {
            key: '4',
            label: 'Đá Thạch Anh Vicostone',
            children: <VicoStone />,
        },
        {
            key: '5',
            label: 'Đá Nhân Tạo Terrazzo',
            children: <TerrazzoStone />,
        },
        {
            key: '6',
            label: 'Đá Tự Nhiên Granite',
            children: <GraniteStone />,
        },
        {
            key: '7',
            label: 'Đá Tự Nhiên Marble',
            children: <MarbleStone />,
        },
    ];

    if (!mounted) return null;

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 overflow-x-hidden">
            <Header />
            
            <div className="container mx-auto px-4 py-6">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 relative">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                        Bộ Sưu Tập Đá Cao Cấp
                    </span>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full"></div>
                </h1>
                
                <div className="bg-white rounded-lg shadow-md mb-8">
                    <Tabs 
                        items={items} 
                        defaultActiveKey="1" 
                        size="middle"
                        centered
                        tabBarStyle={{ 
                            marginBottom: 16,
                            fontWeight: 'bold'
                        }}
                        animated={{ inkBar: true, tabPane: true }}
                        className="product-tabs"
                    />
                </div>
            </div>
            
            <BackTop>
                <div className="fixed bottom-6 right-6 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 cursor-pointer">
                    <UpOutlined />
                </div>
            </BackTop>
            
            <Footer />
        </div>
    );
}