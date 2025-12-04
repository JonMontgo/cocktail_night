export const MenuItem = ({ name, description }: { name: string; description: string }) => {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-2xl font-bold text-cyan-950 font-[Playwrite_NO]">{name}</span>
      <span className="text-lg font-thin">{description}</span>
    </div>
  );
};
