import { PageHero } from "@/components/page-hero";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Target,
  TrendingUp,
  Users2,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";


const services = [
  {
    icon: Workflow,
    title: "Team upskilling",
    description:
      "Cohort-based reskilling programs in AI, product, leadership, and language.",
  },
  {
    icon: Target,
    title: "Talent pipeline",
    description:
      "Hire from a curated pool of LIFE-trained graduates pre-screened to your roles.",
  },
  {
    icon: BarChart3,
    title: "Outcomes dashboards",
    description:
      "Track learner engagement, skill uplift, and dollar ROI in one place.",
  },
];

export default function CorporatesPage() {
  return (
    <>
      <PageHero
        eyebrow="For corporate partners"
        title={<>Build teams that move faster, measurably</>}
        description="LIFE designs and delivers outcome-driven learning programs for fast-growing companies and global enterprises. Every program is tied to a metric your CFO cares about."
      >
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-[#4d43b5] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[#4d43b5]/25 hover:bg-[#3d349a] transition"
        >
          Talk to enterprise team <ArrowRight size={16} />
        </Link>
      </PageHero>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-border bg-background p-7 transition hover:border-[#4d43b5]/30 hover:shadow-lg"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFC629] text-[#1a1530]">
                  <s.icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              {[
                {
                  icon: TrendingUp,
                  value: "3.4×",
                  label: "ROI on training spend",
                },
                { icon: Users2, value: "92%", label: "Cohort completion rate" },
                {
                  icon: Target,
                  value: "<6mo",
                  label: "Time to measurable uplift",
                },
                { icon: BarChart3, value: "40+", label: "Skills tracked" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-border bg-background p-6"
                >
                  <s.icon size={18} className="text-[#E03326]" />
                  <div className="mt-3 text-2xl font-semibold gradient-text">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#FFC629] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#1a1530]">
                <Building2 size={12} /> Why teams choose LIFE
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Learning that ties back to the P&amp;L
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                We build the program around your business outcome (faster
                onboarding, lower attrition, higher revenue per engineer) and
                instrument every learner journey so you can prove the impact.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#4d43b5] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[#4d43b5]/25 hover:bg-[#3d349a] transition"
              >
                Get a custom proposal <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
