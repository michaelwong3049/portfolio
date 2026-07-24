import { profile } from "@/lib/content";

const icons = {
  github: (
    <path d="M8 .5a7.5 7.5 0 0 0-2.37 14.62c.37.07.5-.16.5-.36v-1.3c-2.09.45-2.53-1-2.53-1-.34-.87-.83-1.1-.83-1.1-.68-.47.05-.46.05-.46.75.06 1.15.78 1.15.78.67 1.15 1.76.82 2.19.63.07-.49.26-.82.48-1.01-1.67-.19-3.42-.84-3.42-3.73 0-.82.29-1.5.78-2.02-.08-.19-.34-.96.07-2 0 0 .63-.2 2.07.77a7.1 7.1 0 0 1 3.77 0c1.44-.97 2.07-.77 2.07-.77.41 1.04.15 1.81.07 2 .49.52.78 1.2.78 2.02 0 2.9-1.76 3.54-3.43 3.72.27.23.51.69.51 1.39v2.06c0 .2.13.44.51.36A7.5 7.5 0 0 0 8 .5Z" />
  ),
  linkedin: (
    <path d="M3.4 5.7H.9V15h2.5V5.7ZM2.15 1a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9ZM15 9.7c0-2.7-1.45-3.95-3.38-3.95-1.56 0-2.26.86-2.65 1.46V5.7H6.47c.03.7 0 9.3 0 9.3h2.5V9.8c0-.23.02-.45.08-.61.18-.45.6-.91 1.29-.91.91 0 1.28.69 1.28 1.7V15H15V9.7Z" />
  ),
  mail: (
    <path d="M1.5 3.5h13v9h-13v-9Zm0 0L8 8.75 14.5 3.5" />
  ),
};

const socials = [
  { label: "github", href: profile.github, icon: icons.github, filled: true },
  { label: "linkedin", href: profile.linkedin, icon: icons.linkedin, filled: true },
  {
    label: "email",
    href: `mailto:${profile.email}`,
    icon: icons.mail,
    filled: false,
  },
];

export function Footer() {
  return (
    <footer className="mt-24 flex items-center justify-between border-t border-rule pt-6">
      <div className="flex items-center gap-4">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target={social.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noreferrer"
            aria-label={social.label}
            className="text-muted transition-colors hover:text-accent"
          >
            <svg
              viewBox="0 0 16 16"
              className="h-4 w-4"
              fill={social.filled ? "currentColor" : "none"}
              stroke={social.filled ? "none" : "currentColor"}
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {social.icon}
            </svg>
          </a>
        ))}
      </div>
      <p className="font-mono text-[0.7rem] text-muted">new york, ny</p>
    </footer>
  );
}
