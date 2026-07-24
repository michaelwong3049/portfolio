export function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-rule pt-6 md:flex md:gap-10">
      <h2 className="mb-5 shrink-0 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted md:mb-0 md:w-24">
        {label}
      </h2>
      <div className="min-w-0 flex-1">{children}</div>
    </section>
  );
}
