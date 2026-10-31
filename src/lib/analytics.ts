/**
 * Privacy-friendly event tracking utility.
 * Supports Plausible, Google Analytics (GTM/gtag), or custom telemetry.
 * Safe to call on server or client (no-ops gracefully).
 */

declare global {
  interface Window {
    plausible?: (eventName: string, options?: { props?: Record<string, any> }) => void;
    gtag?: (...args: any[]) => void;
  }
}

export type AnalyticsEvent =
  | { name: "book_call_clicked"; props?: { source: string } }
  | { name: "contact_form_submitted"; props?: { region: string; projectType: string } }
  | { name: "case_study_viewed"; props?: { slug: string; industry: string } }
  | { name: "nivora_simulator_used"; props?: { ruleId: string; category: string } }
  | { name: "demo_clicked"; props?: { product: string } };

export function trackEvent(event: AnalyticsEvent) {
  if (typeof window === "undefined") return;

  try {
    // 1. Plausible Analytics (privacy-friendly, cookie-free)
    if (typeof window.plausible === "function") {
      window.plausible(event.name, { props: event.props });
    }

    // 2. Google Analytics (if configured)
    if (typeof window.gtag === "function") {
      window.gtag("event", event.name, event.props);
    }

    if (process.env.NODE_ENV === "development") {
      console.log(`📊 [ANALYTICS EVENT] ${event.name}`, event.props);
    }
  } catch {
    // Fail silently so tracking never interferes with user experience
  }
}
