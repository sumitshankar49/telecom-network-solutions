import { Code, Briefcase, Radio, Network } from "lucide-react";

// Email configuration
export const CAREERS_CONFIG = {
  applicationEmail: "dpbsolution.job@gmail.com",
  googleFormId: "", // Add your Google Form ID here or leave empty to use built-in form
  hasOpenings: true, // Set to false to hide all positions and show "no openings" message
};

// Job positions data
export const POSITIONS = [
  {
    title: "ISP Engineer",
    department: "Network Engineering",
    location: "Munshipalli Maharajganj (Telangana)",
    type: "Full-time",
    salary: "Competitive",
    icon: Network,
    description:
      "Join our network engineering team to design, deploy, and maintain Internet Service Provider infrastructure. Work with cutting-edge telecommunications technology to deliver reliable connectivity solutions.",
    requirements: [
      "0-5 years of experience in relevant field",
      "Graduate/Diploma (ELE/ ECE/ IT/Telecom)",
      "Experience / As a Fiber/ ISP Engineer",
      "Remarks: Local candidate preferred",
      "Strong understanding of network protocols and ISP operations",
      "Experience with network configuration and troubleshooting",
    ],
  },
  {
    title: "Fiber Engineer",
    department: "Field Operations",
    location: "Vangal (Tamilnadu)",
    type: "Full-time",
    salary: "Competitive",
    icon: Radio,
    description:
      "Be part of our field operations team responsible for fiber optic network installation, maintenance, and optimization. Work on expanding our fiber infrastructure to connect communities.",
    requirements: [
      "0-5 years of experience in relevant field",
      "Graduate/Diploma (ELE/ ECE/ IT/Telecom)",
      "Experience / As a Fiber/ ISP Engineer",
      "Remarks: Local candidate preferred",
      "Knowledge of fiber optic cable installation and splicing",
      "Understanding of FTTH/FTTX deployment",
    ],
  },
  {
    title: "Network Operations Engineer",
    department: "Network Engineering",
    location: "Patna, Bihar / Onsite",
    type: "Full-time",
    salary: "₹4L - ₹8L per annum",
    icon: Network,
    description:
      "Monitor and maintain our telecommunications network infrastructure. Ensure optimal performance, troubleshoot issues, and implement network improvements.",
    requirements: [
      "2+ years of network operations experience",
      "Knowledge of routing protocols (BGP, OSPF, MPLS)",
      "Experience with network monitoring tools",
      "Understanding of telecom infrastructure",
      "Strong analytical and problem-solving skills",
    ],
  },
  {
    title: "Telecom Project Manager",
    department: "Operations",
    location: "Patna, Bihar / Remote",
    type: "Full-time",
    salary: "₹6L - ₹12L per annum",
    icon: Briefcase,
    description:
      "Lead telecommunications infrastructure projects from planning to deployment. Coordinate with technical teams, vendors, and stakeholders to ensure successful project delivery.",
    requirements: [
      "3+ years of telecom project management experience",
      "PMP or similar certification preferred",
      "Experience with fiber deployment projects",
      "Strong leadership and communication skills",
      "Knowledge of telecom regulations and standards",
    ],
  },
  {
    title: "Network Security Specialist",
    department: "Security",
    location: "Patna, Bihar / Onsite",
    type: "Full-time",
    salary: "₹5L - ₹10L per annum",
    icon: Code,
    description:
      "Protect our network infrastructure and customer data. Implement security protocols, monitor for threats, and ensure compliance with industry standards.",
    requirements: [
      "3+ years of network security experience",
      "Knowledge of firewalls, VPNs, and security protocols",
      "Experience with security monitoring tools",
      "Understanding of telecom security standards",
      "Relevant certifications (CISSP, CEH) preferred",
    ],
  },
  {
    title: "Field Technician (Trainee)",
    department: "Field Operations",
    location: "Patna, Bihar",
    type: "Full-time / Trainee",
    salary: "₹2L - ₹3.5L per annum",
    icon: Radio,
    description:
      "Start your career in telecommunications. Learn fiber optic installation, network equipment setup, and field operations under experienced mentors.",
    requirements: [
      "ITI/Diploma in Electronics/Electrical",
      "Willingness to work in field conditions",
      "Basic understanding of networking",
      "Good communication skills",
      "Eager to learn and grow in telecom sector",
    ],
  },
];

// Culture values data
export const CULTURE_VALUES = [
  {
    title: "Innovation First",
    description:
      "We encourage creative thinking and provide the freedom to explore new technologies and methodologies that can benefit our clients and team.",
  },
  {
    title: "Work-Life Balance",
    description:
      "We believe that great work comes from well-rested, happy people. Flexible hours and remote work options help you maintain a healthy balance.",
  },
  {
    title: "Continuous Learning",
    description:
      "Stay ahead of the curve with our learning and development programs, conference attendance, and internal knowledge sharing sessions.",
  },
  {
    title: "Diversity & Inclusion",
    description:
      "We're committed to building a diverse team where everyone feels valued, respected, and empowered to contribute their unique perspectives.",
  },
];

// Company stats
export const COMPANY_STATS = [
  { value: "50+", label: "Team Members" },
  { value: "25+", label: "Countries Represented" },
  { value: "4.8/5", label: "Employee Satisfaction" },
];

// Hiring process steps
export const HIRING_PROCESS = [
  {
    step: 1,
    title: "Application",
    description:
      "Submit your application with your resume and cover letter through our portal.",
  },
  {
    step: 2,
    title: "Screening",
    description:
      "Initial phone or video screening with our HR team to discuss your background.",
  },
  {
    step: 3,
    title: "Technical Interview",
    description:
      "Technical assessment and interview with team members relevant to the role.",
  },
  {
    step: 4,
    title: "Final Interview",
    description:
      "Final interview with leadership team and culture fit assessment.",
  },
];
