export type Feature = {
  title: string;
  description: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type Service = {
  iconPath: string;
  title: string;
  description: string;
  longDescription: string;
  benefitsTitle: string;
  benefitsTagline: string;
  benefits: string[];
  featuresTitle: string;
  featuresTagline: string;
  features: Feature[];
  faq: FAQ[];
};
