import { useState } from "react";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Clock, MessageCircle, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { astrologyCourse as course, astrologyImages } from "@/data/courses";
import { openCourseEnquiry } from "@/lib/lead-enquiry";
import ReloadLink from "@/components/ReloadLink";
import SEO from "@/components/SEO";

const AstrologyCourseDetail = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const image = selectedImage === null ? undefined : astrologyImages[selectedImage];
  const enquire = () => openCourseEnquiry(course.title);

  return (
    <>
      <SEO title={`${course.title} — Upskiller Academy`} description={course.tagline} canonical={`https://www.upskilleracademy.com/courses/${course.slug}`} />
      <section className="bg-secondary text-secondary-foreground">
        <div className="container py-10 sm:py-14">
          <ReloadLink to="/courses" className="inline-flex items-center gap-2 text-sm text-gold"><ArrowLeft className="h-4 w-4" /> Back to Courses</ReloadLink>
          <p className="mt-6 text-sm text-gold">Upskiller Academy · All Levels</p>
          <h1 className="mt-3 max-w-5xl font-display text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-normal">{course.title}</h1>
          <p className="mt-4 max-w-3xl text-base sm:text-lg text-secondary-foreground/85">{course.overview}</p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <span className="inline-flex items-center gap-2"><BookOpen className="h-4 w-4 text-gold" />30 detailed modules</span>
            <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-gold" />180 suggested teaching hours</span>
          </div>
          <Button variant="premium" size="lg" onClick={enquire} className="mt-7"><MessageCircle /> Enquire Now</Button>
        </div>
      </section>

      <section className="bg-gold-soft/20 py-8 sm:py-12" aria-label="Course poster gallery">
        <div className="container grid items-start gap-6 md:grid-cols-[1fr_1.5fr]">
          {astrologyImages.map((poster, index) => (
            <figure key={poster.src} className="min-w-0">
              <Button variant="ghost" onClick={() => setSelectedImage(index)} aria-label={`Enlarge ${poster.alt}`} className="block h-auto w-full overflow-hidden rounded-lg border border-gold/30 p-0 shadow-elegant hover:bg-transparent">
                <img src={poster.src} alt={poster.alt} width={index === 0 ? 768 : 1152} height={768} className="w-full h-auto object-contain" />
              </Button>
              <figcaption className="mt-3 flex items-center gap-2 text-sm text-muted-foreground"><ZoomIn className="h-4 w-4 shrink-0" />{index === 0 ? "Astrology Masterclass — Live Teaching Session" : "Course brochure — four learning paths"}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="container py-12 sm:py-16">
        <p className="text-sm font-semibold text-gold-deep">Course at a Glance</p>
        <h2 className="mt-2 font-display text-3xl tracking-normal">Structured learning. Practical experience.</h2>
        <dl className="mt-8 grid grid-cols-1 gap-6 border-y border-border py-7 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["30", "Detailed modules"],
            ["180", "Suggested teaching hours"],
            ["50+", "Practice case studies"],
            ["Practical", "Assignments and situational problem-solving"],
          ].map(([value, label]) => <div key={label}><dt className="text-sm text-muted-foreground">{label}</dt><dd className="mt-2 font-display text-3xl text-gold-deep tracking-normal">{value}</dd></div>)}
        </dl>
      </section>

      <section className="bg-muted/40 py-12 sm:py-16">
        <div className="container">
          <p className="text-sm font-semibold text-gold-deep">Learning Levels</p>
          <h2 className="mt-2 font-display text-3xl tracking-normal">Foundations to professional practice</h2>
          <ol className="mt-8 divide-y divide-border">
            {course.syllabus.map((level, index) => (
              <li key={level.module} className="grid gap-3 py-6 sm:grid-cols-[60px_1fr]">
                <span className="font-display text-3xl text-gold-deep">{String(index + 1).padStart(2, "0")}</span>
                <div><h3 className="font-display text-xl tracking-normal">{level.module}</h3><p className="mt-2 max-w-4xl leading-relaxed text-muted-foreground">{level.topics[0]}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container grid gap-12 py-12 sm:py-16 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl tracking-normal">Additional Topics</h2>
          <ul className="mt-6 space-y-4">{course.outcomes.map((topic) => <li key={topic} className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep" /><span>{topic}</span></li>)}</ul>
        </div>
        <div>
          <h2 className="font-display text-2xl tracking-normal">Course Features</h2>
          <ul className="mt-6 space-y-4">{course.highlights.map((feature) => <li key={feature} className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep" /><span>{feature}</span></li>)}</ul>
        </div>
      </section>

      <section className="bg-secondary py-12 text-secondary-foreground">
        <div className="container flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <h2 className="max-w-2xl font-display text-2xl sm:text-3xl tracking-normal">{course.shortTitle}</h2>
          <Button variant="premium" size="lg" onClick={enquire}>Enquire Now <ArrowRight /></Button>
        </div>
      </section>

      <Dialog open={image !== undefined} onOpenChange={(open) => { if (!open) setSelectedImage(null); }}>
        <DialogContent className="w-[96vw] max-w-[1200px] max-h-[94vh] gap-2 overflow-y-auto p-3 sm:p-5">
          <DialogTitle className="pr-10 text-base tracking-normal">{image?.alt}</DialogTitle>
          <DialogDescription className="sr-only">Full original course poster</DialogDescription>
          {image && <img src={image.src} alt={image.alt} className="h-auto w-full object-contain" />}
          <div className="flex justify-between gap-3">
            <Button variant="outline" size="sm" onClick={() => setSelectedImage((current) => current === 0 ? 1 : 0)}><ArrowLeft />{selectedImage === 0 ? "View brochure" : "View masterclass poster"}<ArrowRight /></Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AstrologyCourseDetail;