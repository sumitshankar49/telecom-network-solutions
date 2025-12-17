import { Code, Palette, Briefcase, BarChart3, Users } from "lucide-react";

// Email configuration
export const CAREERS_CONFIG = {
  applicationEmail: "shankarsumit49@gmail.com",
  googleFormId: "", // Add your Google Form ID here or leave empty to use built-in form
  hasOpenings: true, // Set to false to hide all positions and show "no openings" message
};

// Job positions data
export const POSITIONS = [
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    salary: "$120k - $180k",
    icon: Code,
    description:
      "Join our engineering team to build scalable web applications using React, Node.js, and cloud technologies.",
    requirements: [
      "5+ years of full-stack development experience",
      "Proficiency in React, Node.js, and TypeScript",
      "Experience with cloud platforms (AWS, Azure, GCP)",
      "Strong problem-solving and communication skills",
    ],
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "Austin, TX / Remote",
    type: "Full-time",
    salary: "$90k - $130k",
    icon: Palette,
    description:
      "Create exceptional user experiences and beautiful interfaces for our client projects and internal tools.",
    requirements: [
      "3+ years of UX/UI design experience",
      "Proficiency in Figma, Sketch, or Adobe XD",
      "Strong portfolio demonstrating design thinking",
      "Experience with user research and usability testing",
    ],
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Seattle, WA / Remote",
    type: "Full-time",
    salary: "$110k - $160k",
    icon: Briefcase,
    description:
      "Build and maintain CI/CD pipelines, manage cloud infrastructure, and ensure system reliability.",
    requirements: [
      "4+ years of DevOps/Infrastructure experience",
      "Experience with Docker, Kubernetes, and Terraform",
      "Knowledge of AWS/Azure cloud services",
      "Strong scripting skills (Python, Bash)",
    ],
  },
  {
    title: "Data Scientist",
    department: "Analytics",
    location: "Boston, MA / Remote",
    type: "Full-time",
    salary: "$100k - $150k",
    icon: BarChart3,
    description:
      "Analyze complex data sets, build predictive models, and derive actionable insights for our clients.",
    requirements: [
      "3+ years of data science experience",
      "Proficiency in Python, R, and SQL",
      "Experience with machine learning frameworks",
      "Strong statistical analysis skills",
    ],
  },
  {
    title: "Project Manager",
    department: "Operations",
    location: "New York, NY / Remote",
    type: "Full-time",
    salary: "$85k - $120k",
    icon: Users,
    description:
      "Lead cross-functional teams to deliver client projects on time and within budget.",
    requirements: [
      "3+ years of project management experience",
      "PMP or Agile certification preferred",
      "Experience with software development projects",
      "Excellent communication and leadership skills",
    ],
  },
  {
    title: "Frontend Developer (Intern)",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Internship",
    salary: "$25 - $35/hour",
    icon: Code,
    description:
      "Learn and contribute to frontend development using modern frameworks and tools.",
    requirements: [
      "Currently pursuing CS degree or related field",
      "Basic knowledge of HTML, CSS, JavaScript",
      "Familiarity with React or similar frameworks",
      "Eager to learn and grow",
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
