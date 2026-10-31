"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { PreQualModal } from "./PreQualModal";

const emptySubscribe = () => () => {};

export function CalendlyProvider() {
  const [isPreQualOpen, setIsPreQualOpen] = useState(false);

  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  useEffect(() => {
    const handleOpen = () => setIsPreQualOpen(true);
    window.addEventListener("open_calendly", handleOpen);
    return () => window.removeEventListener("open_calendly", handleOpen);
  }, []);

  const handleConfirmed = () => {
    setIsPreQualOpen(false);
  };

  if (!mounted) return null;

  return (
    <PreQualModal 
      isOpen={isPreQualOpen} 
      onClose={() => setIsPreQualOpen(false)} 
      onConfirm={handleConfirmed} 
    />
  );
}

export const openCalendly = (e?: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
  if (e) e.preventDefault();
  if (typeof window !== "undefined") {
    try {
      // Lazy track event
      import("@/lib/analytics").then((m) => {
        m.trackEvent({ name: "book_call_clicked", props: { source: "header_or_cta" } });
      });
    } catch {}
    window.dispatchEvent(new Event("open_calendly"));
  }
};
