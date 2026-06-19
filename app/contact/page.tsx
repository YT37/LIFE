import { useEffect, useRef, useState } from "react";
import { PageHero } from "@/components/page-hero";
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";

// Zoho Web-to-Lead configuration (from the form generated in Zoho CRM).
// These hidden values authenticate the submission and tell Zoho to create a Lead.
const ZOHO_ACTION = "https://crm.zoho.com/crm/WebToLeadForm";
const ZOHO_XNQSJSDP =
  "3e4fa81a33fcad7049740eb3f67ccd71633f6e3df6a9bb7078cc22a43f9b0d61";
const ZOHO_XMIWTLD =
  "1745fe650ab46054b6663d2f2c48a904505b165a9ad8388ce1f95836452a10e47ddde368e35e95a7e85f79ce99467e3b";
const ZOHO_RETURN_URL =
  "https://crmplus.zoho.com/wwwlifeedulk/index.do/cxapp/crm/org926582883/tab/Leads/custom-view/7434534000000087501/list";
// WebForm Analytics servlet — registers form views/submissions for Zoho reporting.
const ZOHO_ANALYTICS_SRC =
  "https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=c5a8e5463b740fa4fbf1572db64e699c7dc122ec855bf01bc37c919730dd7e38d6863c50b3ab23c6bd581a0a0c35f149gidb0d636cb0e929acc157507f4ef5f3484251422858102e26c13e13562b0637542gidb88cf5a26fb55b81eb8582b2ef5d443950a2c4f72909ac0a93f92faee56006f3gidc8819b5b99ff4a61f4974e1787bd73d9dd84683b2e747757c1ef237785bf8f63&tw=05f3707bb0dbe4108ef18b8474a2615a244799c0f1b60069e37732563940599b";

const AUDIENCES = ["Student", "Professional", "University", "Corporate"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ZohoSalesIQ = {
  visitor?: {
    uniqueid: () => string;
    name: (value: string) => void;
    email: (value: string) => void;
  };
};

export default function ContactPage() {
  const [audience, setAudience] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const messageRef = useRef<HTMLTextAreaElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);

  // Load Zoho's WebForm Analytics script once for submission reporting.
  useEffect(() => {
    if (document.getElementById("wf_anal")) return;
    const s = document.createElement("script");
    s.id = "wf_anal";
    s.src = ZOHO_ANALYTICS_SRC;
    document.body.appendChild(s);
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    const email = (form.elements.namedItem("Email") as HTMLInputElement)?.value;
    const firstName = (form.elements.namedItem("First Name") as HTMLInputElement)
      ?.value;
    const lastName = (form.elements.namedItem("Last Name") as HTMLInputElement)
      ?.value;

    if (email && !EMAIL_RE.test(email)) {
      e.preventDefault();
      setError("Please enter a valid email address.");
      return;
    }

    // Zoho requires a Company; default to "Individual" when left blank.
    if (companyRef.current && !companyRef.current.value.trim()) {
      companyRef.current.value = "Individual";
    }

    // Fold the "I am a…" selection into the lead Description so it reaches CRM.
    if (descriptionRef.current) {
      const note = messageRef.current?.value ?? "";
      descriptionRef.current.value = audience
        ? `I am a: ${audience}\n\n${note}`
        : note;
    }

    // Associate this lead with the Zoho SalesIQ visitor session (trackVisitor).
    try {
      const salesiq = (window as { $zoho?: { salesiq?: ZohoSalesIQ } }).$zoho
        ?.salesiq;
      const visitor = salesiq?.visitor;
      if (visitor) {
        const ldtuvid = form.elements.namedItem("LDTuvid") as HTMLInputElement;
        if (ldtuvid) ldtuvid.value = visitor.uniqueid();
        visitor.name(`${firstName ?? ""} ${lastName ?? ""}`.trim());
        if (email) visitor.email(email);
      }
    } catch {
      // SalesIQ not yet loaded — submission still proceeds, just unlinked.
    }

    setError(null);
    setSubmitting(true);
    // Let the form submit natively into the hidden iframe (no page redirect).
  }

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

            {submitted ? (
              <div className="flex flex-col items-start justify-center rounded-3xl border border-border bg-background p-8 shadow-sm lg:col-span-2">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#FFC629] text-[#1a1530]">
                  <CheckCircle2 size={24} />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-foreground">
                  Thank you — we've got your message.
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Our team will get back to you within one working day.
                </p>
              </div>
            ) : (
              <form
                action={ZOHO_ACTION}
                method="POST"
                target="zoho-lead-frame"
                acceptCharset="UTF-8"
                onSubmit={handleSubmit}
                className="rounded-3xl border border-border bg-background p-8 shadow-sm lg:col-span-2"
              >
                {/* Zoho hidden authentication & tracking fields — required, do not remove. */}
                <input type="hidden" name="xnQsjsdp" value={ZOHO_XNQSJSDP} />
                <input type="hidden" name="zc_gad" id="zc_gad" value="" />
                <input type="hidden" name="xmIwtLD" value={ZOHO_XMIWTLD} />
                <input type="hidden" name="actionType" value="TGVhZHM=" />
                <input type="hidden" name="returnURL" value={ZOHO_RETURN_URL} />
                {/* Zoho SalesIQ visitor-tracking fields — populated automatically by the SalesIQ script. */}
                <input type="hidden" id="ldeskuid" name="ldeskuid" />
                <input type="hidden" id="LDTuvid" name="LDTuvid" />
                {/* Audience selection is composed into Description at submit time. */}
                <input type="hidden" name="Description" ref={descriptionRef} />
                {/* Spam honeypot — must stay empty; bots that fill it are rejected by Zoho. */}
                <input
                  type="text"
                  name="aG9uZXlwb3Q"
                  defaultValue=""
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ display: "none" }}
                />

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field label="First name" name="First Name" required />
                  <Field label="Last name" name="Last Name" required />
                  <Field label="Email" name="Email" type="email" required />
                  <Field label="Phone" name="Phone" type="tel" required />
                </div>

                <div className="mt-4">
                  <Field
                    label="Organization (optional)"
                    name="Company"
                    inputRef={companyRef}
                  />
                </div>

                <div className="mt-4">
                  <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    I am a…
                  </label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {AUDIENCES.map((opt) => (
                      <label
                        key={opt}
                        className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm transition has-[input:checked]:border-[#4d43b5] has-[input:checked]:bg-[#4d43b5] has-[input:checked]:text-white"
                      >
                        <input
                          type="radio"
                          name="audience"
                          value={opt}
                          checked={audience === opt}
                          onChange={() => setAudience(opt)}
                          className="sr-only"
                        />
                        {opt}
                      </label>
                    ))}
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
                    ref={messageRef}
                    rows={5}
                    placeholder="Tell us a bit about what you're looking for…"
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-[#4d43b5] focus:ring-4 focus:ring-[#4d43b5]/15"
                  />
                </div>

                {error && (
                  <p className="mt-4 text-sm text-[#E03326]">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#E03326] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[#E03326]/25 transition hover:bg-[#c52b20] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "Sending…" : "Send message"}{" "}
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Hidden target so the Zoho POST submits without navigating away from the page. */}
      <iframe
        name="zoho-lead-frame"
        title="Zoho lead submission"
        style={{ display: "none" }}
        onLoad={() => {
          if (submitting) {
            setSubmitting(false);
            setSubmitted(true);
          }
        }}
      />
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
  required = false,
  inputRef,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  inputRef?: React.Ref<HTMLInputElement>;
}) {
  const id = name.replace(/\s+/g, "-").toLowerCase();
  return (
    <div>
      <label
        htmlFor={id}
        className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        ref={inputRef}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-[#4d43b5] focus:ring-4 focus:ring-[#4d43b5]/15"
      />
    </div>
  );
}
