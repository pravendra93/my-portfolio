# RakriLabs Content System

This directory houses all business, marketing, pricing, compliance, and product copy for RakriLabs.
All data is typed in TypeScript and consumed across pages and components to guarantee zero made-up facts.

## Ground Rules

1. **Never invent facts**: Never fabricate clients, testimonials, metrics, team members, certifications, or awards.
2. **The `published` flag**: Every content object has a `published: boolean` property. Set `published: false` for drafts or unverified items. Unverified items are never rendered on the live website.
3. **No TODOs in production**: The build-time validator (`npm run validate:content`) scans all published files. It warns if any published item contains `TODO` and **fails the build** if any published testimonial or metric lacks a name or source attribution.

---

## Content Files Overview

### 1. `site.ts`
- **Fields**:
  - `name`: Brand name (canonical: `"RakriLabs"`).
  - `domain`: Canonical domain (`"rakrilabs.com"`).
  - `url`: Full canonical base URL (`https://rakrilabs.com`).
  - `email`, `contactEmail`: Official support and executive contact addresses.
  - `location`, `registeredOffice`: Verified company location (India / Global Remote).
  - `timezone`: Timezone baseline (`"Asia/Kolkata"`).
  - `workingHoursNote`: Overlap explanation for US, EU, Gulf, and Australia/NZ clients.
  - `bookingUrl`: Zoho Bookings / scheduling link.
  - `demo`: Configurable demo URL (`url`, `isPublic: boolean`, `label`).
  - `socials`: Official verified social profile URLs (`github`, `linkedin`, `twitter`).

### 2. `capacity.ts`
- Maps quarter keys (`"YYYY-QX"`, e.g. `"2026-Q4"`, `"2027-Q1"`) to integer sprint slot counts.
- If a quarter key is missing or undefined, the slot number is hidden and the badge displays "Now booking [Quarter] projects" without false scarcity numbers.

### 3. `claims.ts`
- Registry of all quantitative or technical marketing assertions.
- Fields: `id`, `originalClaim`, `softenedOrWiredText`, `status` (`"verified" | "softened" | "draft"`), `source`, `notes`, `published`.

### 4. `team.ts`
- Founder and verified staff profiles (`name`, `role`, `bio`, `image`, `linkedin`, `github`, `published`, `isFounder`).
- Unverified placeholders are marked `published: false`.

### 5. `compliance.ts`
- Project-level security and deployment questions to resolve with each client. Do not present these as certifications, universal guarantees, or legal advice without verified evidence and owner approval.
- `certificationsClaimed`: Strict array of official audit certifications. Empty by default unless third-party audited.

### 6. `case-studies.ts`
- Structured case studies with:
  - `permission`: `"named"` or `"anonymised"`.
  - `industry`, `service`, `region`, `timeline`, `teamSize`.
  - `challenge`, `solution`, `architectureSteps`, `techStack`.
  - `metrics`: Array of `{ label, value, source: "client-reported" | "measured by us" }`.
  - `published: boolean`.

### 7. `testimonials.ts`
- Client testimonial quotes with `name`, `role`, `company`, `quote`, `caseStudySlug`, `published`.
- If zero published testimonials exist, the homepage testimonial strip renders cleanly as empty/hidden.

### 8. `products/assistra.ts`
- Section-wise automation configuration for Assistra.
- Each section defines: `id`, `title`, `outcome`, `problemRemoved`, `whatGetsAutomated`, `howItWorks`, `status` (`Live | Beta | Alpha`), `ctaText`, `ctaHref`, `diagramDescription`.
- Adding a new automation capability is as simple as appending an object to `sections`.

### 9. `products/nivorahq.ts`
- Social media keyword auto-reply engine.
- Contains `howItWorksSteps`, interactive simulator `ruleTemplates` (keywords, prompt, simulated reply), `guardrails`, `platformComplianceDisclaimer`, and `faq`.

### 10. `pricing.ts`
- Indicative fixed-price sprint tiers (`name`, `price`, `billingBasis`, `tagline`, `timeline`, `targetAudience`, `deliverables`, `highlight`, `published`).

### 11. `faq.ts`
- Structured answers to overseas B2B buyer questions on IP ownership, timezone overlap, security, hallucination defense, and billing.

---

## Validation Script

To run the content integrity auditor:
```bash
npm run validate:content
```
This script runs in CI / pre-build to guarantee that no unverified or draft claims slip through.
