import React, { Suspense } from 'react';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const page = () => {
  return (
    <>
    

    <Hero />
    <CategoryGrid />
    <Footer />
    </>
  )
}

export default page;
