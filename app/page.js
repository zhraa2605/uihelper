import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import ComponentLibraries from './components/ToolsGrid';

const page = () => {
  return (
    <>
    <Header />
    <Hero />
    <CategoryGrid />
    <ComponentLibraries />
    </>
  )
}

export default page;
