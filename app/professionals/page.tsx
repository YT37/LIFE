import { PageHero } from "@/components/page-hero";
import {
  ArrowRight,
  Award,
  Briefcase,
  Globe,
  Layers,
  Lightbulb,
  LineChart,
} from "lucide-react";
import { Link } from "react-router-dom";


const tracks = [
  {
    icon: LineChart,
    title: "Executive education",
    duration: "6–9 weeks",
    description:
      "Strategy, finance, and leadership masterclasses for senior leaders.",
  },
  {
    icon: Layers,
    title: "Technical deep dives",
    duration: "8–12 weeks",
    description:
      "AI engineering, cloud architecture, product analytics, taught by practitioners.",
  },
  {
    icon: Globe,
    title: "Global mobility",
    duration: "12–16 weeks",
    description:
      "Language, cultural fluency, and immigration-ready certifications for moving abroad.",
  },
];

export default function ProfessionalsPage() {
  return (
    <>
      <PageHero
        eyebrow="For professionals"
        title={<>Your next career move, engineered</>}
        description="Executive education, global certifications, and senior peer cohorts, built for professionals with 3+ years of experience who are ready to level up."
      >
        <Link
          to="/programs"
          className="inline-flex items-center gap-2 rounded-full bg-[#4d43b5] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[#4d43b5]/25 hover:bg-[#3d349a] transition"
        >
          Explore tracks <ArrowRight size={16} />
        </Link>
      </PageHero>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {tracks.map((t) => (
              <div
                key={t.title}
                className="rounded-2xl border border-border bg-background p-7 transition hover:border-[#E03326]/30 hover:shadow-lg"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFC629] text-[#1a1530]">
                  <t.icon size={22} />
                </div>
                <div className="mt-5 flex items-center gap-2">
                  <h3 className="text-lg font-semibold">{t.title}</h3>
                  <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                    {t.duration}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {t.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#E03326] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                <Briefcase size={12} /> Outcomes
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                What graduates do next
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                LIFE professional graduates have moved into senior roles at
                global companies, taken international assignments, and launched
                companies that have collectively raised over $80M.
              </p>
            </div>
            <ul className="space-y-4">
              {[
                {
                  icon: Award,
                  title: "Promotions",
                  desc: "78% of grads receive a promotion within 18 months.",
                },
                {
                  icon: Globe,
                  title: "Global moves",
                  desc: "1 in 4 grads transition to roles abroad.",
                },
                {
                  icon: Lightbulb,
                  title: "Founders",
                  desc: "120+ alumni-led companies raised institutional capital.",
                },
              ].map((o) => (
                <li
                  key={o.title}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-background p-5"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FFC629] text-[#1a1530]">
                    <o.icon size={18} />
                  </span>
                  <div>
                    <div className="text-sm font-semibold">{o.title}</div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {o.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
