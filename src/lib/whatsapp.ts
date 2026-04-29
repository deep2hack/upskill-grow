// Central WhatsApp config. Update the number here to change it site-wide.
export const WHATSAPP_NUMBER = "919452064018"; // +91 94520 64018, no '+' for wa.me

export const buildWhatsAppUrl = (message?: string) => {
  const text = message?.trim() || "Hi, I'm interested in Upskiller Academy courses.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

export const courseEnquiryMessage = (courseName: string) =>
  `Hi, I'm interested in ${courseName}. Please share more details.`;
