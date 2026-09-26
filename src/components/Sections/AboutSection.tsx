import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {aboutData} from '../../data/profile';
import {SectionId} from '../../data/sections';
import Section from '../Layout/Section';

const AboutSection: FC = memo(() => {
  const {profileImageSrc, description, aboutItems} = aboutData;
  return (
    <Section className="bg-white" sectionId={SectionId.About}>
      <div className={classNames('grid grid-cols-1 gap-10', {'md:grid-cols-4 md:items-center': !!profileImageSrc})}>
        {!!profileImageSrc && (
          <div className="col-span-1 flex justify-center md:justify-start">
            <div className="relative aspect-[4/5] w-36 overflow-hidden rounded-2xl bg-slate-100 shadow-lg shadow-slate-900/10 sm:w-40">
              <Image alt="Yining Wen" className="h-full w-full object-cover" sizes="160px" src={profileImageSrc} />
            </div>
          </div>
        )}
        <div className={classNames('col-span-1 flex flex-col gap-y-8', {'md:col-span-3': !!profileImageSrc})}>
          <div className="flex flex-col gap-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">About</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Product-minded engineering, from interface to infrastructure.
            </h2>
            <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
          </div>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {aboutItems.map(({label, text, Icon}, idx) => (
              <li
                className="col-span-1 flex items-start gap-x-3 rounded-xl bg-slate-50 p-4 ring-1 ring-slate-100"
                key={idx}>
                {Icon && <Icon className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />}
                <span className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</span>
                  <span className="text-sm font-medium text-slate-700">{text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
});

AboutSection.displayName = 'AboutSection';
export default AboutSection;
