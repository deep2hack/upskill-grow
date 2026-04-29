import { MessageCircle } from "lucide-react";
import { useWhatsApp } from "@/contexts/WhatsAppContext";
import { buildWhatsAppUrl, courseEnquiryMessage } from "@/lib/whatsapp";

export const FloatingWhatsApp = () => {
  const { course } = useWhatsApp();
  const message = course ? courseEnquiryMessage(course) : undefined;
  const href = buildWhatsAppUrl(message);
  const label = course ? `Chat about ${course} on WhatsApp` : "Chat with us on WhatsApp";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 ring-2 ring-white/10 transition-all hover:scale-110 hover:ring-[hsl(var(--primary))] focus:outline-none focus:ring-4 focus:ring-[hsl(var(--primary))] print:hidden"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
      <MessageCircle className="relative h-7 w-7" strokeWidth={2.25} />
    </a>
  );
};

export default FloatingWhatsApp;
