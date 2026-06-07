import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { courses } from "@/data/courses";
import { toast } from "@/hooks/use-toast";
import { Sparkles, CheckCircle2, Loader2 } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { submitToSheets } from "@/lib/sheets";

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
    const firstTimer = setTimeout(() => setOpen(true), 10000);
    const interval = setInterval(() => setOpen(true), 2 * 60 * 1000);
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

    // Prevent duplicate rapid submissions (15s throttle)
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
    if (trimmedName.length > 100) {
      toast({ title: "Name too long", description: "Please keep it under 100 characters." });
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

      // Redirect to WhatsApp + close popup
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
      <DialogContent className="sm:max-w-md p-0 overflow-hidden border-0 shadow-elegant">
        <div className="bg-hero text-primary-foreground p-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-3 py-1 text-xs font-medium text-gold">
            <Sparkles className="h-3.5 w-3.5" /> Limited Seats — Live Batch
          </div>
          <DialogHeader className="mt-3 space-y-1 text-left">
            <DialogTitle className="font-display text-2xl text-primary-foreground">
              Speak to a course advisor
            </DialogTitle>
            <DialogDescription className="text-primary-foreground/75">
              Share your details — we'll reach out with brochure, fees & next batch date.
            </DialogDescription>
          </DialogHeader>
        </div>

        {submitted ? (
          <div className="p-8 grid place-items-center bg-background text-center gap-3">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-gold/15 text-gold">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="font-display text-xl">Thank you! Our team will contact you shortly.</h3>
            <p className="text-sm text-muted-foreground">Redirecting you to WhatsApp…</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="p-6 grid gap-4 bg-background">
            <div className="grid gap-1.5">
              <Label htmlFor="lp-name">Full Name</Label>
              <Input id="lp-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" maxLength={100} required disabled={loading} />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="lp-phone">Mobile Number</Label>
              <Input id="lp-phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="10-digit mobile" inputMode="tel" maxLength={20} required disabled={loading} />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="lp-email">Email</Label>
              <Input id="lp-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" maxLength={255} required disabled={loading} />
            </div>
            <div className="grid gap-1.5">
              <Label>Interested Program</Label>
              <Select value={course} onValueChange={setCourse} disabled={loading}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {courses.map((c) => (
                    <SelectItem key={c.slug} value={c.title}>{c.title}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" variant="premium" className="w-full" disabled={loading}>
              {loading ? (<><Loader2 className="animate-spin" /> Submitting…</>) : "Submit"}
            </Button>
            <p className="text-[11px] text-muted-foreground text-center">
              By continuing you agree to our Privacy Policy & Terms.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LeadPopup;
