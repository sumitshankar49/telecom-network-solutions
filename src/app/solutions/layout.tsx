import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industry Solutions | DPB Solution',
  description: 'Discover our comprehensive industry-specific IT solutions for healthcare, finance, education, retail, manufacturing, and government sectors.',
  keywords: ['IT solutions', 'healthcare technology', 'financial software', 'education technology', 'industry solutions'],
  openGraph: {
    title: 'Industry Solutions | DPB Solution',
    description: 'Tailored technology solutions designed to meet the unique challenges and requirements of your industry',
    type: 'website',
  },
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}