export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  caseStudySlug?: string;
  avatar?: string;
  published: boolean;
}

/**
 * Honest Testimonial Repository.
 * Any unverified quotes are marked published: false.
 * The homepage testimonial strip automatically hides completely when there are 0 published testimonials.
 */
export const testimonials: Testimonial[] = [
  {
    id: "draft-1",
    name: "TODO: Verified Client Name",
    role: "TODO: CTO / VP Engineering",
    company: "TODO: Company Name",
    quote: "TODO: Client-approved testimonial quote.",
    caseStudySlug: "enterprise-rag-document-intelligence",
    published: false, // Strict: Never fabricate or publish fake reviews
  },
];
