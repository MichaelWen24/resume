import cats from '../images/portfolio/cats.webp';
import cloud from '../images/portfolio/cloud.webp';
import dou1 from '../images/portfolio/dou1.webp';
import RainerRiver from '../images/portfolio/IMG_3108.webp';
import MTrainer from '../images/portfolio/MTRainer.webp';
import pi1 from '../images/portfolio/pi1.webp';
import pi2 from '../images/portfolio/pi2.webp';
import pi3 from '../images/portfolio/pi3.webp';
import {PortfolioItem} from './contentTypes';

export const projectsItems: PortfolioItem[] = [
  {
    company: 'Bot Auto',
    title: 'Full-Stack Web Platform Engineering',
    description:
      'Building new web experiences across the stack, spanning product design, reusable React interfaces, FastAPI services, MySQL data workflows, and AWS observability, with additional contributions to selected in-vehicle features.',
    tags: ['React', 'TypeScript', 'Zustand', 'FastAPI', 'MySQL', 'AWS'],
    image: cloud,
  },
  {
    company: 'Apple',
    title: 'Gutenberg — AppleCare Article Platform',
    description:
      'Contributed to Gutenberg, an AppleCare article management and editing platform, by developing new AI Assistant capabilities and expanding application logging for stronger observability and troubleshooting.',
    tags: ['React', 'JavaScript', 'AI Assistant', 'Content Management', 'Observability'],
    image: cats,
  },
  {
    company: 'Walmart',
    title: 'Commerce & Data Systems',
    description:
      'Built and delivered the “Featured in Videos” and “Trending on Social” experiences for the Walmart Canada homepage, alongside Node.js and GraphQL services, automated test coverage, and cloud data pipelines.',
    tags: ['React', 'Node.js', 'GraphQL', 'GCP', 'Python'],
    url: 'https://www.walmart.ca/en',
    image: pi3,
  },
  {
    company: 'Content Platform',
    title: 'Eikon Content Management System',
    description:
      'Built a single-page content management application with reusable workflows, modern state management, and automated component testing.',
    tags: ['React', 'Redux', 'SCSS', 'Vite', 'Vitest'],
    image: MTrainer,
  },
  {
    company: 'Content Platform',
    title: 'OneDAM Content Management System',
    description:
      'Integrated reusable components, modernized legacy interfaces, and collaborated with UX designers to improve complex asset-management workflows.',
    tags: ['TypeScript', 'Angular', 'UI/UX', 'Component Design'],
    image: dou1,
  },
  {
    company: 'Web Application',
    title: 'Tag Management System',
    description:
      'Delivered new product features, refreshed the interface, collaborated with UI and QA teams, and added unit coverage for key user flows.',
    tags: ['React', 'JavaScript', 'Redux', 'Jest', 'CSS'],
    image: pi1,
  },
  {
    company: 'Personal Project',
    title: 'The Movie Page',
    description:
      'Created a responsive movie discovery experience with reusable components, API-driven content, category navigation, and pagination.',
    tags: ['React', 'JavaScript', 'Fetch API', 'Responsive UI'],
    url: 'https://awesome-noether-829617.netlify.app/',
    image: pi2,
  },
  {
    company: 'Personal Project',
    title: 'Omnifood',
    description:
      'Designed and developed a polished food-delivery landing page with responsive layouts, visual storytelling, and CSS animation.',
    tags: ['HTML', 'CSS', 'Responsive Design', 'Animation'],
    url: 'https://github.com/MichaelWen24/OmnifoodProject',
    image: RainerRiver,
  },
];
