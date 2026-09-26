import {FC, memo} from 'react';

import type {TimelineItem as TimelineEntryContent} from '../../../data/contentTypes';

const TimelineEntry: FC<{item: TimelineEntryContent}> = memo(({item}) => {
  const {title, date, location, content} = item;
  return (
    <div className="relative border-l border-slate-200 pb-10 pl-7 last:border-transparent last:pb-0">
      <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-orange-500 ring-4 ring-orange-100" />
      <div className="flex flex-col gap-2 pb-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-950">{title}</h2>
          <span className="mt-1 block text-sm font-medium text-slate-600">{location}</span>
        </div>
        <span className="w-fit shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
          {date}
        </span>
      </div>
      <div className="space-y-2 text-sm leading-6 text-slate-600 sm:text-base">{content}</div>
    </div>
  );
});

TimelineEntry.displayName = 'TimelineEntry';
export default TimelineEntry;
