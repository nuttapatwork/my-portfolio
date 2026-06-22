export interface Profile {
  name: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  location: string;
  skills: string[];
  image?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  skills: string[];
  location: string;
  type: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  url?: string;
  github?: string;
  images?: string[];
}

