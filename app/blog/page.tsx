import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { PageHero } from "@/components/page-hero";


const posts = [
  {
    slug: "german-jobs-2026",
    category: "Careers",
    title: "Why Germany is hiring 400,000 skilled workers in 2026",
    excerpt:
      "Germany&apos;s labor market is opening up like never before. Here&apos;s what roles are hot, what salaries look like, and how to position yourself.",
    date: "May 18, 2026",
    readTime: "6 min",
    color: "#4d43b5",
  },
  {
    slug: "ai-engineer-2026",
    category: "Technology",
    title: "The AI engineer playbook: what to learn in 2026",
    excerpt:
      "From foundation models to evaluation systems, here&apos;s the skill stack that puts you in the top 10% of AI engineering candidates.",
    date: "May 11, 2026",
    readTime: "8 min",
    color: "#E03326",
  },
  {
    slug: "first-promotion",
    category: "Leadership",
    title: "From IC to manager: what the first 90 days really look like",
    excerpt:
      "A field manual for new managers, written by leaders who&apos;ve coached hundreds of professionals through their first promotion.",
    date: "May 3, 2026",
    readTime: "5 min",
    color: "#FFC629",
  },
  {
    slug: "study-abroad-budget",
    category: "Study abroad",
    title: "Studying abroad on a budget: a 2026 financial guide",
    excerpt:
      "Tuition planning, part-time work rules, and the real cost of living in Germany, Spain, and Sri Lanka, with numbers updated for 2026.",
    date: "April 27, 2026",
    readTime: "10 min",
    color: "#1a1530",
  },
  {
    slug: "corporate-l-and-d",
    category: "Corporate",
    title: "Stop measuring training hours. Start measuring outcomes.",
    excerpt:
      "How leading L&amp;D teams are moving from completion metrics to business impact, and the dashboard they use to do it.",
    date: "April 19, 2026",
    readTime: "7 min",
    color: "#E03326",
  },
  {
    slug: "alumni-spotlight",
    category: "Community",
    title: "Alumni spotlight: how Anjali built a startup before graduating",
    excerpt:
      "A LIFE student turned her capstone into a funded company. Here&apos;s what she learned, what surprised her, and what she&apos;d do differently.",
    date: "April 10, 2026",
    readTime: "4 min",
    color: "#4d43b5",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="The LIFE journal"
        title={<>Notes from the future of education</>}
        description="Career deep-dives, employer reports, and stories from learners around the world, published weekly by the LIFE editorial team."
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className="relative h-44 overflow-hidden"
                  style={{ backgroundColor: post.color }}
                >
                  <div
                    className="absolute -right-6 -top-8 h-32 w-32 rounded-full"
                    style={{ backgroundColor: post.color === "#FFC629" ? "#E03326" : "#FFC629", opacity: 0.7 }}
                  />
                  <div
                    className="absolute -bottom-10 -left-6 h-24 w-24 rounded-full"
                    style={{ backgroundColor: post.color === "#4d43b5" ? "#FFC629" : "#4d43b5", opacity: 0.5 }}
                  />
                  <span className="absolute left-5 top-5 inline-flex items-center rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-foreground">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold leading-snug">
                    <Link to="#" className="hover:underline">
                      {post.title}
                    </Link>
                  </h3>
                  <p
                    className="mt-3 flex-1 text-sm leading-6 text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  />
                  <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={12} /> {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>
                  <Link
                    to="#"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition group-hover:gap-3"
                  >
                    Read story <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
