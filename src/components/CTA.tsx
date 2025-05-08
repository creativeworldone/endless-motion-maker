
import React from 'react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-16 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 purple-gradient opacity-90 -z-10"
        aria-hidden="true"
      />
      
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ready to Bring Your Stories to Life?
        </h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
          Create endless AI-generated videos and images today. No technical skills required—just your imagination.
        </p>
        <Button 
          size="lg" 
          variant="secondary"
          className="font-medium bg-white text-purple-700 hover:bg-white/90"
        >
          Start Creating Now
        </Button>
      </div>
    </section>
  );
};

export default CTA;
