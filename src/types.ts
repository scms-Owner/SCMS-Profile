export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  image: string;
  highlights: string[];
  category: 'construction' | 'manpower' | 'specialized';
}

export interface WorkerCategory {
  id: string;
  name: string;
  bengaliTitle?: string;
  category: string;
  shortDesc: string;
  skills: string[];
  iconName: string;
  image: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  location: string;
  projectType: 'Commercial' | 'Residential' | 'Industrial' | 'Infrastructure' | 'Civil RCC' | 'Institutional';
  category: 'CONSTRUCTION' | 'MANPOWER';
  status: 'COMPLETED' | 'ONGOING';
  shortDesc: string;
  fullDesc: string;
  servicesProvided: string[];
  image: string;
  gallery: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Construction Work' | 'Rod Binding' | 'Steel Fixing' | 'Shuttering' | 'Concrete Work' | 'Manpower Team' | 'Construction Sites' | 'Completed Work';
  image: string;
  location?: string;
}

export interface ConstructionQuoteFormData {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  projectLocation: string;
  projectType: string;
  estimatedProjectSize: string;
  requiredService: string;
  expectedStartDate: string;
  message: string;
  fileName?: string;
}

export interface ManpowerRequestFormData {
  name: string;
  companyName: string;
  phone: string;
  email?: string;
  projectLocation: string;
  workerType: string;
  numberOfWorkers: string;
  expectedJoiningDate: string;
  projectDuration: string;
  workingHours: string;
  accommodation: 'Yes' | 'No';
  food: 'Yes' | 'No';
  additionalRequirement: string;
}
