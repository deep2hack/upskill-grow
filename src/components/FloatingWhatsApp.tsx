import { useState } from "react";
import { MessageCircle, X, ChevronRight } from "lucide-react";
import { useWhatsApp } from "@/contexts/WhatsAppContext";
import { buildWhatsAppUrl, courseEnquiryMessage } from "@/lib/whatsapp";
import { courses } from "@/data/courses";

export const FloatingWhatsApp = () => {
  const { course } = useWhatsApp();
  const [open, setOpen] = useState(false);

  const quickQuestions = [
    "What are the course fees & EMI options?",
    "When is the next batch starting?",
    "Do you offer a free demo class?",
    "Is the course online or offline?",
    "Do you provide a certificate & placement support?",
  ];

  const openChat = (message: string) => {
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  };

  const directHref = buildWhatsAppUrl(course ? courseEnquiryMessage(course) : undefined);

  return (
    <>
      {/* Chat panel */}
      {open && (
        <div
          className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[360px] max-h-[70vh] flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[hsl(var(--background))] print:hidden animate-in fade-in slide-in-from-bottom-4 duration-200"
        >
          {/* Header */}
          <div className="bg-[#075E54] text-white px-4 py-3 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-sm">Upskiller Academy</div>
              <div className="text-[11px] text-white/80 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-green-400 inline-block" />
                Typically replies in a few minutes
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-white/80 hover:text-white p-1"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Body */}
          <div
            className="flex-1 overflow-y-auto px-3 py-4 space-y-3"
            style={{
              backgroundImage:
                "radial-gradient(hsl(var(--muted-foreground)/0.08) 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          >
            {/* Welcome bubble */}
            <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] px-3 py-2 text-sm shadow">
              👋 Hi! Welcome to <b>Upskiller Academy</b>. Pick a course or question
              below and we'll continue on WhatsApp.
            </div>

            {/* Courses */}
            <div className="space-y-1.5">
              <div className="text-[11px] uppercase tracking-wider text-[hsl(var(--muted-foreground))] px-1">
                Browse courses
              </div>
              {courses.map((c) => (
                <button
                  key={c.slug}
                  onClick={() => openChat(courseEnquiryMessage(c.title))}
                  className="w-full text-left flex items-center justify-between gap-2 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))] px-3 py-2 text-sm transition-colors"
                >
                  <span className="truncate">{c.shortTitle}</span>
                  <ChevronRight className="h-4 w-4 opacity-60 shrink-0" />
                </button>
              ))}
            </div>

            {/* Quick questions */}
            <div className="space-y-1.5 pt-2">
              <div className="text-[11px] uppercase tracking-wider text-[hsl(var(--muted-foreground))] px-1">
                Quick questions
              </div>
              {quickQuestions.map((q) => (
                <button
                  key={q}
                  onClick={() => openChat(q)}
                  className="w-full text-left rounded-xl bg-[#DCF8C6] text-[#0b3d24] hover:brightness-95 px-3 py-2 text-sm shadow-sm"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Footer CTA */}
          <a
            href={directHref}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:brightness-110 text-white text-sm font-semibold py-3 text-center flex items-center justify-center gap-2"
          >
            <MessageCircle className="h-4 w-4" />
            Start chat on WhatsApp
          </a>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close WhatsApp chat" : "Open WhatsApp chat"}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 ring-2 ring-white/10 transition-all hover:scale-110 hover:ring-[hsl(var(--primary))] focus:outline-none focus:ring-4 focus:ring-[hsl(var(--primary))] print:hidden"
      >
        {!open && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
        )}
        {open ? (
          <X className="relative h-6 w-6" strokeWidth={2.5} />
        ) : (
          <MessageCircle className="relative h-7 w-7" strokeWidth={2.25} />
        )}
      </button>
    </>
  );
};

export default FloatingWhatsApp;
