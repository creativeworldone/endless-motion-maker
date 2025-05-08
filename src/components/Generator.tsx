
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Loader2, Video, Image as ImageIcon, Wand2 } from 'lucide-react';
import { toast } from 'sonner';

const Generator = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);
  const [contentType, setContentType] = useState<'video' | 'image'>('video');

  const handleGenerate = () => {
    if (!prompt.trim()) {
      toast.error('Please enter a prompt first.');
      return;
    }

    setLoading(true);
    setGeneratedContent(null);
    
    // Simulate AI generation with a timeout
    setTimeout(() => {
      setLoading(false);
      
      // In a real implementation, this would be the response from an AI API
      const mockResults = {
        video: 'https://player.vimeo.com/progressive_redirect/playback/707528618/rendition/1080p/file.mp4?loc=external&signature=2541d225d89e68997e7955929d2dd3a9104c7c2c8ff777d34a62c33c65bcf891',
        image: 'https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=1470&auto=format&fit=crop'
      };
      
      setGeneratedContent(contentType === 'video' ? mockResults.video : mockResults.image);
      
      toast.success(`Your ${contentType} has been generated!`);
    }, 3000);
  };

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="mx-auto max-w-3xl text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Generate Your <span className="gradient-text">Content</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          Describe your story or idea, select a content type, and let our AI do the rest.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="bg-card rounded-xl shadow-sm border p-6">
          <div className="mb-6">
            <label htmlFor="prompt" className="block text-sm font-medium mb-2">
              Your Story Prompt
            </label>
            <Textarea
              id="prompt"
              placeholder="Describe the story or scene you want to generate... Be creative and detailed!"
              className="min-h-[200px]"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Content Type
            </label>
            <Tabs defaultValue="video" onValueChange={(value) => setContentType(value as 'video' | 'image')}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="video" className="flex items-center">
                  <Video className="mr-2 h-4 w-4" />
                  Video
                </TabsTrigger>
                <TabsTrigger value="image" className="flex items-center">
                  <ImageIcon className="mr-2 h-4 w-4" />
                  Image
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          <Button 
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()} 
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Wand2 className="mr-2 h-4 w-4" />
                Generate {contentType === 'video' ? 'Video' : 'Image'}
              </>
            )}
          </Button>
        </div>
        
        <div className="bg-card rounded-xl shadow-sm border p-6 min-h-[400px] flex flex-col">
          <h3 className="text-lg font-medium mb-4">Preview</h3>
          
          {loading ? (
            <div className="flex-1 flex flex-col items-center justify-center">
              <Loader2 className="h-12 w-12 text-purple-600 animate-spin mb-4" />
              <p className="text-muted-foreground">Generating your {contentType}...</p>
              <p className="text-sm text-muted-foreground mt-2">This may take a moment</p>
            </div>
          ) : generatedContent ? (
            <div className="flex-1 flex items-center justify-center">
              {contentType === 'video' ? (
                <video 
                  src={generatedContent}
                  controls
                  autoPlay
                  loop
                  className="max-h-[350px] rounded-lg shadow-md"
                />
              ) : (
                <img
                  src={generatedContent}
                  alt="Generated content"
                  className="max-h-[350px] rounded-lg shadow-md object-contain"
                />
              )}
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <div className="w-24 h-24 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mb-4">
                {contentType === 'video' ? (
                  <Video className="h-10 w-10 text-purple-600" />
                ) : (
                  <ImageIcon className="h-10 w-10 text-purple-600" />
                )}
              </div>
              <p className="text-muted-foreground">
                Your generated {contentType} will appear here
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Enter a prompt and click Generate to get started
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Generator;
