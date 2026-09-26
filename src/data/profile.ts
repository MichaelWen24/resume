import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import homeImage from '../images/hero-optimized/IMG_4473-hero.webp';
import mypic from '../images/StevensLinkedInHeadshotsFebruary2020-5.webp';
import {About, ContactSection, ContactType, Hero, HomepageMeta, Social} from './contentTypes';
import {SectionId} from './sections';

export const homePageMeta: HomepageMeta = {
  title: 'Yining Wen | Senior Frontend Engineer',
  description:
    'Senior Frontend Engineer building full-stack web platforms with React, TypeScript, FastAPI, MySQL, and AWS.',
};

export const heroData: Hero = {
  imageSrc: homeImage,
  name: `Yining Wen`,
  eyebrow: 'Senior Frontend Engineer · Houston, TX',
  description: `I'm a Senior Frontend Engineer at Bot Auto, primarily building full-stack web platforms with React and FastAPI while contributing to selected in-vehicle features.`,
  highlights: ['React', 'TypeScript', 'FastAPI', 'MySQL', 'AWS'],
  actions: [
    {
      href: '/assets/YiningWenResume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

export const aboutData: About = {
  profileImageSrc: mypic,
  description: `Software Engineer with 5+ years of experience in frontend and full-stack development, specializing in React and TypeScript. Passionate about building scalable, reliable products and solving complex engineering problems.`,
  aboutItems: [
    {label: 'Location', text: 'Houston, TX', Icon: MapIcon},
    {label: 'Experience', text: '5+ years', Icon: CalendarIcon},
    {label: 'Focus', text: 'Frontend-led web platforms', Icon: SparklesIcon},
    {label: 'Languages', text: 'English & Mandarin', Icon: SparklesIcon},
    {label: 'Study', text: 'Stevens Institute of Technology', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Bot Auto', Icon: BuildingOffice2Icon},
  ],
};

export const contact: ContactSection = {
  headerText: 'Let’s connect.',
  description:
    'Interested in thoughtful product engineering, scalable systems, and conversations about what comes next.',
  items: [
    {
      type: ContactType.Email,
      text: 'wenyn24@gmail.com',
      href: 'mailto:wenyn24@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Houston, TX',
      href: 'https://www.google.com/maps/search/?api=1&query=Houston%2C%20TX',
    },
    {
      type: ContactType.Github,
      text: 'MichaelWen24',
      href: 'https://github.com/MichaelWen24',
    },
  ],
};

export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/MichaelWen24'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/wenyn24/', openInNewTab: true},
];
