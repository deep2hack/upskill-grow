import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Youtube, Linkedin, Facebook } from "lucide-react";
import { NAV_LINKS, SITE } from "@/data/site";
import { courses } from "@/data/courses";
import logo from "@/assets/logo.jpeg";

export const Footer = () => {
  return (
    <footer className="mt-16 bg-secondary text-secondary-foreground">
      <div className="container py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-full bg-white ring-2 ring-gold/50">
              <img src={logo} alt="Upskiller Academy" className="h-full w-full object-cover" />
            </span>
            <span className="font-display text-lg font-bold">
              Upskiller <span className="text-gold">Academy</span>
            </span>
          </Link>
          <p className="mt-4 text-sm text-secondary-foreground/70 leading-relaxed">
            India's premier training institute for stock markets, derivatives and
            financial analysis — mentor-led, outcome-focused.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a href={SITE.socials.instagram} aria-label="Instagram" className="rounded-full border border-secondary-foreground/20 p-2 hover:border-gold hover:text-gold transition-colors"><Instagram className="h-4 w-4" /></a>
            <a href={SITE.socials.youtube} aria-label="YouTube" className="rounded-full border border-secondary-foreground/20 p-2 hover:border-gold hover:text-gold transition-colors"><Youtube className="h-4 w-4" /></a>
            <a href={SITE.socials.linkedin} aria-label="LinkedIn" className="rounded-full border border-secondary-foreground/20 p-2 hover:border-gold hover:text-gold transition-colors"><Linkedin className="h-4 w-4" /></a>
            <a href={SITE.socials.facebook} aria-label="Facebook" className="rounded-full border border-secondary-foreground/20 p-2 hover:border-gold hover:text-gold transition-colors"><Facebook className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-gold">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-secondary-foreground/75 hover:text-gold">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-gold">Programs</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {courses.map((c) => (
              <li key={c.slug}>
                <Link to={`/courses/${c.slug}`} className="text-secondary-foreground/75 hover:text-gold">
                  {c.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-gold">Reach Us</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3"><Phone className="h-4 w-4 mt-0.5 text-gold" /><a href={SITE.phoneHref} className="hover:text-gold">{SITE.phone}</a></li>
            <li className="flex items-start gap-3"><Mail className="h-4 w-4 mt-0.5 text-gold" /><a href={SITE.emailHref} className="hover:text-gold">{SITE.email}</a></li>
            <li className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-0.5 text-gold" /><span>{SITE.address}</span></li>
          </ul>
          <div className="mt-5 text-xs flex flex-wrap gap-x-4 gap-y-1 text-secondary-foreground/60">
            <Link to="/privacy" className="hover:text-gold">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold">Terms & Conditions</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-secondary-foreground/10">
        <div className="container py-4 text-xs text-secondary-foreground/60 flex flex-wrap justify-between gap-2">
          <p>© {new Date().getFullYear()} Upskiller Academy. All rights reserved.</p>
          <p>Disclaimer: Investments in securities markets are subject to market risks.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
