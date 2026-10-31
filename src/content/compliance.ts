export interface ComplianceSection {
  title: string;
  badge: string;
  summary: string;
  practices: string[];
}

export interface ComplianceConfig {
  published: boolean;
  sections: ComplianceSection[];
  dataResidencyOptions: {
    region: string;
    locations: string[];
    description: string;
  }[];
  certificationsClaimed: string[]; // Strict list of actual certifications. Empty if none claimed.
}

export const complianceConfig: ComplianceConfig = {
  published: true,
  certificationsClaimed: [], // No fake SOC2/ISO badges fabricated.
  sections: [
    {
      title: "Data and provider boundaries",
      badge: "Scoped per project",
      summary: "Data handling depends on the system, selected providers, and client requirements. These constraints should be clarified before implementation.",
      practices: [
        "Identify data types, access boundaries, and provider requirements during scoping.",
        "Review relevant model and hosting provider retention terms for the selected configuration.",
        "Document project-specific data flows and responsibilities before build work begins.",
      ],
    },
    {
      title: "Hosting and deployment choices",
      badge: "Agreed with the client",
      summary: "Hosting architecture and region depend on the client environment, provider capabilities, and requirements established for each engagement.",
      practices: [
        "Confirm deployment ownership and target environment.",
        "Evaluate regional or network constraints against available cloud services.",
        "Treat legal and regulatory interpretation as a client and counsel decision.",
      ],
    },
    {
      title: "AI behavior and review",
      badge: "Designed for the use case",
      summary: "Evaluation and human review needs are defined by the system’s purpose and the impact of its outputs.",
      practices: [
        "Agree representative test scenarios and acceptance criteria.",
        "Include human review or escalation where the agreed workflow calls for it.",
        "Define logging and monitoring requirements as part of project scope.",
      ],
    },
    {
      title: "Ownership and handoff",
      badge: "Defined in the agreement",
      summary: "Repository access, intellectual property, deployment responsibilities, and handoff expectations are agreed for each engagement.",
      practices: [
        "Confirm the working repository and access model.",
        "Agree documentation, operational context, and transfer responsibilities.",
        "Set any confidentiality terms before sharing sensitive project information.",
      ],
    },
  ],
  dataResidencyOptions: [],
};
