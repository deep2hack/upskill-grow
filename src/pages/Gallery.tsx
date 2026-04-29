import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";

const items = Array.from({ length: 9 }).map((_, i) => ({
  id: i,
  title: ["Live Cohort", "Mentor Session", "Trading Floor", "Workshop", "Convocation", "Strategy Lab", "Capstone Day", "Alumni Meet", "Annual Summit"][i],
}));

const Gallery = () => (
  <>
    <SEO title="Gallery — Upskiller Academy" description="Glimpses of our cohorts, workshops and live events." canonical="https://www.upskilleracademy.com/gallery" />
    <section className="bg-hero text-primary-foreground">
      <div className="container py-16 lg:py-20">
        <Badge className="bg-gold/20 text-gold border-gold/30 hover:bg-gold/20">Gallery</Badge>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl max-w-3xl">Inside the academy.</h1>
        <p className="mt-4 max-w-2xl text-primary-foreground/80">A look at our cohorts, mentor sessions and capstone events.</p>
      </div>
    </section>
    <section className="container py-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => (
        <div key={it.id} className="group relative overflow-hidden rounded-xl border border-border/60 aspect-[4/3] bg-hero hover:shadow-elegant transition-all">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-gold">Upskiller Academy</p>
            <p className="font-display text-lg text-primary-foreground">{it.title}</p>
          </div>
        </div>
      ))}
    </section>
  </>
);

export default Gallery;
