import styles from './Logo.module.css';

/**
 * Tectonics wordmark + custom mark.
 * The mark is three offset strata split by a fault line — an abstract "tectonic" glyph.
 */
export function Logo({ withText = true, className = '' }) {
  return (
    <span className={`${styles.logo} ${className}`} aria-label="Tectonics">
      <svg
        className={styles.mark}
        width="26"
        height="26"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <rect x="1" y="1" width="30" height="30" rx="7.5" stroke="currentColor" strokeOpacity="0.22" />
        {/* upper strata */}
        <path d="M7 11.5L18 8.5L25 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        {/* mid strata — faulted (offset) */}
        <path d="M7 16.5L15 14.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M17 17.5L25 15.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        {/* lower strata, accent */}
        <path d="M7 21.5L18 24L25 21" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        {/* fault line */}
        <path d="M16 7.5V24.5" stroke="currentColor" strokeOpacity="0.28" strokeWidth="1" strokeDasharray="1.5 2.5" />
      </svg>
      {withText && <span className={styles.word}>Tectonics</span>}
    </span>
  );
}
