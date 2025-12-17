"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
    { href: "/careers", label: "Careers" },
  ];

  return (
    <nav aria-label="Main navigation" className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'shadow-lg border-b border-gray-200' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="DBP Solution - Home">
            <span className={`text-2xl font-bold transition-colors duration-300 ${
              scrolled ? 'text-blue-700' : 'text-white'
            }`} style={{ textShadow: scrolled ? 'none' : '2px 2px 4px rgba(0,0,0,0.8)' }}>
              DPB
            </span>
            <span className={`text-2xl font-bold ml-1 transition-colors duration-300 ${
              scrolled ? 'text-gray-800' : 'text-white'
            }`} style={{ textShadow: scrolled ? 'none' : '2px 2px 4px rgba(0,0,0,0.8)' }}>
              Solution
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-semibold transition-all duration-300 ${
                  scrolled 
                    ? 'text-gray-800 hover:text-blue-700' 
                    : 'text-white hover:text-blue-300'
                }`}
                style={{ textShadow: scrolled ? 'none' : '1px 1px 3px rgba(0,0,0,0.8)' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link href="/contact">
              <Button className={`transition-all duration-300 shadow-lg ${
                scrolled 
                  ? 'bg-blue-700 hover:bg-blue-800 text-white' 
                  : 'bg-white hover:bg-gray-100 text-gray-900'
              }`}>
                Get Started
              </Button>
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className={scrolled ? 'text-gray-900' : 'text-white'}
              style={{ textShadow: scrolled ? 'none' : '1px 1px 3px rgba(0,0,0,0.8)' }}
            >
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden" id="mobile-menu" role="navigation" aria-label="Mobile navigation">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50 rounded-md transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white">
                    Get Connected
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}