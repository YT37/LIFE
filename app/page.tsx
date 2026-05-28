import { SectionHeading } from "@/components/section-heading";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Check,
  Globe,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Quote,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AudienceCards />
      <FeaturedPartnership />
      <WhyChoose />
      <Testimonials />
      <FinalCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-[#FFC629]/40 blur-3xl" />
      <div className="absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-[#4d43b5]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-24 sm:px-6 sm:pt-28 sm:pb-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Bridge Your <span className="gradient-text">Future</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            LIFE is your partner in bridging the gap between your current status
            and future opportunities through education, training, and skill
            development.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 rounded-full bg-[#E03326] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[#E03326]/25 transition hover:bg-[#c52b20]"
            >
              Explore Programs <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#4d43b5] bg-white/70 px-6 py-3 text-sm font-medium text-[#4d43b5] backdrop-blur transition hover:bg-[#4d43b5] hover:text-white"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { value: "100%", label: "Online Learning" },
            { value: "Multiple", label: "Industry Partners" },
            { value: "Global", label: "Placement Opportunities" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-white/70 p-6 text-center shadow-sm backdrop-blur"
            >
              <div className="text-3xl font-semibold gradient-text">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const audiences = [
  {
    icon: GraduationCap,
    title: "Universities & Colleges",
    tagline: "Strategic Partnerships",
    description:
      "Collaborate with us to bring industry-relevant programs to your students and strengthen your academic portfolio.",
    href: "/universities",
    bg: "#E03326",
    iconBg: "#FFC629",
    iconColor: "#E03326",
  },
  {
    icon: Building2,
    title: "Corporate Partners",
    tagline: "ROI Focused",
    description:
      "Invest in workforce development with measurable outcomes and access to a curated pipeline of skilled talent.",
    href: "/corporates",
    bg: "#4d43b5",
    iconBg: "#FFC629",
    iconColor: "#4d43b5",
  },
  {
    icon: Users,
    title: "Students",
    tagline: "Career Ready",
    description:
      "Build job-ready skills, learn new languages, and unlock global opportunities with structured learning paths.",
    href: "/students",
    bg: "#FFC629",
    iconBg: "#E03326",
    iconColor: "#FFFFFF",
  },
  {
    icon: Briefcase,
    title: "Professionals",
    tagline: "Growth Driven",
    description:
      "Advance your career with executive education, global certifications, and a network that spans continents.",
    href: "/professionals",
    bg: "#1a1530",
    iconBg: "#FFC629",
    iconColor: "#1a1530",
  },
];

function AudienceCards() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Who we serve"
          title={<>Programs for Every Audience</>}
          description="Whether you're a student, professional, corporation, or educational institution, we have the right program for you."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((item) => {
            const isLight = item.bg === "#FFC629";
            const textColor = isLight ? "#1a1530" : "#ffffff";
            const mutedText = isLight
              ? "rgba(26,21,48,0.75)"
              : "rgba(255,255,255,0.8)";
            return (
              <Link
                key={item.title}
                href={item.href}
                className="group relative flex flex-col overflow-hidden rounded-3xl p-7 transition hover:-translate-y-1 hover:shadow-2xl"
                style={{ backgroundColor: item.bg, color: textColor }}
              >
                <div
                  className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: item.iconBg,
                    color: item.iconColor,
                  }}
                >
                  <item.icon size={22} />
                </div>
                <span
                  className="text-xs font-medium uppercase tracking-wider"
                  style={{ color: mutedText }}
                >
                  {item.tagline}
                </span>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p
                  className="mt-3 flex-1 text-sm leading-6"
                  style={{ color: mutedText }}
                >
                  {item.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium transition group-hover:gap-2.5">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const partnershipBenefits = [
  "Native German speakers as instructors",
  "100% online, flexible scheduling",
  "University placement support",
  "Career advancement pathways",
];

function FeaturedPartnership() {
  return (
    <section className="bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#FFC629] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#1a1530]">
              <Lightbulb size={12} /> Featured Partnership
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Learn German with Native Speakers
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Partner with <strong className="text-foreground">Educaro</strong>,
              Germany&apos;s leading online language education platform. 100%
              online courses with German native speakers and educators,
              providing pathways to German universities and global
              opportunities.
            </p>

            <ul className="mt-8 space-y-3">
              {partnershipBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E03326] text-white">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-6 text-muted-foreground">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href="/programs#german"
                className="inline-flex items-center gap-2 rounded-full bg-[#4d43b5] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#3d349a]"
              >
                Learn More About Educaro <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-[#FFC629]/30 to-[#4d43b5]/20 blur-2xl" />
            <div className="relative grid grid-cols-2 gap-4">
              {[
                {
                  label: "Program Focus",
                  value: "German Language Proficiency",
                },
                { label: "Format", value: "100% Online, Flexible Scheduling" },
                { label: "Duration", value: "Varies by Level (A1 to C1)" },
                {
                  label: "Outcomes",
                  value: "University Admissions & Placements",
                },
              ].map((card) => (
                <div
                  key={card.label}
                  className="rounded-2xl border border-border bg-background p-6 shadow-sm"
                >
                  <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {card.label}
                  </div>
                  <div className="mt-2 text-base font-semibold leading-snug">
                    {card.value}
                  </div>
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
                  Bridging learners across India and South Asia to German
                  universities and the European workforce.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const values = [
  {
    icon: Lightbulb,
    title: "Expert-Led Programs",
    description:
      "Learn from industry professionals and native speakers with real-world experience.",
  },
  {
    icon: TrendingUp,
    title: "Career Advancement",
    description:
      "Structured pathways that connect learning directly to job placements and opportunities.",
  },
  {
    icon: HeartHandshake,
    title: "Community Support",
    description:
      "Join a network of learners, professionals, and institutions all committed to growth.",
  },
];

function WhyChoose() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why LIFE"
          title={<>Why Choose LIFE</>}
          description="A platform built around three principles that shape everything we deliver."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {values.map((value, idx) => {
            const palette = [
              { bg: "#FFEDD8", fg: "#E03326" },
              { bg: "#FFF4CC", fg: "#1a1530" },
              { bg: "#E8E5FA", fg: "#4d43b5" },
            ][idx];
            return (
              <div
                key={value.title}
                className="rounded-3xl border border-border bg-background p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: palette.bg, color: palette.fg }}
                >
                  <value.icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{value.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "LIFE helped me transition into a completely new field with confidence. The structured approach and expert guidance made all the difference.",
    name: "Priya Kumari",
    role: "Software Engineer",
    company: "Career Switcher",
  },
  {
    quote:
      "Our partnership with LIFE transformed how we approach employee development. The ROI has been exceptional.",
    name: "Dr. Rohit Sharma",
    role: "HR Director",
    company: "Tech Company",
  },
  {
    quote:
      "Learning German through LIFE opened doors to European universities I never thought were possible.",
    name: "Anjali Fernando",
    role: "Student",
    company: "German Language Program",
  },
];

function Testimonials() {
  return (
    <section className="bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Success Stories"
          title={<>What Our Community Says</>}
          description="From career switchers to HR leaders to students chasing European universities, here is what learners say."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map((t, tIdx) => {
            const colors = ["#E03326", "#4d43b5", "#FFC629"];
            const bg = colors[tIdx % colors.length];
            const fg = bg === "#FFC629" ? "#1a1530" : "#ffffff";
            return (
              <figure
                key={t.name}
                className="flex flex-col rounded-2xl border border-border bg-background p-8 shadow-sm"
              >
                <Quote size={26} className="text-[#E03326]" />
                <blockquote className="mt-4 flex-1 text-sm leading-6 text-foreground">
                  {t.quote}
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold"
                    style={{ backgroundColor: bg, color: fg }}
                  >
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {t.role}, {t.company}
                    </div>
                  </div>
                  <div className="ml-auto flex gap-0.5 text-[#FFC629]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        fill="currentColor"
                        strokeWidth={0}
                      />
                    ))}
                  </div>
                </div>
              </figure>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/success-stories"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#4d43b5] bg-background px-6 py-3 text-sm font-medium text-[#4d43b5] hover:bg-[#4d43b5] hover:text-white"
          >
            View All Success Stories <ArrowRight size={16} />
          </Link>
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
              Ready to Transform Your Future?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/85">
              Connect with LIFE today to explore the right program for your
              goals and start your journey to success.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FFC629] px-6 py-3 text-sm font-medium text-[#1a1530] transition hover:bg-[#ffd34d]"
              >
                Get in Touch <ArrowRight size={16} />
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/40 bg-transparent px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/15"
              >
                Browse All Programs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
