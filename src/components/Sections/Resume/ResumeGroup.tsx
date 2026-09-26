import {FC, memo, PropsWithChildren} from 'react';

const ResumeGroup: FC<PropsWithChildren<{title: string}>> = memo(({title, children}) => {
  return (
    <div className="grid grid-cols-1 gap-y-6 py-12 first:pt-0 last:pb-0 md:grid-cols-4">
      <div className="col-span-1 flex justify-center md:justify-start">
        <h2 className="h-max text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">{title}</h2>
      </div>
      <div className="col-span-1 flex flex-col md:col-span-3">{children}</div>
    </div>
  );
});

ResumeGroup.displayName = 'ResumeGroup';
export default ResumeGroup;
