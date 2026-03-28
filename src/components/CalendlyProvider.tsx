"use client";

import { useEffect, useState } from "react";
import { PopupModal } from "react-calendly";

export function CalendlyProvider() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open_calendly", handleOpen);
    return () => window.removeEventListener("open_calendly", handleOpen);
  }, []);

  if (!mounted) return null;

  return (
    <PopupModal
      url="https://calendly.com/akshaykumar-ojha/30min"
      onModalClose={() => setIsOpen(false)}
      open={isOpen}
      rootElement={document.body}
      pageSettings={{
        backgroundColor: "050505",
        hideEventTypeDetails: false,
        hideLandingPageDetails: false,
        primaryColor: "06b6d4", // brand-cyan
        textColor: "ffffff"
      }}
    />
  );
}

// Helper utility to trigger Calendly popup anywhere
export const openCalendly = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
  e.preventDefault();
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("open_calendly"));
  }
};
