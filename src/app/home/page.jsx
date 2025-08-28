"use client";
import React from 'react';
import Header from './components/header';
import Main from './components/Main';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </>
  )
}