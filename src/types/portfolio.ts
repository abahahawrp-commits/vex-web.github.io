export type PageId = 'home' | 'story' | 'projects' | 'writing' | 'contact';

export interface Project {
  id: string;
  title: string;
  category: 'Venture Systems' | 'AI & Data' | 'Developer Tools' | 'Frontend & Design';
  year: string;
  tagline: string;
  description: string;
  longDescription: string;
  impactMetrics: { label: string; value: string }[];
  tags: string[];
  challenge: string;
  solution: string;
  architecture: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Article {
  id: string;
  title: string;
  category: 'Architecture' | 'Systems' | 'Design' | 'Venture';
  publishedDate: string;
  readTime: string;
  summary: string;
  content: string[];
  tags: string[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
}
