import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";
import { SITE } from "@/data/site";

const Terms = () => (
  <>
    <SEO title="Terms & Conditions — Upskiller Academy" description="Terms of use, enrollment and refund policy for Upskiller Academy programs." canonical="https://www.upskilleracademy.com/terms" />
    <section className="bg-hero text-primary-foreground">
      <div className="container py-14">
        <Badge className="bg-gold/20 text-gold border-gold/30 hover:bg-gold/20">Legal</Badge>
        <h1 className="mt-3 font-display text-4xl">Terms & Conditions</h1>
        <p className="mt-2 text-primary-foreground/70 text-sm">Last updated: April 2026</p>
      </div>
    </section>
    <section className="container py-12 prose prose-slate max-w-3xl prose-headings:font-display prose-headings:text-foreground prose-p:text-foreground/80">
      <p>By accessing www.upskilleracademy.com or enrolling in any program offered by {SITE.name} ("we", "us"), you agree to these Terms & Conditions.</p>
      <h2>Eligibility</h2>
      <p>You must be 18 years or older, or have parental consent, to enroll in our programs.</p>
      <h2>Enrollment & Payments</h2>
      <p>Enrollments are confirmed upon receipt of full or partial fees as agreed. All fees are quoted in INR and exclude applicable taxes unless stated.</p>
      <h2>Refund Policy</h2>
      <p>Fees once paid are non-refundable, except in cases explicitly stated by us in writing. In the case of a verified service failure on our part, we may offer a partial refund or a credit toward another program.</p>
      <h2>Intellectual Property</h2>
      <p>All course materials, recordings, slides and frameworks are the intellectual property of {SITE.name}. You may not reproduce, redistribute or share them without prior written consent.</p>
      <h2>Code of Conduct</h2>
      <p>Learners are expected to maintain respectful conduct in all interactions. We reserve the right to remove any participant violating community guidelines without refund.</p>
      <h2>No Investment Advice</h2>
      <p>Our content is purely educational. We do not provide personalised investment advice. Investments in securities markets are subject to market risks. Read all related documents carefully before investing.</p>
      <h2>Limitation of Liability</h2>
      <p>{SITE.name} shall not be liable for any direct, indirect, incidental or consequential losses arising from the use of our website or programs.</p>
      <h2>Governing Law</h2>
      <p>These Terms shall be governed by and construed in accordance with the laws of India.</p>
      <h2>Contact</h2>
      <p>For questions, contact us at {SITE.email} or {SITE.phone}.</p>
    </section>
  </>
);

export default Terms;
