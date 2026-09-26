import {FC, memo, PropsWithChildren} from 'react';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/contentTypes';

export const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <span className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">{name}</span>
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <SkillBadge key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

const SkillBadge: FC<{skill: SkillType}> = memo(({skill}) => {
  const {name} = skill;

  return (
    <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 ring-1 ring-inset ring-slate-200">
      {name}
    </span>
  );
});

SkillBadge.displayName = 'SkillBadge';
