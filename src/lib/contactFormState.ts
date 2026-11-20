export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  region: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
  website_trap: string;
}

export function createInitialContactFormData(): ContactFormData {
  return {
    name: "",
    email: "",
    company: "",
    region: "North America (US / Canada)",
    projectType: "Not sure yet",
    budget: "Not sure",
    timeline: "",
    message: "",
    website_trap: "",
  };
}

export function createSendAnotherInquiryState() {
  return {
    formData: createInitialContactFormData(),
    isSuccess: false,
    errorMessage: "",
  };
}
