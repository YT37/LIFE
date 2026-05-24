"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LifeLogo } from "@/components/life-logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/universities", label: "Universities" },
  { href: "/corporates", label: "Corporates" },
  { href: "/students", label: "Students" },
  { href: "/professionals", label: "Professionals" },
  { href: "/programs", label: "Programs" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" aria-label="LIFE home">
          <LifeLogo className="h-8 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center rounded-full bg-[#4d43b5] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#3d349a]"
          >
            Get Started
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-[#4d43b5] px-5 py-2.5 text-sm font-medium text-white"
              >
                Get Started
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
