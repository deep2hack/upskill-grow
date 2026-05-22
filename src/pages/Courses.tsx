import { Clock, BookOpen, ArrowRight, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import SEO from "@/components/SEO";
import { courses, formatINR } from "@/data/courses";
import ReloadLink from "@/components/ReloadLink";

const levels = ["All", "Beginner", "Intermediate", "Advanced"] as const;

const CourseCard = ({ slug, title, tagline, level, duration, mode, price, mrp, image }: typeof courses[number]) => (
  <Card className="group flex flex-col overflow-hidden border-border/60 hover:border-gold/60 hover:shadow-elegant transition-all">
    {image && (
      <ReloadLink to={`/courses/${slug}`} className="block overflow-hidden bg-secondary">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </ReloadLink>
    )}
    <CardHeader>
      <div className="flex items-center justify-between">
        <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/10">{level}</Badge>
        <Badge className="bg-gold text-secondary hover:bg-gold">Live</Badge>
      </div>
      <CardTitle className="font-display text-xl mt-3">{title}</CardTitle>
      <CardDescription>{tagline}</CardDescription>
    </CardHeader>
    <CardContent className="mt-auto">
      <div className="flex items-center gap-3 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{duration}</span>
        <span className="inline-flex items-center gap-1"><BookOpen className="h-3.5 w-3.5" />{mode}</span>
      </div>
      <div className="mt-4 flex items-end justify-between">
        <div>
          <p className="text-xs text-muted-foreground line-through">{formatINR(mrp)}</p>
          <p className="font-display text-2xl text-primary">{formatINR(price)}</p>
        </div>
        <Button asChild variant="premium" size="sm">
          <ReloadLink to={`/courses/${slug}`}>View Course <ArrowRight /></ReloadLink>
        </Button>
      </div>
    </CardContent>
  </Card>
);

const Courses = () => {
  return (
    <>
      <SEO
        title="Courses & Certifications — Upskiller Academy"
        description="Browse all Upskiller Academy programs — trading, derivatives, equity research, financial analysis and beginner foundation."
        canonical="https://www.upskilleracademy.com/courses"
      />
      <section className="bg-hero text-primary-foreground">
        <div className="container py-16 lg:py-20">
          <Badge className="bg-gold/20 text-gold border-gold/30 hover:bg-gold/20">Programs</Badge>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl max-w-3xl">All Certifications</h1>
          <p className="mt-3 max-w-2xl text-primary-foreground/80">
            Choose a path. Whether you're starting out or going pro — we have a structured program for you.
          </p>
        </div>
      </section>

      <section className="container py-12">
        <Tabs defaultValue="All">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <TabsList>
              {levels.map((l) => <TabsTrigger key={l} value={l}>{l}</TabsTrigger>)}
            </TabsList>
            <p className="text-xs text-muted-foreground inline-flex items-center gap-1">
              <Filter className="h-3.5 w-3.5" /> Filter by level
            </p>
          </div>
          {levels.map((l) => (
            <TabsContent key={l} value={l} className="mt-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {courses
                  .filter((c) => l === "All" || c.level === l)
                  .map((c) => <CourseCard key={c.slug} {...c} />)}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </>
  );
};

export default Courses;
