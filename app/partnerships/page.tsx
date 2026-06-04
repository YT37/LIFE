import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Building,
  Check,
  ClipboardCheck,
  Compass,
  Globe,
  Globe2,
  GraduationCap,
  HeartHandshake,
  Languages,
  MapPin,
  Tag,
  TrendingUp,
  Users,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";

export default function PartnershipsPage() {
  return (
    <>
      <PageHero
        eyebrow="LIFE × Educaro Partnership"
        title={
          <>
            Study, Train and Build Your{" "}
            <span className="gradient-text">Future</span> in Germany
          </>
        }
        description="Through the partnership between LIFE and Educaro, students gain access to a structured pathway to Germany — from language training and educational guidance to visa preparation and relocation support."
      >
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#E03326] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[#E03326]/25 transition hover:bg-[#c52b20]"
          >
            Start Your Journey <ArrowRight size={16} />
          </Link>
          <a
            href="#pathway"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#4d43b5] bg-white/70 px-6 py-3 text-sm font-medium text-[#4d43b5] backdrop-blur transition hover:bg-[#4d43b5] hover:text-white"
          >
            See the Pathway
          </a>
        </div>
      </PageHero>

      <Includes />
      <AboutEducaro />
      <WhyEducaro />
      <WhyGermany />
      <Pathway />
      <FinalCta />
    </>
  );
}

const includes = [
  {
    icon: Languages,
    title: "German language training",
    description: "Structured courses from A1 to B2, calibrated to academic and everyday life.",
  },
  {
    icon: Award,
    title: "Certified instructors",
    description: "Experienced, certified language teachers with proven classroom track records.",
  },
  {
    icon: Compass,
    title: "Personalised guidance",
    description: "One-on-one study and career pathway consultations tailored to your goals.",
  },
  {
    icon: BookOpen,
    title: "University applications",
    description: "End-to-end help selecting programmes and submitting strong applications.",
  },
  {
    icon: ClipboardCheck,
    title: "Student visa support",
    description: "Documentation, embassy prep, and timeline planning for your student visa.",
  },
  {
    icon: Building,
    title: "Accommodation help",
    description: "Assistance finding suitable housing before you fly and after you arrive.",
  },
  {
    icon: Globe,
    title: "Cultural preparation",
    description: "Briefings and orientation so you arrive ready for life in Germany.",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing transition support",
    description: "Mentorship and check-ins throughout your move and first year abroad.",
  },
];

function Includes() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What&apos;s included"
          title={<>Everything you need to reach Germany</>}
          description="The LIFE × Educaro partnership delivers a complete pathway from your first German class to your first semester abroad."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {includes.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-background p-6 transition hover:-translate-y-1 hover:border-[#4d43b5]/30 hover:shadow-lg"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFC629] text-[#1a1530]">
                <item.icon size={20} />
              </div>
              <h3 className="mt-5 text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutEducaro() {
  return (
    <section className="bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#4d43b5] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
              <Globe2 size={12} /> About Educaro
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              A decade of bridging students to Germany
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Founded in 2014, Educaro supports international students and
              professionals on their pathway to Germany. They combine language
              education, educational consulting, and international mobility
              expertise — preparing participants academically, linguistically,
              and culturally for their next step.
            </p>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              To date, Educaro has supported more than{" "}
              <strong className="text-foreground">2,000 participants</strong>{" "}
              worldwide and works closely with educational institutions,
              employers, and international partners to create sustainable
              opportunities.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "10+", label: "Years of experience" },
              { value: "2,000+", label: "Participants supported" },
              { value: "A1–B2", label: "Language levels offered" },
              { value: "100%", label: "Germany-focused" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-background p-6 shadow-sm"
              >
                <div className="text-3xl font-semibold gradient-text">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const whyEducaro = [
  "More than 10 years of experience in international education and mobility",
  "Over 2,000 participants supported worldwide",
  "Comprehensive support from language preparation to arrival in Germany",
  "Personalised guidance throughout the entire process",
  "Strong network of educational institutions and employers",
  "Focus on long-term success and integration",
];

function WhyEducaro() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why students choose Educaro"
          title={<>A partner students trust</>}
          description="Six reasons learners around the world choose Educaro for their move to Germany."
        />
        <ul className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2">
          {whyEducaro.map((reason) => (
            <li
              key={reason}
              className="flex items-start gap-3 rounded-2xl border border-border bg-background p-5"
            >
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E03326] text-white">
                <Check size={14} strokeWidth={3} />
              </span>
              <span className="text-sm leading-6 text-foreground">
                {reason}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const germanyReasons = [
  {
    icon: GraduationCap,
    title: "High-quality education",
    description:
      "German universities are internationally recognised for academic excellence, research, and innovation.",
    bg: "#E03326",
    iconBg: "#FFC629",
    iconColor: "#E03326",
  },
  {
    icon: Tag,
    title: "Affordable studies",
    description:
      "Many public universities charge little to no tuition fees compared to other top study destinations.",
    bg: "#4d43b5",
    iconBg: "#FFC629",
    iconColor: "#4d43b5",
  },
  {
    icon: Briefcase,
    title: "Strong career outcomes",
    description:
      "Excellent employment prospects across engineering, technology, healthcare, and business sectors.",
    bg: "#FFC629",
    iconBg: "#1a1530",
    iconColor: "#FFC629",
  },
  {
    icon: Users,
    title: "International environment",
    description:
      "A diverse, multicultural society at the heart of Europe with welcoming student cities.",
    bg: "#1a1530",
    iconBg: "#FFC629",
    iconColor: "#1a1530",
  },
  {
    icon: TrendingUp,
    title: "Long-term perspectives",
    description:
      "Graduates may have opportunities to remain and work in Germany after their studies, subject to applicable regulations.",
    bg: "#E03326",
    iconBg: "#FFC629",
    iconColor: "#E03326",
  },
];

function WhyGermany() {
  return (
    <section className="bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Germany?"
          title={<>Opportunity at the heart of Europe</>}
          description="Germany offers excellent opportunities for international students and graduates. Here&apos;s what makes it a top destination."
        />
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {germanyReasons.map((reason) => {
            const isLight = reason.bg === "#FFC629";
            const textColor = isLight ? "#1a1530" : "#ffffff";
            const muted = isLight
              ? "rgba(26,21,48,0.75)"
              : "rgba(255,255,255,0.8)";
            return (
              <div
                key={reason.title}
                className="flex flex-col rounded-3xl p-7 transition hover:-translate-y-1 hover:shadow-2xl"
                style={{ backgroundColor: reason.bg, color: textColor }}
              >
                <div
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: reason.iconBg,
                    color: reason.iconColor,
                  }}
                >
                  <reason.icon size={22} />
                </div>
                <h3 className="mt-6 text-lg font-semibold">{reason.title}</h3>
                <p
                  className="mt-3 text-sm leading-6"
                  style={{ color: muted }}
                >
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const pathway = [
  {
    step: "01",
    icon: Languages,
    title: "German language preparation",
    description:
      "Develop the language skills needed for academic success and everyday life in Germany through structured courses from A1 to B2.",
    included: [
      "Interactive online classes",
      "Small learning groups",
      "Regular progress assessments",
      "Experienced and certified instructors",
      "Individual learning support",
    ],
    accent: "#E03326",
    accentText: "#ffffff",
  },
  {
    step: "02",
    icon: BookOpen,
    title: "Study planning and application support",
    description:
      "Receive personalised guidance in selecting suitable study programmes and preparing university applications.",
    included: [
      "Study pathway consultation",
      "University and programme selection",
      "Application and documentation support",
      "Guidance throughout the admission process",
    ],
    accent: "#4d43b5",
    accentText: "#ffffff",
  },
  {
    step: "03",
    icon: MapPin,
    title: "Visa and relocation support",
    description:
      "Prepare for your move to Germany with practical support and guidance every step of the way.",
    included: [
      "Student visa preparation",
      "Accommodation support",
      "Pre-departure orientation",
      "Cultural preparation",
      "Arrival guidance",
    ],
    accent: "#FFC629",
    accentText: "#1a1530",
  },
];

function Pathway() {
  return (
    <section id="pathway" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Educaro Pathway"
          title={<>Three steps to studying in Germany</>}
          description="A structured journey from your first German lesson to your arrival on a German campus."
        />

        <div className="mt-16 space-y-8">
          {pathway.map((step) => (
            <div
              key={step.step}
              className="grid grid-cols-1 gap-8 rounded-3xl border border-border bg-background p-8 sm:p-10 lg:grid-cols-12 lg:gap-12"
            >
              <div className="lg:col-span-5">
                <div className="flex items-center gap-5">
                  <span className="text-5xl font-semibold gradient-text sm:text-6xl">
                    {step.step}
                  </span>
                  <div
                    className="inline-flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{
                      backgroundColor: step.accent,
                      color: step.accentText,
                    }}
                  >
                    <step.icon size={26} />
                  </div>
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight sm:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                  {step.description}
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="rounded-2xl bg-muted/60 p-6 sm:p-7">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Included
                  </span>
                  <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {step.included.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5"
                      >
                        <span
                          className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                          style={{
                            backgroundColor: step.accent,
                            color: step.accentText,
                          }}
                        >
                          <Check size={11} strokeWidth={3} />
                        </span>
                        <span className="text-sm leading-6 text-foreground">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[#4d43b5] p-10 text-white sm:p-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#FFC629]/30 blur-3xl" />
          <div className="absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-[#E03326]/40 blur-2xl" />
          <div className="relative">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to start your Germany journey?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/85">
              Together, LIFE and Educaro provide the guidance, preparation, and
              support to help students successfully take their next step toward
              studying and building a future in Germany.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FFC629] px-6 py-3 text-sm font-medium text-[#1a1530] transition hover:bg-[#ffd34d]"
              >
                Contact us today <ArrowRight size={16} />
              </Link>
              <Link
                to="/programs"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/40 bg-transparent px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/15"
              >
                Browse programs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
