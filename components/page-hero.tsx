import { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute -top-32 left-1/4 h-72 w-[28rem] rounded-full bg-[#FFC629]/35 blur-3xl" />
      <div className="absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-[#4d43b5]/15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-[#4d43b5]/20 bg-white/80 px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#4d43b5] shadow-sm backdrop-blur">
            {eyebrow}
          </span>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            {description}
          </p>
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
