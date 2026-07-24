import type { Entry } from "@/lib/content";

const linkClass =
  "border-b border-rule pb-px transition-colors hover:border-accent hover:text-accent";

function Anchor({
  href,
  children,
  className = linkClass,
}: {
  href: string;
  children: string;
  className?: string;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  );
}

export function EntryList({
  entries,
  variant,
}: {
  entries: Entry[];
  variant: "work" | "project";
}) {
  return (
    <ul className="space-y-6">
      {entries.map((entry) => (
        <li key={entry.org ?? entry.title} className="group">
          <p className="text-[0.95rem] leading-relaxed">
            {variant === "work" ? (
              <>
                {entry.title}
                {entry.org && (
                  <>
                    {" at "}
                    {entry.orgHref ? (
                      <Anchor
                        href={entry.orgHref}
                        className="font-semibold border-b border-rule pb-px transition-colors hover:border-accent hover:text-accent"
                      >
                        {entry.org}
                      </Anchor>
                    ) : (
                      <span className="font-semibold">{entry.org}</span>
                    )}
                  </>
                )}
              </>
            ) : (
              <>
                {entry.href && entry.org ? (
                  <Anchor href={entry.href}>{entry.org}</Anchor>
                ) : (
                  entry.org
                )}
                <span className="text-muted">{" — "}</span>
                {entry.title}
              </>
            )}
          </p>
          <p className="mt-1.5 font-mono text-[0.75rem] text-muted">
            {entry.meta}
          </p>
        </li>
      ))}
    </ul>
  );
}
