import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import styles from './Marquee.module.css';

/**
 * Infinite kinetic text band. Duplicates its items so the scroll loops
 * seamlessly. Pauses entirely under reduced motion.
 */
export function Marquee({ items, speed = 38, reverse = false, outline = false, separator = '✦' }) {
  const reduced = usePrefersReducedMotion();
  const sequence = [...items, ...items];

  return (
    <div className={styles.marquee} aria-hidden="true">
      <div
        className={`${styles.track} ${reverse ? styles.reverse : ''} ${reduced ? styles.paused : ''}`}
        style={{ '--duration': `${speed}s` }}
      >
        {[0, 1].map((dup) => (
          <ul className={styles.group} key={dup}>
            {sequence.map((item, i) => (
              <li className={styles.item} key={`${dup}-${i}`}>
                <span className={`${styles.text} ${outline ? styles.outline : ''}`}>{item}</span>
                <span className={styles.sep}>{separator}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
