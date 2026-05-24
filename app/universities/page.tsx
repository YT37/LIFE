import Link from "next/link";
import {
  ArrowRight,
  Building,
  GraduationCap,
  Globe2,
  BookOpen,
  Users,
  Award,
  Languages,
  Check,
  Globe,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";

const educaroBenefits = [
  "Native German instructors",
  "100% online with flexible scheduling",
  "Direct pathways to European universities",
  "Co-branded credentials your students can carry into the job market",
];

export const metadata = { title: "Universities & Colleges | LIFE" };

const offerings = [
  {
    icon: BookOpen,
    title: "Co-created curriculum",
    description:
      "Industry-aligned modules co-developed with your faculty. Drop-in courses or full semester integrations.",
  },
  {
    icon: Globe2,
    title: "Global immersion",
    description:
      "Two-week study tours and exchange programs with partner universities in Germany and Spain.",
  },
  {
    icon: Users,
    title: "Visiting faculty network",
    description:
      "Bring in Fortune 500 leaders and PhD researchers to teach guest modules and run capstones.",
  },
  {
    icon: Award,
    title: "Co-branded certifications",
    description:
      "Issue joint credentials that travel, recognized by 25+ employers in our talent pipeline.",
  },
];

export default function UniversitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="For universities & colleges"
        title={<>Strategic partnerships that elevate your campus</>}
        description="LIFE works with universities and colleges to extend your reach, deepen your industry connections, and graduate students who are ready for global careers."
      >
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-[#E03326] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[#E03326]/25 hover:bg-[#c52b20] transition"
        >
          Partner with LIFE <ArrowRight size={16} />
        </Link>
      </PageHero>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {offerings.map((item) => (
              <div
                key={item.title}
                className="flex gap-5 rounded-2xl border border-border bg-background p-7"
              >
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFC629] text-[#1a1530]">
                  <item.icon size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#FFC629] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#1a1530]">
                <Languages size={12} /> Language Partnerships
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                German Language Program with Educaro
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Integrate world-class language education into your curriculum through our partnership with <strong className="text-foreground">Educaro</strong>, Germany&apos;s leading online language platform. Give your students a direct route to European universities and the German workforce.
              </p>

              <ul className="mt-8 space-y-3">
                {educaroBenefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E03326] text-white">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span className="text-sm leading-6 text-muted-foreground">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link
                  href="/programs#german-a1-a2"
                  className="inline-flex items-center gap-2 rounded-full bg-[#4d43b5] px-6 py-3 text-sm font-medium text-white hover:bg-[#3d349a] transition"
                >
                  Learn more about Educaro <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-[#FFC629]/30 to-[#4d43b5]/20 blur-2xl" />
              <div className="relative grid grid-cols-2 gap-4">
                {[
                  { label: "Levels", value: "A1 to C1" },
                  { label: "Format", value: "100% Online" },
                  { label: "Cohorts", value: "Custom for Your Campus" },
                  { label: "Outcomes", value: "European University Placements" },
                ].map((card) => (
                  <div
                    key={card.label}
                    className="rounded-2xl border border-border bg-background p-6 shadow-sm"
                  >
                    <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {card.label}
                    </div>
                    <div className="mt-2 text-base font-semibold leading-snug">{card.value}</div>
                  </div>
                ))}
                <div className="col-span-2 rounded-2xl bg-[#4d43b5] p-6 text-white shadow-lg">
                  <div className="flex items-center gap-3">
                    <Globe size={20} className="text-[#FFC629]" />
                    <span className="text-sm font-medium uppercase tracking-wider text-[#FFC629]">
                      Educaro · Germany
                    </span>
                  </div>
                  <p className="mt-3 text-base leading-6">
                    Trusted by partner institutions to deliver native-speaker German programs end to end.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#E03326] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                <GraduationCap size={12} /> Case study
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                12 colleges. 4,800 students. One curriculum.
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                A consortium of engineering colleges in South India partnered with LIFE to roll out
                a unified industry-readiness program. Within a single academic year, placement
                rates rose by 27% and employer satisfaction scores hit an all-time high.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "12", label: "Partner institutions" },
                { value: "4.8k", label: "Students enrolled" },
                { value: "+27%", label: "Placement rate" },
                { value: "9.2/10", label: "Employer NPS" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-border bg-background p-6"
                >
                  <div className="text-3xl font-semibold gradient-text">{s.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border bg-background p-10 text-center sm:p-14">
            <Building size={32} className="mx-auto text-[#4d43b5]" />
            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              Let&apos;s build the next chapter together
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
              Tell us about your institution. We&apos;ll design a partnership tailored to your students,
              your faculty, and your strategic goals.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#E03326] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[#E03326]/25 hover:bg-[#c52b20] transition"
            >
              Book a discovery call <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
