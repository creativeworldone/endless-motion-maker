
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="py-4 px-6 sm:px-10 flex items-center justify-between border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="flex items-center space-x-2">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">M</span>
          </div>
          <span className="text-xl font-bold tracking-tight">MotionMaker</span>
        </Link>
      </div>
      
      <nav className="hidden md:flex items-center space-x-6">
        <Link to="/" className="text-sm font-medium hover:text-purple-600 transition-colors">
          Home
        </Link>
        <Link to="/examples" className="text-sm font-medium hover:text-purple-600 transition-colors">
          Gallery
        </Link>
        <Link to="/about" className="text-sm font-medium hover:text-purple-600 transition-colors">
          How It Works
        </Link>
      </nav>
      
      <div>
        <Button 
          className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white"
        >
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Header;
