import { Link } from "react-router-dom";
import { LegalPage, LegalSection } from "@/components/legal-page";

const sections: LegalSection[] = [
  {
    heading: "Introduction",
    body: (
      <p>
        LIFE — Liberal Institute for Future Education (&quot;LIFE&quot;,
        &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to
        protecting your privacy. This Privacy Policy explains how we collect,
        use, disclose, and safeguard your information when you visit our website
        or use our education, training, and student support services. By using
        our website, you agree to the practices described in this policy.
      </p>
    ),
  },
  {
    heading: "Information we collect",
    body: (
      <>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>
            <strong>Information you provide:</strong> name, email address, phone
            number, and any details you submit through our contact forms,
            enquiries, or program applications.
          </li>
          <li>
            <strong>Usage information:</strong> pages visited, time spent, and
            other analytics data collected automatically through cookies and
            similar technologies, including Google Tag Manager and Google
            Analytics.
          </li>
          <li>
            <strong>Device information:</strong> browser type, device type, IP
            address, and general location.
          </li>
        </ul>
      </>
    ),
  },
  {
    heading: "How we use your information",
    body: (
      <>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to your enquiries and provide the services you request.</li>
          <li>
            Process program applications and communicate about courses, training,
            and study-abroad opportunities.
          </li>
          <li>Improve our website, content, and services.</li>
          <li>
            Send you updates and information you have consented to receive.
          </li>
          <li>Comply with legal and regulatory obligations.</li>
        </ul>
      </>
    ),
  },
  {
    heading: "Cookies and analytics",
    body: (
      <p>
        We use cookies and analytics tools, including Google Tag Manager and
        Google Analytics, to understand how visitors use our website and to
        improve your experience. You can control or disable cookies through your
        browser settings. Disabling cookies may affect the functionality of some
        parts of the site.
      </p>
    ),
  },
  {
    heading: "How we share your information",
    body: (
      <p>
        We do not sell your personal information. We may share information with
        trusted service providers and partner institutions (such as our
        education and mobility partners) where necessary to deliver our services,
        and with authorities where required by law. Any partners who handle your
        data are expected to protect it in line with this policy.
      </p>
    ),
  },
  {
    heading: "Data security",
    body: (
      <p>
        We implement reasonable technical and organisational measures to protect
        your information against unauthorised access, loss, or misuse. However,
        no method of transmission over the internet is completely secure, and we
        cannot guarantee absolute security.
      </p>
    ),
  },
  {
    heading: "Your rights",
    body: (
      <p>
        You may request access to, correction of, or deletion of your personal
        information, and you may withdraw consent to marketing communications at
        any time. To exercise these rights, contact us using the details below.
      </p>
    ),
  },
  {
    heading: "Changes to this policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with an updated revision date. We encourage you to
        review this page periodically.
      </p>
    ),
  },
  {
    heading: "Contact us",
    body: (
      <p>
        If you have questions about this Privacy Policy or how we handle your
        information, contact us at{" "}
        <a href="mailto:hello@life.edu.lk">hello@life.edu.lk</a> or visit our{" "}
        <Link to="/contact">Contact page</Link>. LIFE is based at Bay X, TRACE
        Expert City, Maradana, Sri Lanka.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title={
        <>
          Privacy <span className="gradient-text">Policy</span>
        </>
      }
      description="How LIFE collects, uses, and protects your personal information when you use our website and services."
      lastUpdated="15 June 2026"
      sections={sections}
    />
  );
}
