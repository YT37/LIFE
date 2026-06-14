import { Link } from "react-router-dom";
import { LegalPage, LegalSection } from "@/components/legal-page";

const sections: LegalSection[] = [
  {
    heading: "Agreement to terms",
    body: (
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your access to and use
        of the website and services of LIFE — Liberal Institute for Future
        Education (&quot;LIFE&quot;, &quot;we&quot;, &quot;us&quot;, or
        &quot;our&quot;). By accessing or using our website, you agree to be
        bound by these Terms. If you do not agree, please do not use our website
        or services.
      </p>
    ),
  },
  {
    heading: "Our services",
    body: (
      <p>
        LIFE provides education, training, skill development, and student support
        services, including language training, career programs, and study-abroad
        guidance, some of which are delivered together with partner
        organisations. Program details, eligibility, and availability may change,
        and enrolment in any program may be subject to additional terms.
      </p>
    ),
  },
  {
    heading: "Use of the website",
    body: (
      <>
        <p>When using our website, you agree not to:</p>
        <ul>
          <li>Use the site for any unlawful or fraudulent purpose.</li>
          <li>
            Attempt to gain unauthorised access to our systems or interfere with
            the site&apos;s operation.
          </li>
          <li>
            Copy, reproduce, or distribute our content without permission.
          </li>
          <li>Submit false, misleading, or harmful information.</li>
        </ul>
      </>
    ),
  },
  {
    heading: "Intellectual property",
    body: (
      <p>
        All content on this website — including text, graphics, logos, and the
        LIFE name and branding — is the property of LIFE or its licensors and is
        protected by applicable intellectual property laws. You may not use our
        content for commercial purposes without our prior written consent.
      </p>
    ),
  },
  {
    heading: "Enquiries and applications",
    body: (
      <p>
        Submitting an enquiry or application through our website does not
        guarantee acceptance into any program. Acceptance, fees, schedules, and
        related arrangements are confirmed separately. Information you provide
        must be accurate and complete.
      </p>
    ),
  },
  {
    heading: "Third-party links and partners",
    body: (
      <p>
        Our website may contain links to third-party websites or reference
        partner organisations. We are not responsible for the content, policies,
        or practices of those third parties. Accessing third-party sites is at
        your own risk.
      </p>
    ),
  },
  {
    heading: "Disclaimer",
    body: (
      <p>
        Our website and content are provided on an &quot;as is&quot; basis
        without warranties of any kind. While we strive to keep information
        accurate and up to date, we do not guarantee that the website will be
        error-free, uninterrupted, or complete.
      </p>
    ),
  },
  {
    heading: "Limitation of liability",
    body: (
      <p>
        To the fullest extent permitted by law, LIFE shall not be liable for any
        indirect, incidental, or consequential damages arising from your use of,
        or inability to use, our website or services.
      </p>
    ),
  },
  {
    heading: "Changes to these terms",
    body: (
      <p>
        We may update these Terms from time to time. Changes will be posted on
        this page with an updated revision date. Your continued use of the
        website after changes are posted constitutes acceptance of the revised
        Terms.
      </p>
    ),
  },
  {
    heading: "Contact us",
    body: (
      <p>
        If you have questions about these Terms, contact us at{" "}
        <a href="mailto:hello@life.edu.lk">hello@life.edu.lk</a> or visit our{" "}
        <Link to="/contact">Contact page</Link>. LIFE is based at Bay X, TRACE
        Expert City, Maradana, Sri Lanka.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title={
        <>
          Terms of <span className="gradient-text">Service</span>
        </>
      }
      description="The terms that govern your use of the LIFE website and services."
      lastUpdated="15 June 2026"
      sections={sections}
    />
  );
}
