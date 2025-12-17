import { Heart, Target, Award, Building, Zap, Shield } from "lucide-react";

// Solutions hero section
export const SOLUTIONS_HERO = {
  title: "Industry-Specific",
  highlight: "IT Solutions",
  description: "Tailored technology solutions designed specifically for your industry's unique challenges and requirements.",
  ctaText: "Explore Solutions",
  ctaLink: "/contact"
};

// Main industry solutions (imported from site-data.ts)
// Additional solutions for industries
export const ADDITIONAL_SOLUTIONS = [
  {
    id: "retail",
    title: "Retail & E-commerce",
    description: "Comprehensive solutions for modern retail operations and online commerce platforms.",
    icon: Building,
    features: [
      "POS System Integration",
      "Inventory Management Systems",
      "Customer Analytics Platform",
      "Multi-channel Support"
    ],
    benefits: [
      "25% increase in sales efficiency",
      "Real-time inventory tracking",
      "Enhanced customer experience"
    ],
    image: "/images/solutions/retail.jpg"
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Logistics",
    description: "Industrial-grade solutions for manufacturing processes and supply chain management.",
    icon: Zap,
    features: [
      "IoT Device Integration",
      "Supply Chain Optimization",
      "Quality Management Systems",
      "Predictive Maintenance"
    ],
    benefits: [
      "30% reduction in downtime",
      "Improved operational efficiency",
      "Cost optimization"
    ],
    image: "/images/solutions/manufacturing.jpg"
  },
  {
    id: "government",
    title: "Government & Public Sector",
    description: "Secure, compliant solutions for government agencies and public sector organizations.",
    icon: Shield,
    features: [
      "Government-grade Security",
      "Citizen Service Portals",
      "Data Management Systems",
      "Compliance Monitoring"
    ],
    benefits: [
      "Enhanced public services",
      "Improved transparency",
      "Regulatory compliance"
    ],
    image: "/images/solutions/government.jpg"
  }
];

// Industry icons mapping
export const INDUSTRY_ICONS = {
  healthcare: Heart,
  finance: Target,
  education: Award,
  retail: Building,
  manufacturing: Zap,
  government: Shield
};

// Solution features comparison
export const SOLUTION_FEATURES = {
  core: [
    "Custom Software Development",
    "Cloud Infrastructure",
    "Data Analytics",
    "Mobile Applications"
  ],
  advanced: [
    "AI & Machine Learning",
    "Blockchain Integration",
    "IoT Solutions",
    "Advanced Security"
  ],
  support: [
    "24/7 Technical Support",
    "Regular Updates",
    "Training & Documentation",
    "Scalability Planning"
  ]
};

// Industry-specific benefits
export const INDUSTRY_BENEFITS = {
  healthcare: {
    roi: "40%",
    efficiency: "35%",
    satisfaction: "95%",
    compliance: "100%"
  },
  finance: {
    roi: "45%",
    efficiency: "40%",
    security: "99.9%",
    compliance: "100%"
  },
  education: {
    roi: "30%",
    engagement: "50%",
    accessibility: "90%",
    adoption: "85%"
  }
};
