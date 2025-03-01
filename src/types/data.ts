// types/data.ts
export interface AboutMe {
    name: string;
    title: string;
    bio: string[];
    email: string;
    linkedin: string;
    github: string;
    instagram: string;
    twitter: string;
    whatsapp: string;
  }
  
  export interface Now {
    status: string;
    cta: string;
  }

  export interface SkillCategory {
    category: string;
    items: string[];
  }
  
  export interface WorkExperience {
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    responsibilities: string[];
  }
  
  export interface Project {
    title: string;
    description: string;
    techStack: string[];
    github: string;
    liveUrl: string;
    coverImage: string;
    id: number;
    category: string;
  }
  
  export interface Certificate {
    title: string;
    issuer: string;
    date: string;
    credentialUrl: string;
    category: string;
  }
  
  export interface PortfolioData {
    aboutMe: AboutMe;
    now: Now; // Add the 'now' property
    skills: SkillCategory[];
    workExperience: WorkExperience[];
    projects: Project[];
    certificates: Certificate[];
    

  }