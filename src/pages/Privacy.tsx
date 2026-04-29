import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";
import { SITE } from "@/data/site";

const Privacy = () => (
  <>
    <SEO title="Privacy Policy — Upskiller Academy" description="How Upskiller Academy collects, uses and protects your data." canonical="https://www.upskilleracademy.com/privacy" />
    <section className="bg-hero text-primary-foreground">
      <div className="container py-14">
        <Badge className="bg-gold/20 text-gold border-gold/30 hover:bg-gold/20">Legal</Badge>
        <h1 className="mt-3 font-display text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-primary-foreground/70 text-sm">Last updated: April 2026</p>
      </div>
    </section>
    <section className="container py-12 prose prose-slate max-w-3xl prose-headings:font-display prose-headings:text-foreground prose-p:text-foreground/80">
      <p>This Privacy Policy describes how {SITE.name} ("we", "us", or "our") collects, uses and shares information when you visit www.upskilleracademy.com or enroll in our programs.</p>
      <h2>Information We Collect</h2>
      <p>We collect information you provide directly to us — such as your name, phone number, email address and program interest — when you submit forms, request brochures or contact us via WhatsApp.</p>
      <h2>How We Use Information</h2>
      <ul>
        <li>To respond to your enquiries and share program details.</li>
        <li>To deliver enrolled programs and certifications.</li>
        <li>To send important updates about your batch and account.</li>
        <li>To improve our website and service quality.</li>
      </ul>
      <h2>Sharing of Information</h2>
      <p>We do not sell your personal information. We may share information with trusted vendors who help us operate (e.g., communication tools, analytics) under strict confidentiality.</p>
      <h2>Data Security</h2>
      <p>We use reasonable safeguards to protect your information. However, no system is 100% secure.</p>
      <h2>Your Rights</h2>
      <p>You may request access, correction or deletion of your personal information by emailing {SITE.email}.</p>
      <h2>Cookies</h2>
      <p>We use cookies to improve user experience and analyse site traffic. You may disable cookies in your browser settings.</p>
      <h2>Updates to this Policy</h2>
      <p>We may update this Privacy Policy from time to time. Material changes will be posted on this page.</p>
      <h2>Contact</h2>
      <p>For privacy-related questions, contact us at {SITE.email} or {SITE.phone}.</p>
    </section>
  </>
);

export default Privacy;
