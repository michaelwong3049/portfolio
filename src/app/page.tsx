import { EntryList } from "@/components/entry-list";
import { Section } from "@/components/section";
import { projects, stack, work } from "@/lib/content";

export default function Home() {
  return (
    <div className="rise mt-16 space-y-14 sm:mt-20">
      <p className="max-w-xl text-[0.95rem] leading-relaxed text-muted">
        aspiring swe studying cs at hunter college in nyc. swe intern @ capital
        one working on infra.
      </p>

      <Section label="work">
        <EntryList entries={work} variant="work" />
      </Section>

      <Section label="projects">
        <EntryList entries={projects} variant="project" />
      </Section>

      <Section label="stack">
        <p className="font-mono text-[0.75rem] leading-loose text-muted">
          {stack.join(" · ")}
        </p>
      </Section>
    </div>
  );
}
