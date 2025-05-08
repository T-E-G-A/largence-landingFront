'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleLinkClick = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  if (!isMobile) return null;

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
        aria-label="Toggle menu"
      >
        <span 
          className={`w-6 h-0.5 bg-black transition-transform duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`}
        />
        <span 
          className={`w-6 h-0.5 bg-black transition-opacity duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`}
        />
      </button>

      <div 
        className={`fixed left-0 right-0 top-0 bg-gradient-to-b from-[#FFF8E1] to-[#FFFAE2] transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ paddingTop: '4rem' }}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 w-8 h-8"
          aria-label="Close menu"
        >
          <span className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-black transform -translate-x-1/2 -translate-y-1/2 rotate-45" />
          <span className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-black transform -translate-x-1/2 -translate-y-1/2 -rotate-45" />
        </button>

        <div className="flex flex-col items-center space-y-6 pb-8">
          <Link 
            href="#features" 
            className="text-black text-lg font-medium hover:text-gray-600 transition-colors"
            onClick={handleLinkClick}
          >
            Features
          </Link>
          <Link 
            href="#learn-more" 
            className="text-black text-lg font-medium hover:text-gray-600 transition-colors"
            onClick={handleLinkClick}
          >
            Learn More
          </Link>
          <Link 
            href="#contact" 
            className="text-black text-lg font-medium hover:text-gray-600 transition-colors"
            onClick={handleLinkClick}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
} 