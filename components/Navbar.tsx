import React, { useState } from 'react';
import { Menu, X, BarChart3 } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'The Problem', href: '#problem' },
    { name: 'Our Solution', href: '#services' },
    { name: 'Methodology', href: '#methodology' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2 group">
              <div className={`p-2 rounded bg-brand-blue text-white transition-colors`}>
                <BarChart3 size={24} />
              </div>
              <span className={`text-xl font-bold tracking-tight ${scrolled || isOpen ? 'text-brand-blue' : 'text-slate-900'}`}>
                Competitive<span className="font-light">Intelligence</span>
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium hover:text-brand-gold transition-colors ${
                  scrolled ? 'text-slate-600' : 'text-slate-700'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-brand-blue text-white px-5 py-2.5 rounded-sm text-sm font-semibold hover:bg-slate-800 transition-colors shadow-lg shadow-blue-900/20"
            >
              Consult With Us
            </a>
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
        className={`md:hidden absolute w-full bg-white border-b border-gray-100 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-gray-50 hover:text-brand-blue border-b border-gray-100"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center mt-4 bg-brand-blue text-white px-5 py-3 rounded-sm text-base font-semibold hover:bg-slate-800"
          >
            Start Growth Engine
          </a>
        </div>
      </div>
    </nav>
  );
};