// TypeScript Type Definitions
// Add your shared types here

import { LucideIcon } from 'lucide-react';

export interface NavigationItem {
  name: string;
  href: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  founded: string;
  employees: string;
  clients: string;
  countries: string;
  contact: {
    email: string;
    phone: string;
    address: string;
    hours: string;
  };
  social: {
    linkedin: string;
    twitter: string;
    facebook: string;
  };
}

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  link?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

export interface Solution {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  useCases: string[];
}
