import {SkillGroup, TimelineItem} from './contentTypes';

export const skills: SkillGroup[] = [
  {
    name: 'Front-End development',
    skills: [
      {name: 'React'},
      {name: 'Next.js'},
      {name: 'Redux'},
      {name: 'Zustand'},
      {name: 'JavaScript'},
      {name: 'HTML'},
      {name: 'CSS'},
      {name: 'Typescript'},
      {name: 'Angular'},
    ],
  },
  {
    name: 'Back-End development',
    skills: [
      {name: 'Node.js'},
      {name: 'FastAPI'},
      {name: 'MySQL'},
      {name: 'RESTful API'},
      {name: 'GraphQL'},
      {name: 'Python'},
      {name: 'Scala'},
    ],
  },
  {
    name: 'Spoken languages',
    skills: [{name: 'Chinese(Mandarin)'}, {name: 'English'}],
  },
  {
    name: 'DevOps',
    skills: [{name: 'AWS'}, {name: 'GCP'}, {name: 'Airflow'}, {name: 'Docker'}, {name: 'Kubernetes'}],
  },
];

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
    date: 'Sep 2026 - Present',
    location: 'Senior Frontend Engineer',
    title: 'Bot Auto',
    content: (
      <>
        <p className="mb-2">
          &#x2022; Develop web platform features across the full stack, building responsive frontend experiences with
          React and backend services with FastAPI.
        </p>
        <p className="mb-2">
          &#x2022; Contribute to the design of new web experiences, translating product requirements into intuitive
          interfaces and reusable React components.
        </p>
        <p className="mb-2">
          &#x2022; Build and maintain MySQL-backed application workflows, connecting frontend experiences with reliable
          backend data services.
        </p>
        <p className="mb-2">
          &#x2022; Implement cloud-based logging on AWS to improve system observability and support production
          troubleshooting.
        </p>
        <p>
          &#x2022; Contribute to selected in-vehicle system features while collaborating across teams in a fast-paced
          startup environment.
        </p>
      </>
    ),
  },
  {
    date: 'Jul 2026 - Sep 2026',
    location: 'Front-End Engineer Contractor via Silicon, Inc',
    title: 'Apple',
    content: (
      <>
        <p className="mb-2">
          &#x2022; Contributed to Gutenberg, an AppleCare article management and editing platform, with a focus on its
          AI Assistant experience.
        </p>
        <p className="mb-2">
          &#x2022; Enhanced AI Assistant observability by adding new logging capabilities, making application behavior
          easier to monitor and troubleshoot.
        </p>
        <p>&#x2022; Developed and integrated new AI Assistant features into article authoring workflows.</p>
      </>
    ),
  },
  {
    date: 'Mar 2025 - Jan 2026',
    location: 'Full-Stack Engineer Contractor via Silicon, Inc',
    title: 'Walmart',
    content: (
      <>
        <p className="mb-2">
          &#x2022; Developed modular and reusable components for the Walmart website using React.js, enhancing front‑end
          flexibility and maintainability. Built and optimized microservices in Node.js and TypeScript. Provided GraphQL
          APIs support for varied data needs.
        </p>
        <p className="mb-2">
          &#x2022; Implemented unit tests with Jest and React Testing Library, and developed E2E (end-to-end) tests
          using Puppeteer to ensure robust coverage and application reliability.
        </p>
        <p className="mb-2">
          &#x2022; Migrated logging infrastructure from Splunk to OpenObserve and managed successful weekly deployments.
        </p>
        <p className="mb-2">
          &#x2022; Collaborated within an Agile environment, coordinating with product, business, and automation teams
          to deliver end-to-end solutions.
        </p>
        <p className="mb-2">
          &#x2022; Built and delivered the “Featured in Videos” and “Trending on Social” experiences for the Walmart
          Canada homepage, integrating customer-facing React components with supporting backend services.
        </p>
        <p>
          &#x2022; Built GCP-based data pipelines using Python, Scala, Spark, and Airflow to enable data-driven
          automation and analytics.
        </p>
      </>
    ),
  },
  {
    date: 'Jul 2021 - Sep 2024',
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
          &#x2022; Built RESTful APIs using Java and Spring Boot to support content operations, improving data
          consistency and backend scalability.
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
    date: 'Jul 2020 - Oct 2020',
    location: 'Software Engineer Intern',
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
