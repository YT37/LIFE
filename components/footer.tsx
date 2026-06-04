import { Logo } from "@/components/logo";
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

function SocialIcon({ d, label }: { d: string; label: string }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="text-muted-foreground hover:text-foreground"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={18}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d={d} />
      </svg>
    </a>
  );
}

const socials = [
  {
    label: "LinkedIn",
    d: "M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z",
  },
  {
    label: "Twitter",
    d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "Instagram",
    d: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.74 3.74 0 0 1-1.38-.9 3.74 3.74 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 5.4a4.44 4.44 0 1 0 0 8.88 4.44 4.44 0 0 0 0-8.88zm0 7.32a2.88 2.88 0 1 1 0-5.76 2.88 2.88 0 0 1 0 5.76zm5.65-7.5a1.04 1.04 0 1 1-2.08 0 1.04 1.04 0 0 1 2.08 0z",
  },
  {
    label: "Facebook",
    d: "M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.408.593 24 1.325 24H12.82V14.706h-3.13v-3.624h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.31h3.587l-.467 3.624h-3.12V24h6.116C23.407 24 24 23.408 24 22.676V1.325C24 .593 23.407 0 22.675 0z",
  },
];

const programs = [
  { href: "/programs#german", label: "German Language" },
  { href: "/programs#tech", label: "Tech Careers" },
  { href: "/programs#leadership", label: "Leadership" },
  { href: "/programs#study-abroad", label: "Study Abroad" },
];

const resources = [
  { href: "/blog", label: "Blog" },
  { href: "/success-stories", label: "Success Stories" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="inline-flex" aria-label="LIFE home">
              <Logo className="h-12 w-auto" />
            </Link>
            <p className="mt-4 text-sm leading-6 text-muted-foreground max-w-xs">
              Liberal Institute for Future Education. Bridging gaps between
              current status and future opportunities.
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#4d43b5]">
              Based in TRACE Expert City, Sri Lanka
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Programs</h4>
            <ul className="mt-4 space-y-3">
              {programs.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Resources</h4>
            <ul className="mt-4 space-y-3">
              {resources.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Get in touch</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Bay X, TRACE Expert City, Maradana, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0" />
                <a
                  href="mailto:hello@life.edu.lk"
                  className="hover:text-foreground"
                >
                  hello@life.edu.lk
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0" />
                <span>+94 707 225 225</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-border pt-8 md:flex-row md:items-center">
          <p className="text-xs text-muted-foreground">
            © 2026 LIFE - Liberal Institute for Future Education. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <SocialIcon key={s.label} d={s.d} label={s.label} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
