
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Generator from '@/components/Generator';
import Gallery from '@/components/Gallery';
import HowItWorks from '@/components/HowItWorks';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Generator />
        <Gallery />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
