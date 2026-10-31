import { testimonials } from "../src/content/testimonials.ts";
import { caseStudies } from "../src/content/case-studies.ts";
import { teamMembers } from "../src/content/team.ts";
import { pricingConfig } from "../src/content/pricing.ts";
import { faqs } from "../src/content/faq.ts";
import { assistraProduct } from "../src/content/products/assistra.ts";
import { nivoraHQProduct } from "../src/content/products/nivorahq.ts";
import { complianceConfig } from "../src/content/compliance.ts";
import { siteConfig } from "../src/content/site.ts";

console.log("🔍 [CONTENT VALIDATOR] Starting content audit...\n");

let warnings = 0;
let errors = 0;

function warn(msg: string) {
  warnings++;
  console.warn(`⚠️  [WARNING] ${msg}`);
}

function error(msg: string) {
  errors++;
  console.error(`❌ [ERROR] ${msg}`);
}

function checkForTodo(obj: any, context: string) {
  if (!obj) return;
  if (typeof obj === "string") {
    if (obj.includes("TODO")) {
      warn(`Found 'TODO' in published item [${context}]: "${obj.slice(0, 60)}..."`);
    }
  } else if (Array.isArray(obj)) {
    obj.forEach((item, idx) => checkForTodo(item, `${context}[${idx}]`));
  } else if (typeof obj === "object") {
    for (const key of Object.keys(obj)) {
      checkForTodo(obj[key], `${context}.${key}`);
    }
  }
}

// 1. Audit Testimonials
console.log("Checking testimonials...");
testimonials.forEach((t, i) => {
  if (t.published) {
    checkForTodo(t, `testimonials[${i}] (${t.name})`);
    if (!t.name || t.name.trim() === "") {
      error(`Published testimonial at index ${i} lacks a valid name!`);
    }
    if (!t.company || t.company.trim() === "") {
      error(`Published testimonial for "${t.name}" lacks a company affiliation!`);
    }
    if (!t.quote || t.quote.trim() === "") {
      error(`Published testimonial for "${t.name}" lacks quote text!`);
    }
  }
});

// 2. Audit Case Studies & Metrics
console.log("Checking case studies & metrics...");
caseStudies.forEach((cs) => {
  if (cs.published) {
    checkForTodo(cs, `caseStudies (${cs.slug})`);
    if (!cs.clientLabel || cs.clientLabel.trim() === "") {
      error(`Case study "${cs.slug}" is published but lacks a clientLabel!`);
    }
    if (!cs.metrics || cs.metrics.length === 0) {
      warn(`Case study "${cs.slug}" is published with 0 quantitative metrics.`);
    } else {
      cs.metrics.forEach((m, mIdx) => {
        if (!m.label || m.label.trim() === "") {
          error(`Metric #${mIdx} in case study "${cs.slug}" lacks a label!`);
        }
        if (!m.value || m.value.trim() === "") {
          error(`Metric "${m.label}" in case study "${cs.slug}" lacks a value!`);
        }
        if (!m.source || (m.source !== "client-reported" && m.source !== "measured by us")) {
          error(`Metric "${m.label}" in case study "${cs.slug}" has an invalid or missing source attribution! Must be 'client-reported' or 'measured by us'.`);
        }
      });
    }
  }
});

// 3. Audit Team
console.log("Checking team members...");
teamMembers.forEach((member, i) => {
  if (member.published) {
    checkForTodo(member, `teamMembers[${i}] (${member.name})`);
    if (!member.name || member.name.trim() === "") {
      error(`Published team member #${i} lacks a name!`);
    }
    if (!member.role || member.role.trim() === "") {
      error(`Published team member "${member.name}" lacks a role!`);
    }
  }
});

// 4. Audit Pricing
console.log("Checking pricing tiers...");
if (pricingConfig.published) {
  pricingConfig.tiers.forEach((tier) => {
    if (tier.published) {
      checkForTodo(tier, `pricingTier (${tier.name})`);
    }
  });
}

// 5. Audit Products
console.log("Checking Assistra & NivoraHQ...");
if (assistraProduct.published) {
  checkForTodo(assistraProduct, "assistraProduct");
}
if (nivoraHQProduct.published) {
  checkForTodo(nivoraHQProduct, "nivoraHQProduct");
}

// 6. Audit Compliance & Site
console.log("Checking site config & compliance...");
checkForTodo(siteConfig, "siteConfig");
checkForTodo(complianceConfig, "complianceConfig");

console.log("\n=================================");
console.log(`Validation finished with ${warnings} warnings and ${errors} errors.`);
console.log("=================================\n");

if (errors > 0) {
  console.error("❌ Build failed: Fix all published content errors above before deploying.");
  process.exit(1);
} else {
  console.log("✅ Content validation passed successfully!\n");
}
