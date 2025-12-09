import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { Logo } from './Logo';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  // If on subpage, always show white background
  const isScrolledOrSubpage = scrolled || !isHome || isOpen;

  const handleScrollToSection = (sectionId: string) => {
    setIsOpen(false);
    
    if (isHome) {
      // If we are already home, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we are elsewhere, navigate home first
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolledOrSubpage ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <Logo className="w-10 h-10 transition-transform group-hover:scale-105" />
              <span className={`text-xl font-light tracking-tight ${isScrolledOrSubpage ? 'text-brand-blue' : 'text-slate-900'}`}>
                Competitive<span className="font-bold">Intelligence</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => handleScrollToSection('problem')}
              className={`text-sm font-medium hover:text-brand-gold transition-colors ${
                isScrolledOrSubpage ? 'text-slate-600' : 'text-slate-700'
              }`}
            >
              The Problem
            </button>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 text-sm font-medium hover:text-brand-gold transition-colors py-2 ${
                  isScrolledOrSubpage ? 'text-slate-600' : 'text-slate-700'
                }`}
              >
                Services <ChevronDown size={14} />
              </button>
              
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                <div className="bg-white rounded-lg shadow-xl border border-slate-100 overflow-hidden">
                  <div className="py-2">
                    {servicesData.map((service) => (
                      <Link
                        key={service.id}
                        to={`/services/${service.id}`}
                        className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-blue border-b border-slate-50 last:border-none"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleScrollToSection('methodology')}
              className={`text-sm font-medium hover:text-brand-gold transition-colors ${
                isScrolledOrSubpage ? 'text-slate-600' : 'text-slate-700'
              }`}
            >
              Methodology
            </button>

            <button
              onClick={() => handleScrollToSection('contact')}
              className="ml-4 bg-brand-blue text-white px-5 py-2.5 rounded-sm text-sm font-semibold hover:bg-slate-800 transition-colors shadow-lg shadow-blue-900/20"
            >
              Consult With Us
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-brand-blue focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white border-b border-gray-100 transition-all duration-300 ease-in-out h-[calc(100vh-80px)] overflow-y-auto ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          <button
            onClick={() => handleScrollToSection('problem')}
            className="block w-full text-left px-3 py-4 text-base font-medium text-slate-700 hover:bg-gray-50 border-b border-gray-100"
          >
            The Problem
          </button>
          
          <div className="border-b border-gray-100">
            <button 
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex w-full items-center justify-between px-3 py-4 text-base font-medium text-slate-700 hover:bg-gray-50"
            >
              Services <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {mobileServicesOpen && (
              <div className="bg-slate-50 px-3 pb-3 space-y-1">
                {servicesData.map((service) => (
                  <Link
                    key={service.id}
                    to={`/services/${service.id}`}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-3 text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-100 rounded"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => handleScrollToSection('methodology')}
            className="block w-full text-left px-3 py-4 text-base font-medium text-slate-700 hover:bg-gray-50 border-b border-gray-100"
          >
            Methodology
          </button>

          <div className="pt-4">
            <button
              onClick={() => handleScrollToSection('contact')}
              className="block w-full text-center bg-brand-blue text-white px-5 py-3 rounded-sm text-base font-semibold hover:bg-slate-800"
            >
              Start Growth Engine
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};