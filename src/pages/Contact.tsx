import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";
import { courses } from "@/data/courses";
import { SITE } from "@/data/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState(courses[0].title);
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      toast({ title: "Name & phone are required", description: "We'll redirect you to WhatsApp to continue." });
      return;
    }
    const text = `Hi, I'd like more details.\nName: ${name}\nPhone: ${phone}\nEmail: ${email || "—"}\nCourse: ${course}\nMessage: ${message || "—"}`;
    window.open(buildWhatsAppUrl(text), "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <SEO title="Contact — Upskiller Academy" description="Talk to our advisors about programs, fees and batch dates." canonical="https://www.upskilleracademy.com/contact" />
      <section className="bg-hero text-primary-foreground">
        <div className="container py-16 lg:py-20">
          <Badge className="bg-gold/20 text-gold border-gold/30 hover:bg-gold/20">Contact</Badge>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl max-w-3xl">Let's talk about your goals.</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">Fill the form below — we'll continue the conversation on WhatsApp.</p>
        </div>
      </section>

      <section className="container py-16 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          {[
            { i: Phone, t: "Phone", v: SITE.phone, h: SITE.phoneHref },
            { i: MessageCircle, t: "WhatsApp", v: "Chat with an advisor", h: buildWhatsAppUrl() },
            { i: Mail, t: "Email", v: SITE.email, h: SITE.emailHref },
            { i: MapPin, t: "Address", v: SITE.address },
          ].map(({ i: I, t, v, h }) => (
            <Card key={t} className="border-border/60">
              <CardContent className="p-5 flex items-start gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-md bg-primary text-primary-foreground"><I className="h-5 w-5" /></span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{t}</p>
                  {h ? <a href={h} className="font-medium hover:text-primary">{v}</a> : <p className="font-medium">{v}</p>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-border/60 shadow-card-soft">
          <CardContent className="p-6 sm:p-8">
            <h2 className="font-display text-2xl">Send an enquiry</h2>
            <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="grid gap-1.5">
                <Label htmlFor="c-name">Full Name *</Label>
                <Input id="c-name" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="c-phone">Phone *</Label>
                <Input id="c-phone" value={phone} onChange={(e) => setPhone(e.target.value)} inputMode="tel" required />
              </div>
              <div className="grid gap-1.5 sm:col-span-2">
                <Label htmlFor="c-email">Email</Label>
                <Input id="c-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="grid gap-1.5 sm:col-span-2">
                <Label>Interested Program</Label>
                <Select value={course} onValueChange={setCourse}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {courses.map((c) => <SelectItem key={c.slug} value={c.title}>{c.title}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-1.5 sm:col-span-2">
                <Label htmlFor="c-msg">Message</Label>
                <Textarea id="c-msg" value={message} onChange={(e) => setMessage(e.target.value)} rows={4} placeholder="Tell us about your background & goals" />
              </div>
              <Button type="submit" variant="premium" size="lg" className="sm:col-span-2">
                <Send /> Send & Continue on WhatsApp
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </>
  );
};

export default Contact;
