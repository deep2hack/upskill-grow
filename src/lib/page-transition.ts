export const PAGE_RELOAD_EVENT = "upskiller:navigation-start";
export const PAGE_RELOAD_FLAG = "upskiller:pending-page-reload";

export const preparePageReload = () => {
  if (typeof window === "undefined") return;

  sessionStorage.setItem(PAGE_RELOAD_FLAG, "1");
  window.dispatchEvent(new Event(PAGE_RELOAD_EVENT));
};