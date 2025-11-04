'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useEffect } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      
      {/* Slide-out menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-neutral-900 border-l border-neutral-800 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Navigation links */}
        <nav className="flex flex-col gap-2 px-4">
          <Link 
            href="/#products" 
            onClick={onClose}
            className={`px-4 py-3 rounded-lg transition-colors ${
              pathname === '/' ? 'bg-neutral-800 text-white' : 'text-neutral-300 hover:bg-neutral-800/50 hover:text-white'
            }`}
          >
            Products
          </Link>
          <Link 
            href="/updates" 
            onClick={onClose}
            className={`px-4 py-3 rounded-lg transition-colors ${
              pathname === '/updates' ? 'bg-neutral-800 text-white' : 'text-neutral-300 hover:bg-neutral-800/50 hover:text-white'
            }`}
          >
            Updates
          </Link>
          <a 
            href="mailto:support@platovalabs.com" 
            onClick={(e) => {
              if (typeof window !== 'undefined' && (window as any).plausible) {
                (window as any).plausible('mailto - Click', { props: { location: 'Mobile Menu' } });
              }
              onClose();
            }}
            className="px-4 py-3 rounded-lg text-neutral-300 hover:bg-neutral-800/50 hover:text-white transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </>
  );
}
