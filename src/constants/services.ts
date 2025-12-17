// Services page configuration and data

// Network coverage statistics
export const NETWORK_COVERAGE = [
  { region: "North America", coverage: "99.2%" },
  { region: "Europe", coverage: "98.8%" },
  { region: "Asia Pacific", coverage: "97.5%" },
  { region: "Latin America", coverage: "94.3%" },
  { region: "Middle East & Africa", coverage: "89.7%" }
];

// Technology standards and protocols
export const TECHNOLOGY_STANDARDS = [
  {
    title: "5G Standards",
    subtitle: "3GPP Release 15/16/17",
    color: "blue",
    badges: ["eMBB", "URLLC", "mMTC"]
  },
  {
    title: "IoT Protocols",
    subtitle: "Low Power Wide Area Networks",
    color: "teal",
    badges: ["LoRaWAN", "NB-IoT", "Sigfox"]
  },
  {
    title: "Satellite Tech",
    subtitle: "Next-gen satellite systems",
    color: "blue",
    badges: ["LEO", "MEO", "GEO"]
  },
  {
    title: "Cloud Native",
    subtitle: "Modern network functions",
    color: "teal",
    badges: ["NFV", "SDN", "CNF"]
  }
];

// Implementation process steps
export const IMPLEMENTATION_PROCESS = [
  {
    step: 1,
    title: "Consultation",
    description: "Initial assessment of your telecom needs and infrastructure requirements"
  },
  {
    step: 2,
    title: "Planning",
    description: "Design customized network architecture and deployment strategy"
  },
  {
    step: 3,
    title: "Deployment",
    description: "Professional installation and configuration of telecom infrastructure"
  },
  {
    step: 4,
    title: "Testing",
    description: "Comprehensive testing and quality assurance of all systems"
  },
  {
    step: 5,
    title: "Support",
    description: "Ongoing maintenance, monitoring, and technical support"
  }
];

// Services hero section
export const SERVICES_HERO = {
  badge: "Advanced Telecommunications",
  title: "Our",
  highlight: "Telecom Services",
  description: "Comprehensive telecommunications solutions powered by cutting-edge technology. From 5G networks to satellite communications, we connect your world seamlessly.",
  ctaText: "Get Connected Today",
  ctaLink: "/contact"
};

// Service categories (Note: Main services are imported from site-data.ts)
export const SERVICE_CATEGORIES = {
  infrastructure: "Network Infrastructure",
  connectivity: "Connectivity Solutions",
  cloud: "Cloud Communications",
  security: "Security & Compliance",
  iot: "IoT & Smart Solutions",
  support: "Managed Services"
};
