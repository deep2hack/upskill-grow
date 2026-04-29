import { useEffect, useMemo, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { courses } from "@/data/courses";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { toast } from "@/hooks/use-toast";
import { Sparkles } from "lucide-react";

const STORAGE_KEY = "upskiller_lead_popup_v1";

export const LeadPopup = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState<string>(courses[0].title);

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

  const message = useMemo(() => {
    return `Hi, I'd like to know more about ${course}.\nName: ${name || "—"}\nPhone: ${phone || "—"}`;
  }, [course, name, phone]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      toast({ title: "Please share your name & phone", description: "We'll redirect you to WhatsApp to continue." });
      return;
    }
    window.sessionStorage.setItem(STORAGE_KEY, "1");
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    setOpen(false);
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
              Get the brochure, fee structure & next batch date on WhatsApp.
            </DialogDescription>
          </DialogHeader>
        </div>
        <form onSubmit={onSubmit} className="p-6 grid gap-4 bg-background">
          <div className="grid gap-1.5">
            <Label htmlFor="lp-name">Full Name</Label>
            <Input id="lp-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="lp-phone">Mobile Number</Label>
            <Input id="lp-phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="10-digit mobile" inputMode="tel" required />
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
            Continue on WhatsApp
          </Button>
          <p className="text-[11px] text-muted-foreground text-center">
            By continuing you agree to our Privacy Policy & Terms.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LeadPopup;
