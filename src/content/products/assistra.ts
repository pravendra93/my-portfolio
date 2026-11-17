export interface AssistraProductConfig {
  published: boolean;
  name: string;
  tagline: string;
  description: string;
}

export const assistraProduct: AssistraProductConfig = {
  // Hidden site-wide while Assistra is offline. Set to true to restore
  // the product page, nav/footer links, and sitemap entry.
  published: false,
  name: "Assistra",
  tagline: "AI Knowledge Assistant · Coming Soon",
  description: "Assistra is an upcoming organizational knowledge assistant concept. The engineering case study describes the supplied project-brief architecture; the public product is not live.",
};
