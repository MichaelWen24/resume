import {ChevronUpIcon} from '@heroicons/react/24/solid';
import {FC, memo} from 'react';

import {SectionId} from '../../data/sections';

const currentYear = new Date().getFullYear();

const SiteFooter: FC = memo(() => (
  <footer className="relative bg-neutral-950 px-4 pb-7 pt-10 sm:px-8 sm:pb-8 sm:pt-12">
    <div className="absolute inset-x-0 -top-4 flex justify-center sm:-top-6">
      <a
        aria-label="Back to top"
        className="rounded-full bg-neutral-100 p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
        href={`/#${SectionId.Hero}`}>
        <ChevronUpIcon className="h-6 w-6 bg-transparent sm:h-8 sm:w-8" />
      </a>
    </div>
    <p className="text-center text-sm text-neutral-500">© {currentYear} Yining Wen</p>
  </footer>
));

SiteFooter.displayName = 'SiteFooter';
export default SiteFooter;
