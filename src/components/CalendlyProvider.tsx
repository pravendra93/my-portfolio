"use client";

import { useEffect, useState } from "react";
import { PreQualModal } from "./PreQualModal";

export function CalendlyProvider() {
  const [isPreQualOpen, setIsPreQualOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // The Zoho Bookings Link provided by the user
  const ZOHO_BOOKING_LINK = "https://rakrilabs.zohobookings.in/#/421636000000040050";

  useEffect(() => {
    setMounted(true);
    const handleOpen = () => setIsPreQualOpen(true);
    window.addEventListener("open_calendly", handleOpen);
    return () => window.removeEventListener("open_calendly", handleOpen);
  }, []);

  const handleConfirmed = () => {
    setIsPreQualOpen(false);
    // After pre-qualification, open Zoho Bookings
    if (typeof window !== "undefined") {
      window.open(ZOHO_BOOKING_LINK, "_blank");
    }
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
    window.dispatchEvent(new Event("open_calendly"));
  }
};
