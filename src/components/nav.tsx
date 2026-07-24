"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/lib/content";

const links = [
  { label: "work", href: "/" },
  { label: "about", href: "/about" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
      <Link
        href="/"
        className="text-[0.95rem] tracking-tight transition-colors hover:text-accent"
      >
        {profile.name}
      </Link>

      <nav className="flex items-baseline gap-5 font-mono text-[0.8rem]">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={
              pathname === link.href
                ? "text-accent"
                : "text-muted transition-colors hover:text-foreground"
            }
          >
            {link.label}
          </Link>
        ))}
        <a
          href={`mailto:${profile.email}`}
          className="text-muted transition-colors hover:text-foreground"
        >
          contact
        </a>
        <a
          href={profile.resume}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-1.5 border-b border-rule pb-px text-muted transition-colors hover:border-accent hover:text-foreground"
        >
          resume
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            className="h-3 w-3 transition-transform group-hover:translate-y-px"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M8 2v9m0 0 3.5-3.5M8 11 4.5 7.5M2.5 13.5h11" />
          </svg>
        </a>
      </nav>
    </header>
  );
}
