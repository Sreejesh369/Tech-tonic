import styles from './Button.module.css';

/**
 * Refined, tactile button. Variants: primary (accent), ghost (outline), text.
 * Renders an <a> when `href` is provided, otherwise a <button>.
 */
export function Button({
  children,
  variant = 'primary',
  href,
  arrow = false,
  className = '',
  ...rest
}) {
  const cls = `${styles.btn} ${styles[variant]} ${className}`;
  const content = (
    <>
      <span className={styles.label}>{children}</span>
      {arrow && (
        <span className={styles.arrow} aria-hidden="true">
          <svg viewBox="0 0 16 16" width="15" height="15" fill="none">
            <path
              d="M3 8h9M8 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button className={cls} {...rest}>
      {content}
    </button>
  );
}
