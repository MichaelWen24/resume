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
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import homeImage from '../images/IMG_4473.jpeg';
// import pi3 from '../images/portfolio/pi3.jpg';
import fixedBG from '../images/IMG_4638.jpeg';
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
  title: 'Yining Wen Resume ',
  description: "Yining Wen's Resume",
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
        I'm a <strong className="text-stone-100">Full Stack Engineer</strong>, currently working at{' '}
        <strong className="text-stone-100">Walmart</strong> helping upgrade the main website.
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
  description: `Experienced software engineer with four years of expertise in front‑end technologies including React.js, JavaScript, TypeScript, Angular, HTML, and CSS, along with hands‑on experience in back‑end development using Node.js and working with RESTful APIs, GraphQL, SQL/NoSQL databases, and cloud-based deployment. A collaborative team player who consistently delivers scalable and innovative solutions to drive business success.`,
  aboutItems: [
    {label: 'Location', text: 'Redmond, WA', Icon: MapIcon},
    {label: 'Age', text: '31', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Chinese', Icon: FlagIcon},
    {label: 'Interests', text: 'Travel', Icon: SparklesIcon},
    {label: 'Study', text: 'Stevens Institute of Technology', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Silicon, Inc.', Icon: BuildingOffice2Icon},
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
    name: 'Back-End development',
    skills: [
      {
        name: 'Node.js',
        level: 7,
      },
      {
        name: 'RESTful API',
        level: 6,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Front-End development',
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
        level: 7,
      },
      {
        name: 'Angular',
        level: 5,
      },
    ],
  },
  {
    name: 'DevOps',
    skills: [
      {
        name: 'Docker',
        level: 4,
      },
      {
        name: 'Kubernetes',
        level: 4,
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
    image: MTrainer,
  },
  {
    title: 'Content Management System, OneDAM',
    description:
      'Integrated reusable components using TypeScript and Angular.js, revamped outdated components, and fixed bugs. Collaborated closely with UX designers to enhance layout design and improve user experience.',
    image: dou1,
  },
  {
    title: 'Tag Management System',
    description:
      'Integrated new features using JavaScript, React.js, Redux. Revamped the styling of the website with HTML and CSS. Worked closely with UI team and QA team to validate new features and fix bugs. Used Jest to write simple unit test cases for new features.',
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
    url: 'https://github.com/MichaelWen24/OmnifoodProject',
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
    date: 'Mar 2025 - Present',
    location: 'Full-Stack Engineer',
    title: 'Walmart.',
    content: (
      <>
        <p className="mb-2">
          &#x2022; Developed modular and reusable components for the Walmart website using React.js, enhancing front‑end
          flexibility and maintainability. Built and optimized microservices in Node.js and TypeScript.
        </p>
        <p className="mb-2">
          &#x2022; Implemented unit testing with Jest and React testing library, ensuring robust coverage. Provided
          RESTful APIs and occasional GraphQL support for varied data needs.
        </p>
        <p>
          &#x2022; Collaborated within an Agile environment, coordinating with product, business, and automation teams
          to deliver end-to-end solutions.
        </p>
      </>
    ),
  },
  {
    date: 'Jul 2021 - Oct 2024',
    location: 'Front-End Engineer Contractor via Silicon, Inc',
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
    location: 'Software Engineer',
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
    location: 'Software Engineer',
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
      text: 'Redmond, WA',
      href: 'https://maps.app.goo.gl/nArQ3WzU2BnAhsiGA',
    },
    // {
    //   type: ContactType.Instagram,
    //   text: '@michaelynwen',
    //   href: 'https://www.instagram.com/michaelynwen/',
    // },
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
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/wenyn25/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/michaelynwen/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
