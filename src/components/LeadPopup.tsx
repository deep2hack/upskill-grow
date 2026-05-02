import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { courses } from "@/data/courses";
import { toast } from "@/hooks/use-toast";
import { Sparkles, CheckCircle2 } from "lucide-react";

const STORAGE_KEY = "upskiller_lead_popup_v1";

export const LeadPopup = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState<string>(courses[0].title);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.sessionStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => setOpen(true), 12000);
    return () => clearTimeout(t);
  }, []);

  const handleClose = (v: boolean) => {
    setOpen(v);
    if (!v) window.sessionStorage.setItem(STORAGE_KEY, "1");
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    if (!trimmedName || !trimmedPhone) {
      toast({ title: "Please share your name & phone", description: "We need these details to contact you." });
      return;
    }
    if (trimmedName.length > 100 || trimmedPhone.length > 20) {
      toast({ title: "Invalid input", description: "Please check the entered details." });
      return;
    }
    window.sessionStorage.setItem(STORAGE_KEY, "1");
    setSubmitted(true);
    toast({ title: "Thank you!", description: "We will contact you soon." });
    setTimeout(() => setOpen(false), 2400);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
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
            <h3 className="font-display text-xl">Thank you, we will contact you soon</h3>
            <p className="text-sm text-muted-foreground">Our advisor will reach out shortly.</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="p-6 grid gap-4 bg-background">
            <div className="grid gap-1.5">
              <Label htmlFor="lp-name">Full Name</Label>
              <Input id="lp-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" maxLength={100} required />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="lp-phone">Mobile Number</Label>
              <Input id="lp-phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="10-digit mobile" inputMode="tel" maxLength={20} required />
            </div>
            <div className="grid gap-1.5">
              <Label>Interested Program</Label>
              <Select value={course} onValueChange={setCourse}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {courses.map((c) => (
                    <SelectItem key={c.slug} value={c.title}>{c.title}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" variant="premium" className="w-full">
              Submit
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
