
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Gallery = () => {
  // Sample gallery items
  const galleryItems = [
    {
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=1949&auto=format&fit=crop',
      title: 'Cosmic Journey',
      description: 'An animated journey through a colorful cosmic universe.'
    },
    {
      type: 'image',
      thumbnail: 'https://images.unsplash.com/photo-1543349689-9a4d426bee8e?q=80&w=2001&auto=format&fit=crop',
      title: 'Futuristic City',
      description: 'A detailed cityscape of a futuristic metropolis with flying vehicles.'
    },
    {
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1604076913837-52ab5629fba9?q=80&w=1974&auto=format&fit=crop',
      title: 'Ocean Adventure',
      description: 'Explore the depths of the ocean with magical sea creatures.'
    },
    {
      type: 'image',
      thumbnail: 'https://images.unsplash.com/photo-1638280346344-9798751babb8?q=80&w=1972&auto=format&fit=crop',
      title: 'Fantasy Landscape',
      description: 'A breathtaking fantasy landscape with floating islands and waterfalls.'
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Inspiration <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Browse our collection of AI-generated content to inspire your next creation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <Card key={index} className="overflow-hidden bg-card transition-all hover:shadow-md hover:-translate-y-1">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={item.thumbnail} 
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm text-xs px-2 py-1 rounded-full font-medium">
                  {item.type === 'video' ? 'Video' : 'Image'}
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button variant="outline" size="lg" className="group">
            View More Examples
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
