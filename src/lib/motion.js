// Shared Motion variants & transitions for consistent choreography.

export const EASE = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
};

// Container that staggers its children's reveals.
export const stagger = (amount = 0.08, delay = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: amount, delayChildren: delay },
  },
});

// Per-word/line reveal used for headings.
export const lineReveal = {
  hidden: { opacity: 0, y: '0.5em' },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE },
  },
};

export const viewport = { once: true, margin: '0px 0px -12% 0px' };
