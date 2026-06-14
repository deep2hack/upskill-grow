import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { courses } from "@/data/courses";
import { toast } from "@/hooks/use-toast";
import { Sparkles, CheckCircle2, Loader2 } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { submitToSheets } from "@/lib/sheets";
import leftPhoto from "@/assets/popup/popup-left.png.asset.json";
import rightPhoto from "@/assets/popup/popup-right.png.asset.json";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[+]?[\d\s-]{10,15}$/;

export const LeadPopup = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState<string>(courses[0].title);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [lastSubmit, setLastSubmit] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const firstTimer = setTimeout(() => setOpen(true), 3 * 60 * 1000);
    const interval = setInterval(() => setOpen(true), 3 * 60 * 1000);
    return () => {
      clearTimeout(firstTimer);
      clearInterval(interval);
    };
  }, []);

  const resetForm = () => {
    setName("");
    setPhone("");
    setEmail("");
    setCourse(courses[0].title);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    const now = Date.now();
    if (now - lastSubmit < 15000) {
      toast({ title: "Please wait", description: "You just submitted — give us a moment." });
      return;
    }
    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    const trimmedEmail = email.trim();
    if (!trimmedName || !trimmedPhone || !trimmedEmail) {
      toast({ title: "All fields are required", description: "Please fill in name, phone and email." });
      return;
    }
    if (!emailRegex.test(trimmedEmail)) {
      toast({ title: "Invalid email", description: "Please enter a valid email address." });
      return;
    }
    if (!phoneRegex.test(trimmedPhone)) {
      toast({ title: "Invalid phone", description: "Please enter a valid mobile number." });
      return;
    }

    setLoading(true);
    try {
      await submitToSheets({
        formType: "lead",
        name: trimmedName,
        phone: trimmedPhone,
        email: trimmedEmail,
        course,
        page: typeof window !== "undefined" ? window.location.href : "",
      });
      setLastSubmit(Date.now());
      setSubmitted(true);
      toast({ title: "Thank you!", description: "Our team will contact you shortly." });
      setTimeout(() => {
        const msg = `Hi, I just submitted an enquiry.\nName: ${trimmedName}\nPhone: ${trimmedPhone}\nEmail: ${trimmedEmail}\nCourse: ${course}`;
        window.open(buildWhatsAppUrl(msg), "_blank", "noopener,noreferrer");
        setOpen(false);
        resetForm();
        setTimeout(() => setSubmitted(false), 500);
      }, 1800);
    } catch (err) {
      console.error("Lead submission failed", err);
      toast({ title: "Could not submit", description: "Please try again or contact us on WhatsApp." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="p-0 overflow-hidden border-0 shadow-elegant bg-transparent sm:max-w-[960px] max-h-[92vh] overflow-y-auto">
        <div className="relative grid grid-cols-1 md:grid-cols-[1fr_1.2fr_1fr] bg-gradient-to-br from-[hsl(222_85%_10%)] via-[hsl(222_80%_14%)] to-[hsl(222_85%_8%)]">
          {/* Gold glow border */}
          <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-gold/30 [box-shadow:0_0_60px_-10px_hsl(43_95%_55%/0.45)_inset]" />

          {/* LEFT PHOTO */}
          <div className="relative hidden md:block overflow-hidden md:rounded-l-lg animate-[lp-slide-in-left_0.7s_cubic-bezier(0.22,1,0.36,1)_both]">
            <img
              src={leftPhoto.url}
              alt="Upskiller Academy training sessions"
              className="absolute inset-0 h-full w-full object-cover animate-[lp-zoom_18s_ease-in-out_infinite_alternate]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(222_85%_8%)] via-[hsl(222_85%_8%)]/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-primary-foreground">
              <p className="text-[10px] uppercase tracking-[0.24em] text-gold font-bold">Live Classroom</p>
              <p className="mt-1 text-xs text-white/85">Industry-led workshops & guest lectures</p>
            </div>
          </div>

          {/* MOBILE TOP PHOTO */}
          <div className="relative md:hidden h-36 overflow-hidden rounded-t-lg">
            <img src={leftPhoto.url} alt="Upskiller Academy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(222_85%_8%)] to-transparent" />
          </div>

          {/* CENTER FORM — Royal Blue glassmorphism */}
          <div className="relative bg-[hsl(222_85%_10%)]/60 backdrop-blur-2xl md:border-x border-gold/25 animate-[lp-fade-in_0.6s_ease-out_0.15s_both]">
            {/* Trading chart pattern backdrop */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background:linear-gradient(hsl(48_100%_70%/1)_1px,transparent_1px),linear-gradient(90deg,hsl(48_100%_70%/1)_1px,transparent_1px)] [background-size:24px_24px]" />
            <div className="pointer-events-none absolute -top-20 -right-16 h-56 w-56 rounded-full bg-gold/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-primary-glow/30 blur-3xl" />

            <div className="relative p-6 sm:p-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-3 py-1 text-[11px] font-medium text-gold ring-1 ring-gold/40">
                <Sparkles className="h-3.5 w-3.5" /> Limited Seats — Live Batch
              </div>
              <DialogTitle className="mt-3 font-display text-2xl text-white">
                Speak With Our Course Advisor
              </DialogTitle>
              <DialogDescription className="mt-1 text-sm text-white/70">
                Get course details, fees, placements, certifications and upcoming batch information.
              </DialogDescription>

              {submitted ? (
                <div className="mt-6 grid place-items-center text-center gap-3 py-6">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-gold/15 text-gold ring-1 ring-gold/40">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-display text-xl text-white">Thank you!</h3>
                  <p className="text-sm text-white/70">Redirecting you to WhatsApp…</p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-5 grid gap-3.5">
                  <div className="grid gap-1.5">
                    <Label htmlFor="lp-name" className="text-white/90">Full Name</Label>
                    <Input id="lp-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" maxLength={100} required disabled={loading} className="bg-white/[0.06] border-white/20 text-white placeholder:text-white/40 focus-visible:ring-gold/60 focus-visible:border-gold/60 focus-visible:shadow-[0_0_0_3px_hsl(43_95%_55%/0.25)] transition-shadow" />
                  </div>
                  <div className="grid gap-1.5">
                    <Label htmlFor="lp-phone" className="text-white/90">Mobile Number</Label>
                    <Input id="lp-phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="10-digit mobile" inputMode="tel" maxLength={20} required disabled={loading} className="bg-white/[0.06] border-white/20 text-white placeholder:text-white/40 focus-visible:ring-gold/60 focus-visible:border-gold/60 focus-visible:shadow-[0_0_0_3px_hsl(43_95%_55%/0.25)] transition-shadow" />
                  </div>
                  <div className="grid gap-1.5">
                    <Label htmlFor="lp-email" className="text-white/90">Email Address</Label>
                    <Input id="lp-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" maxLength={255} required disabled={loading} className="bg-white/[0.06] border-white/20 text-white placeholder:text-white/40 focus-visible:ring-gold/60 focus-visible:border-gold/60 focus-visible:shadow-[0_0_0_3px_hsl(43_95%_55%/0.25)] transition-shadow" />
                  </div>
                  <div className="grid gap-1.5">
                    <Label className="text-white/90">Interested Program</Label>
                    <Select value={course} onValueChange={setCourse} disabled={loading}>
                      <SelectTrigger className="bg-white/[0.06] border-white/20 text-white focus:ring-gold/60"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {courses.map((c) => (
                          <SelectItem key={c.slug} value={c.title}>{c.title}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit" variant="premium" className="w-full mt-1 shadow-[0_0_30px_-6px_hsl(43_95%_55%/0.55)] hover:shadow-[0_0_45px_-4px_hsl(48_100%_70%/0.85)] hover:scale-[1.02] transition-all" disabled={loading}>
                    {loading ? (<><Loader2 className="animate-spin" /> Submitting…</>) : "Get Free Counselling"}
                  </Button>
                  <p className="text-[11px] text-white/55 text-center">
                    By continuing you agree to our Privacy Policy & Terms.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* RIGHT PHOTO */}
          <div className="relative hidden md:block overflow-hidden md:rounded-r-lg animate-[lp-slide-in-right_0.7s_cubic-bezier(0.22,1,0.36,1)_both]">
            <img
              src={rightPhoto.url}
              alt="Upskiller Academy events and placements"
              className="absolute inset-0 h-full w-full object-cover animate-[lp-float_8s_ease-in-out_infinite]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(222_85%_8%)] via-[hsl(222_85%_8%)]/30 to-transparent" />
            <div className="pointer-events-none absolute inset-0 [box-shadow:0_0_80px_-10px_hsl(43_95%_55%/0.5)_inset]" />
            <div className="absolute bottom-4 left-4 right-4 text-primary-foreground text-right">
              <p className="text-[10px] uppercase tracking-[0.24em] text-gold font-bold">Placement Drives</p>
              <p className="mt-1 text-xs text-white/85">Awards, certifications & success</p>
            </div>
          </div>

          {/* MOBILE BOTTOM PHOTO */}
          <div className="relative md:hidden h-36 overflow-hidden rounded-b-lg">
            <img src={rightPhoto.url} alt="Upskiller Academy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-[hsl(222_85%_8%)] to-transparent" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LeadPopup;
