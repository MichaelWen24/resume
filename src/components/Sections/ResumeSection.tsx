import {FC, memo} from 'react';

import {education, experience, skills} from '../../data/resume';
import {SectionId} from '../../data/sections';
import Section from '../Layout/Section';
import ResumeGroup from './Resume/ResumeGroup';
import {SkillGroup} from './Resume/SkillGroup';
import TimelineEntry from './Resume/TimelineEntry';

const ResumeSection: FC = memo(() => {
  return (
    <Section className="bg-slate-50" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y divide-slate-200">
        <ResumeGroup title="Education">
          {education.map((item, index) => (
            <TimelineEntry item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeGroup>
        <ResumeGroup title="Work">
          {experience.map((item, index) => (
            <TimelineEntry item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeGroup>
        <ResumeGroup title="Skills">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
        </ResumeGroup>
      </div>
    </Section>
  );
});

ResumeSection.displayName = 'ResumeSection';
export default ResumeSection;
