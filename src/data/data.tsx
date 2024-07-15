import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import pi3 from '../images/portfolio/pi3.jpg';
import fixedBG from '../images/IMG_1766.jpeg';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import homeImage from '../images/IMG_2565.jpeg';
import dou1 from '../images/portfolio/dou1.jpg';
import RainerRiver from '../images/portfolio/IMG_3108.jpeg';
import MTrainer from '../images/portfolio/MTRainer.jpeg';
import pi1 from '../images/portfolio/pi1.jpg';
import pi2 from '../images/portfolio/pi2.jpg';
import mypic from '../images/StevensLinkedInHeadshotsFebruary2020-5.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume ',
  description: "Site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: homeImage,
  name: `I'm Yining Wen.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Front End Software Engineer</strong>, currently working at{' '}
        <strong className="text-stone-100">Apple</strong> helping build a modern content management system.
      </p>
      {/* <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Muay Thai</strong>,
        plucking my <strong className="text-stone-100">banjo</strong>, or exploring beautiful
        <strong className="text-stone-100">Vancouver Island</strong>.
      </p> */}
    </>
  ),
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

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: mypic,
  description: `Experienced front-end developer with more than three years of expertise in React.js, JavaScript, TypeScript, Angular, HTML, and CSS. A collaborative team player, consistently delivering innovative solutions to drive business success.`,
  aboutItems: [
    {label: 'Location', text: 'Austin, TX', Icon: MapIcon},
    {label: 'Age', text: '30', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Chinese', Icon: FlagIcon},
    {label: 'Interests', text: 'Travel', Icon: SparklesIcon},
    {label: 'Study', text: 'Stevens Institute of Technology', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Apple via Silicon, Inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Chinese(Mandarin)',
        level: 10,
      },
      {
        name: 'English',
        level: 8,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'JavaScript',
        level: 8,
      },
      {
        name: 'HTML',
        level: 8,
      },
      {
        name: 'CSS',
        level: 8,
      },
      {
        name: 'Typescript',
        level: 6,
      },
      {
        name: 'Angular',
        level: 6,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Content Management System, Eikon',
    description:
      "Eikon is a single-page application, it's a content management system. Eikon is built with JavaScript, React.js, React Hooks, Redux, SCSS, and Ant-design, configured by Vite, partially tested by Vitest and React testing library.",
    url: '',
    image: MTrainer,
  },
  {
    title: 'Content Management System, OneDAM',
    description:
      'Integrated reusable components using TypeScript and Angular.js, revamped outdated components, and fixed bugs. Collaborated closely with UX designers to enhance layout design and improve user experience.',
    url: '',
    image: dou1,
  },
  {
    title: 'Tag Management System',
    description:
      'Integrated new features using JavaScript, React.js, Redux. Revamped the styling of the website with HTML and CSS. Worked closely with UI team and QA team to validate new features and fix bugs. Used Jest to write simple unit test cases for new features.',
    url: '',
    image: pi1,
  },
  {
    title: 'The Movie Page',
    description:
      'Used JavaScript and React.js to build reusable components to display each movie. Implemented Fetch API to retrieve and process data from the server. Developed navigation functions to allow users choose different movie categories or pages',
    url: 'https://awesome-noether-829617.netlify.app/',
    image: pi2,
  },
  {
    title: 'Omnifood',
    description:
      'Designed the front-end home page for a food delivery website. Used HTML to implement the structure. Used CSS to build high-level animation effects on pictures and decorated the entire page with effects.',
    url: '',
    image: RainerRiver,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Aug 2018 - May 2020',
    location: 'Stevens Institute of Technology',
    title: 'M.S. in Computer Science',
    content: <p></p>,
  },
  {
    date: 'Sep 2012 - Jun 2016',
    location: 'Changchun University of Technology',
    title: 'B.S. in Computer Science And Technology',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Jul 2021 - Present',
    location: 'UI Developer Contractor',
    title: 'Apple',
    content: (
      <>
        <p className="mb-2">
          &#x2022; Used JavaScript, Redux, SCSS, and React.js to develop a new content management system to replace the
          old Adobe solution. Developed key features such as secure mode, tag modal, topic references, upload function,
          publish, and declassify.
        </p>
        <p className="mb-2">
          &#x2022; Built new web pages for users to upload and manage localized assets. Optimized the application by
          revamping the interface, and refactoring the code for clarity. Achieved a 30% reduction in build size through
          the replacement of inefficient packages.
        </p>
        <p className="mb-2">
          &#x2022; Worked closely with UX designers to enhance layout design. Consistently provided assistance to peers
          in resolving issues and bugs.
        </p>
        <p>
          &#x2022; Improved the user experience by upgrading React.js to version 18, eliminating unnecessary API calls,
          and reducing re-render times by 60%.
        </p>
      </>
    ),
  },
  {
    date: 'Dec 2020 - Present',
    location: 'UI Developer',
    title: 'Silicon, Inc.',
    content: (
      <>
        <p className="mb-2">
          &#x2022; Worked with clients to develop features, and reusable components using React.js and HTML. Refactored
          and improved old components with React Hooks, ES6. Decorated new layouts and animations using CSS. Developed
          responsive design using CSS Media Queries.
        </p>
        <p>
          &#x2022; Participated in the Software Development Life Cycle, including requirement analysis, coding, testing,
          and maintenance.
        </p>
      </>
    ),
  },
  {
    date: 'Jul 2020 - Nov 2020',
    location: 'UI Developer',
    title: 'Global Resource & Technology Development Inc.',
    content: (
      <>
        <p className="mb-2">
          &#x2022; Implemented company website using WordPress. Designed and developed the website structure. Built
          slides using selected pictures and WordPress plugins. Worked on the SEO, improved the presence of the website
          by 30%.
        </p>
        <p>
          &#x2022; Developed an interactive home page using React.js, JavaScript, and styled it with CSS. Collaborated
          with product and design teams on requirement gathering, roadmap planning. Worked closely with the development
          team to transfer high-level requirements to maintainable code.
        </p>
      </>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: fixedBG,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'I am looking forward to hearing from you!',
  items: [
    {
      type: ContactType.Email,
      text: 'wenyn24@gmail.com',
      href: 'mailto:wenyn24@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Austin, TX',
      href: 'https://www.google.ca/maps/place/Austin,+TX/@30.3076576,-97.920549,11z/data=!3m1!4b1!4m6!3m5!1s0x8644b599a0cc032f:0x5d9b464bd469d57a!8m2!3d30.267153!4d-97.7430608!16zL20vMHZ6bQ?entry=ttu',
    },
    {
      type: ContactType.Instagram,
      text: '@michaelynwen',
      href: 'https://www.instagram.com/michaelynwen/',
    },
    {
      type: ContactType.Github,
      text: 'MichaelWen24',
      href: 'https://github.com/MichaelWen24',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/MichaelWen24'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: ''},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/wenyn24/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/michaelynwen/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
