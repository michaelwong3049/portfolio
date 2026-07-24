export const profile = {
  name: "michael wong",
  email: "michaelwong3049@gmail.com",
  resume: "/michael-wong-resume.pdf",
  github: "https://github.com/michaelwong3049",
  linkedin: "https://www.linkedin.com/in/michaelwong44",
};

export type Entry = {
  title: string;
  href?: string;
  org?: string;
  orgHref?: string;
  meta: string;
};

export const work: Entry[] = [
  {
    title: "wrote rust integration tests and emulated azure key vault locally on kubernetes",
    org: "Capital One",
    orgHref: "https://www.capitalone.com",
    meta: "summer 2026 — rust, kubernetes, docker, azure, jenkins",
  },
  {
    title: "instrumented prometheus and grafana monitoring across containerized services",
    org: "Meta & MLH Fellowship",
    orgHref: "https://fellowship.mlh.io",
    meta: "summer 2025 — docker, prometheus, grafana, nginx",
  },
  {
    title: "led four interns building a telemetry pipeline for AuriStorFS server health",
    org: "AuriStor",
    orgHref: "https://www.auristor.com",
    meta: "spring 2025 — go, typescript, prometheus",
  },
];

export const projects: Entry[] = [
  {
    title: "real-time backlighting for video, 97ms → 6ms per frame on the gpu",
    org: "backlight simulator",
    href: "https://github.com/michaelwong3049/backlight-simulator",
    meta: "typescript, webgpu / wgsl, canvas api, jest",
  },
  {
    title: "hospital whiteboards replaced by live transcription and summaries",
    org: "echohealth",
    href: "https://github.com/michaelwong3049/EchoHealth",
    meta: "typescript, next.js",
  },
  {
    title: "economic simulation of how a population reacts to policy before it ships",
    org: "replicarria",
    href: "https://github.com/michaelwong3049/replicarria",
    meta: "typescript",
  },
  {
    title: "crawls hunter college course data into a mongodb cluster",
    org: "web crawler",
    href: "https://github.com/michaelwong3049/web-crawler",
    meta: "go, mongodb",
  },
];

export const stack = [
  "typescript",
  "rust",
  "go",
  "java",
  "python",
  "c++",
  "react / next.js",
  "spring boot",
  "postgres",
  "kubernetes",
  "docker",
  "aws",
  "azure",
  "prometheus",
  "grafana",
];
