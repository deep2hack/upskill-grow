import { useEffect } from "react";

type SEOProps = {
  title: string;
  description?: string;
  canonical?: string;
};

export const SEO = ({ title, description, canonical }: SEOProps) => {
  useEffect(() => {
    document.title = title;
    if (description) {
      let m = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
      if (!m) {
        m = document.createElement("meta");
        m.name = "description";
        document.head.appendChild(m);
      }
      m.content = description;
    }
    if (canonical) {
      let l = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!l) {
        l = document.createElement("link");
        l.rel = "canonical";
        document.head.appendChild(l);
      }
      l.href = canonical;
    }
  }, [title, description, canonical]);
  return null;
};

export default SEO;
