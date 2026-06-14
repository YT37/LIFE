import { ReactNode } from "react";
import { PageHero } from "@/components/page-hero";

export type LegalSection = {
  heading: string;
  body: ReactNode;
};

export function LegalPage({
  eyebrow,
  title,
  description,
  lastUpdated,
  sections,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  lastUpdated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Last updated: {lastUpdated}
          </p>

          <div className="mt-10 space-y-10">
            {sections.map((section, i) => (
              <div key={section.heading}>
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  <span className="mr-2 text-[#4d43b5]">{i + 1}.</span>
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base [&_a]:text-[#4d43b5] [&_a]:underline [&_li]:ml-1 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_strong]:text-foreground [&_strong]:font-semibold">
                  {section.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
