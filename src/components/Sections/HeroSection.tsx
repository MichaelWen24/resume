import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {heroData} from '../../data/profile';
import {SectionId} from '../../data/sections';
import Section from '../Layout/Section';
import Socials from '../Socials';

const HeroSection: FC = memo(() => {
  const {imageSrc, name, eyebrow, description, highlights, actions} = heroData;

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex min-h-[720px] w-full items-end overflow-hidden sm:h-screen sm:items-center">
        <div className="absolute inset-0 z-0">
          <Image alt="" className="object-cover" fill placeholder="blur" priority sizes="100vw" src={imageSrc} />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/35" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-slate-950 via-transparent to-slate-950/20" />
        <div className="relative z-10 mx-auto w-full max-w-screen-xl px-6 pb-16 pt-28 sm:px-10 sm:py-32 lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-orange-300 sm:text-sm">
              <span className="h-px w-10 bg-orange-400" />
              {eyebrow}
            </div>
            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl lg:text-8xl">{name}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">{description}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {highlights?.map(highlight => (
                <span
                  className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-slate-100 backdrop-blur"
                  key={highlight}>
                  {highlight}
                </span>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              {actions.map(({href, text, primary, Icon}) => (
                <a
                  className={classNames(
                    'flex items-center gap-x-2 rounded-full px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-slate-950 sm:text-base',
                    primary
                      ? 'bg-orange-500 text-white hover:bg-orange-400'
                      : 'border border-white/30 bg-white/5 text-white hover:bg-white/15',
                  )}
                  download={primary && href.split('/').pop()}
                  href={href}
                  key={text}>
                  {text}
                  {Icon && <Icon className="h-5 w-5" />}
                </a>
              ))}
              <div className="ml-1 flex gap-x-3 text-slate-200">
                <Socials />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
});

HeroSection.displayName = 'HeroSection';
export default HeroSection;
