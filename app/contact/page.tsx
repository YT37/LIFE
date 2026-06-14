import { PageHero } from "@/components/page-hero";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Talk to us"
        title={<>Tell us about your goals</>}
        description="Whether you're a student, a working professional, a hiring leader, or a university, our team will get back to you within one working day."
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            <div className="space-y-5 lg:col-span-1">
              <ContactItem
                icon={Mail}
                title="Email"
                value="hello@life.edu.lk"
              />
              <ContactItem icon={Phone} title="Phone" value="+94 707 225 225" />
              <ContactItem
                icon={MapPin}
                title="Headquarters"
                value="Bay X, TRACE Expert City, Maradana, Sri Lanka"
              />
            </div>

            <form className="rounded-3xl border border-border bg-background p-8 shadow-sm lg:col-span-2">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="First name" name="firstName" />
                <Field label="Last name" name="lastName" />
                <Field label="Email" name="email" type="email" />
                <Field label="Phone" name="phone" type="tel" />
              </div>

              <div className="mt-4">
                <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  I am a…
                </label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["Student", "Professional", "University", "Corporate"].map(
                    (opt) => (
                      <label
                        key={opt}
                        className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm transition has-[input:checked]:border-[#4d43b5] has-[input:checked]:bg-[#4d43b5] has-[input:checked]:text-white"
                      >
                        <input
                          type="radio"
                          name="audience"
                          value={opt}
                          className="sr-only"
                        />
                        {opt}
                      </label>
                    ),
                  )}
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us a bit about what you're looking for…"
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-[#4d43b5] focus:ring-4 focus:ring-[#4d43b5]/15"
                />
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#E03326] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[#E03326]/25 transition hover:bg-[#c52b20]"
              >
                Send message <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactItem({
  icon: Icon,
  title,
  value,
}: {
  icon: typeof Mail;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-background p-5">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFC629] text-[#1a1530]">
        <Icon size={18} />
      </div>
      <div className="mt-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {title}
      </div>
      <div className="mt-1 text-sm text-foreground">{value}</div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-[#4d43b5] focus:ring-4 focus:ring-[#4d43b5]/15"
      />
    </div>
  );
}
