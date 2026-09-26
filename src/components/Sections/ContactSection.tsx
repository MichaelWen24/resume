import {EnvelopeIcon, MapPinIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import {FC, memo} from 'react';

import {ContactType, ContactValue} from '../../data/contentTypes';
import {contact} from '../../data/profile';
import {SectionId} from '../../data/sections';
import GithubIcon from '../Icon/GithubIcon';
import Section from '../Layout/Section';

const ContactValueMap: Record<ContactType, ContactValue> = {
  [ContactType.Email]: {Icon: EnvelopeIcon, srLabel: 'Email'},
  [ContactType.Location]: {Icon: MapPinIcon, srLabel: 'Location'},
  [ContactType.Github]: {Icon: GithubIcon, srLabel: 'Github'},
};

const ContactSection: FC = memo(() => {
  const {headerText, description, items} = contact;
  return (
    <Section className="bg-slate-900" sectionId={SectionId.Contact}>
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-y-8 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="rounded-2xl bg-orange-500/10 p-3 ring-1 ring-orange-400/20">
            <EnvelopeIcon className="h-7 w-7 text-orange-400" />
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{headerText}</h2>
          <p className="max-w-xl leading-7 text-slate-400">{description}</p>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className="order-1 col-span-1 flex flex-col gap-y-4 md:order-2">
            <dl className="flex flex-wrap justify-center gap-3 text-base text-slate-400">
              {items.map(({type, text, href}) => {
                const {Icon, srLabel} = ContactValueMap[type];
                return (
                  <div key={srLabel}>
                    <dt className="sr-only">{srLabel}</dt>
                    <dd className="flex items-center">
                      <a
                        className={classNames(
                          'flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-slate-300 transition hover:border-orange-400/40 hover:text-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500',
                          {'hover:bg-white/10': href},
                        )}
                        href={href}
                        rel="noreferrer"
                        target="_blank">
                        <Icon aria-hidden="true" className="h-4 w-4 flex-shrink-0 sm:h-5 sm:w-5" />
                        <span className="ml-2.5 text-sm sm:text-base">{text}</span>
                      </a>
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </div>
    </Section>
  );
});

ContactSection.displayName = 'ContactSection';
export default ContactSection;
