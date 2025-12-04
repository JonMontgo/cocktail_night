import type { ReactNode } from "react";

export const Section = ({ name, children }: { name: string; children: ReactNode }) => {
  return (
    <div className="flex w-full pt-16 flex-col gap-8" id="section">
      <span className=" w-full text-5xl lg:text-7xl pb-16 font-extrabold text-cyan-900 font-[Dancing_Script]">{name}</span>
      {children}
    </div>
  );
};
