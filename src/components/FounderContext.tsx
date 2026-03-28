"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type FounderContextType = {
  isFounderMode: boolean;
  toggleFounderMode: () => void;
};

const FounderContext = createContext<FounderContextType | undefined>(undefined);

export function FounderProvider({ children }: { children: React.ReactNode }) {
  const [isFounderMode, setIsFounderMode] = useState(false);

  useEffect(() => {
    if (isFounderMode) {
      document.body.setAttribute("data-mode", "founder");
    } else {
      document.body.removeAttribute("data-mode");
    }
  }, [isFounderMode]);

  const toggleFounderMode = () => setIsFounderMode(!isFounderMode);

  return (
    <FounderContext.Provider value={{ isFounderMode, toggleFounderMode }}>
      {children}
    </FounderContext.Provider>
  );
}

export function useFounderMode() {
  const context = useContext(FounderContext);
  if (context === undefined) {
    throw new Error("useFounderMode must be used within a FounderProvider");
  }
  return context;
}
