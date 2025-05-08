
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Video, Image } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative z-10">
          {/* Purple glow effect */}
          <div aria-hidden="true" className="absolute inset-0 -z-10 transform-gpu blur-3xl">
            <div 
              className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-purple-600 to-indigo-600 opacity-20" 
              style={{
                clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }} 
            />
          </div>

          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Create Endless <span className="gradient-text">AI-Generated</span> Videos and Images
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Transform your stories and ideas into stunning visual content with our AI-powered platform.
              Simply provide a prompt, and watch as our AI brings your imagination to life.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8"
              >
                View Examples
              </Button>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-20 sm:mt-24 lg:mt-32">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
            {[
              { 
                icon: <Video className="h-10 w-10 text-purple-600" />,
                title: 'Video Generation',
                description: 'Create captivating animated videos from your prompts and stories.'
              },
              { 
                icon: <Image className="h-10 w-10 text-purple-600" />,
                title: 'Image Creation',
                description: 'Generate stunning visuals and artwork based on your descriptions.'
              },
              { 
                icon: <svg className="h-10 w-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>,
                title: 'Endless Ideas',
                description: 'Never run out of creative content with our unlimited generation system.'
              },
              { 
                icon: <svg className="h-10 w-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>,
                title: 'Style Control',
                description: 'Fine-tune the look and feel of your content with customizable parameters.'
              }
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900/20 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
