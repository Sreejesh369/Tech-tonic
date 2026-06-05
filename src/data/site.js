// Services, process, platforms, testimonials, nav & contact data.

export const nav = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Studio', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const services = [
  {
    id: 'web',
    no: '01',
    title: 'Website Engineering',
    blurb:
      'Fast, accessible, search-friendly websites and web apps engineered with modern React and a relentless eye on performance.',
    points: ['React & TypeScript', 'Edge & SSR rendering', 'Core Web Vitals first'],
    span: 'lg',
  },
  {
    id: 'ios',
    no: '02',
    title: 'iOS Development',
    blurb: 'Native iOS apps that feel inevitable — fluid, considered, and built to Apple’s bar.',
    points: ['Swift / SwiftUI', 'Human Interface Guidelines'],
    span: 'sm',
  },
  {
    id: 'android',
    no: '03',
    title: 'Android Development',
    blurb: 'Native Android apps with Material craft, broad device support, and offline resilience.',
    points: ['Kotlin / Jetpack Compose', 'Material 3'],
    span: 'sm',
  },
  {
    id: 'design',
    no: '04',
    title: 'Product Design / UI·UX',
    blurb:
      'Research-led product design and design systems that make complex products feel effortless across every surface.',
    points: ['Design systems', 'Prototyping', 'Accessibility'],
    span: 'md',
  },
  {
    id: 'scale',
    no: '05',
    title: 'Maintenance & Scaling',
    blurb:
      'We stay after launch — observability, performance budgets, and architecture that scales with your business.',
    points: ['SLOs & monitoring', 'Performance budgets', 'Architecture'],
    span: 'md',
  },
];

export const process = [
  {
    no: '01',
    title: 'Discover',
    desc: 'We align on goals, constraints, and the metrics that matter — then map the shortest path to value.',
    deliverables: ['Product strategy', 'Technical scoping', 'Success metrics'],
  },
  {
    no: '02',
    title: 'Design',
    desc: 'We design the system and the surface together — flows, interface, and a component library built to scale.',
    deliverables: ['UX flows', 'UI design', 'Design system'],
  },
  {
    no: '03',
    title: 'Develop',
    desc: 'We build in tight iterations with production-grade code, reviews, and CI from the first commit.',
    deliverables: ['Architecture', 'Engineering', 'Testing & CI'],
  },
  {
    no: '04',
    title: 'Launch',
    desc: 'We ship with confidence — performance budgets met, monitoring live, and a rollout plan in place.',
    deliverables: ['QA & hardening', 'Performance', 'Release'],
  },
  {
    no: '05',
    title: 'Scale',
    desc: 'We stay close — measuring, refining, and evolving the product as your business grows.',
    deliverables: ['Observability', 'Iteration', 'Growth'],
  },
];

export const platforms = [
  { id: 'web', title: 'Websites', desc: 'Marketing sites & web apps', frame: 'browser' },
  { id: 'ios', title: 'iOS Apps', desc: 'Native iPhone & iPad', frame: 'phone' },
  { id: 'android', title: 'Android Apps', desc: 'Native across the ecosystem', frame: 'phone' },
  { id: 'admin', title: 'Admin Dashboards', desc: 'Operational control surfaces', frame: 'browser' },
  { id: 'saas', title: 'SaaS Platforms', desc: 'Multi-tenant products at scale', frame: 'browser' },
];

export const testimonials = [
  {
    quote:
      'Tectonics operate like an extension of our own team. The engineering bar is exceptional, and the design speaks for itself.',
    author: 'VP Product',
    company: 'Fintech Platform',
  },
  {
    quote:
      'They shipped a faster, cleaner product than we thought possible on the timeline — and the architecture has held up as we scaled.',
    author: 'CTO',
    company: 'Logistics Company',
  },
  {
    quote:
      'Rare to find a studio this strong on both craft and code. Every detail was intentional.',
    author: 'Head of Design',
    company: 'Healthcare Provider',
  },
];

export const metrics = [
  { value: 60, suffix: '+', label: 'Products shipped' },
  { value: 4, suffix: '', label: 'Platforms delivered', display: 'Web · iOS · Android · SaaS' },
  { value: 98, suffix: '%', label: 'Client retention' },
  { value: 12, suffix: 'yr', label: 'Combined per engineer' },
];

export const industries = [
  'Fintech',
  'Healthcare',
  'Logistics',
  'E-commerce',
  'Media',
  'AI / ML',
  'SaaS',
  'Real Estate',
];

export const contact = {
  email: 'studio@tectonics.dev',
  whatsapp: '+000 000 0000',
  socials: [
    { label: 'LinkedIn', href: '#' },
    { label: 'GitHub', href: '#' },
    { label: 'Dribbble', href: '#' },
    { label: 'X', href: '#' },
  ],
};
