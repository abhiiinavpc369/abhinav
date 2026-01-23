export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github?: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactMethod {
  label: string;
  value: string;
  icon: string;
  link: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface WhyMeReason {
  title: string;
  icon: string;
  description: string;
}
