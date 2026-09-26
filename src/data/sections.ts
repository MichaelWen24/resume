export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Projects: 'projects',
  Resume: 'resume',
  Skills: 'skills',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];
