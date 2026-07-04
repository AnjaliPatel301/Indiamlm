import {
  GitBranch,
  Grid3x3,
  Layers,
  Workflow,
  ShieldCheck,
  Bot,
  LineChart,
  Smartphone,
  Globe2,
  Lock,
  Gauge,
  Headset,
} from 'lucide-react';

export const clientLogos = [
  'Nexora Global',
  'Vantix Network',
  'Pinnacle Direct',
  'Lumen Rewards',
  'Triumph Trade',
  'Orbital Sales',
];

export const featuredPlans = [
  {
    name: 'Binary Plan',
    path: '/mlm-plans/binary',
    icon: GitBranch,
    description: 'Balanced two-leg structure with spillover and pairing commissions.',
  },
  {
    name: 'Matrix Plan',
    path: '/mlm-plans/matrix',
    icon: Grid3x3,
    description: 'Fixed-width, fixed-depth forced matrix with capped placement.',
  },
  {
    name: 'Unilevel Plan',
    path: '/mlm-plans/unilevel',
    icon: Layers,
    description: 'Unlimited frontline width with flat-level commission payouts.',
  },
  {
    name: 'Hybrid Plan',
    path: '/mlm-plans/hybrid',
    icon: Workflow,
    description: 'Combine binary, matrix, and unilevel logic in one compensation model.',
  },
];

export const enterpriseFeatures = [
  {
    icon: ShieldCheck,
    title: 'Bank-Grade Security',
    description: 'AES-256 encryption, role-based access, and full audit trails on every action.',
  },
  {
    icon: Bot,
    title: 'AI-Powered Automation',
    description: 'Automated payout calculation, fraud detection, and growth forecasting.',
  },
  {
    icon: LineChart,
    title: 'Real-Time Analytics',
    description: 'Live dashboards tracking sales, genealogy, and commission flow.',
  },
  {
    icon: Smartphone,
    title: 'Native Mobile Apps',
    description: 'Branded iOS & Android apps so distributors manage their business anywhere.',
  },
  {
    icon: Globe2,
    title: 'Multi-Currency & Language',
    description: 'Run one platform across regions with localized currency and language support.',
  },
  {
    icon: Gauge,
    title: 'Built to Scale',
    description: 'Architecture tested for millions of distributors and concurrent transactions.',
  },
];

export const testimonials = [
  {
    quote:
      'Apex rebuilt our entire compensation engine in under twelve weeks. Payout accuracy went from a constant support headache to a non-issue.',
    name: 'Maria Chen',
    role: 'COO, Lumen Rewards',
  },
  {
    quote:
      'The migration team moved 80,000 distributor accounts off our legacy system with zero downtime. That alone justified the contract.',
    name: 'David Okafor',
    role: 'CEO, Triumph Trade',
  },
  {
    quote:
      'Their AI fraud detection caught placement abuse our old platform never flagged. It paid for itself in the first quarter.',
    name: 'Priya Nair',
    role: 'VP Operations, Vantix Network',
  },
  {
    quote:
      'We run binary and matrix plans side by side for different regions. Apex is the only platform we found that handled both cleanly.',
    name: 'Lucas Ferreira',
    role: 'Founder, Orbital Sales',
  },
];

export const globalStats = [
  { value: 40, suffix: '+', label: 'Countries served' },
  { value: 1200, suffix: '+', label: 'Enterprise deployments' },
  { value: 18, suffix: 'M+', label: 'Distributor accounts managed' },
  { value: 99.95, suffix: '%', label: 'Platform uptime SLA' },
];

export const trustHighlights = [
  { icon: Lock, label: 'SOC 2 Type II' },
  { icon: ShieldCheck, label: 'ISO 27001' },
  { icon: Globe2, label: 'GDPR & CCPA Ready' },
  { icon: Headset, label: '24/7 Enterprise Support' },
];

export const pricingPreview = [
  {
    name: 'Starter',
    price: 499,
    period: '/mo',
    description: 'For new MLM companies launching their first compensation plan.',
    features: ['1 compensation plan', 'Up to 5,000 distributors', 'Standard support', 'Web dashboard'],
  },
  {
    name: 'Professional',
    price: 1499,
    period: '/mo',
    description: 'For growing networks running multiple plans and regions.',
    features: [
      'Up to 3 compensation plans',
      'Up to 50,000 distributors',
      'Priority support',
      'Mobile apps included',
      'Advanced analytics',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: null,
    period: '',
    description: 'For global networks needing custom architecture and SLAs.',
    features: [
      'Unlimited compensation plans',
      'Unlimited distributors',
      'Dedicated success manager',
      'Custom integrations',
      'Dedicated infrastructure',
    ],
  },
];

export const homeFaqs = [
  {
    question: 'Can Apex support more than one compensation plan at once?',
    answer:
      'Yes. Apex is built to run binary, matrix, unilevel, and custom plans simultaneously, even across different regions or product lines within the same company.',
  },
  {
    question: 'How long does a typical implementation take?',
    answer:
      'A standard deployment with a standard plan type takes 6–10 weeks. Fully custom compensation logic typically takes 10–16 weeks, including migration and testing.',
  },
  {
    question: 'Can we migrate from our existing MLM software?',
    answer:
      'Yes. Our migration team has moved networks off legacy platforms with zero distributor downtime, preserving full genealogy and commission history.',
  },
  {
    question: 'Is the platform compliant with international regulations?',
    answer:
      'Apex includes built-in compliance tooling for income disclosure, anti-pyramid regulations, and data protection laws including GDPR and CCPA.',
  },
  {
    question: 'Do distributors get a mobile app?',
    answer:
      'Yes. Every plan includes branded iOS and Android apps so distributors can track commissions, manage their downline, and place orders from anywhere.',
  },
];
