import { Link } from "react-router-dom";
import {
  ArrowRight,
  Languages,
  GraduationCap,
  Briefcase,
  Building2,
  LineChart,
  ScrollText,
  Award,
  Users,
  Clock,
  Tag,
  CalendarDays,
  UserRound,
  Star,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";


type Program = {
  id: string;
  title: string;
  category: string;
  description: string;
  rating: number;
  duration: string;
  level: string;
  students: number;
  startsOn: string;
  instructor: string;
  icon: typeof Languages;
  bg: string;
  badgeBg: string;
  badgeText: string;
};

const programs: Program[] = [
  {
    id: "german-a1-a2",
    title: "German Language - Beginner (A1-A2)",
    category: "Language",
    description:
      "Master foundational German with native speakers. Perfect for complete beginners.",
    rating: 4.9,
    duration: "3-4 months",
    level: "Beginner",
    students: 342,
    startsOn: "June 2026",
    instructor: "Hans Mueller",
    icon: Languages,
    bg: "#E03326",
    badgeBg: "#FFC629",
    badgeText: "#1a1530",
  },
  {
    id: "german-b1-b2",
    title: "German Language - Intermediate (B1-B2)",
    category: "Language",
    description:
      "Achieve fluent conversation skills and prepare for university or professional German.",
    rating: 4.8,
    duration: "4-5 months",
    level: "Intermediate",
    students: 218,
    startsOn: "July 2026",
    instructor: "Maria Schmidt",
    icon: Languages,
    bg: "#4d43b5",
    badgeBg: "#FFC629",
    badgeText: "#1a1530",
  },
  {
    id: "life-skills-leadership",
    title: "Life Skills & Leadership",
    category: "Soft Skills",
    description:
      "Develop essential soft skills including communication, time management, problem-solving.",
    rating: 4.7,
    duration: "8 weeks",
    level: "All Levels",
    students: 567,
    startsOn: "June 2026",
    instructor: "Dr. Rajesh Patel",
    icon: Users,
    bg: "#FFC629",
    badgeBg: "#E03326",
    badgeText: "#ffffff",
  },
  {
    id: "career-transition",
    title: "Career Transition Program",
    category: "Career Development",
    description:
      "Comprehensive program designed to help you successfully transition into a new career.",
    rating: 4.9,
    duration: "12 weeks",
    level: "Intermediate",
    students: 145,
    startsOn: "July 2026",
    instructor: "Prof. Elizabeth Chen",
    icon: Briefcase,
    bg: "#1a1530",
    badgeBg: "#FFC629",
    badgeText: "#1a1530",
  },
  {
    id: "corporate-workforce",
    title: "Corporate Workforce Development",
    category: "Corporate",
    description:
      "Customized training solutions designed specifically to address your organization's skill gaps.",
    rating: 4.8,
    duration: "Custom",
    level: "All Levels",
    students: 89,
    startsOn: "On Demand",
    instructor: "Team of Experts",
    icon: Building2,
    bg: "#E03326",
    badgeBg: "#1a1530",
    badgeText: "#FFC629",
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation for Leaders",
    category: "Executive Development",
    description:
      "Strategic course for senior professionals and executives leading digital transformation.",
    rating: 4.8,
    duration: "10 weeks",
    level: "Advanced",
    students: 67,
    startsOn: "August 2026",
    instructor: "James Thompson",
    icon: LineChart,
    bg: "#4d43b5",
    badgeBg: "#FFC629",
    badgeText: "#1a1530",
  },
  {
    id: "university-preparation",
    title: "University Preparation Program",
    category: "Academic",
    description:
      "Prepare for successful university admission with academic writing, research skills.",
    rating: 4.9,
    duration: "6 months",
    level: "Intermediate",
    students: 123,
    startsOn: "July 2026",
    instructor: "Dr. Sarah Ahmed",
    icon: GraduationCap,
    bg: "#FFC629",
    badgeBg: "#4d43b5",
    badgeText: "#ffffff",
  },
  {
    id: "german-c1",
    title: "Professional Certification - German Language (C1)",
    category: "Certification",
    description:
      "Achieve advanced German proficiency certification recognized by German universities.",
    rating: 4.9,
    duration: "3-4 months",
    level: "Advanced",
    students: 98,
    startsOn: "August 2026",
    instructor: "Klaus Weber",
    icon: Award,
    bg: "#1a1530",
    badgeBg: "#E03326",
    badgeText: "#ffffff",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title={<>Explore Our Programs</>}
        description="Browse our comprehensive selection of programs designed to help you achieve your goals."
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((p) => {
              const isLight = p.bg === "#FFC629";
              const textColor = isLight ? "#1a1530" : "#ffffff";
              const muted = isLight ? "rgba(26,21,48,0.75)" : "rgba(255,255,255,0.8)";
              const chipBg = isLight ? "rgba(26,21,48,0.1)" : "rgba(255,255,255,0.15)";
              return (
                <div
                  key={p.id}
                  id={p.id}
                  className="group relative flex flex-col overflow-hidden rounded-3xl p-7 transition hover:-translate-y-1 hover:shadow-2xl"
                  style={{ backgroundColor: p.bg, color: textColor }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{ backgroundColor: p.badgeBg, color: p.badgeText }}
                    >
                      <p.icon size={20} />
                    </div>
                    <div className="flex items-center gap-1 text-xs font-semibold">
                      <Star size={12} fill="#FFC629" strokeWidth={0} />
                      <span>{p.rating.toFixed(1)}</span>
                    </div>
                  </div>

                  <span
                    className="mt-5 inline-flex w-fit rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider"
                    style={{ backgroundColor: chipBg }}
                  >
                    {p.category}
                  </span>

                  <h3 className="mt-3 text-lg font-semibold leading-snug">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6" style={{ color: muted }}>
                    {p.description}
                  </p>

                  <dl className="mt-5 grid grid-cols-2 gap-3 text-xs" style={{ color: muted }}>
                    <div className="flex items-center gap-1.5">
                      <Clock size={12} /> <span>{p.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Tag size={12} /> <span>{p.level}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users size={12} /> <span>{p.students} students</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CalendarDays size={12} /> <span>{p.startsOn}</span>
                    </div>
                    <div className="col-span-2 flex items-center gap-1.5">
                      <UserRound size={12} /> <span>{p.instructor}</span>
                    </div>
                  </dl>

                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-2 self-start text-sm font-medium transition group-hover:gap-3"
                  >
                    Enroll now <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <ScrollText size={28} className="mx-auto text-[#4d43b5]" />
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Not sure which program is right?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
            Talk to a LIFE advisor about your goals. We will map out the program that fits your level, your schedule, and your next step.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#E03326] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[#E03326]/25 transition hover:bg-[#c52b20]"
            >
              Schedule a consultation <ArrowRight size={16} />
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#4d43b5] bg-background px-6 py-3 text-sm font-medium text-[#4d43b5] hover:bg-[#4d43b5] hover:text-white"
            >
              Read learner stories
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
