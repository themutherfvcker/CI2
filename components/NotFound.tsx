import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';
import { SEO } from './SEO';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-slate-50 px-4 text-center">
      <SEO 
        title="Page Not Found | Competitive Intelligence"
        description="The page you are looking for does not exist."
      />
      
      <h1 className="text-9xl font-bold text-slate-200 mb-4 font-serif">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Page Not Found</h2>
      <p className="text-lg text-slate-600 max-w-md mb-10">
        It looks like you've ventured into uncharted territory. Let's get you back to familiar ground.
      </p>
      
      <Link 
        to="/" 
        className="inline-flex items-center px-8 py-4 bg-brand-blue text-white font-semibold rounded-sm hover:bg-slate-800 transition-colors shadow-lg"
      >
        <Home className="mr-2" size={20} />
        Return to Homepage
      </Link>
    </div>
  );
};