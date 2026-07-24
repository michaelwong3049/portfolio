import type { Metadata } from "next";
import { profile } from "@/lib/content";

export const metadata: Metadata = {
  title: "about — michael wong",
};

const linkClass =
  "border-b border-rule pb-px transition-colors hover:border-accent hover:text-accent";

export default function About() {
  return (
    <div className="rise mt-16 max-w-xl space-y-6 text-[0.95rem] leading-relaxed sm:mt-20">
      <h1 className="text-[0.95rem]">michael wong</h1>

      <p className="text-foreground">
        hi! i study computer science at hunter college in new york. i mostly
        work on gpu rendering, telemetry pipelines, and infrastructure.
      </p>

      <p className="text-foreground">
        right now i&apos;m interning at capital one on their databolt team,
        building out their infrastructure. before that, sre work through the
        meta &amp; mlh fellowship and a go telemetry pipeline at auristor.
      </p>

      <p className="text-foreground">
        outside of that: lifting, pickup basketball, and gaming.
      </p>

      <p className="text-foreground">
        say hi —{" "}
        <a href={`mailto:${profile.email}`} className={linkClass}>
          {profile.email}
        </a>
      </p>
    </div>
  );
}
