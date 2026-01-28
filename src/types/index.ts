export interface ServiceOffering {
  title: string;
  description: string;
  icon?: string;
  features?: string[];
}

export interface CaseStudy {
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  outcome: string;
  technologies?: string[];
}

export interface Technology {
  name: string;
  category: string;
  description?: string;
}

export interface DataCapability {
  id: string;
  title: string;
  description: string;
  services: ServiceOffering[];
  technologies?: Technology[];
  caseStudies?: CaseStudy[];
}

export interface Partnership {
  name: string;
  logo?: string;
  description?: string;
  tier?: 'Premier' | 'Advanced' | 'Partner';
}
