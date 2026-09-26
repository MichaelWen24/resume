import {ArrowTopRightOnSquareIcon, CodeBracketIcon} from '@heroicons/react/24/outline';
import Image from 'next/image';
import {FC, memo} from 'react';

import {projectsItems} from '../../data/projects';
import {SectionId} from '../../data/sections';
import Section from '../Layout/Section';

const ProjectsSection: FC = memo(() => {
  return (
    <Section className="bg-slate-950" sectionId={SectionId.Projects}>
      <div className="flex flex-col gap-y-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">Selected engineering work</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Products and engineering work
          </h2>
          <p className="mt-4 leading-7 text-slate-400">
            A mix of professional platforms and hands-on projects, presented with implementation details kept at the
            appropriate level.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projectsItems.map((item, index) => (
            <article
              className="group flex min-h-[460px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition duration-300 hover:-translate-y-1 hover:border-orange-400/50 hover:bg-white/[0.07]"
              key={item.title}>
              <div className="relative h-40 overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-800 via-slate-900 to-orange-950">
                {item.image ? (
                  <Image
                    alt=""
                    className="h-full w-full object-cover opacity-75 grayscale-[20%] transition duration-500 group-hover:scale-105 group-hover:opacity-90"
                    placeholder="blur"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    src={item.image}
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <CodeBracketIcon className="h-12 w-12 text-orange-300/70" />
                  </div>
                )}
                <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-slate-950/70 px-2.5 py-1 text-xs font-semibold text-orange-300 backdrop-blur">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">{item.company}</p>
                <h3 className="mt-2 text-xl font-semibold leading-tight text-white">{item.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-6 text-slate-400">{item.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tags?.map(tag => (
                    <span
                      className="rounded-full border border-white/10 bg-slate-900 px-2.5 py-1 text-xs font-medium text-slate-300"
                      key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                {item.url && (
                  <a
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-orange-400/30 px-4 py-2 text-sm font-semibold text-orange-300 transition hover:border-orange-300 hover:bg-orange-400/10 hover:text-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    href={item.url}
                    rel="noreferrer"
                    target="_blank">
                    View project
                    <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
});

ProjectsSection.displayName = 'ProjectsSection';
export default ProjectsSection;
