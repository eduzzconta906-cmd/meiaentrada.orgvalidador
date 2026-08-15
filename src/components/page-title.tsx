export function PageTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <>
      <h1 className="text-3xl leading-tight font-extrabold text-brand sm:text-4xl">
        {title}
        {subtitle ? (
          <span className="text-2xl font-bold sm:text-3xl"> {subtitle}</span>
        ) : null}
      </h1>
      <div className="mt-4 h-1.5 w-4/5 bg-brand" />
    </>
  );
}
