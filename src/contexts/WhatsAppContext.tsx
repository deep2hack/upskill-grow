import { createContext, useContext, useMemo, useState, ReactNode, useEffect } from "react";

type WhatsAppContextValue = {
  course: string | null;
  setCourse: (course: string | null) => void;
};

const WhatsAppContext = createContext<WhatsAppContextValue | undefined>(undefined);

export const WhatsAppProvider = ({ children }: { children: ReactNode }) => {
  const [course, setCourse] = useState<string | null>(null);
  const value = useMemo(() => ({ course, setCourse }), [course]);
  return <WhatsAppContext.Provider value={value}>{children}</WhatsAppContext.Provider>;
};

export const useWhatsApp = () => {
  const ctx = useContext(WhatsAppContext);
  if (!ctx) throw new Error("useWhatsApp must be used within WhatsAppProvider");
  return ctx;
};

/**
 * Call from a course page to set the active course for the floating WhatsApp button.
 * Automatically clears on unmount.
 */
export const useSetWhatsAppCourse = (courseName: string | null) => {
  const { setCourse } = useWhatsApp();
  useEffect(() => {
    setCourse(courseName);
    return () => setCourse(null);
  }, [courseName, setCourse]);
};
