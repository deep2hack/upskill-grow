import { AnchorHTMLAttributes, MouseEvent } from "react";
import { preparePageReload } from "@/lib/page-transition";

type ReloadLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  to: string;
};

export const ReloadLink = ({ to, onClick, target, rel, children, ...props }: ReloadLinkProps) => {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    if (event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (target && target !== "_self") return;
    if (!to || to.startsWith("#") || to.startsWith("mailto:") || to.startsWith("tel:")) return;

    event.preventDefault();
    preparePageReload();
    window.setTimeout(() => {
      window.location.assign(to);
    }, 110);
  };

  return (
    <a href={to} onClick={handleClick} target={target} rel={rel} {...props}>
      {children}
    </a>
  );
};

export default ReloadLink;