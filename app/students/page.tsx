import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Rocket,
  ClipboardCheck,
  Users,
  Briefcase,
  Languages,
  Check,
  Globe,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const metadata = { title: "Students | LIFE" };

const journey = [
  {
    icon: Compass,
    step: "01",
    title: "Discover",
    description: "Take our 10-minute career fit quiz and meet a mentor in your field.",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Learn",
    description: "Enroll in live cohorts taught by working professionals from leading companies.",
  },
  {
    icon: Briefcase,
    step: "03",
    title: "Apply",
    description: "Ship a capstone project, get reviewed by hiring managers, build a portfolio.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch",
    description: "Interview directly with our partner companies. Average offer in 8 weeks.",
  },
];

const educaroFeatures = [
  "Native German instructors",
  "100% online, learn at your own pace",
  "All levels (A1 to C1)",
  "Placement assistance into European universities",
];

export default function StudentsPage() {
  return (
    <>
      <PageHero
        eyebrow="For students"
        title={<>Launch Your Career with Confidence</>}
        description="Gain the skills, knowledge, and connections you need to stand out in the job market. Career-focused programs designed to bridge the gap between education and employment."
      >
        <Link
          href="/programs"
          className="inline-flex items-center gap-2 rounded-full bg-[#E03326] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[#E03326]/25 hover:bg-[#c52b20] transition"
        >
          Browse Programs <ArrowRight size={16} />
        </Link>
      </PageHero>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((j) => (
              <div
                key={j.step}
                className="relative rounded-2xl border border-border bg-background p-6"
              >
                <span className="absolute right-4 top-4 text-xs font-mono text-muted-foreground">
                  {j.step}
                </span>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFC629] text-[#1a1530]">
                  <j.icon size={20} />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{j.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{j.description}</p>
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
                <Languages size={12} /> Featured for Students
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Learn German, Study in Europe
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Through our partnership with <strong className="text-foreground">Educaro</strong>, students access live German courses taught by native instructors and structured pathways into German universities and the European workforce.
              </p>

              <ul className="mt-8 space-y-3">
                {educaroFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E03326] text-white">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span className="text-sm leading-6 text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/programs#german-a1-a2"
                  className="inline-flex items-center gap-2 rounded-full bg-[#4d43b5] px-6 py-3 text-sm font-medium text-white hover:bg-[#3d349a] transition"
                >
                  Explore German Program <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#4d43b5] bg-background px-6 py-3 text-sm font-medium text-[#4d43b5] hover:bg-[#4d43b5] hover:text-white transition"
                >
                  Talk to an advisor
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-[#FFC629]/30 to-[#4d43b5]/20 blur-2xl" />
              <div className="relative grid grid-cols-2 gap-4">
                {[
                  { label: "Levels", value: "A1 to C1" },
                  { label: "Format", value: "100% Online" },
                  { label: "Pace", value: "Flexible Scheduling" },
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
                    Bridging students from South Asia into German universities and the European workforce.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#FFC629] p-10 sm:p-14 text-[#1a1530]">
            <Users size={28} className="text-[#4d43b5]" />
            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              Join a community of learners worldwide
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#1a1530]/80">
              From peer study groups to alumni meetups, you never learn alone at LIFE. Build the network that builds your career.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
