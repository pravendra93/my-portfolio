"use client";

import { useEffect, useState } from "react";
import { PopupModal } from "react-calendly";
import { PreQualModal } from "./PreQualModal";

export function CalendlyProvider() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPreQualOpen, setIsPreQualOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleOpen = () => setIsPreQualOpen(true);
    window.addEventListener("open_calendly", handleOpen);
    return () => window.removeEventListener("open_calendly", handleOpen);
  }, []);

  const handleConfirmed = () => {
    setIsPreQualOpen(false);
    setTimeout(() => {
      setIsOpen(true);
    }, 300);
  };

  if (!mounted) return null;

  return (
    <>
      <PreQualModal 
        isOpen={isPreQualOpen} 
        onClose={() => setIsPreQualOpen(false)} 
        onConfirm={handleConfirmed} 
      />
      
      <PopupModal
        url="https://calendly.com/akshaykumar-ojha/30min"
        onModalClose={() => setIsOpen(false)}
        open={isOpen}
        rootElement={document.body}
        pageSettings={{
          backgroundColor: "050505",
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: "06b6d4",
          textColor: "ffffff"
        }}
      />
    </>
  );
}

export const openCalendly = (e?: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
  if (e) e.preventDefault();
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("open_calendly"));
  }
};
