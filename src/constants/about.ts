import { Users, Target, Award, Globe } from "lucide-react";

// About page stats
export const ABOUT_STATS = [
  { icon: Users, label: "Team Members", value: "50+" },
  { icon: Target, label: "Projects Completed", value: "200+" },
  { icon: Award, label: "Years Experience", value: "16+" },
  { icon: Globe, label: "Countries Served", value: "25+" },
];

// Leadership team
export const LEADERSHIP_TEAM = [
  {
    name: "Dharmendra Ojha",
    role: "CEO & Founder",
    description: "Visionary leader with 15+ years in tech innovation.",
    image: "/images/team/dharmendra-ojha.jpg" // Add team images here
  },
  {
    name: "Sarah Johnson",
    role: "CTO",
    description: "Technical expert specializing in scalable architectures.",
    image: "/images/team/sarah-johnson.jpg"
  },
  {
    name: "Mike Chen",
    role: "Head of Design",
    description: "Creative director focused on user experience excellence.",
    image: "/images/team/mike-chen.jpg"
  },
  {
    name: "Emily Davis",
    role: "VP of Operations",
    description: "Operations specialist ensuring seamless project delivery.",
    image: "/images/team/emily-davis.jpg"
  }
];

// Mission and Vision
export const MISSION_VISION = {
  mission: {
    title: "Our Mission",
    description: "To empower businesses with innovative and reliable telecommunications solutions that enhance connectivity, improve operational efficiency, and enable seamless communication across networks. We strive to make advanced telecom technology accessible, secure, and scalable for organizations of all sizes."
  },
  vision: {
    title: "Our Vision",
    description: "To become a trusted global telecommunications partner, driving the future of connectivity through cutting-edge network solutions, smart communication technologies, and continuous innovation that keeps businesses connected anytime, anywhere."
  }
};

// Company story
export const COMPANY_STORY = {
  title: "Our Story",
  founded: "2014",
  content: [
    "Founded in 2014, DPB Solution was established with a clear vision: to deliver reliable and scalable telecommunications solutions tailored for modern businesses. Starting as a small, dedicated team, we have grown into a trusted telecom partner by prioritizing robust connectivity, secure network infrastructure, and dependable communication services.",
    "Today, we continue to empower organizations with high-performance telecom solutions that keep them connected, efficient, and prepared for the future of digital communication."
  ]
};

// Core values
export const CORE_VALUES = [
  {
    icon: Target,
    title: "Innovation",
    description: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions that give our clients a competitive edge."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in everything we do, from code quality to customer service, ensuring exceptional outcomes every time."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork, both within our organization and with our clients, to achieve remarkable results together."
  }
];

// Hero section
export const ABOUT_HERO = {
  title: "About",
  highlight: "DPB Solution",
  description: "We are a dedicated telecommunications solutions provider specializing in reliable connectivity, network infrastructure, and advanced communication services. Our team is committed to enabling businesses with secure, scalable, and high-performance telecom solutions that support growth and seamless digital communication."
};
