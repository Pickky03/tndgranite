'use client';
import React from 'react';
import Header from '../home/components/header';
import Footer from '../home/components/Footer';
import IndiaStone from './components/IndiaStone';
import NormalStone from './components/NormalStone';

export default function Products() {
    return (
        <div>
            <Header />
            <IndiaStone />
            <NormalStone />
            <Footer />
        </div>
    );
}