export interface Project {
  id: string;
  title: string;
  category: 'residential' | 'corporate' | 'commercial' | 'hospitality';
  location: string;
  image: string;
  beforeImage?: string;
  size: string;
  budget: string;
  description: string;
  features: string[];
}

export interface Competency {
  id: string;
  title: string;
  description: string;
  image: string;
  details: string;
  keySpecs: string[];
  icon: string;
}

export interface ConsultSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  projectType: string;
  details: string;
  budget: string;
  areaSize: string;
  date: string;
  status: 'Pending' | 'Scheduled' | 'Completed';
}

export interface Review {
  id: string;
  clientName: string;
  role: string;
  company?: string;
  rating: number;
  comment: string;
  date: string;
}
