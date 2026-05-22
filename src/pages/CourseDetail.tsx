import { Link, useParams, Navigate } from "react-router-dom";
import { Clock, Users, Languages, Award, BookOpen, CheckCircle2, ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEO from "@/components/SEO";
import { courses, formatINR, getCourse } from "@/data/courses";
import { buildWhatsAppUrl, courseEnquiryMessage } from "@/lib/whatsapp";
import { useSetWhatsAppCourse } from "@/contexts/WhatsAppContext";
import { SITE } from "@/data/site";

const CourseDetail = () => {
  const { slug = "" } = useParams();
  const course = getCourse(slug);
  useSetWhatsAppCourse(course?.title ?? null);

  if (!course) return <Navigate to="/courses" replace />;

  const enrollHref = buildWhatsAppUrl(courseEnquiryMessage(course.title));
  const related = courses.filter((c) => c.slug !== course.slug).slice(0, 3);

  return (
    <>
      <SEO
        title={`${course.title} — Upskiller Academy`}
        description={course.tagline}
        canonical={`https://www.upskilleracademy.com/courses/${course.slug}`}
      />

      {/* HERO */}
      <section className="bg-hero text-primary-foreground">
        <div className="container py-16 lg:py-20 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Link to="/courses" className="text-xs uppercase tracking-[0.18em] text-gold/90 hover:text-gold">
                ← Back to Courses
              </Link>
            </div>
            <Badge className="mt-4 bg-gold/20 text-gold border-gold/30 hover:bg-gold/20">{course.level}</Badge>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl">{course.title}</h1>
            <p className="mt-3 text-lg text-primary-foreground/80 max-w-2xl">{course.hero}</p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-primary-foreground/80">
              <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-gold" />{course.duration}</span>
              <span className="inline-flex items-center gap-2"><Users className="h-4 w-4 text-gold" />{course.mode}</span>
              <span className="inline-flex items-center gap-2"><Languages className="h-4 w-4 text-gold" />{course.language}</span>
              <span className="inline-flex items-center gap-2"><Award className="h-4 w-4 text-gold" />{course.certification}</span>
            </div>
          </div>

          {/* Sticky enroll card */}
          <Card className="border-primary-foreground/15 bg-primary-foreground/5 backdrop-blur text-primary-foreground shadow-elegant">
            <CardContent className="p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-gold">Tuition</p>
              <div className="mt-2 flex items-end gap-3">
                <p className="font-display text-4xl text-gold">{formatINR(course.price)}</p>
                <p className="text-sm text-primary-foreground/60 line-through pb-1">{formatINR(course.mrp)}</p>
              </div>
              <ul className="mt-5 space-y-2 text-sm">
                {course.highlights.slice(0, 4).map((h) => (
                  <li key={h} className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-gold mt-0.5" />{h}</li>
                ))}
              </ul>
              <div className="mt-6 grid gap-2">
                <Button asChild variant="premium" size="lg">
                  <a href={enrollHref} target="_blank" rel="noreferrer"><MessageCircle /> Enroll on WhatsApp</a>
                </Button>
                <Button asChild variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 hover:text-primary-foreground">
                  <a href={SITE.phoneHref}><Phone /> {SITE.phone}</a>
                </Button>
              </div>
              <p className="mt-3 text-[11px] text-primary-foreground/60 text-center">Limited seats per cohort</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* COURSE POSTER */}
      {course.image && (
        <section className="bg-secondary">
          <div className="container py-10">
            <div className="rounded-2xl overflow-hidden ring-1 ring-gold/30 shadow-elegant bg-background">
              <img
                src={course.image}
                alt={`${course.title} poster`}
                loading="lazy"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </section>
      )}



      {/* OVERVIEW */}
      <section className="container py-16 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">About this program</p>
          <h2 className="mt-2 font-display text-3xl">Overview</h2>
          <p className="mt-4 text-foreground/80 leading-relaxed">{course.overview}</p>

          <h3 className="mt-10 font-display text-2xl">What you'll learn</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {course.outcomes.map((o) => (
              <li key={o} className="flex gap-2 text-sm"><CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />{o}</li>
            ))}
          </ul>

          <h3 className="mt-10 font-display text-2xl">Who it's for</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {course.whoFor.map((w) => (
              <li key={w} className="flex gap-2 text-sm"><CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />{w}</li>
            ))}
          </ul>
        </div>

        <Card className="border-border/60 self-start">
          <CardContent className="p-6">
            <h4 className="font-display text-lg">Program Highlights</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {course.highlights.map((h) => (
                <li key={h} className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-gold mt-0.5" />{h}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* SYLLABUS */}
      <section className="bg-muted/40 py-16">
        <div className="container">
          <p className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Curriculum</p>
          <h2 className="mt-2 font-display text-3xl">Syllabus</h2>
          <Accordion type="single" collapsible className="mt-6">
            {course.syllabus.map((m, i) => (
              <AccordionItem key={i} value={`m-${i}`}>
                <AccordionTrigger className="text-left">
                  <span className="flex items-center gap-3">
                    <span className="font-display text-gold">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-medium">{m.module}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {m.topics.map((t) => (
                      <li key={t} className="flex gap-2 text-sm text-foreground/80">
                        <BookOpen className="h-4 w-4 text-gold mt-0.5" />{t}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FAQS */}
      <section className="container py-16">
        <p className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">FAQs</p>
        <h2 className="mt-2 font-display text-3xl">Common questions</h2>
        <Accordion type="single" collapsible className="mt-6">
          {course.faqs.map((f, i) => (
            <AccordionItem key={i} value={`f-${i}`}>
              <AccordionTrigger className="text-left font-medium">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* RELATED */}
      <section className="bg-muted/40 py-16">
        <div className="container">
          <h2 className="font-display text-2xl">Explore related programs</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {related.map((c) => (
              <Card key={c.slug} className="border-border/60 hover:border-gold/60 transition-colors">
                <CardContent className="p-6">
                  <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/10">{c.level}</Badge>
                  <h3 className="mt-3 font-display text-lg">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{c.tagline}</p>
                  <Button asChild variant="link" className="mt-3 px-0">
                    <Link to={`/courses/${c.slug}`}>View course <ArrowRight /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container py-16">
        <div className="rounded-2xl bg-hero text-primary-foreground p-8 sm:p-12 shadow-elegant">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h3 className="font-display text-3xl">Reserve your seat in {course.shortTitle}.</h3>
              <p className="mt-2 text-primary-foreground/80">Tap below — we'll send the brochure & batch dates on WhatsApp.</p>
            </div>
            <Button asChild variant="premium" size="lg">
              <a href={enrollHref} target="_blank" rel="noreferrer">Enroll on WhatsApp</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseDetail;
